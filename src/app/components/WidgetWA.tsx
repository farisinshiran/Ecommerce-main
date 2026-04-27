import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [showModal, setShowModal] = useState(false);

  // Saya mengambil nomor ini dari screenshot Google Maps klien sebelumnya.
  const phoneNumber = "6281321245161"; 
  
  // Teks otomatis yang akan muncul di kolom chat pembeli
  const message = encodeURIComponent("Halo Admin Kelapa Hijau, saya mau pesan kelapa hijau nih!");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleToggleModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Mencegah link langsung terbuka saat diklik
    setShowModal(true); // Memunculkan pop-up konfirmasi

    // Mengirim sinyal ke Google Analytics bahwa tombol mulai diklik
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp_intent', {
        'event_category': 'engagement',
        'event_label': 'Floating WA Button Intent'
      });
    }
  };

  const handleConfirmOrder = () => {
    setShowModal(false); // Tutup modal
    window.open(waLink, "_blank"); // Buka WhatsApp
  };

  return (
    <>
      {/* TOMBOL MENGAPUNG */}
      <a
        href={waLink}
        onClick={handleToggleModal}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20b858] hover:scale-110 transition-all duration-300 group"
        aria-label="Chat WhatsApp"
      >
        {/* Bubble Tooltip (Muncul saat di-hover / sentuh tahan) */}
        <div 
          className="absolute right-[120%] top-1/2 -translate-y-1/2 w-max px-4 py-2.5 rounded-2xl text-sm shadow-md pointer-events-none opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block"
          style={{ 
            backgroundColor: "#F8F3E1", 
            color: "#41431B", 
            border: "1px solid #D5CEAB", 
            fontWeight: 600,
            fontFamily: "system-ui, -apple-system, sans-serif"
          }}
        >
          Mau pesan langsung via WA Admin? 🥥
          
          <div 
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 border-t border-r"
            style={{ backgroundColor: "#F8F3E1", borderColor: "#D5CEAB" }}
          />
        </div>

        {/* Logo SVG Resmi WhatsApp */}
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* POP-UP MODAL KONFIRMASI (Khusus Mobile & Desktop) */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div 
            className="relative w-full max-w-sm p-6 text-center rounded-3xl shadow-2xl transform scale-100 transition-transform"
            style={{ backgroundColor: "#F8F3E1", border: "1px solid #D5CEAB" }}
          >
            {/* Lingkaran Ikon Dekoratif */}
            <div 
              className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow-sm border" 
              style={{ borderColor: "#E3DBBB" }}
            >
              <span className="text-3xl">🛵</span>
            </div>

            <h3 
              className="mb-2 text-xl font-bold leading-tight" 
              style={{ fontFamily: "'Playfair Display', serif", color: "#41431B" }}
            >
              Pesan via WhatsApp?
            </h3>
            
            <p className="mb-6 text-sm font-medium leading-relaxed" style={{ color: "#6B6B4D" }}>
              Admin kami siap mencatat pesanan Kakak! Nanti untuk <b>biaya ongkos kirimnya</b> akan dihitungkan langsung oleh admin menyesuaikan alamat tujuan ya. 🥥✨
            </p>

            <div className="flex flex-col gap-3">
              {/* Tombol Lanjut WhatsApp */}
              <button
                onClick={handleConfirmOrder}
                className="w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                Ya, Lanjut ke Chat
              </button>

              {/* Tombol Batal */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl font-semibold transition-all border-2"
                style={{ color: "#41431B", borderColor: "#AEB784", backgroundColor: "transparent" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "white")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;

// import React from 'react';

// const FloatingWhatsApp = () => {
//   // Saya mengambil nomor ini dari screenshot Google Maps klien sebelumnya. Pastikan benar ya!
//   const phoneNumber = "6281321245161"; 
  
//   // Teks otomatis yang akan muncul di kolom chat pembeli
//   const message = encodeURIComponent("Halo Admin Kelapa Hijau, saya mau pesan kelapa hijau nih!");
//   const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

//   const handleClick = () => {
//     // Ini adalah kode sakti untuk mengirim sinyal ke Google Analytics bahwa tombol diklik
//     if (typeof window !== 'undefined' && (window as any).gtag) {
//       (window as any).gtag('event', 'click_whatsapp', {
//         'event_category': 'engagement',
//         'event_label': 'Floating WA Button'
//       });
//     }
//   };

//   return (
//     <a
//       href={waLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       onClick={handleClick}
//       // Tambahan 'group' agar elemen di dalamnya bisa bereaksi saat tombol ini di-hover
//       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20b858] hover:scale-110 transition-all duration-300 group"
//       aria-label="Chat WhatsApp"
//     >
//       {/* 👇 BUBBLE TOOLTIP HOVER 👇 */}
//       <div 
//         className="absolute right-[120%] top-1/2 -translate-y-1/2 w-max px-4 py-2.5 rounded-2xl text-sm shadow-md pointer-events-none opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
//         style={{ 
//           backgroundColor: "#F8F3E1", 
//           color: "#41431B", 
//           border: "1px solid #D5CEAB", 
//           fontWeight: 600,
//           fontFamily: "system-ui, -apple-system, sans-serif"
//         }}
//       >
//         Mau pesan langsung via WA Admin? 🥥
        
//         {/* Segitiga kecil penunjuk arah (panah ke kanan) */}
//         <div 
//           className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 border-t border-r"
//           style={{ backgroundColor: "#F8F3E1", borderColor: "#D5CEAB" }}
//         />
//       </div>
//       {/* 👆 AKHIR BUBBLE TOOLTIP 👆 */}

//       {/* Ini adalah logo SVG resmi WhatsApp agar cepat dimuat tanpa perlu gambar PNG */}
//       <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//       </svg>
//     </a>
//   );
// };

// export default FloatingWhatsApp;

// // import React from 'react';

// const FloatingWhatsApp = () => {
//   // Saya mengambil nomor ini dari screenshot Google Maps klien sebelumnya. Pastikan benar ya!
//   const phoneNumber = "6281321245161"; 
  
//   // Teks otomatis yang akan muncul di kolom chat pembeli
//   const message = encodeURIComponent("Halo Kelapa Hijau Bandung, saya ingin pesan kelapa hijau dari website.");
//   const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

//   const handleClick = () => {
//     // Ini adalah kode sakti untuk mengirim sinyal ke Google Analytics bahwa tombol diklik
//     if (typeof window !== 'undefined' && (window as any).gtag) {
//       (window as any).gtag('event', 'click_whatsapp', {
//         'event_category': 'engagement',
//         'event_label': 'Floating WA Button'
//       });
//     }
//   };

//   return (
//     <a
//       href={waLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       onClick={handleClick}
//       // Tailwind CSS untuk membuat tombol melayang di kanan bawah, warna hijau WA, dan efek hover animasi
//       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20b858] hover:scale-110 transition-all duration-300 group"
//       aria-label="Chat WhatsApp"
//     >
//       {/* Ini adalah logo SVG resmi WhatsApp agar cepat dimuat tanpa perlu gambar PNG */}
//       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//       </svg>
//     </a>
//   );
// };

// export default FloatingWhatsApp;