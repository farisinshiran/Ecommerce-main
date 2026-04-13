import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Star,
  MapPin,
  Users,
  Package,
  ChevronRight,
  Phone,
  Award,
  Truck,
  ExternalLink,
  Palmtree,
  Instagram,
} from "lucide-react";
import { WhatsAppIcon } from "./ui/whatsapp-icon";

import storeLogoImg from "@/assets/bg.png";
import heroImg from "@/assets/bg.png";

const highlight1 = [
  { label: "Kiriman", value: "366+", icon: Package },
  { label: "Pengikut", value: "34,2rb", icon: Users },
  { label: "Rating", value: "4.9★", icon: Star },
];

const highlight2 = [
  { label: "Follower", value: "100,3rb", icon: Users, fontColor: "#AEB784" },
  { label: "Rating Toko", value: "4.9★", icon: Star, fontColor: "#AEB784" },
];

const deliveryApps = [
  {
    name: "GoFood",
    tagline: "Pesan via GoFood",
    desc: "Diskon hingga 50% setiap hari. GoPayLater tersedia.",
    url: "https://gofood.link/a/xUWXgHJ",
    username: "@kelapahijaubandung",
    emoji: "https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75",
    bgColor: "#1A5231",
    accentColor: "#2E7D52",
    time: "15–30 menit",
    rating: "4.9",
  },
  {
    name: "GrabFood",
    tagline: "Pesan via GrabFood",
    desc: "Cashback hingga 30% untuk pelanggan baru. GrabPay.",
    url: " https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN",
    username: "@kelapahijaubandung",
    emoji: "https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg",
    bgColor: "#52B788",
    accentColor: "#3A9B6F",
    time: "20–35 menit",
    rating: "4.8",
  },
  {
    name: "ShopeeFood",
    tagline: "Pesan via ShopeeFood",
    desc: "Gratis ongkir setiap hari dengan ShopeePay & voucher.",
    url: "https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link",
    username: "@kelapahijaubandung01",
    emoji: "https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg",
    bgColor: "#F97316",
    accentColor: "#EA580C",
    time: "20–40 menit",
    rating: "4.7",
  },
];

const features = [
  { icon: Palmtree, title: "100% Segar", desc: "Dipetik langsung dari kebun kelapa hijau pilihan" },
  { icon: Award, title: "Kualitas Premium", desc: "Dipilih dari kebun terbaik di Jawa Barat" },
  { icon: Truck, title: "Pengiriman Cepat", desc: "Antar cepat melalui GoFood, GrabFood & ShopeeFood" },
  { icon: Star, title: "Terpercaya", desc: "Ribuan pelanggan puas di seluruh Bandung" },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
 <div style={{ backgroundColor: "#F8F3E1" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',   // Memastikan gambar memenuhi area tanpa gepeng
            backgroundPosition: 'center' // Gambar tetap di tengah saat layar mengecil
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(65,67,27,0.85) 0%, rgba(65,67,27,0.5) 60%, rgba(248,243,225,0.3) 100%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            {/* <div className="flex items-center gap-2 mb-5">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5"
                style={{ backgroundColor: "rgba(174,183,132,0.2)", borderColor: "#AEB784", color: "#E3DBBB" }}
              >
                🌿 Minuman Segar Terbaik Bandung
              </span>
            </div> */}
            <h1
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#F8F3E1",
                lineHeight: 1.2,
              }}
            >
              Kelapa Hijau{" "}
              <span style={{ color: "#bdff8a" }}>Asli</span>
              <br />
              Langsung dari Kebun
            </h1>
            <p className="mb-8 leading-relaxed" style={{ color: "#E3DBBB", fontSize: "1.05rem", maxWidth: "480px" }}>
              Nikmati kesegaran air kelapa hijau asli di Kota Bandung. Tersedia dalam berbagai ukuran, pesan sekarang melalui aplikasi favoritmu!
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/pesan")}
                className="flex items-center gap-2 px-6 py-3 rounded-full transition-all active:shadow-sm active:translate-y-0.5"
                style={{ 
                  backgroundColor: "#FFFF", 
                  color: "darkgreen", 
                  fontWeight: 700,
                  boxShadow: "0 8px 16px rgba(65,67,27,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  border: "1px solid rgba(65,67,27,0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(65,67,27,0.3), 0 8px 16px rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(65,67,27,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#F8F3E1" />
          </svg>
        </div>
      </section>

      {/* IG Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg border"
          style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
        >
          {/* Profile Top */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-24 h-24 rounded-full overflow-hidden p-0.5"
                  style={{ background: "linear-gradient(135deg, #AEB784, #41431B)" }}
                >
                  <img
                    src={storeLogoImg}
                    alt="Kelapa Hijau Bandung"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 rounded-full p-1"
                  style={{ backgroundColor: "#AEB784" }}
                >
                  <Palmtree size={11} style={{ color: "#41431B" }} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h2
                    className="tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.3rem", fontWeight: 700 }}
                  >
                    @kelapahijaubandung01
                  </h2>
                  <Award size={16} style={{ color: "#AEB784" }} />
                </div>
                <p className="text-sm mb-4 font-semibold" style={{ color: "#AEB784" }}>
                  Sidik Mahmudin
                </p>

                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-8 mb-4">
                  {highlight1.map((h) => (
                    <div key={h.label} className="text-center">
                      <div
                        className="leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#AEB784", fontSize: "1.2rem" }}
                      >
                        {h.value}
                      </div>
                      <div className="text-xs font-semibold" style={{ color: "#8A8A6A" }}>{h.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-1 text-sm">
                  <p className="font-semibold" style={{ color: "#41431B" }}>                    Makanan & Minuman | Kelapa Segar Asli Bukan Pabrikan</p>
                  <p style={{ color: "#8A8A6A" }}>
                    <span className="font-semibold" style={{ color: "#1A5231" }}>GoFood</span>
                    {" · "}
                    <span className="font-semibold" style={{ color: "#3A9B6F" }}>GrabFood</span>
                    {" · "}
                    <span className="font-semibold" style={{ color: "#F97316" }}>ShopeeFood</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-1" style={{ color: "#8A8A6A" }}>
                    <MapPin size={12} />
                    Jl. Turangga No.49, Bandung 40263
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 w-full md:flex-col md:w-auto md:gap-2.5">
                <button

                  onClick={() => window.open("https://www.instagram.com/kelapahijaubandung01/", "_blank")}  
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                style={{ 
                  backgroundColor: "#E1405F", 
                  color: "white", 
                  fontWeight: 700,
                  boxShadow: "0 8px 16px rgba(225,64,95,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  border: "1px solid rgba(225,64,95,0.2)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(225,64,95,0.3), 0 8px 16px rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(225,64,95,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";}}
                >
                 <Instagram size={16} /> <span className="hidden sm:inline">Instagram</span>
                </button>

                {/* <button
                  onClick={() => window.open("https://www.tiktok.com/@kelapahijaubandung01", "_blank")}  
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#000000", color: "white" }}
                  title="Follow di TikTok"
                >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.05-.05Z"/>
                 </svg>
                 <span className="hidden sm:inline">TikTok</span>
                </button>

                <button
                  onClick={() => window.open("https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan...", "_blank")}    
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                  title="Chat di WhatsApp"
                >
                  <WhatsAppIcon size={16} fill="white" /> <span className="hidden sm:inline">WhatsApp</span>
                </button>

                <a
                  href="https://www.google.com/maps/search/Jl.+Turangga+No.49+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#FF5722", color: "white" }}
                  title="Buka di Google Maps"
                >
                  <MapPin size={16} /> <span className="hidden sm:inline">Alamat</span>
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* TIKTOK Section */}
      <section className="max-w-7xl mx-auto px-4 py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg border"
          style={{ backgroundColor: "black", borderColor: "#E3DBBB" }}
        >
          {/* Profile Top */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-24 h-24 rounded-full overflow-hidden p-0.5"
                  style={{ background: "linear-gradient(135deg, #AEB784, #41431B)" }}
                >
                  <img
                    src={storeLogoImg}
                    alt="Kelapa Hijau Bandung"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 rounded-full p-1"
                  style={{ backgroundColor: "#AEB784" }}
                >
                  <Palmtree size={11} style={{ color: "#41431B" }} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h2
                    className="tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Bold, serif", color: "#AEB784", fontSize: "1.3rem", fontWeight: 700 }}
                  >
                    @kelapahijaubandung01
                  </h2>
                  <Award size={16} style={{ color: "#AEB784" }} />
                </div>
                <p className="text-sm mb-4 font-semibold" style={{ color: "#AEB784" }}>
                  Sidik Mahmudin
                </p>

                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-8 mb-4">
                  {highlight2.map((h) => (
                    <div key={h.label} className="text-center">
                      <div
                        className="leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#41431B", fontSize: "1.2rem" }}
                      >
                        {h.value}
                      </div>
                      <div className="text-xs font-semibold" style={{ color: "#8A8A6A" }}>{h.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-1 text-sm">
                  <p className="font-semibold" style={{ color: "#41431B" }}>                    Makanan & Minuman | Kelapa Segar Asli Bukan Pabrikan</p>
                  <p style={{ color: "#8A8A6A" }}>
                    <span className="font-semibold" style={{ color: "#1A5231" }}>GoFood</span>
                    {" · "}
                    <span className="font-semibold" style={{ color: "#3A9B6F" }}>GrabFood</span>
                    {" · "}
                    <span className="font-semibold" style={{ color: "#F97316" }}>ShopeeFood</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-1" style={{ color: "#8A8A6A" }}>
                    <MapPin size={12} />
                    Jl. Turangga No.49, Bandung 40263
                  </p>
                </div>
              </div>

              {/* Tiktok Buttons */}
              <div className="flex flex-wrap gap-2 w-full md:flex-col md:w-auto md:gap-2.5">
                {/* <button
                  onClick={() => window.open("https://www.instagram.com/kelapahijaubandung01/", "_blank")}  
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#E1405F", color: "white" }}
                  title="Follow di Instagram"
                >
                 <Instagram size={16} /> <span className="hidden sm:inline">Instagram</span>
                </button> */}

                <button
                  onClick={() => window.open("https://www.tiktok.com/@kelapahijaubandung01", "_blank")}  
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ 
                    backgroundColor: "#000000", 
                    color: "white", 
                    fontWeight: 700,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    border: "1px solid lightgrey"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.15), inset 0 -2px 0 rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  title="Follow di TikTok"
                >
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.05-.05Z"/>
                 </svg>
                 <span className="hidden sm:inline">TikTok</span>
                </button>

                {/* <button
                  onClick={() => window.open("https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan...", "_blank")}    
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                  title="Chat di WhatsApp"
                >
                  <WhatsAppIcon size={16} fill="white" /> <span className="hidden sm:inline">WhatsApp</span>
                </button> */}

                {/* <a
                  href="https://www.google.com/maps/search/Jl.+Turangga+No.49+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] md:flex-none md:w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#FF5722", color: "white" }}
                  title="Buka di Google Maps"
                >
                  <MapPin size={16} /> <span className="hidden sm:inline">Alamat</span>
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      
     {/* Maps Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg border"
            style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* Location Info */}
              <div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.3rem", fontWeight: 700 }}
                >
                  Kunjungi Alamat Toko Kami
                </h3>
                <p className="flex items-center gap-2 text-sm" style={{ color: "#8A8A6A" }}>
                  <MapPin size={16} style={{ color: "#FF5722" }} />
                  <span className="font-semibold">Jl. Turangga No.49, Bandung 40263, Jawa Barat</span>
                </p>
              </div>

              {/* Embedded Map */}
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E3DBBB" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6897568364234!2d107.61123!3d-6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sJl.%20Turangga%20No.49%2C%20Bandung%2040263!5e0!3m2!1sen!2sid!4v123456789"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Maps Button */}
              <div className="flex gap-3">
                <a
                  href="https://www.google.com/maps/search/Jl.+Turangga+No.49+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#FF5722", color: "white" }}
                  title="Buka di Google Maps"
                >
                  <MapPin size={16} /> Buka di Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
       
        {/* Whatsapps Section */}
\      <section className="py-4 px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 shadow-sm border flex flex-col md:flex-row items-center gap-8"
            style={{ backgroundColor: "lightgreen", borderColor: "#E3DBBB" }}
          >
            <div className="shrink-0">
              <WhatsAppIcon size={48} fill="#25D366" item-center />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3
                className="mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.3rem", fontWeight: 700 }}
              >
                Pesan Langsung via WhatsApp
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B6B4D" }}>
                Ingin pesan custom, grosir, atau pengiriman khusus? Chat kami di WhatsApp — kami siap melayani 07.00–20.00 WIB setiap hari kecuali Hari Ahad (buka hanya dengan janji).
              </p>
            </div>
            <a
              href="https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full text-white font-semibold flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              Chat WhatsApp
            </a>
          </motion.div>
        </div>
      </section>            

      {/* Delivery Apps Section */}
      <section className="py-12 px-4" style={{ backgroundColor: "#E3DBBB" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2
                style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}
              >
                Tersedia Juga Di Aplikasi Favoritmu
              </h2>
              <p className="mt-2 text-sm font-medium" style={{ color: "#6B6B4D" }}>
                3 platform pengiriman makanan terpopuler di Indonesia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {deliveryApps.map((app, i) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
                  style={{ backgroundColor: "white" }}
                >
                  {/* Color Banner */}
                  <div
                    className="h-2"
                    style={{ backgroundColor: app.bgColor }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm"
                        style={{ backgroundColor: app.bgColor }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
                          style={{ backgroundColor: app.bgColor }}
                        >
                          {app.emoji.startsWith("http") ? (
                            <img
                              src={app.emoji}
                              alt="App Icon"
                              className="w-full h-auto object-cover"
                            />
                          ) : (
                            <span>{app.emoji}</span>
                          )}
                        </div>                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.1rem", fontWeight: 700 }}
                        >
                          {app.name}
                        </div>
                        <div className="text-xs font-semibold" style={{ color: "#8A8A6A" }}>{app.username}</div>
                      </div>
                    </div>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6B6B4D" }}>
                      {app.desc}
                    </p>

                    <div className="flex gap-3 mb-5">
                      <div className="flex-1 rounded-xl p-2.5" style={{ backgroundColor: "#F8F3E1" }}>
                        <div className="text-xs mb-0.5 font-medium" style={{ color: "#8A8A6A" }}>Estimasi</div>
                        <div className="text-xs font-semibold" style={{ color: "#41431B" }}>{app.time}</div>
                      </div>
                      <div className="flex-1 rounded-xl p-2.5" style={{ backgroundColor: "#F8F3E1" }}>
                        <div className="text-xs mb-0.5 font-medium" style={{ color: "#8A8A6A" }}>Rating</div>
                        <div className="text-xs font-semibold" style={{ color: "#F59E0B" }}>⭐ {app.rating}</div>
                      </div>
                    </div>

                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 text-white"
                      style={{ backgroundColor: app.bgColor }}
                    >
                      Pesan di {app.name} <ExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}

      {/* Features */}
      <section className="py-10 px-4 pb-16" style={{ backgroundColor: "#E3DBBB" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border"
                style={{ backgroundColor: "white", borderColor: "#D5CEAB" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#F8F3E1" }}
                >
                  <f.icon size={22} style={{ color: "#41431B" }} />
                </div>
                <h3
                  className="mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "0.95rem", fontWeight: 700 }}
                >
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8A8A6A" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
