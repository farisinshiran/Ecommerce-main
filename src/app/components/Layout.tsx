import { Outlet, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import {
  Home,
  UtensilsCrossed,
  ShoppingBag,
  Image,
  Info,
  ShoppingCart,
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  Leaf,
  Clock,
  Palmtree,
} from "lucide-react";
import { useStore, StoreProvider } from "./store-context";

// V2 Color palette:
// #F8F3E1 - ivory cream (bg)
// #E3DBBB - warm beige (secondary bg)
// #AEB784 - sage green (accent)
// #41431B - dark olive (text/headings)
// GoFood: #1A5231 (dark green)
// GrabFood: #52B788 (light green)
// ShopeeFood: #F97316 (orange)

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useStore();
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Beranda", icon: Home },
    { to: "/menu", label: "Menu", icon: UtensilsCrossed },
    { to: "/pesan", label: "Pesan Sekarang", icon: ShoppingBag },
    { to: "/galeri", label: "Galeri", icon: Image },
    { to: "/tentang", label: "Tentang Kami", icon: Info },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div style={{ backgroundColor: "#41431B" }} className="text-xs py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-5" style={{ color: "#AEB784" }}>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} />
            Jl. Turangga No.49, Bandung 40263
          </span>
          <a href="whatsapp://send?phone=6281321245161" className="flex items-center gap-1.5">
            <Phone size={11} />
            081321245161
          </a>
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            07.00 – 20.00 WIB
          </span>
        </div>
        <div className="flex items-center gap-2" style={{ color: "#AEB784" }}>
          <span>Tersedia di:</span>
          <a href="https://gofood.link/a/xUWXgHJ" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded text-white text-xs inline-block no-underline" style={{ backgroundColor: "#1A5231" }}>
  GoFood
</a>
<a href=" https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded text-white text-xs inline-block no-underline" style={{ backgroundColor: "#52B788" }}>
  GrabFood
</a>
<a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded text-white text-xs inline-block no-underline" style={{ backgroundColor: "#F97316" }}>
  ShopeeFood
</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="sticky top-0 z-50 shadow-sm border-b"
        style={{ backgroundColor: "#FEFDF8", borderColor: "#D5CEAB" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "#AEB784" }}
            >
              <Palmtree size={18} style={{ color: "#41431B" }} />
            </div>
            <div className="text-left">
              <div
                className="leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "#41431B" }}
              >
                Kelapa Hijau
              </div>
              <div className="leading-tight" style={{ fontSize: "0.65rem", color: "#AEB784", fontWeight: 600, letterSpacing: "0.05em" }}>
                BANDUNG
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm transition-all flex items-center gap-1.5 font-semibold ${
                    isActive
                      ? "text-white shadow-sm"
                      : "hover:opacity-80"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#41431B" : "transparent",
                  color: isActive ? "#F8F3E1" : "#41431B",
                })}
              >
                <item.icon size={14} />
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/keranjang")}
              className="relative p-2.5 rounded-full transition-colors shadow-sm"
              style={{ backgroundColor: "#41431B", color: "#F8F3E1" }}
            >
              <ShoppingCart size={18} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#F97316", fontSize: "0.65rem", fontWeight: 700 }}
                >
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#41431B" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t px-4 py-3" style={{ borderColor: "#D5CEAB", backgroundColor: "#FEFDF8" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-sm font-semibold transition-all ${
                    isActive ? "text-white" : ""
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#41431B" : "transparent",
                  color: isActive ? "#F8F3E1" : "#41431B",
                })}
              >
                <item.icon size={17} />
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t flex gap-2" style={{ borderColor: "#D5CEAB" }}>
              <span className="px-2 py-1 rounded text-white text-xs" style={{ backgroundColor: "#1A5231" }}>GoFood</span>
              <span className="px-2 py-1 rounded text-white text-xs" style={{ backgroundColor: "#52B788" }}>GrabFood</span>
              <span className="px-2 py-1 rounded text-white text-xs" style={{ backgroundColor: "#F97316" }}>ShopeeFood</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#41431B", color: "#E3DBBB" }}>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#AEB784" }}>
              <Leaf size={18} style={{ color: "#41431B" }} />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#F8F3E1" }}>
              Kelapa Hijau Bandung
            </span>
          </div>
          <p className="text-sm mb-5 leading-relaxed" style={{ color: "#AEB784" }}>
            Minuman kelapa hijau segar terbaik dari Bandung. Langsung dari kebun ke tangan Anda dengan kualitas premium.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/kelapahijaubandung01/"
              className="p-2.5 rounded-full transition-colors flex items-center justify-center"
              style={{ backgroundColor: "rgba(174,183,132,0.2)", color: "#AEB784" }}
            >
              <Instagram size={15} />
            </a>
            <a
              href={`https://wa.me/6281321245161`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-colors flex items-center justify-center"
              style={{ backgroundColor: "rgba(174,183,132,0.2)", color: "#AEB784" }}
            >
              <Phone size={15} />
            </a>
          </div>
        </div>

        {/* Order Links */}
        <div>
          <h4
            className="mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontWeight: 700 }}
          >
            Pesan Melalui
          </h4>
          <div className="space-y-3">
            <a href="https://gofood.link/a/xUWXgHJ" className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#52B788" }}></span>
              <span style={{ color: "#E3DBBB" }}>GoFood — kelapahijaubandung</span>
            </a>
            <a href=" https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN" className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#AEB784" }}></span>
              <span style={{ color: "#E3DBBB" }}>GrabFood — kelapahijaubandung</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#F97316" }}></span>
              <span style={{ color: "#E3DBBB" }}>ShopeeFood — kelapahijaubandung01</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontWeight: 700 }}
          >
            Kontak & Lokasi
          </h4>
          <div className="space-y-3 text-sm" style={{ color: "#AEB784" }}>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Jl. Turangga No.49, Bandung 40263, Jawa Barat
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="shrink-0" />
              081321245161
            </p>
            <p className="flex items-center gap-2">
              <Clock size={14} className="shrink-0" />
              07.00 – 20.00 WIB (Setiap Hari)
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-t py-4 text-center text-xs"
        style={{ borderColor: "rgba(174,183,132,0.3)", color: "rgba(174,183,132,0.6)" }}
      >
        © 2024 Kelapa Hijau Bandung • kelapahijaubandung01 • Sidik Mahmudin
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F8F3E1" }}>
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
