const trainingData = [
  // === Epson EcoTank L3110 ===
  { brand: "Epson", type: "EcoTank L3110", problems: ["hasil bergaris", "warna pudar"], diagnosis: "Head printer perlu pembersihan atau tinta hampir habis." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["kertas macet", "tidak narik"], diagnosis: "Roller kertas kemungkinan aus atau kotor." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["offline", "lambat"], diagnosis: "Koneksi tidak stabil atau ada antrean tertahan." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["lampu berkedip", "kertas macet"], diagnosis: "Sensor atau sisa kertas mengganggu proses." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["kebocoran", "hasil kotor"], diagnosis: "Kemungkinan tinta bocor atau pembuangan tinta penuh." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["ghosting", "hasil kotor"], diagnosis: "Kemungkinan drum atau head rusak." },
  { brand: "Epson", type: "EcoTank L3110", problems: ["warna pudar", "lambat"], diagnosis: "Tinta hampir habis atau mode kualitas rendah." },
  
  // === Epson EcoTank L1110 ===
  { brand: "Epson", type: "EcoTank L1110", problems: ["hasil bergaris", "misalignment"], diagnosis: "Lakukan Head Cleaning dan Print Head Alignment." },
  { brand: "Epson", type: "EcoTank L1110", problems: ["tidak narik", "bunyi aneh"], diagnosis: "Gear atau roller bermasalah." },
  { brand: "Epson", type: "EcoTank L1110", problems: ["mati total"], diagnosis: "Power supply rusak atau kabel tidak terhubung." },
  { brand: "Epson", type: "EcoTank L1110", problems: ["driver error", "offline"], diagnosis: "Driver perlu diperbarui atau reinstal." },
  { brand: "Epson", type: "EcoTank L1110", problems: ["hasil kotor"], diagnosis: "Sisa tinta pada jalur kertas atau bocor." },
  
  // === Epson L120 ===
  { brand: "Epson", type: "L120", problems: ["lampu berkedip", "offline"], diagnosis: "Kemungkinan general error, lakukan reset waste ink pad." },
  { brand: "Epson", type: "L120", problems: ["warna pudar", "lambat"], diagnosis: "Gunakan mode cetak berkualitas tinggi." },
  { brand: "Epson", type: "L120", problems: ["hasil bergaris"], diagnosis: "Lakukan head cleaning berkala." },
  { brand: "Epson", type: "L120", problems: ["kertas macet"], diagnosis: "Periksa jalur kertas dari ujung ke ujung." },
  { brand: "Epson", type: "L120", problems: ["narik banyak"], diagnosis: "Sensor atau roller tidak mengenali ketebalan kertas." },

  // === HP Ink Tank 315 ===
  { brand: "HP", type: "Ink Tank 315", problems: ["cartridge tidak terdeteksi", "lampu berkedip"], diagnosis: "Periksa pemasangan dan chip cartridge." },
  { brand: "HP", type: "Ink Tank 315", problems: ["warna pudar", "hasil bergaris"], diagnosis: "Priming tinta diperlukan." },
  { brand: "HP", type: "Ink Tank 315", problems: ["tidak narik", "kertas macet"], diagnosis: "Roller kertas kotor atau aus." },
  { brand: "HP", type: "Ink Tank 315", problems: ["offline", "driver error"], diagnosis: "Pastikan driver HP Smart aktif dan tidak corrupt." },
  { brand: "HP", type: "Ink Tank 315", problems: ["bunyi aneh"], diagnosis: "Cek kondisi carriage unit dan gear." },

  // === HP DeskJet Ink Advantage 2135 ===
  { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["cartridge tidak terdeteksi", "peringatan palsu"], diagnosis: "Chip cartridge rusak atau kotor." },
  { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["lambat", "offline"], diagnosis: "Periksa kabel USB dan hapus antrean." },
  { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["hasil kotor", "misalignment"], diagnosis: "Kalibrasi ulang head dan bersihkan tinta bocor." },
  { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["bunyi aneh"], diagnosis: "Masalah mekanis pada gear." },

  // === HP LaserJet Pro M15w ===
  { brand: "HP", type: "LaserJet Pro M15w", problems: ["kertas macet", "narik banyak", "bunyi aneh"], diagnosis: "Ada benda asing atau kerusakan sensor." },
  { brand: "HP", type: "LaserJet Pro M15w", problems: ["ghosting", "hasil kotor"], diagnosis: "Drum atau toner aus." },
  { brand: "HP", type: "LaserJet Pro M15w", problems: ["offline", "lambat"], diagnosis: "Masalah jaringan atau antrean tertahan." },
  { brand: "HP", type: "LaserJet Pro M15w", problems: ["mati total"], diagnosis: "Power board atau kabel rusak." },

  // === Canon PIXMA G-Series ===
  { brand: "Canon", type: "PIXMA G-Series", problems: ["hasil bergaris", "warna pudar", "kebocoran"], diagnosis: "Selang infus masuk angin atau head kotor." },
  { brand: "Canon", type: "PIXMA G-Series", problems: ["lampu berkedip", "offline"], diagnosis: "Error 5B00 - waste ink pad penuh." },
  { brand: "Canon", type: "PIXMA G-Series", problems: ["kertas macet", "bunyi aneh"], diagnosis: "Gear tidak sinkron setelah macet." },
  { brand: "Canon", type: "PIXMA G-Series", problems: ["tidak narik"], diagnosis: "Roller bawah kotor atau aus." },

  // === Canon PIXMA Ink Efficient E410 ===
  { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["bunyi aneh", "mati total"], diagnosis: "PSU atau board utama rusak." },
  { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["cartridge tidak terdeteksi", "lampu berkedip"], diagnosis: "Kontak cartridge perlu dibersihkan." },
  { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["antrean macet", "driver error"], diagnosis: "Print Spooler perlu direset dan driver diperbarui." },
  { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["hasil bergaris"], diagnosis: "Ganti cartridge jika cleaning tidak berhasil." },

  // === Canon imageCLASS LBP6030 ===
  { brand: "Canon", type: "imageCLASS LBP6030", problems: ["ghosting", "hasil kotor"], diagnosis: "Toner atau drum cartridge habis masa pakai." },
  { brand: "Canon", type: "imageCLASS LBP6030", problems: ["kertas macet"], diagnosis: "Cek dan bersihkan bagian fuser belakang." },
  { brand: "Canon", type: "imageCLASS LBP6030", problems: ["tidak narik", "narik banyak"], diagnosis: "Pickup roller perlu diganti." },
  { brand: "Canon", type: "imageCLASS LBP6030", problems: ["offline", "lampu berkedip"], diagnosis: "Cover tidak tertutup atau toner tidak terpasang benar." }
];
