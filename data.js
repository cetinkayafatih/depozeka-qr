// DepoZeka — Koli verisi (mobil ürün sayfası + QR üreteci ortak kaynağı)
window.DEPO = {
  aileler: {
    pamuk: { label: "Pamuk İpliği", renk: "#22c55e" },
    fiber: { label: "Geri Dönüşüm Fiber", renk: "#3b82f6" },
    elastik: { label: "Elastik Fiber", renk: "#f97316" },
    bobin: { label: "Bobin İplik", renk: "#8b5cf6" },
    renkli_iplik: { label: "Renkli İplik", renk: "#ec4899" },
  },
  birim: { cuval: "Çuval", kutu: "Kutu", bobin: "Bobin", kg: "Kg" },
  tip: {
    hammadde: { label: "Hammadde Kolisi", kisa: "Hammadde", renk: "#0ea5e9" },
    bitmis_urun: { label: "Bitmiş Ürün Kolisi", kisa: "Bitmiş Ürün", renk: "#8b5cf6" },
  },
  durum: {
    depoda: { label: "Depoda", renk: "#3b82f6" },
    sevke_hazir: { label: "Sevke Hazır", renk: "#f97316" },
    sevk_edildi: { label: "Sevk Edildi", renk: "#22c55e" },
  },
  kolis: [
    {
      id: "k1", barkod: "KOLI-0001", tip: "hammadde", konum: "A-B-01-A1", durum: "depoda",
      olusturma_tarihi: "2025-03-07", notlar: "Renkli iplik karışık koli — örme hattı 2",
      kalemler: [
        { kod: "RNK-001", ad: "Kırmızı 20/1 Bobin", aile: "renkli_iplik", miktar: 24, birim: "bobin", birim_agirlik_kg: 1.8, birim_fiyat: 68 },
        { kod: "RNK-002", ad: "Lacivert 20/1 Bobin", aile: "renkli_iplik", miktar: 12, birim: "bobin", birim_agirlik_kg: 1.8, birim_fiyat: 72 },
      ],
    },
    {
      id: "k2", barkod: "KOLI-0002", tip: "hammadde", konum: "A-A-01-A1", durum: "depoda",
      olusturma_tarihi: "2025-03-06",
      kalemler: [
        { kod: "BOB-001", ad: "Ne 30/1 Bobin (Beyaz)", aile: "bobin", miktar: 30, birim: "bobin", birim_agirlik_kg: 1.8, birim_fiyat: 45 },
      ],
    },
    {
      id: "k3", barkod: "KOLI-0003", tip: "hammadde", konum: "B-B-03-A1", durum: "sevke_hazir",
      olusturma_tarihi: "2025-03-02", notlar: "Elastik fiber konsolidasyon kolisi",
      kalemler: [
        { kod: "ELS-001", ad: "20D Spandex", aile: "elastik", miktar: 40, birim: "kutu", birim_agirlik_kg: 2.5, birim_fiyat: 185 },
        { kod: "ELS-002", ad: "40D Lycra", aile: "elastik", miktar: 20, birim: "kutu", birim_agirlik_kg: 3.0, birim_fiyat: 210 },
      ],
    },
    {
      id: "k4", barkod: "KOLI-0004", tip: "hammadde", konum: "A-B-02-A1", durum: "depoda",
      olusturma_tarihi: "2025-03-08",
      kalemler: [
        { kod: "RNK-003", ad: "Siyah 30/1 Bobin", aile: "renkli_iplik", miktar: 18, birim: "bobin", birim_agirlik_kg: 1.5, birim_fiyat: 65 },
        { kod: "RNK-004", ad: "Beyaz 20/1 Bobin (Boyalı)", aile: "renkli_iplik", miktar: 18, birim: "bobin", birim_agirlik_kg: 1.8, birim_fiyat: 55 },
        { kod: "BOB-002", ad: "Ne 20/1 Bobin (Ekru)", aile: "bobin", miktar: 10, birim: "bobin", birim_agirlik_kg: 2.0, birim_fiyat: 52 },
      ],
    },
    {
      id: "k8", barkod: "KOLI-0008", tip: "hammadde", konum: "A-A-02-B1", durum: "depoda",
      olusturma_tarihi: "2025-03-09",
      kalemler: [
        { kod: "BOB-004", ad: "Ne 10/1 Kalın Bobin", aile: "bobin", miktar: 25, birim: "bobin", birim_agirlik_kg: 3.2, birim_fiyat: 38 },
      ],
    },
    {
      id: "k5", barkod: "KOLI-0005", tip: "bitmis_urun", konum: "B-C-01-A1", durum: "sevke_hazir",
      olusturma_tarihi: "2025-03-11", notlar: "İhracat — sevke hazır",
      urun: {
        ad: "Premium Pamuklu Erkek Çorap", model: "Classic Comfort Pro", beden: "39-42",
        renk: "Lacivert (Navy)", renk_kodu: "#1e3a5f", cift_sayisi: 144,
        birim_agirlik_kg: 0.045, birim_fiyat: 4.2, doviz: "EUR",
        siparis_no: "MUL-2025-0847", lot: "LOT-2025-0312-N", musteri: "Müller Textil GmbH", ulke: "Almanya",
        kompozisyon: [
          { malzeme: "Organik Pamuk", oran: 80, renk: "#22c55e" },
          { malzeme: "Polyamid", oran: 15, renk: "#3b82f6" },
          { malzeme: "Elastan", oran: 5, renk: "#f97316" },
        ],
        sertifikalar: ["OEKO-TEX 100", "GOTS"],
      },
    },
    {
      id: "k6", barkod: "KOLI-0006", tip: "bitmis_urun", konum: "B-C-01-B1", durum: "depoda",
      olusturma_tarihi: "2025-03-10",
      urun: {
        ad: "Kadın Patik Çorap", model: "Soft Step", beden: "36-40",
        renk: "Beyaz (White)", renk_kodu: "#f1f5f9", cift_sayisi: 200,
        birim_agirlik_kg: 0.022, birim_fiyat: 2.1, doviz: "EUR",
        siparis_no: "NL-2025-0231", lot: "LOT-2025-0420-W", musteri: "Holland Hosiery BV", ulke: "Hollanda",
        kompozisyon: [
          { malzeme: "Pamuk", oran: 75, renk: "#22c55e" },
          { malzeme: "Polyamid", oran: 20, renk: "#3b82f6" },
          { malzeme: "Elastan", oran: 5, renk: "#f97316" },
        ],
        sertifikalar: ["OEKO-TEX 100"],
      },
    },
    {
      id: "k7", barkod: "KOLI-0007", tip: "bitmis_urun", konum: "B-C-02-A1", durum: "sevk_edildi",
      olusturma_tarihi: "2025-03-05", notlar: "13.03.2025 tarihinde sevk edildi",
      urun: {
        ad: "Çocuk Desenli Çorap", model: "Happy Feet", beden: "28-31",
        renk: "Karışık (Çok Renkli)", renk_kodu: "#ec4899", cift_sayisi: 180,
        birim_agirlik_kg: 0.018, birim_fiyat: 1.85, doviz: "EUR",
        siparis_no: "DE-2025-0119", lot: "LOT-2025-0405-M", musteri: "KinderMode GmbH", ulke: "Almanya",
        kompozisyon: [
          { malzeme: "Pamuk", oran: 70, renk: "#22c55e" },
          { malzeme: "Polyamid", oran: 25, renk: "#3b82f6" },
          { malzeme: "Elastan", oran: 5, renk: "#f97316" },
        ],
        sertifikalar: ["OEKO-TEX 100", "BCI"],
      },
    },
  ],
};
