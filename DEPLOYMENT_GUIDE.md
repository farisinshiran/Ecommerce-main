# Netlify Deployment Checklist

## ✅ Persiapan Sebelum Deploy

### 1. Asset Files
- ✅ File `src/assets/bg.png` ada dan terimport dengan benar
- ✅ Semua import asset menggunakan Vite alias (`@/assets/`)
- ✅ Favicon path di `index.html` sudah diperbaiki

### 2. File Konfigurasi
- ✅ `vite.config.ts` - Sudah ada dengan alias `@` ke `./src`
- ✅ `package.json` - Build script `"build": "vite build"` sudah ada
- ✅ `netlify.toml` - Sudah dibuat dengan konfigurasi yang tepat
- ✅ `.gitignore` - Sudah dibuat dengan aturan yang sesuai

### 3. Asset Consistency
Berikut adalah daftar perubahan yang telah dilakukan:

| File | Perubahan |
|------|----------|
| HomePage.tsx | ✅ Menggunakan `import heroImg from "@/assets/bg.png"` |
| AboutPage.tsx | ✅ Menggunakan `import storeLogoImg from "@/assets/bg.png"` |
| GalleryPage.tsx | ✅ Menggunakan `import coconutDrinkImg from "@/assets/bg.png"` |
| MenuPage.tsx | ✅ Tidak ada perubahan (tidak menggunakan bg.png) |
| CartPage.tsx | ✅ Tidak ada perubahan (tidak menggunakan bg.png) |
| OrderPage.tsx | ✅ Tidak ada perubahan (tidak menggunakan bg.png) |
| index.html | ✅ Favicon path: `/src/assets/bg.png` |

## 📋 Langkah Deploy ke Netlify

### Opsi 1: Connect ke GitHub
1. Push semua perubahan ke GitHub
2. Login ke Netlify.com
3. Pilih "New site from Git"
4. Koneksikan GitHub repository
5. Atur build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Opsi 2: Manual Deploy (Drag & Drop)
1. Jalankan `npm run build` di local
2. Upload folder `dist/` ke Netlify

### Opsi 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 🔍 Verifikasi After Deploy

Setelah deploy, pastikan:
1. Homepage terload dengan background image bg.png
2. About page terload dengan logo dan background yang benar
3. Gallery page menampilkan coconut drink image
4. Tidak ada error 404 di browser console
5. Navigasi antar halaman bekerja dengan sempurna
6. Cart functionality masih berfungsi (persisten state)

## 📝 Notes
- File `bg.png` sudah ada di `src/assets/`
- Semua import asset menggunakan Vite alias system yang aman
- Build folder `dist/` akan dibuat saat build dan otomatis di-deploy
- Fonts dan CSS files juga akan di-bundle dengan benar
