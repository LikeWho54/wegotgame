// Media (photos + videos) stored in the shared Firebase project.
//
// Firestore: collection `media`, one document per file:
//   { site, type: 'image' | 'video', title, url, storagePath,
//     contentType, size, createdAt, createdBy }
// Storage:   media/{site}/{docId}-{fileName}
// Admins:    collection `admins`, document id = Firebase Auth uid
import {
  collection, doc, getDoc, getDocs, setDoc, deleteDoc,
  query, where, serverTimestamp, type Timestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { getDb, getFirebaseStorage } from "./firebase";

// This website's id in the shared database. Speed Basketball uses 'speed'.
export const SITE = "wgg";

export const MAX_IMAGE_MB = 20;
export const MAX_VIDEO_MB = 500;

export type MediaType = "image" | "video";

export interface MediaItem {
  id: string;
  site: string;
  type: MediaType;
  title: string;
  url: string;
  storagePath: string;
  contentType: string;
  size: number;
  createdAt: Timestamp | null;
  createdBy: string;
}

export function mediaTypeOf(file: File): MediaType | null {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  return null;
}

/** Returns an error message for an invalid file, or null if it can be uploaded. */
export function validateFile(file: File): string | null {
  const type = mediaTypeOf(file);
  if (!type) return `${file.name}: doar poze și videoclipuri sunt acceptate.`;
  const maxMb = type === "image" ? MAX_IMAGE_MB : MAX_VIDEO_MB;
  if (file.size > maxMb * 1024 * 1024) return `${file.name}: fișierul depășește ${maxMb} MB.`;
  return null;
}

// Admin for both websites. Must match the list in firebase/*.rules.
export const ADMIN_EMAILS = ["office@speed-basketball.ro"];

/** True for the main admin email or anyone listed in the `admins` collection. */
export async function isAdmin(user: { uid: string; email: string | null }): Promise<boolean> {
  if (user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())) return true;
  const snap = await getDoc(doc(getDb(), "admins", user.uid));
  return snap.exists();
}

/** All media for one site, newest first. */
export async function listMedia(site: string = SITE): Promise<MediaItem[]> {
  const q = query(collection(getDb(), "media"), where("site", "==", site));
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }) as MediaItem)
    .sort((a, b) => (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0));
}

function titleFromFileName(name: string) {
  return name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
}

function safeFileName(name: string) {
  return name.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
}

/**
 * Uploads one file to Storage and records it in Firestore.
 * `onProgress` receives a number between 0 and 1.
 */
export async function uploadMedia(
  file: File,
  { title, uid }: { title?: string; uid: string },
  onProgress?: (fraction: number) => void
): Promise<MediaItem> {
  const type = mediaTypeOf(file);
  if (!type) throw new Error("Tip de fișier neacceptat.");
  const db = getDb();
  const docRef = doc(collection(db, "media"));
  const storagePath = `media/${SITE}/${docRef.id}-${safeFileName(file.name)}`;
  const fileRef = ref(getFirebaseStorage(), storagePath);

  const task = uploadBytesResumable(fileRef, file, { contentType: file.type });
  task.on("state_changed", (s) => onProgress?.(s.totalBytes ? s.bytesTransferred / s.totalBytes : 0));
  await task;

  const url = await getDownloadURL(fileRef);
  const data = {
    site: SITE,
    type,
    title: title?.trim() || titleFromFileName(file.name),
    url,
    storagePath,
    contentType: file.type,
    size: file.size,
    createdBy: uid,
  };
  await setDoc(docRef, { ...data, createdAt: serverTimestamp() });
  return { id: docRef.id, ...data, createdAt: null };
}

export async function deleteMedia(item: MediaItem): Promise<void> {
  try {
    await deleteObject(ref(getFirebaseStorage(), item.storagePath));
  } catch (err) {
    // If the file is already gone, still remove the database entry.
    if ((err as { code?: string })?.code !== "storage/object-not-found") throw err;
  }
  await deleteDoc(doc(getDb(), "media", item.id));
}
