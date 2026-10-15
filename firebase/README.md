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
| Admin list | Firestore collection `admins` (document id = user UID) |

## One-time setup

1. **Create the project** in the [Firebase Console](https://console.firebase.google.com).
2. **Add a Web app** (Project settings → Your apps → `</>`). Copy the config
   values into the `NEXT_PUBLIC_FIREBASE_*` variables (see `.env.example`).
   Set them in Netlify for **both** sites, then redeploy.
3. **Authentication** → Sign-in method → enable **Email/Password**.
   Then Users → **Add user** for each admin.
4. **Firestore Database** → Create database (production mode).
5. **Storage** → Get started. (Cloud Storage requires the Blaze pay-as-you-go
   plan for new projects; the free usage tier still applies.)
6. **Make someone an admin:** copy their UID from Authentication → Users, then in
   Firestore create collection `admins` with a document whose **ID is that UID**
   (any field, e.g. `email: "name@example.com"`).
7. **Deploy the security rules** from this folder:

   ```bash
   npm install -g firebase-tools
   firebase login
   cd firebase
   firebase deploy --only firestore:rules,storage --project YOUR_PROJECT_ID
   ```

   Or paste `firestore.rules` and `storage.rules` into the Rules tab of
   Firestore and Storage in the console.

The rules files are identical in both repositories; deploy them from either one.

## Limits

- Photos up to 20 MB, videos up to 500 MB (checked in the browser and in the
  Storage rules).
- Only users listed in `admins` can upload or delete. Anyone can view.
