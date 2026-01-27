# DutchLearn (Starter)

## Kurulum
```bash
npm install
```

## Ortam değişkenleri
`.env.local` oluştur ve doldur:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Çalıştır
```bash
npm run dev
```

## Firestore
- lessons (collection)
  - doc id: otomatik veya elle
  - title: { tr, nl, ar, ku }
  - description: { tr, nl, ar, ku }
  - content: { tr, nl, ar, ku }
  - updatedAt: serverTimestamp()
