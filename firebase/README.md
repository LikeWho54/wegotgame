# Firebase setup (admin + gallery)

Speed Basketball and We Got Game share **one** Firebase project. Every photo or
video is stored with a `site` field (`speed` or `wgg`), so each website only
shows its own media, while admins and the database are shared.

| What | Where |
| --- | --- |
| Admin page | `/admin` |
| Public gallery | `/galerie` (Speed) · `/gallery` (We Got Game) |
| Media records | Firestore collection `media` |
| Files | Storage `media/{site}/…` |
| Admins | `office@speed-basketball.ro`, plus optional extras in Firestore `admins` (document id = user UID) |

## Project

Firebase project: **`speedandwgg`**. Its web config is already in
`src/lib/firebase.*`, so no Netlify environment variables are needed
(`NEXT_PUBLIC_FIREBASE_*` can still override it; see `.env.example`).

## One-time setup

Firestore, Storage and Email/Password sign-in are already enabled. Remaining:

1. **Publish the security rules.** Until this is done, the database is either
   locked or open to everyone, depending on how it was created.
   - Firestore → **Rules** → paste `firestore.rules` → **Publish**.
   - Storage → **Rules** → paste `storage.rules` → **Publish**. If the console
     asks to let Storage rules read Firestore, accept (the admin check needs it).

   Or from a terminal: `npm i -g firebase-tools && firebase login`, then
   `cd firebase && firebase deploy --only firestore:rules,storage`.
2. **Create the admin account:** Authentication → Users → **Add user** →
   `office@speed-basketball.ro` + a password. This address is the admin for
   both websites (set in the rules and in `src/lib/media.*`), so nothing else
   is needed.
3. **Turn off public sign-up:** Authentication → Settings → User actions →
   untick **Enable create (sign-up)**. Accounts are then only created from the
   console.

   *Extra admins (optional):* add the user, copy their **User UID**, then in
   Firestore create collection `admins` → Document ID = that UID → any field
   (e.g. `email`) → Save.
4. Open `/admin` on either site and sign in.

The rules files are identical in both repositories; publish them once.

## Limits

- Photos up to 20 MB, videos up to 500 MB (checked in the browser and in the
  Storage rules).
- Only users listed in `admins` can upload or delete. Anyone can view.
