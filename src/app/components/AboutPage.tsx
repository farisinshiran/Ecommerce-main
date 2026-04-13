import { motion } from "motion/react";
import { MapPin, Phone, Clock, Leaf, Award, Users, Star, Heart, Instagram } from "lucide-react";

const storeLogoImg = "/bg.png";
const plantationImg = "https://images.unsplash.com/photo-1719406287028-6e0028e5d12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

const milestones = [
  { year: "2018", title: "Berdiri", desc: "Kelapa Hijau Bandung mulai beroperasi dengan satu gerobak kelapa di Jl. Turangga, Bandung." },
  { year: "2019", title: "Bergabung GoFood", desc: "Mulai berjualan online melalui platform GoFood dan langsung mendapat respons positif dari pelanggan." },
  { year: "2020", title: "Ekspansi Digital", desc: "Bergabung dengan GrabFood dan ShopeeFood. Penjualan meningkat 300% di masa pandemi." },
  { year: "2021", title: "10.000 Pelanggan", desc: "Berhasil meraih 10.000 pelanggan setia dan membuka dapur produksi yang lebih besar." },
  { year: "2022", title: "Produk Baru", desc: "Meluncurkan varian baru: Kelapa Es Krim, Kelapa + Nata de Coco, dan paket grosir untuk bisnis." },
  { year: "2024", title: "34.200 Pengikut", desc: "Telah melayani ribuan pelanggan dengan lebih dari 366 kiriman dan rating bintang 4.9." },
];

const values = [
  { icon: Leaf, title: "Kesegaran", desc: "Produk kami selalu fresh, dipetik langsung pada hari pengiriman dari kebun pilihan." },
  { icon: Award, title: "Kualitas", desc: "Hanya kelapa hijau terbaik yang dipilih dari kebun kami di Jawa Barat." },
  { icon: Heart, title: "Kepedulian", desc: "Mendukung petani lokal Jawa Barat dengan harga yang adil dan berkelanjutan." },
  { icon: Users, title: "Komunitas", desc: "Membangun komunitas pencinta minuman sehat alami di seluruh Bandung." },
];

const stats = [
  { value: "366+", label: "Total Kiriman" },
  { value: "34,2rb", label: "Pengikut" },
  { value: "4.9★", label: "Rating Rata-rata" },
  { value: "6+", label: "Tahun Berdiri" },
];

export function AboutPage() {
  return (
    <div style={{ backgroundColor: "#F8F3E1" }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${plantationImg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(65,67,27,0.9) 0%, rgba(65,67,27,0.6) 60%, rgba(248,243,225,0.2) 100%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div
              className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4"
              style={{ borderColor: "#AEB784" }}
            >
              <img src={storeLogoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#AEB784" }}>
              Tentang Kami
            </p>
            <h1
              className="mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Kelapa Hijau Bandung
            </h1>
            <p className="text-base font-medium max-w-2xl mx-auto" style={{ color: "#AEB784" }}>
              Berdedikasi menghadirkan kelapa hijau segar berkualitas tinggi langsung dari kebun terbaik ke meja Anda sejak 2018
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#F8F3E1" />
          </svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center shadow-sm border"
              style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
            >
              <div
                className="mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "2rem", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold" style={{ color: "#8A8A6A" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
          >
            Kisah Kami
          </h2>
          <div
            className="rounded-3xl p-7 md:p-10 shadow-sm border"
            style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
          >
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "#41431B" }}>
                <span className="font-semibold" style={{ color: "#41431B" }}>Kelapa Hijau Bandung</span>{" "}
                <span style={{ color: "#6B6B4D" }}>
                  bermula dari kecintaan Sidik Mahmudin terhadap minuman alami. Berawal dari gerobak sederhana di Jalan Turangga, Bandung, mimpi untuk menghadirkan kelapa hijau segar terbaik kini telah menjadi kenyataan.
                </span>
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#6B6B4D" }}>
                Kami percaya bahwa minuman terbaik adalah minuman yang paling dekat dengan alam. Itulah mengapa setiap kelapa yang kami jual dipetik segar dari kebun-kebun pilihan di Jawa Barat, dan langsung diantarkan ke pelanggan tanpa bahan pengawet apapun.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#6B6B4D" }}>
                Dengan bergabungnya kami di platform GoFood, GrabFood, dan ShopeeFood, kini siapa saja di Bandung dan sekitarnya bisa menikmati kesegaran kelapa hijau murni langsung di rumah.{" "}
                <span className="font-semibold" style={{ color: "#41431B" }}>Kepuasan Anda adalah misi kami.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
          >
            Nilai Kami 💚
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 flex items-start gap-4 shadow-sm border"
                style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F8F3E1" }}
                >
                  <v.icon size={22} style={{ color: "#41431B" }} />
                </div>
                <div>
                  <h3
                    className="mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700 }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B6B4D" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="mb-7"
            style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontSize: "1.8rem", fontWeight: 700 }}
          >
            Perjalanan Kami 🚀
          </h2>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#D5CEAB" }}
            />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-2 text-xs font-semibold"
                    style={{ backgroundColor: "#41431B", borderColor: "#AEB784", color: "#AEB784" }}
                  >
                    {m.year.slice(-2)}
                  </div>
                  <div
                    className="rounded-2xl p-4 flex-1 shadow-sm border"
                    style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold" style={{ color: "#AEB784" }}>{m.year}</span>
                      <span
                        className="font-semibold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#41431B" }}
                      >
                        {m.title}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B6B4D" }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-7 md:p-10 shadow-sm border"
          style={{ backgroundColor: "#41431B", borderColor: "#41431B" }}
        >
          <h2
            className="mb-7"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "1.5rem", fontWeight: 700 }}
          >
            Hubungi Kami 📞
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Lokasi", lines: ["Jl. Turangga No.49, Bandung 40263", "Bandung Kulon, Jawa Barat"] },
                { icon: Phone, label: "Telepon / WhatsApp", lines: ["081321245161"] },
                { icon: Clock, label: "Jam Operasional", lines: ["08.00 – 22.00 WIB", "Senin – Minggu (Setiap Hari)"] },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(174,183,132,0.2)" }}
                  >
                    <item.icon size={16} style={{ color: "#AEB784" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-1" style={{ color: "#AEB784" }}>{item.label}</div>
                    {item.lines.map((line, j) => (
                      <div key={j} className={`text-sm ${j === 0 ? "font-semibold" : "font-medium"}`} style={{ color: j === 0 ? "#F8F3E1" : "#AEB784" }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: "rgba(174,183,132,0.15)", border: "1px solid rgba(174,183,132,0.2)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#AEB784" }}>
                  Chat langsung
                </div>
                <a
                  href="https://wa.me/6281321245161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  💬 Chat WhatsApp Sekarang
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(174,183,132,0.2)" }}
                >
                  <Instagram size={16} style={{ color: "#AEB784" }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#AEB784" }}>Instagram</div>
                  <a href="https://www.instagram.com/kelapahijaubandung01/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#F8F3E1" }}>
                    @kelapahijaubandung01
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(174,183,132,0.2)" }}
                >
                  <Star size={16} style={{ color: "#AEB784" }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-2" style={{ color: "#AEB784" }}>Platform Pengiriman</div>
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href="https://gofood.link/a/xUWXgHJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "#1A5231" }}
                    >
                      GoFood
                    </a>
                    <a
                      href="https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "#52B788" }}
                    >
                      GrabFood
                    </a>
                    <a
                      href="https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "#F97316" }}
                    >
                      ShopeeFood
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
