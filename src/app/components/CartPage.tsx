// import { useNavigate } from "react-router";
// import { motion } from "framer-motion";
// import { ArrowLeft, MessageCircle } from "lucide-react";
// import { WhatsAppIcon } from "./ui/whatsapp-icon";

// export function CartPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#F8F3E1" }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-md w-full text-center p-8 rounded-3xl shadow-sm border relative overflow-hidden"
//         style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
//       >
//         {/* Dekorasi Latar Belakang */}
//         <div 
//           className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
//           style={{ backgroundColor: "#AEB784" }}
//         />
        
//         {/* Ikon Animasi */}
//         <div className="text-7xl mb-6 inline-block relative z-10 mt-4">
//           <motion.div
//             animate={{ rotate: [0, -10, 10, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
//           >
//             🥥🛠️
//           </motion.div>
//         </div>

//         {/* Judul dengan Tipografi Playfair */}
//         <h1
//           className="mb-4 leading-tight relative z-10"
//           style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "2rem", fontWeight: 700 }}
//         >
//           Ups, Keranjangnya<br/>Masih Dipoles!
//         </h1>

//         {/* Pesan Ramah/Santai */}
//         <p className="mb-8 font-medium leading-relaxed relative z-10" style={{ color: "#6B6B4D", fontSize: "0.95rem" }}>
//           Tenang aja, Kak! Fitur "Checkout" dan hitung ongkir otomatis via "Web" lagi kita rakit biar makin mantap. <br/><br/>
//           Sambil nunggu rilis resminya, yuk langsung <i>order</i> manual aja lewat WhatsApp admin. Makasih udah sabar menunggu! ✨
//         </p>

//         {/* Tombol Aksi */}
//           <div className="flex flex-col gap-3 relative z-10">
//                 <a
//                   href="https://wa.me/6281321245161"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-opacity hover:opacity-90"
//                   style={{ backgroundColor: "#25D366", color: "white" }}
//                 >
//                   <svg width="18" height="18" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
//                   Pesan via WhatsApp aja!
//                 </a>

//           <button
//             onClick={() => navigate("/pesan")}
//             className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all border-2"
//             style={{ color: "#41431B", borderColor: "#AEB784", backgroundColor: "transparent" }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F8F3E1")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
//           >
//             <ArrowLeft size={18} />
//             Balik Pesan via Ojol deh :D
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Minus,
// //   Plus,
// //   Trash2,
// //   ShoppingBag,
// //   ExternalLink,
// //   ArrowLeft,
// //   CheckCircle,
// //   Truck,
// //   UtensilsCrossed,
// //   Package,
// //   Info // 👈 Tambahan import Info icon di sini
// // } from "lucide-react";
// // import { WhatsAppIcon } from "./ui/whatsapp-icon";
// // import { useStore } from "./store-context";
// // import { useNavigate } from "react-router";

// // const deliveryApps = [
// //   {
// //     name: "GoFood",
// //     bgColor: "#1A5231",
// //     emoji: "https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75",
// //     url: "https://gofood.link/a/xUWXgHJ",
// //     desc: "Pesan via GoFood",
// //   },
// //   {
// //     name: "GrabFood",
// //     bgColor: "#52B788",
// //     emoji: "https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg",
// //     url: " https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN",
// //     desc: "Pesan via GrabFood",
// //   },
// //   {
// //     name: "ShopeeFood",
// //     bgColor: "#F97316",
// //     emoji: "https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg",
// //     url: "https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link",
// //     desc: "Pesan via ShopeeFood",
// //   },
// // ];

// // const deliveryModes = [
// //   { id: "delivery", label: "Delivery", icon: Truck },
// //   { id: "dinein", label: "Dine In", icon: UtensilsCrossed },
// //   { id: "pickup", label: "Pickup", icon: Package },
// // ];

// // const paymentMethods = ["QRIS", "BCA Transfer", "Mandiri", "COD"];

// // function formatPrice(price: number) {
// //   return `Rp ${price.toLocaleString("id-ID")}`;
// // }

// // export function CartPage() {
// //   const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useStore();
// //   const navigate = useNavigate();
// //   const [orderSuccess, setOrderSuccess] = useState(false);
// //   const [customerName, setCustomerName] = useState("");
// //   const [customerAddress, setCustomerAddress] = useState("");
// //   const [customerPhone, setCustomerPhone] = useState("");
// //   const [notes, setNotes] = useState("");
// //   const [deliveryMode, setDeliveryMode] = useState("delivery");
// //   const [paymentMethod, setPaymentMethod] = useState("QRIS");

// //   const deliveryFee = deliveryMode === "delivery" && totalPrice > 0 ? 8000 : 0;
// //   const grandTotal = totalPrice + deliveryFee;

// //   const handleWhatsAppOrder = () => {
// //     if (!customerName || !customerPhone || !customerAddress) return;

// //     const itemsText = cart
// //       .map((item) => `• ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`)
// //       .join("\n");

// //     const message = encodeURIComponent(
// //       `Halo Kelapa Hijau Bandung! 🥥\n\nSaya ingin memesan:\n${itemsText}\n\nSubtotal: ${formatPrice(totalPrice)}\nOngkir (Estimasi): ${formatPrice(deliveryFee)}\nTotal Sementara: ${formatPrice(grandTotal)}\n\nNama: ${customerName}\nHP: ${customerPhone}\nAlamat: ${customerAddress}\nMetode: ${deliveryMode} - ${paymentMethod}\n${notes ? `Catatan: ${notes}` : ""}\n\n*Mohon konfirmasi total tagihan beserta ongkir resminya ya, terima kasih!*`
// //     );

// //     window.open(`https://wa.me/6281321245161?text=${message}`, "_blank");
// //   };

// //   if (orderSuccess) {
// //     return (
// //       <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#F8F3E1" }}>
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           className="text-center p-8"
// //         >
// //           <div
// //             className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
// //             style={{ backgroundColor: "#AEB784" }}
// //           >
// //             <CheckCircle size={38} style={{ color: "#41431B" }} />
// //           </div>
// //           <h2
// //             className="mb-3"
// //             style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
// //           >
// //             Pesanan Diterima!
// //           </h2>
// //           <p className="mb-7 text-sm font-medium" style={{ color: "#6B6B4D" }}>
// //             Terima kasih sudah memesan di Kelapa Hijau Bandung 🥥
// //           </p>
// //           <button
// //             onClick={() => { setOrderSuccess(false); navigate("/menu"); }}
// //             className="px-7 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
// //             style={{ backgroundColor: "#41431B" }}
// //           >
// //             Pesan Lagi
// //           </button>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   if (cart.length === 0) {
// //     return (
// //       <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#F8F3E1" }}>
// //         <div className="text-center p-8">
// //           <div className="text-6xl mb-5">🛒</div>
// //           <h2
// //             className="mb-3"
// //             style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
// //           >
// //             Keranjang Kosong
// //           </h2>
// //           <p className="mb-7 text-sm font-medium" style={{ color: "#6B6B4D" }}>
// //             Yuk, pilih produk kelapa hijau favoritmu!
// //           </p>
// //           <button
// //             onClick={() => navigate("/menu")}
// //             className="px-7 py-3 rounded-full text-white font-semibold flex items-center gap-2 mx-auto transition-opacity hover:opacity-90"
// //             style={{ backgroundColor: "#41431B" }}
// //           >
// //             <ShoppingBag size={18} />
// //             Lihat Menu
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ backgroundColor: "#F8F3E1" }}>
// //       {/* Header */}
// //       <div style={{ backgroundColor: "#41431B" }} className="py-8">
// //         <div className="max-w-6xl mx-auto px-4 flex items-center gap-4">
// //           <button
// //             type="button"
// //             aria-label="Kembali ke menu"
// //             onClick={() => navigate("/menu")}
// //             className="p-2 rounded-xl transition-colors"
// //             style={{ color: "#AEB784" }}
// //           >
// //             <ArrowLeft size={20} />
// //           </button>
// //           <div>
// //             <h1
// //               style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "1.6rem", fontWeight: 700 }}
// //             >
// //               Keranjang Belanja 🛒
// //             </h1>
// //             <p className="text-sm font-medium" style={{ color: "#AEB784" }}>{totalItems} item dipilih</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-6xl mx-auto px-4 py-8">
        
// //         {/* 👇 NOTIFIKASI BANNER BARU DITAMBAHKAN DI SINI 👇 */}
// //         <div className="mb-8 p-4 rounded-xl flex items-start gap-3 border shadow-sm" style={{ backgroundColor: "#FFFBEB", borderColor: "#FDE68A" }}>
// //           <Info className="shrink-0 mt-0.5" size={20} style={{ color: "#F59E0B" }} />
// //           <div>
// //             <h4 className="font-bold text-sm mb-1" style={{ color: "#92400E" }}>Info Pengiriman & Ongkir 🚚</h4>
// //             <p className="text-xs font-medium leading-relaxed" style={{ color: "#B45309" }}>
// //               Sistem perhitungan ongkos kirim otomatis sedang dalam tahap penyempurnaan. Silakan lengkapi data Anda di bawah ini dan klik <b>"Pesan via WhatsApp"</b>. Admin kami akan segera membalas pesanan Anda beserta total biaya ongkos kirim resminya.
// //             </p>
// //           </div>
// //         </div>
// //         {/* 👆 AKHIR NOTIFIKASI BANNER 👆 */}

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Cart Items + Form */}
// //           <div className="lg:col-span-2 space-y-5">
// //             {/* Delivery Mode Toggle */}
// //             <div
// //               className="rounded-2xl p-4 shadow-sm border"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#AEB784" }}>
// //                 Tipe Pesanan
// //               </div>
// //               <div
// //                 className="flex rounded-xl p-1"
// //                 style={{ backgroundColor: "#F8F3E1" }}
// //               >
// //                 {deliveryModes.map((mode) => (
// //                   <button
// //                     key={mode.id}
// //                     onClick={() => setDeliveryMode(mode.id)}
// //                     className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all"
// //                     style={
// //                       deliveryMode === mode.id
// //                         ? { backgroundColor: "#41431B", color: "#F8F3E1" }
// //                         : { backgroundColor: "transparent", color: "#8A8A6A" }
// //                     }
// //                   >
// //                     <mode.icon size={14} />
// //                     {mode.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Cart Items */}
// //             <AnimatePresence>
// //               {cart.map((item) => (
// //                 <motion.div
// //                   key={item.id}
// //                   layout
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   exit={{ opacity: 0, x: 20 }}
// //                   className="rounded-2xl p-4 flex gap-4 shadow-sm border"
// //                   style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //                 >
// //                   <img
// //                     src={item.image}
// //                     alt={item.name}
// //                     className="w-20 h-20 rounded-xl object-cover shrink-0"
// //                   />
// //                   <div className="flex-1 min-w-0">
// //                     <div className="flex items-start justify-between gap-2 mb-1">
// //                       <h3
// //                         className="text-sm truncate"
// //                         style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700 }}
// //                       >
// //                         {item.name}
// //                       </h3>
// //                       <button
// //                         onClick={() => removeFromCart(item.id)}
// //                         className="shrink-0 transition-colors"
// //                         style={{ color: "#D5CEAB" }}
// //                         onMouseOver={(e) => (e.currentTarget.style.color = "#F97316")}
// //                         onMouseOut={(e) => (e.currentTarget.style.color = "#D5CEAB")}
// //                         title="Hapus item"
// //                         aria-label="Hapus item dari keranjang"
// //                       >
// //                         <Trash2 size={15} />
// //                       </button>
// //                     </div>
// //                     {item.volume && (
// //                       <span className="text-xs font-medium" style={{ color: "#8A8A6A" }}>{item.volume}</span>
// //                     )}
// //                     <div className="flex items-center justify-between mt-3">
// //                       <div className="text-sm font-semibold" style={{ color: "#41431B" }}>
// //                         {formatPrice(item.price * item.quantity)}
// //                       </div>
// //                       <div
// //                         className="flex items-center gap-2 rounded-xl p-1"
// //                         style={{ backgroundColor: "#F8F3E1" }}
// //                       >
// //                         <button
// //                           type="button"
// //                           aria-label="Kurangi jumlah"
// //                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                           className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
// //                           style={{ color: "#41431B" }}
// //                         >
// //                           <Minus size={13} />
// //                         </button>
// //                         <span className="text-sm font-semibold w-6 text-center" style={{ color: "#41431B" }}>
// //                           {item.quantity}
// //                         </span>
// //                         <button
// //                           type="button"
// //                           aria-label="Tambah jumlah"
// //                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                           className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
// //                           style={{ backgroundColor: "#41431B", color: "#F8F3E1" }}
// //                         >
// //                           <Plus size={13} />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>

// //             <button
// //               onClick={clearCart}
// //               className="text-sm font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-70"
// //               style={{ color: "#F97316" }}
// //             >
// //               <Trash2 size={14} />
// //               Hapus semua item
// //             </button>

// //             {/* Order Form */}
// //             <div
// //               className="rounded-2xl p-6 shadow-sm border"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <h3
// //                 className="mb-5"
// //                 style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.1rem", fontWeight: 700 }}
// //               >
// //                 Detail Pengiriman
// //               </h3>
// //               <div className="space-y-4">
// //                 {[
// //                   { label: "Nama Penerima *", value: customerName, setter: setCustomerName, placeholder: "Masukkan nama lengkap...", type: "text" },
// //                   { label: "Nomor HP / WhatsApp *", value: customerPhone, setter: setCustomerPhone, placeholder: "08xx-xxxx-xxxx", type: "tel" },
// //                 ].map((field) => (
// //                   <div key={field.label}>
// //                     <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                       {field.label}
// //                     </label>
// //                     <input
// //                       type={field.type}
// //                       value={field.value}
// //                       onChange={(e) => field.setter(e.target.value)}
// //                       placeholder={field.placeholder}
// //                       className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border"
// //                       style={{
// //                         backgroundColor: "#F8F3E1",
// //                         borderColor: "#D5CEAB",
// //                         color: "#41431B",
// //                       }}
// //                     />
// //                   </div>
// //                 ))}

// //                 <div>
// //                   <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                     Alamat Pengiriman *
// //                   </label>
// //                   <textarea
// //                     value={customerAddress}
// //                     onChange={(e) => setCustomerAddress(e.target.value)}
// //                     placeholder="Masukkan alamat lengkap..."
// //                     rows={3}
// //                     className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border resize-none"
// //                     style={{
// //                       backgroundColor: "#F8F3E1",
// //                       borderColor: "#D5CEAB",
// //                       color: "#41431B",
// //                     }}
// //                   />
// //                 </div>

// //                 {/* Payment Method */}
// //                 <div>
// //                   <label className="text-xs font-semibold mb-2 block" style={{ color: "#6B6B4D" }}>
// //                     Metode Pembayaran
// //                   </label>
// //                   <div className="flex flex-wrap gap-2">
// //                     {paymentMethods.map((method) => (
// //                       <button
// //                         key={method}
// //                         onClick={() => setPaymentMethod(method)}
// //                         className="px-4 py-2 rounded-xl text-xs font-semibold border transition-all"
// //                         style={
// //                           paymentMethod === method
// //                             ? { backgroundColor: "#41431B", color: "#F8F3E1", borderColor: "#41431B" }
// //                             : { backgroundColor: "#F8F3E1", color: "#41431B", borderColor: "#D5CEAB" }
// //                         }
// //                       >
// //                         {method}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                     Catatan (opsional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={notes}
// //                     onChange={(e) => setNotes(e.target.value)}
// //                     placeholder="Misal: jangan terlalu manis..."
// //                     className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border"
// //                     style={{
// //                       backgroundColor: "#F8F3E1",
// //                       borderColor: "#D5CEAB",
// //                       color: "#41431B",
// //                     }}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Order Summary Sidebar */}
// //           <div className="lg:col-span-1">
// //             <div
// //               className="rounded-2xl p-5 shadow-sm border sticky top-24"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <h3
// //                 className="mb-5"
// //                 style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.1rem", fontWeight: 700 }}
// //               >
// //                 Ringkasan Pesanan
// //               </h3>

// //               {/* Items list */}
// //               <div className="space-y-2 mb-4">
// //                 {cart.map((item) => (
// //                   <div key={item.id} className="flex justify-between text-sm">
// //                     <span className="truncate flex-1 mr-2 font-medium" style={{ color: "#6B6B4D" }}>
// //                       {item.name} ×{item.quantity}
// //                     </span>
// //                     <span className="shrink-0 font-semibold" style={{ color: "#41431B" }}>
// //                       {formatPrice(item.price * item.quantity)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Total breakdown */}
// //               <div
// //                 className="rounded-2xl p-4 mb-5"
// //                 style={{ backgroundColor: "#41431B" }}
// //               >
// //                 <div className="flex justify-between text-sm mb-2">
// //                   <span style={{ color: "rgba(255,255,255,0.65)" }}>Subtotal</span>
// //                   <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{formatPrice(totalPrice)}</span>
// //                 </div>
// //                 {deliveryMode === "delivery" && (
// //                   <div className="flex justify-between text-sm mb-3">
// //                     <span style={{ color: "rgba(255,255,255,0.65)" }}>Ongkir (estimasi)</span>
// //                     <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{formatPrice(deliveryFee)}</span>
// //                   </div>
// //                 )}
// //                 <div
// //                   className="flex justify-between pt-3 border-t"
// //                   style={{ borderColor: "rgba(255,255,255,0.15)" }}
// //                 >
// //                   <span style={{ color: "#F8F3E1", fontWeight: 700 }}>Total Sementara</span>
// //                   <span style={{ color: "#AEB784", fontWeight: 700, fontSize: "1.1rem", fontFamily: "'Playfair Display', serif" }}>
// //                     {formatPrice(grandTotal)}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Platform order */}
// //               <div className="mb-5">
// //                 <p className="text-xs font-semibold mb-2" style={{ color: "#AEB784" }}>
// //                   Atau pesan langsung via:
// //                 </p>
// //                 <div className="space-y-2">
// //                   {deliveryApps.map((app) => (
// //                     <a
// //                       key={app.name}
// //                       href={app.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90"
// //                       style={{ backgroundColor: app.bgColor }}
// //                     >
// //                       <div
// //                         className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
// //                         style={{ backgroundColor: app.bgColor }}
// //                       >
// //                         {/* Cek apakah app.emoji adalah link (mulai dengan http) atau hanya teks */}
// //                         {app.emoji.startsWith("http") ? (
// //                           <img
// //                             src={app.emoji}
// //                             alt="App Icon"
// //                             className="w-full h-auto object-cover"
// //                           />
// //                         ) : (
// //                           <span>{app.emoji}</span>
// //                         )}
// //                       </div>
// //                       {app.desc} <ExternalLink size={12} />
// //                     </a>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* WhatsApp Button */}
// //               <button
// //                 onClick={handleWhatsAppOrder}
// //                 disabled={!customerName || !customerPhone || !customerAddress}
// //                 className="w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white"
// //                 style={{ backgroundColor: "#25D366" }}
// //               >
// //                 <WhatsAppIcon size={18} fill="white" />
// //                 Pesan via WhatsApp
// //                 <span
// //                   className="ml-1 text-xs px-2 py-0.5 rounded-full font-semibold"
// //                   style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
// //                 >
// //                   {formatPrice(grandTotal)}
// //                 </span>
// //               </button>
// //               {(!customerName || !customerPhone || !customerAddress) && (
// //                 <p className="text-xs text-center mt-2 font-medium" style={{ color: "#8A8A6A" }}>
// //                   Lengkapi detail pengiriman terlebih dahulu
// //                 </p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Minus,
// //   Plus,
// //   Trash2,
// //   ShoppingBag,
// //   ExternalLink,
// //   ArrowLeft,
// //   CheckCircle,
// //   Truck,
// //   UtensilsCrossed,
// //   Package,
// // } from "lucide-react";
// // import { WhatsAppIcon } from "./ui/whatsapp-icon";
// // import { useStore } from "./store-context";
// // import { useNavigate } from "react-router";

// // const deliveryApps = [
// //   {
// //     name: "GoFood",
// //     bgColor: "#1A5231",
// //     emoji: "https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75",
// //     url: "https://gofood.link/a/xUWXgHJ",
// //     desc: "Pesan via GoFood",
// //   },
// //   {
// //     name: "GrabFood",
// //     bgColor: "#52B788",
// //     emoji: "https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg",
// //     url: " https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN",
// //     desc: "Pesan via GrabFood",
// //   },
// //   {
// //     name: "ShopeeFood",
// //     bgColor: "#F97316",
// //     emoji: "https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg",
// //     url: "https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link",
// //     desc: "Pesan via ShopeeFood",
// //   },
// // ];

// // const deliveryModes = [
// //   { id: "delivery", label: "Delivery", icon: Truck },
// //   { id: "dinein", label: "Dine In", icon: UtensilsCrossed },
// //   { id: "pickup", label: "Pickup", icon: Package },
// // ];

// // const paymentMethods = ["QRIS", "BCA Transfer", "Mandiri", "COD"];

// // function formatPrice(price: number) {
// //   return `Rp ${price.toLocaleString("id-ID")}`;
// // }

// // export function CartPage() {
// //   const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useStore();
// //   const navigate = useNavigate();
// //   const [orderSuccess, setOrderSuccess] = useState(false);
// //   const [customerName, setCustomerName] = useState("");
// //   const [customerAddress, setCustomerAddress] = useState("");
// //   const [customerPhone, setCustomerPhone] = useState("");
// //   const [notes, setNotes] = useState("");
// //   const [deliveryMode, setDeliveryMode] = useState("delivery");
// //   const [paymentMethod, setPaymentMethod] = useState("QRIS");

// //   const deliveryFee = deliveryMode === "delivery" && totalPrice > 0 ? 8000 : 0;
// //   const grandTotal = totalPrice + deliveryFee;

// //   const handleWhatsAppOrder = () => {
// //     if (!customerName || !customerPhone || !customerAddress) return;

// //     const itemsText = cart
// //       .map((item) => `• ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`)
// //       .join("\n");

// //     const message = encodeURIComponent(
// //       `Halo Kelapa Hijau Bandung! 🥥\n\nSaya ingin memesan:\n${itemsText}\n\nSubtotal: ${formatPrice(totalPrice)}\nOngkir: ${formatPrice(deliveryFee)}\nTotal: ${formatPrice(grandTotal)}\n\nNama: ${customerName}\nHP: ${customerPhone}\nAlamat: ${customerAddress}\nMetode: ${deliveryMode} - ${paymentMethod}\n${notes ? `Catatan: ${notes}` : ""}`
// //     );

// //     window.open(`https://wa.me/6281321245161?text=${message}`, "_blank");
// //   };

// //   if (orderSuccess) {
// //     return (
// //       <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#F8F3E1" }}>
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           className="text-center p-8"
// //         >
// //           <div
// //             className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
// //             style={{ backgroundColor: "#AEB784" }}
// //           >
// //             <CheckCircle size={38} style={{ color: "#41431B" }} />
// //           </div>
// //           <h2
// //             className="mb-3"
// //             style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
// //           >
// //             Pesanan Diterima!
// //           </h2>
// //           <p className="mb-7 text-sm font-medium" style={{ color: "#6B6B4D" }}>
// //             Terima kasih sudah memesan di Kelapa Hijau Bandung 🥥
// //           </p>
// //           <button
// //             onClick={() => { setOrderSuccess(false); navigate("/menu"); }}
// //             className="px-7 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
// //             style={{ backgroundColor: "#41431B" }}
// //           >
// //             Pesan Lagi
// //           </button>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   if (cart.length === 0) {
// //     return (
// //       <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#F8F3E1" }}>
// //         <div className="text-center p-8">
// //           <div className="text-6xl mb-5">🛒</div>
// //           <h2
// //             className="mb-3"
// //             style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
// //           >
// //             Keranjang Kosong
// //           </h2>
// //           <p className="mb-7 text-sm font-medium" style={{ color: "#6B6B4D" }}>
// //             Yuk, pilih produk kelapa hijau favoritmu!
// //           </p>
// //           <button
// //             onClick={() => navigate("/menu")}
// //             className="px-7 py-3 rounded-full text-white font-semibold flex items-center gap-2 mx-auto transition-opacity hover:opacity-90"
// //             style={{ backgroundColor: "#41431B" }}
// //           >
// //             <ShoppingBag size={18} />
// //             Lihat Menu
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ backgroundColor: "#F8F3E1" }}>
// //       {/* Header */}
// //       <div style={{ backgroundColor: "#41431B" }} className="py-8">
// //         <div className="max-w-6xl mx-auto px-4 flex items-center gap-4">
// //           <button
// //             type="button"
// //             aria-label="Kembali ke menu"
// //             onClick={() => navigate("/menu")}
// //             className="p-2 rounded-xl transition-colors"
// //             style={{ color: "#AEB784" }}
// //           >
// //             <ArrowLeft size={20} />
// //           </button>          <div>
// //             <h1
// //               style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "1.6rem", fontWeight: 700 }}
// //             >
// //               Keranjang Belanja 🛒
// //             </h1>
// //             <p className="text-sm font-medium" style={{ color: "#AEB784" }}>{totalItems} item dipilih</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-6xl mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Cart Items + Form */}
// //           <div className="lg:col-span-2 space-y-5">
// //             {/* Delivery Mode Toggle */}
// //             <div
// //               className="rounded-2xl p-4 shadow-sm border"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#AEB784" }}>
// //                 Tipe Pesanan
// //               </div>
// //               <div
// //                 className="flex rounded-xl p-1"
// //                 style={{ backgroundColor: "#F8F3E1" }}
// //               >
// //                 {deliveryModes.map((mode) => (
// //                   <button
// //                     key={mode.id}
// //                     onClick={() => setDeliveryMode(mode.id)}
// //                     className="flex-1 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all"
// //                     style={
// //                       deliveryMode === mode.id
// //                         ? { backgroundColor: "#41431B", color: "#F8F3E1" }
// //                         : { backgroundColor: "transparent", color: "#8A8A6A" }
// //                     }
// //                   >
// //                     <mode.icon size={14} />
// //                     {mode.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Cart Items */}
// //             <AnimatePresence>
// //               {cart.map((item) => (
// //                 <motion.div
// //                   key={item.id}
// //                   layout
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   exit={{ opacity: 0, x: 20 }}
// //                   className="rounded-2xl p-4 flex gap-4 shadow-sm border"
// //                   style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //                 >
// //                   <img
// //                     src={item.image}
// //                     alt={item.name}
// //                     className="w-20 h-20 rounded-xl object-cover shrink-0"
// //                   />
// //                   <div className="flex-1 min-w-0">
// //                     <div className="flex items-start justify-between gap-2 mb-1">
// //                       <h3
// //                         className="text-sm truncate"
// //                         style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700 }}
// //                       >
// //                         {item.name}
// //                       </h3>
// //                       <button
// //                         onClick={() => removeFromCart(item.id)}
// //                         className="shrink-0 transition-colors"
// //                         style={{ color: "#D5CEAB" }}
// //                         onMouseOver={(e) => (e.currentTarget.style.color = "#F97316")}
// //                         onMouseOut={(e) => (e.currentTarget.style.color = "#D5CEAB")}
// //                         title="Hapus item"
// //                         aria-label="Hapus item dari keranjang"
// //                       >
// //                         <Trash2 size={15} />
// //                       </button>
// //                     </div>
// //                     {item.volume && (
// //                       <span className="text-xs font-medium" style={{ color: "#8A8A6A" }}>{item.volume}</span>
// //                     )}
// //                     <div className="flex items-center justify-between mt-3">
// //                       <div className="text-sm font-semibold" style={{ color: "#41431B" }}>
// //                         {formatPrice(item.price * item.quantity)}
// //                       </div>
// //                       <div
// //                         className="flex items-center gap-2 rounded-xl p-1"
// //                         style={{ backgroundColor: "#F8F3E1" }}
// //                       >
// //                         <button
// //                           type="button"
// //                           aria-label="Kurangi jumlah"
// //                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                           className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
// //                           style={{ color: "#41431B" }}
// //                         >
// //                           <Minus size={13} />
// //                         </button>                        <span className="text-sm font-semibold w-6 text-center" style={{ color: "#41431B" }}>
// //                           {item.quantity}
// //                         </span>
// //                         <button
// //                           type="button"
// //                           aria-label="Tambah jumlah"
// //                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                           className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
// //                           style={{ backgroundColor: "#41431B", color: "#F8F3E1" }}
// //                         >
// //                           <Plus size={13} />
// //                         </button>                      </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>

// //             <button
// //               onClick={clearCart}
// //               className="text-sm font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-70"
// //               style={{ color: "#F97316" }}
// //             >
// //               <Trash2 size={14} />
// //               Hapus semua item
// //             </button>

// //             {/* Order Form */}
// //             <div
// //               className="rounded-2xl p-6 shadow-sm border"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <h3
// //                 className="mb-5"
// //                 style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.1rem", fontWeight: 700 }}
// //               >
// //                 Detail Pengiriman
// //               </h3>
// //               <div className="space-y-4">
// //                 {[
// //                   { label: "Nama Penerima *", value: customerName, setter: setCustomerName, placeholder: "Masukkan nama lengkap...", type: "text" },
// //                   { label: "Nomor HP / WhatsApp *", value: customerPhone, setter: setCustomerPhone, placeholder: "08xx-xxxx-xxxx", type: "tel" },
// //                 ].map((field) => (
// //                   <div key={field.label}>
// //                     <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                       {field.label}
// //                     </label>
// //                     <input
// //                       type={field.type}
// //                       value={field.value}
// //                       onChange={(e) => field.setter(e.target.value)}
// //                       placeholder={field.placeholder}
// //                       className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border"
// //                       style={{
// //                         backgroundColor: "#F8F3E1",
// //                         borderColor: "#D5CEAB",
// //                         color: "#41431B",
// //                       }}
// //                     />
// //                   </div>
// //                 ))}

// //                 <div>
// //                   <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                     Alamat Pengiriman *
// //                   </label>
// //                   <textarea
// //                     value={customerAddress}
// //                     onChange={(e) => setCustomerAddress(e.target.value)}
// //                     placeholder="Masukkan alamat lengkap..."
// //                     rows={3}
// //                     className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border resize-none"
// //                     style={{
// //                       backgroundColor: "#F8F3E1",
// //                       borderColor: "#D5CEAB",
// //                       color: "#41431B",
// //                     }}
// //                   />
// //                 </div>

// //                 {/* Payment Method */}
// //                 <div>
// //                   <label className="text-xs font-semibold mb-2 block" style={{ color: "#6B6B4D" }}>
// //                     Metode Pembayaran
// //                   </label>
// //                   <div className="flex flex-wrap gap-2">
// //                     {paymentMethods.map((method) => (
// //                       <button
// //                         key={method}
// //                         onClick={() => setPaymentMethod(method)}
// //                         className="px-4 py-2 rounded-xl text-xs font-semibold border transition-all"
// //                         style={
// //                           paymentMethod === method
// //                             ? { backgroundColor: "#41431B", color: "#F8F3E1", borderColor: "#41431B" }
// //                             : { backgroundColor: "#F8F3E1", color: "#41431B", borderColor: "#D5CEAB" }
// //                         }
// //                       >
// //                         {method}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="text-xs font-semibold mb-1.5 block" style={{ color: "#6B6B4D" }}>
// //                     Catatan (opsional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={notes}
// //                     onChange={(e) => setNotes(e.target.value)}
// //                     placeholder="Misal: jangan terlalu manis..."
// //                     className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none border"
// //                     style={{
// //                       backgroundColor: "#F8F3E1",
// //                       borderColor: "#D5CEAB",
// //                       color: "#41431B",
// //                     }}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Order Summary Sidebar */}
// //           <div className="lg:col-span-1">
// //             <div
// //               className="rounded-2xl p-5 shadow-sm border sticky top-24"
// //               style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
// //             >
// //               <h3
// //                 className="mb-5"
// //                 style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.1rem", fontWeight: 700 }}
// //               >
// //                 Ringkasan Pesanan
// //               </h3>

// //               {/* Items list */}
// //               <div className="space-y-2 mb-4">
// //                 {cart.map((item) => (
// //                   <div key={item.id} className="flex justify-between text-sm">
// //                     <span className="truncate flex-1 mr-2 font-medium" style={{ color: "#6B6B4D" }}>
// //                       {item.name} ×{item.quantity}
// //                     </span>
// //                     <span className="shrink-0 font-semibold" style={{ color: "#41431B" }}>
// //                       {formatPrice(item.price * item.quantity)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Total breakdown */}
// //               <div
// //                 className="rounded-2xl p-4 mb-5"
// //                 style={{ backgroundColor: "#41431B" }}
// //               >
// //                 <div className="flex justify-between text-sm mb-2">
// //                   <span style={{ color: "rgba(255,255,255,0.65)" }}>Subtotal</span>
// //                   <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{formatPrice(totalPrice)}</span>
// //                 </div>
// //                 {deliveryMode === "delivery" && (
// //                   <div className="flex justify-between text-sm mb-3">
// //                     <span style={{ color: "rgba(255,255,255,0.65)" }}>Ongkir (estimasi)</span>
// //                     <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{formatPrice(deliveryFee)}</span>
// //                   </div>
// //                 )}
// //                 <div
// //                   className="flex justify-between pt-3 border-t"
// //                   style={{ borderColor: "rgba(255,255,255,0.15)" }}
// //                 >
// //                   <span style={{ color: "#F8F3E1", fontWeight: 700 }}>Total Bayar</span>
// //                   <span style={{ color: "#AEB784", fontWeight: 700, fontSize: "1.1rem", fontFamily: "'Playfair Display', serif" }}>
// //                     {formatPrice(grandTotal)}
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Platform order */}
// //               <div className="mb-5">
// //                 <p className="text-xs font-semibold mb-2" style={{ color: "#AEB784" }}>
// //                   Atau pesan langsung via:
// //                 </p>
// //                 <div className="space-y-2">
// //                   {deliveryApps.map((app) => (
// //                     <a
// //                       key={app.name}
// //                       href={app.url}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90"
// //                       style={{ backgroundColor: app.bgColor }}
// //                     >
// //                       <div
// //                         className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
// //                         style={{ backgroundColor: app.bgColor }}
// //                       >
// //                         {/* Cek apakah app.emoji adalah link (mulai dengan http) atau hanya teks */}
// //                         {app.emoji.startsWith("http") ? (
// //                           <img
// //                             src={app.emoji}
// //                             alt="App Icon"
// //                             className="w-full h-auto object-cover"
// //                           />
// //                         ) : (
// //                           <span>{app.emoji}</span>
// //                         )}
// //                       </div>                      {app.desc} <ExternalLink size={12} />
// //                     </a>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* WhatsApp Button */}
// //               <button
// //                 onClick={handleWhatsAppOrder}
// //                 disabled={!customerName || !customerPhone || !customerAddress}
// //                 className="w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white"
// //                 style={{ backgroundColor: "#25D366" }}
// //               >
// //                 <WhatsAppIcon size={18} fill="white" />
// //                 Pesan via WhatsApp
// //                 <span
// //                   className="ml-1 text-xs px-2 py-0.5 rounded-full font-semibold"
// //                   style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
// //                 >
// //                   {formatPrice(grandTotal)}
// //                 </span>
// //               </button>
// //               {(!customerName || !customerPhone || !customerAddress) && (
// //                 <p className="text-xs text-center mt-2 font-medium" style={{ color: "#8A8A6A" }}>
// //                   Lengkapi detail pengiriman terlebih dahulu
// //                 </p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
