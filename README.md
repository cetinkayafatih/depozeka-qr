# DepoZeka — Koli QR Demo

Telefonla okutulduğunda kolinin içeriğini gösteren mobil sayfa + QR üreteci.
Tamamen statik (sunucu gerektirmez), GitHub Pages veya Vercel'e konabilir.

## Dosyalar
- `urun.html` — Mobil ürün/koli bilgi sayfası. `urun.html?id=KOLI-0005` şeklinde açılır.
- `index.html` — QR üreteci. Her koli için, barındırılan `urun.html` adresine işaret eden QR'ları üretir/yazdırır.
- `data.js` — Koli verisi (her iki sayfanın ortak kaynağı).

## Akış
```
QR (KOLI-0005)  →  https://KULLANICI.github.io/REPO/urun.html?id=KOLI-0005
                →  telefon kamerası açar  →  ürün kartı görünür
```

## GitHub Pages'e yükleme (adım adım)
1. GitHub'da yeni bir repo aç (örn. `depo-qr`), **Public** olsun.
2. Bu klasördeki 4 dosyayı (`urun.html`, `index.html`, `data.js`, `README.md`) repoya yükle
   (sürükle-bırak ile "Add file → Upload files" yeterli).
3. Repo → **Settings → Pages**.
4. **Build and deployment → Source: Deploy from a branch**.
5. **Branch: `main`** ve **klasör: `/ (root)`** seç → **Save**.
6. 1–2 dakika sonra adres hazır olur:
   `https://KULLANICI.github.io/depo-qr/`
7. `https://KULLANICI.github.io/depo-qr/index.html` aç → adres otomatik dolar → QR'ları üret/yazdır.
8. QR'ı telefonla okut → `urun.html` açılır. ✅

> Not: Bu sayfayı yerelde (file://) açarsan QR'lar `file://` adresine işaret eder ve telefonla
> açılmaz. QR'ları **GitHub Pages adresine yükledikten sonra** üret.

## Vercel alternatifi
1. Vercel'de "Add New → Project → Import" ile repoyu bağla (framework: **Other**).
2. Deploy → `https://PROJE.vercel.app/` adresi gelir; `index.html` ile QR üret.

## Yeni koli eklemek
`data.js` içindeki `kolis` dizisine yeni bir nesne ekle (mevcutları örnek al), tekrar yükle.
