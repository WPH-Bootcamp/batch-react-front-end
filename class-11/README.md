# TypeScript

## Langkah-Langkah

### 1. Install TypeScript

```bash
npm install -D typescript
```

### 2. Buat `tsconfig.json`

```bash
npx tsc --init
```

### 3. Ubah `tsconfig.json`

Ganti isi `tsconfig.json` menjadi:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true,
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### 4. Tambahkan Scripts di `package.json`

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "npm run build && npm run start"
}
```

### 5. Jalankan Aplikasi

```bash
npm run dev
```

## Alur

```text
index.ts
   ↓
npm run dev
   ↓
npm run build
   ↓
tsc
   ↓
dist/index.js
   ↓
npm run start
   ↓
node dist/index.js
```
