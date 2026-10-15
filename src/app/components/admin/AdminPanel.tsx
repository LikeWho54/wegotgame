"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, type User,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import {
  isAdmin, listMedia, uploadMedia, deleteMedia, validateFile,
  MAX_IMAGE_MB, MAX_VIDEO_MB, type MediaItem,
} from "@/lib/media";

const AUTH_ERRORS: Record<string, string> = {
  "auth/invalid-credential": "Email sau parolă greșită.",
  "auth/invalid-email": "Adresa de email nu este validă.",
  "auth/user-disabled": "Acest cont a fost dezactivat.",
  "auth/too-many-requests": "Prea multe încercări. Încearcă din nou peste câteva minute.",
  "auth/network-request-failed": "Nu există conexiune la internet.",
};

const authMessage = (err: unknown) =>
  AUTH_ERRORS[(err as { code?: string })?.code ?? ""] || "A apărut o eroare. Încearcă din nou.";

const card = "bg-[#0d0d0d] border border-white/10 p-6 md:p-8 flex flex-col gap-4";
const titleCls = "font-anton italic text-3xl md:text-4xl tracking-wide text-white";
const subtitleCls = "font-anton italic text-xl md:text-2xl tracking-wide text-white";
const muted = "text-white/60 text-sm leading-relaxed";
const labelCls = "flex flex-col gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/80";
const inputCls =
  "bg-black border border-white/20 px-4 py-3 text-base text-white font-normal tracking-normal normal-case focus:outline-none focus:border-brand-yellow";
const primaryBtn =
  "bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-yellow";
const secondaryBtn =
  "self-start border border-white/30 text-white font-bold uppercase tracking-wider text-xs px-5 py-3 hover:border-brand-yellow hover:text-brand-yellow transition-colors";
const errorCls = "text-red-400 text-sm";
const successCls = "text-green-400 text-sm";

export default function AdminPanel() {
  const [user, setUser] = useState<User | null | undefined>(undefined); // undefined = loading
  const [admin, setAdmin] = useState<boolean | null>(null); // null = checking

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    return onAuthStateChanged(getFirebaseAuth(), async (u) => {
      setUser(u);
      setAdmin(null);
      if (u) {
        try {
          setAdmin(await isAdmin(u));
        } catch {
          setAdmin(false);
        }
      }
    });
  }, []);

  if (!isFirebaseConfigured) {
    return (
      <Shell>
        <div className={card}>
          <h1 className={titleCls}>ADMIN</h1>
          <p className={muted}>
            Firebase nu este configurat încă. Adaugă variabilele{" "}
            <code className="text-brand-yellow">NEXT_PUBLIC_FIREBASE_*</code> în setările site-ului (Netlify) și
            reconstruiește site-ul.
          </p>
        </div>
      </Shell>
    );
  }

  if (user === undefined || (user && admin === null)) {
    return <Shell><p className={muted}>Se încarcă…</p></Shell>;
  }

  if (!user) return <Shell><LoginForm /></Shell>;

  if (!admin) {
    return (
      <Shell>
        <div className={card}>
          <h1 className={titleCls}>ACCES RESTRICȚIONAT</h1>
          <p className={muted}>
            Contul <strong className="text-white">{user.email}</strong> nu are drepturi de administrator.
          </p>
          <button className={secondaryBtn} onClick={() => signOut(getFirebaseAuth())}>Deconectare</button>
        </div>
      </Shell>
    );
  }

  return <Shell><Dashboard user={user} /></Shell>;
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 bg-black px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">{children}</div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setInfo("");
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
    } catch (err) {
      setError(authMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleReset() {
    setError("");
    setInfo("");
    if (!email.trim()) {
      setError("Scrie adresa de email mai întâi.");
      return;
    }
    try {
      await sendPasswordResetEmail(getFirebaseAuth(), email.trim());
      setInfo("Dacă adresa există, vei primi un email pentru resetarea parolei.");
    } catch (err) {
      setError(authMessage(err));
    }
  }

  return (
    <form className={`${card} w-full max-w-md mx-auto`} onSubmit={handleSubmit}>
      <h1 className={titleCls}>ADMIN</h1>
      <p className={muted}>Autentifică-te pentru a gestiona pozele și videoclipurile.</p>

      <label className={labelCls}>
        Email
        <input
          className={inputCls}
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className={labelCls}>
        Parolă
        <input
          className={inputCls}
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      {error && <p className={errorCls} role="alert">{error}</p>}
      {info && <p className={successCls}>{info}</p>}

      <button className={primaryBtn} type="submit" disabled={busy}>
        {busy ? "Se conectează…" : "Conectare"}
      </button>
      <button
        className="self-center text-sm text-white/60 underline hover:text-brand-yellow"
        type="button"
        onClick={handleReset}
      >
        Am uitat parola
      </button>
    </form>
  );
}

function Dashboard({ user }: { user: User }) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;
    listMedia()
      .then((list) => { if (active) setItems(list); })
      .catch(() => { if (active) setLoadError("Nu am putut încărca lista de fișiere."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  async function handleDelete(item: MediaItem) {
    if (!window.confirm(`Ștergi „${item.title}”? Acțiunea nu poate fi anulată.`)) return;
    try {
      await deleteMedia(item);
      setItems((prev) => prev.filter((i) => i.id !== item.id));
    } catch {
      window.alert("Nu am putut șterge fișierul. Încearcă din nou.");
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className={titleCls}>ADMIN · <span className="text-brand-yellow">MEDIA</span></h1>
          <p className={muted}>Conectat ca {user.email}</p>
        </div>
        <button className={secondaryBtn} onClick={() => signOut(getFirebaseAuth())}>Deconectare</button>
      </div>

      <UploadForm user={user} onUploaded={(item) => setItems((prev) => [item, ...prev])} />

      <section className={card}>
        <h2 className={subtitleCls}>FIȘIERE ÎNCĂRCATE ({items.length})</h2>
        {loading && <p className={muted}>Se încarcă…</p>}
        {loadError && <p className={errorCls}>{loadError}</p>}
        {!loading && !loadError && items.length === 0 && (
          <p className={muted}>Nu există încă poze sau videoclipuri.</p>
        )}
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {items.map((item) => (
            <li key={item.id} className="border border-white/10 flex flex-col">
              <div className="aspect-[4/3] bg-black">
                {item.type === "video" ? (
                  <video src={item.url} preload="metadata" muted playsInline controls className="w-full h-full object-cover" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.url} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-3 flex flex-col gap-2">
                <span className="text-brand-yellow text-[10px] font-bold tracking-[0.2em] uppercase">
                  {item.type === "video" ? "Video" : "Poză"}
                </span>
                <p className="text-sm text-white truncate" title={item.title}>{item.title}</p>
                <button
                  className="self-start border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 hover:bg-red-500/10"
                  onClick={() => handleDelete(item)}
                >
                  Șterge
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

interface Progress {
  index: number;
  total: number;
  fraction: number;
  name: string;
}

function UploadForm({ user, onUploaded }: { user: User; onUploaded: (item: MediaItem) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState<Progress | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [done, setDone] = useState("");

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    setErrors(selected.map(validateFile).filter((m): m is string => Boolean(m)));
    setDone("");
    setFiles(selected.filter((f) => !validateFile(f)));
  }

  async function handleUpload(e: FormEvent) {
    e.preventDefault();
    if (!files.length) return;
    const failed: string[] = [];
    let uploaded = 0;
    setErrors([]);
    setDone("");

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      setProgress({ index: i, total: files.length, fraction: 0, name: file.name });
      try {
        const item = await uploadMedia(
          file,
          { title: files.length === 1 ? title : "", uid: user.uid },
          (fraction) => setProgress({ index: i, total: files.length, fraction, name: file.name })
        );
        onUploaded(item);
        uploaded += 1;
      } catch {
        failed.push(`${file.name}: încărcarea a eșuat.`);
      }
    }

    setProgress(null);
    setFiles([]);
    setTitle("");
    if (inputRef.current) inputRef.current.value = "";
    setErrors(failed);
    if (uploaded) setDone(`${uploaded} ${uploaded === 1 ? "fișier încărcat" : "fișiere încărcate"}.`);
  }

  const busy = progress !== null;
  const percent = progress ? Math.round(progress.fraction * 100) : 0;

  return (
    <form className={card} onSubmit={handleUpload}>
      <h2 className={subtitleCls}>ÎNCARCĂ POZE ȘI VIDEOCLIPURI</h2>
      <p className={muted}>
        Poze până la {MAX_IMAGE_MB} MB, videoclipuri până la {MAX_VIDEO_MB} MB. Poți selecta mai multe fișiere deodată.
      </p>

      <label className="relative border-2 border-dashed border-white/25 hover:border-brand-yellow transition-colors py-10 px-4 text-center cursor-pointer font-bold uppercase tracking-widest text-sm text-brand-yellow">
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleSelect}
          disabled={busy}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        {files.length
          ? `${files.length} ${files.length === 1 ? "fișier selectat" : "fișiere selectate"}`
          : "Alege fișiere"}
      </label>

      {files.length === 1 && (
        <label className={labelCls}>
          Titlu (opțional)
          <input
            className={inputCls}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={files[0].name}
            disabled={busy}
          />
        </label>
      )}

      {progress && (
        <div aria-live="polite">
          <p className={muted}>
            Se încarcă {progress.index + 1}/{progress.total}: {progress.name} ({percent}%)
          </p>
          <div className="h-2 bg-white/10 mt-2">
            <div className="h-full bg-brand-yellow transition-[width] duration-200" style={{ width: `${percent}%` }} />
          </div>
        </div>
      )}

      {errors.map((msg) => <p key={msg} className={errorCls}>{msg}</p>)}
      {done && <p className={successCls}>{done}</p>}

      <button className={primaryBtn} type="submit" disabled={busy || !files.length}>
        {busy ? "Se încarcă…" : "Încarcă"}
      </button>
    </form>
  );
}
