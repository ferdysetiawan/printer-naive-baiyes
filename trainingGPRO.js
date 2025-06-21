// Data training untuk simulasi Naive Bayes yang diperbanyak
// File: training.js
const trainingData = [
    // === Epson EcoTank L3110 ===
    { brand: "Epson", type: "EcoTank L3110", problems: ["hasil bergaris", "warna pudar"], diagnosis: "Kemungkinan Head Printer kotor atau tersumbat. Lakukan 'Head Cleaning' dari software printer." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["kertas macet", "tidak narik"], diagnosis: "Periksa roller penarik kertas dari kotoran atau aus. Pastikan jenis dan posisi kertas sudah benar." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["offline", "lambat"], diagnosis: "Periksa koneksi USB dan restart komputer serta printer. Pastikan tidak ada antrean cetak yang tertahan." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["lampu berkedip", "kertas macet"], diagnosis: "Lampu berkedip setelah paper jam menandakan ada sisa kertas atau sensor yang masih terhalang. Periksa kembali dengan teliti." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["kebocoran", "hasil kotor"], diagnosis: "Ada kemungkinan selang infus bocor atau pembuangan tinta penuh. Segera periksa bagian dalam printer." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["misalignment", "hasil kotor"], diagnosis: "Jalankan 'Print Head Alignment'. Jika masih miring, periksa encoder strip dari kotoran tinta." },
    { brand: "Epson", type: "EcoTank L3110", problems: ["bunyi aneh"], diagnosis: "Bunyi tidak wajar bisa disebabkan oleh ada benda asing di jalur kertas atau gear mekanik yang aus." },

    // === Epson EcoTank L1110 ===
    { brand: "Epson", type: "EcoTank L1110", problems: ["hasil bergaris", "misalignment"], diagnosis: "Lakukan 'Head Cleaning' diikuti dengan 'Print Head Alignment' dari menu maintenance di driver printer." },
    { brand: "Epson", type: "EcoTank L1110", problems: ["tidak narik", "bunyi aneh"], diagnosis: "Roller penarik kertas kemungkinan aus atau ada gear yang patah. Perlu pemeriksaan fisik." },
    { brand: "Epson", type: "EcoTank L1110", problems: ["mati total"], diagnosis: "Periksa kabel power dan adaptor. Jika masih tidak menyala, kemungkinan ada kerusakan pada mainboard atau power supply." },
    { brand: "Epson", type: "EcoTank L1110", problems: ["driver error", "offline"], diagnosis: "Instal ulang driver printer dengan versi terbaru dari website resmi Epson." },
    { brand: "Epson", type: "EcoTank L1110", problems: ["lampu berkedip"], diagnosis: "Lampu berkedip bergantian biasanya menandakan 'Waste Ink Pad is Full'. Perlu direset dengan software." },

    // === Epson L120 ===
    { brand: "Epson", type: "L120", problems: ["lampu berkedip", "offline"], diagnosis: "Ini adalah 'General Error'. Coba restart printer. Jika berlanjut, kemungkinan waste ink pad penuh dan perlu di-reset." },
    { brand: "Epson", type: "L120", problems: ["warna pudar", "lambat"], diagnosis: "Kualitas cetak rendah dan lambat, coba atur kualitas ke 'Standard' atau 'High'. Pastikan tinta tidak hampir habis." },
    { brand: "Epson", type: "L120", problems: ["hasil bergaris"], diagnosis: "Model ini sering mengalami head tersumbat jika jarang dipakai. Lakukan 'Head Cleaning' beberapa kali." },
    { brand: "Epson", type: "L120", problems: ["kertas macet"], diagnosis: "Mekanik L120 cukup sederhana, periksa jalur kertas dari depan hingga belakang secara manual." },
    { brand: "Epson", type: "L120", problems: ["narik banyak"], diagnosis: "Kertas yang terlalu lembab atau separation pad (bantalan pemisah) yang kotor bisa jadi penyebabnya." },
    
    // === HP Ink Tank 315 ===
    { brand: "HP", type: "Ink Tank 315", problems: ["cartridge tidak terdeteksi", "lampu berkedip"], diagnosis: "Printer HP Ink Tank sensitif pada cartridge. Pastikan cartridge terpasang dengan benar dan chip-nya bersih." },
    { brand: "HP", type: "Ink Tank 315", problems: ["warna pudar", "hasil bergaris"], diagnosis: "Sistem tinta HP mungkin kemasukan angin. Coba prosedur 'priming' sesuai buku manual atau lakukan cleaning." },
    { brand: "HP", type: "Ink Tank 315", problems: ["tidak narik", "kertas macet"], diagnosis: "Periksa roller karet penarik kertas, bersihkan dengan kain lembab jika kotor." },
    { brand: "HP", type: "Ink Tank 315", problems: ["offline", "driver error"], diagnosis: "Pastikan layanan 'HP Smart' atau driver lengkap terinstal dengan benar di komputer Anda." },
    { brand: "HP", type: "Ink Tank 315", problems: ["hasil kotor"], diagnosis: "Noda tinta bisa disebabkan oleh head yang terlalu basah setelah cleaning atau ada kebocoran kecil." },

    // === HP DeskJet Ink Advantage 2135 ===
    { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["cartridge tidak terdeteksi", "peringatan palsu"], diagnosis: "Chip pada cartridge kotor atau rusak. Coba bersihkan dengan tisu kering. Jika tidak berhasil, ganti cartridge." },
    { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["lambat", "offline"], diagnosis: "Periksa koneksi USB dan coba install ulang driver. Hapus antrean cetak yang macet." },
    { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["hasil kotor", "misalignment"], diagnosis: "Lakukan kalibrasi dari software HP. Noda bisa berasal dari tinta yang meluber di dalam." },
    { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["bunyi aneh"], diagnosis: "Bunyi keras dan tidak wajar biasanya menandakan masalah mekanis pada gear atau carriage unit." },
    { brand: "HP", type: "DeskJet Ink Advantage 2135", problems: ["kertas macet", "lampu berkedip"], diagnosis: "Keluarkan kertas macet dengan hati-hati, lalu restart printer untuk menghilangkan error." },

    // === HP LaserJet Pro M15w ===
    { brand: "HP", type: "LaserJet Pro M15w", problems: ["kertas macet", "narik banyak", "bunyi aneh"], diagnosis: "Sensor kertas bermasalah atau ada benda asing di jalur kertas. Periksa juga kondisi mekanik roller." },
    { brand: "HP", type: "LaserJet Pro M15w", problems: ["ghosting", "hasil kotor"], diagnosis: "Drum pada toner cartridge sudah aus. Ganti dengan toner cartridge yang baru dan original." },
    { brand: "HP", type: "LaserJet Pro M15w", problems: ["offline", "lambat"], diagnosis: "Untuk printer wireless, pastikan koneksi Wi-Fi stabil. Restart router dan printer mungkin membantu." },
    { brand: "HP", type: "LaserJet Pro M15w", problems: ["mati total"], diagnosis: "Sangat jarang terjadi. Periksa sumber listrik. Jika tidak berhasil, kemungkinan power board internal rusak." },
    { brand: "HP", type: "LaserJet Pro M15w", problems: ["warna pudar"], diagnosis: "Toner hampir habis atau pengaturan 'EconoMode' aktif. Nonaktifkan EconoMode untuk hasil lebih pekat." },
    
    // === Canon PIXMA G-Series ===
    { brand: "Canon", type: "PIXMA G-Series", problems: ["hasil bergaris", "warna pudar", "kebocoran"], diagnosis: "Lakukan 'Deep Cleaning' pada head. Pastikan selang infus tidak masuk angin dan tutup tinta terpasang rapat." },
    { brand: "Canon", type: "PIXMA G-Series", problems: ["lampu berkedip", "offline"], diagnosis: "Error 5B00 sering terjadi, menandakan 'waste ink pad' penuh. Perlu reset menggunakan software khusus." },
    { brand: "Canon", type: "PIXMA G-Series", problems: ["kertas macet", "bunyi aneh"], diagnosis: "Mekanik Canon cukup kompleks. Bunyi aneh setelah macet bisa berarti ada gear yang tidak sinkron." },
    { brand: "Canon", type: "PIXMA G-Series", problems: ["tidak narik"], diagnosis: "Roller bawah mungkin kotor. Coba bersihkan dengan hati-hati menggunakan kain yang sedikit dibasahi alkohol." },
    { brand: "Canon", type: "PIXMA G-Series", problems: ["peringatan palsu", "cartridge tidak terdeteksi"], diagnosis: "Printer Canon seri G tidak menggunakan cartridge, ini indikasi error pada mainboard atau sensor tinta." },

    // === Canon PIXMA Ink Efficient E410 ===
    { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["bunyi aneh", "mati total"], diagnosis: "Terdengar bunyi aneh sebelum mati total bisa menandakan kerusakan mekanik atau power supply unit (PSU) rusak." },
    { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["cartridge tidak terdeteksi", "lampu berkedip"], diagnosis: "Ini masalah umum. Coba lepas dan pasang kembali cartridge. Pastikan kontak kuningan bersih." },
    { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["antrean macet", "driver error"], diagnosis: "Hapus semua pekerjaan di antrean cetak, restart layanan Print Spooler, dan jika perlu, instal ulang driver." },
    { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["hasil bergaris"], diagnosis: "Cartridge pada seri ini memiliki head yang menyatu. Jika 'cleaning' tidak berhasil, cartridge mungkin perlu diganti." },
    { brand: "Canon", type: "PIXMA Ink Efficient E410", problems: ["narik banyak", "kertas macet"], diagnosis: "Pastikan kertas tidak terlalu banyak di tray dan gunakan kertas dengan ketebalan standar." },
    
    // === Canon imageCLASS LBP6030 ===
    { brand: "Canon", type: "imageCLASS LBP6030", problems: ["ghosting", "hasil kotor"], diagnosis: "Drum unit pada toner cartridge kemungkinan sudah mencapai akhir masa pakai dan perlu diganti." },
    { brand: "Canon", type: "imageCLASS LBP6030", problems: ["kertas macet"], diagnosis: "Periksa fuser unit (pemanas) di bagian belakang, seringkali kertas tersangkut di sana." },
    { brand: "Canon", type: "imageCLASS LBP6030", problems: ["tidak narik", "narik banyak"], diagnosis: "Separation pad dan pickup roller kemungkinan besar sudah aus dan perlu diganti." },
    { brand: "Canon", type: "imageCLASS LBP6030", problems: ["offline", "lampu berkedip"], diagnosis: "Coba ganti kabel USB. Lampu berkedip bisa menandakan cover tidak tertutup rapat atau toner tidak terpasang benar." },
    { brand: "Canon", type: "imageCLASS LBP6030", problems: ["lambat"], diagnosis: "Jika mencetak file besar seperti PDF, prosesnya memang bisa lambat. Periksa juga memori komputer." }
];
