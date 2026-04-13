import { motion } from "motion/react";
import {
  ExternalLink,
  Clock,
  Star,
  MapPin,
  Phone,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import { useState } from "react";

const deliveryApps = [
  {
    id: "gofood",
    name: "GoFood",
    tagline: "Pesan Cepat via GoFood",
    emoji: "https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75",
    bgColor: "#1A5231",
    textAccent: "#2E7D52",
    pillBg: "rgba(26,82,49,0.1)",
    url: "https://gofood.link/a/xUWXgHJ",
    username: "kelapahijaubandung",
    deliveryTime: "15–30 menit",
    minOrder: "Rp 20.000",
    rating: "4.9",
    reviewCount: "2.1rb",
    features: ["Promo harian hingga 50%", "GoPayLater tersedia", "Lacak pesanan real-time"],
    promoText: "Diskon hingga 50% setiap hari untuk pengguna GoFood!",
    steps: [
      "Buka aplikasi GoFood",
      "Cari 'Kelapa Hijau Bandung'",
      "Pilih menu favoritmu",
      "Checkout & konfirmasi pesanan",
    ],
  },
  {
    id: "grabfood",
    name: "GrabFood",
    tagline: "Pesan Cepat via GrabFood",
    emoji: "https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg",
    bgColor: "#52B788",
    textAccent: "#3A9B6F",
    pillBg: "rgba(82,183,136,0.1)",
    url: " https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN",
    username: "kelapahijaubandung",
    deliveryTime: "20–35 menit",
    minOrder: "Rp 15.000",
    rating: "4.8",
    reviewCount: "1.8rb",
    features: ["GrabPay cashback 30%", "Pengiriman gratis promo", "Lacak driver real-time"],
    promoText: "Cashback hingga 30% untuk pelanggan baru GrabFood!",
    steps: [
      "Buka aplikasi GrabFood",
      "Cari 'Kelapa Hijau Bandung'",
      "Pilih menu favoritmu",
      "Checkout & bayar via GrabPay",
    ],
  },
  {
    id: "shopeefood",
    name: "ShopeeFood",
    tagline: "Pesan Cepat via ShopeeFood",
    emoji: "https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg",
    bgColor: "#F97316",
    textAccent: "#EA580C",
    pillBg: "rgba(249,115,22,0.1)",
    url: "https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link",
    username: "kelapahijaubandung01",
    deliveryTime: "20–40 menit",
    minOrder: "Rp 20.000",
    rating: "4.7",
    reviewCount: "1.3rb",
    features: ["ShopeePay cashback", "Voucher flash sale", "Gratis ongkir setiap hari"],
    promoText: "Gratis ongkir setiap hari dengan ShopeePay & voucher menarik!",
    steps: [
      "Buka aplikasi ShopeeFood",
      "Cari 'kelapahijaubandung01'",
      "Pilih menu favoritmu",
      "Checkout & bayar via ShopeePay",
    ],
  },
];

const whatsappNumber = "628123456789";

export function OrderPage() {
  const [activeApp, setActiveApp] = useState("gofood");
  const selected = deliveryApps.find((a) => a.id === activeApp)!;

  return (
    <div style={{ backgroundColor: "#F8F3E1" }}>
      {/* Hero */}
      <div style={{ backgroundColor: "#41431B" }} className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#AEB784" }}>
              Pesan Sekarang
            </p>
            <h1
              className="mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
            >
              Pilih Cara Pesanmu 🥥
            </h1>
            <p className="text-base font-medium max-w-md mx-auto" style={{ color: "#AEB784" }}>
              Tersedia di 3 platform pengiriman + WhatsApp langsung
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* App Selector Tabs */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {deliveryApps.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full border font-semibold transition-all text-sm shadow-sm"
              style={
                activeApp === app.id
                  ? { backgroundColor: app.bgColor, color: "white", borderColor: app.bgColor }
                  : { backgroundColor: "white", borderColor: "#D5CEAB", color: "#41431B" }
              }
            >
              <span><div
  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
  style={{ backgroundColor: app.bgColor }}
>
  {/* Cek apakah app.emoji adalah link (mulai dengan http) atau hanya teks */}
  {app.emoji.startsWith("http") ? (
    <img 
      src={app.emoji} 
      alt="App Icon" 
      className="w-full h-auto object-cover" 
    />
  ) : (
    <span>{app.emoji}</span>
  )}
</div></span>
              <span>{app.name}</span>
            </button>
          ))}
        </div>

        {/* Selected App Detail */}
        <AnimatedCard key={selected.id} app={selected} />

        {/* All Apps Summary Grid */}
        <div className="mt-12">
          <h2
            className="text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.6rem", fontWeight: 700 }}
          >
            Semua Platform Pengiriman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deliveryApps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm border cursor-pointer hover:shadow-md transition-all"
                style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
                onClick={() => {
                  setActiveApp(app.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="h-1.5" style={{ backgroundColor: app.bgColor }} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shadow-sm"
                      style={{ backgroundColor: app.bgColor }}
                    >
<div
  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
  style={{ backgroundColor: app.bgColor }}
>
  {/* Cek apakah app.emoji adalah link (mulai dengan http) atau hanya teks */}
  {app.emoji.startsWith("http") ? (
    <img 
      src={app.emoji} 
      alt="App Icon" 
      className="w-full h-auto object-cover" 
    />
  ) : (
    <span>{app.emoji}</span>
  )}
</div>                    </div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700, fontSize: "1rem" }}>
                        {app.name}
                      </div>
                      <div className="text-xs font-medium" style={{ color: "#8A8A6A" }}>@{app.username}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="rounded-xl p-2.5" style={{ backgroundColor: "#F8F3E1" }}>
                      <div className="text-xs font-medium mb-0.5" style={{ color: "#8A8A6A" }}>Waktu</div>
                      <div className="text-xs font-semibold flex items-center gap-1" style={{ color: "#41431B" }}>
                        <Clock size={10} /> {app.deliveryTime}
                      </div>
                    </div>
                    <div className="rounded-xl p-2.5" style={{ backgroundColor: "#F8F3E1" }}>
                      <div className="text-xs font-medium mb-0.5" style={{ color: "#8A8A6A" }}>Rating</div>
                      <div className="text-xs font-semibold" style={{ color: "#F59E0B" }}>⭐ {app.rating}</div>
                    </div>
                  </div>

                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: app.bgColor }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Pesan di {app.name} <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp Order */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl p-7 md:p-10 border flex flex-col md:flex-row items-center gap-7"
          style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
        >
            <div className="shrink-0">
              <WhatsAppIcon size={49} fill="#25D366" item-center />
            </div>
          <div className="flex-1 text-center md:text-left">
            <h3
              className="mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.3rem", fontWeight: 700 }}
            >
              Pesan via WhatsApp
            </h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B4D" }}>
              Ingin pesan langsung? Chat kami di WhatsApp untuk pemesanan custom, grosir, atau pengiriman khusus ke luar Bandung.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-sm font-semibold" style={{ color: "#41431B" }}>
              <Phone size={14} />
              <span>081321245161</span>
            </div>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan...`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full font-semibold flex items-center gap-2 text-white shrink-0 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon size={18} fill="white" />
            Chat WhatsApp
          </a>
        </motion.div>

        {/* Store Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-2xl p-6 border"
          style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
        >
          <h3
            className="mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Informasi Toko
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: MapPin, label: "Lokasi", lines: ["Jl. Turangga No.49", "Bandung 40263, Jawa Barat"] },
              { icon: Clock, label: "Jam Buka", lines: ["07.00 – 20.00 WIB", "Senin – Minggu (Setiap Hari)"] },
              { icon: Star, label: "Area Pengiriman", lines: ["Seluruh Bandung", "& Sekitarnya"] },
            ].map((info, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F8F3E1" }}
                >
                  <info.icon size={16} style={{ color: "#41431B" }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#AEB784" }}>{info.label}</div>
                  {info.lines.map((line, j) => (
                    <div key={j} className={`text-sm ${j === 0 ? "font-semibold" : "font-medium"}`} style={{ color: j === 0 ? "#41431B" : "#8A8A6A" }}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedCard({ app }: { app: typeof deliveryApps[0] }) {
  return (
    <motion.div
      key={app.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{ backgroundColor: app.bgColor }}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
<div
  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm overflow-hidden"
  style={{ backgroundColor: app.bgColor }}
>
  {/* Cek apakah app.emoji adalah link (mulai dengan http) atau hanya teks */}
  {app.emoji.startsWith("http") ? (
    <img 
      src={app.emoji} 
      alt="App Icon" 
      className="w-full h-auto object-cover" 
    />
  ) : (
    <span>{app.emoji}</span>
  )}
</div>              </div>
              <div>
                <h2
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700 }}
                >
                  {app.name}
                </h2>
                <div className="text-white/70 text-sm font-medium">@{app.username}</div>
              </div>
            </div>

            {/* Promo Box */}
            <div
              className="rounded-2xl p-4 mb-5"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="text-white/70 text-xs font-semibold mb-1 uppercase tracking-wider">🎁 Promo Spesial</div>
              <div className="text-white font-semibold">{app.promoText}</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: "Estimasi Waktu", value: app.deliveryTime, icon: Clock },
                { label: "Min. Pesanan", value: app.minOrder, icon: null },
                { label: "Rating Toko", value: `⭐ ${app.rating} (${app.reviewCount})`, icon: null },
                { label: "Min. Order", value: app.features[0], icon: null },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                  <div className="text-white/60 text-xs font-medium mb-1">{stat.label}</div>
                  <div className="text-white text-sm font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {app.features.map((f, i) => (
                <span
                  key={i}
                  className="text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                >
                  <CheckCircle size={11} /> {f}
                </span>
              ))}
            </div>

            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 w-fit transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: app.bgColor }}
            >
              Pesan di {app.name} <ExternalLink size={16} />
            </a>
          </div>

          {/* Right - Steps */}
          <div className="md:w-64 w-full shrink-0">
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <h4
                className="text-white mb-4 font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Cara Memesan
              </h4>
              <div className="space-y-3">
                {app.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold"
                      style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "white" }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-white/85 text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
                  <ChevronRight size={13} />
                  Pesanan diproses dalam 5 menit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
