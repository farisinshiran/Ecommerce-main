import { Outlet, NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
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
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import { TikTokIcon } from "./ui/tiktok-icon";


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
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Beranda", icon: Home },
    // { to: "/menu", label: "Menu", icon: UtensilsCrossed },
    { to: "/pesan", label: "Pesan Sekarang", icon: ShoppingBag },
    { to: "/galeri", label: "Galeri", icon: Image },
    { to: "/tentang", label: "Tentang Kami", icon: Info },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div 
        style={{ 
          backgroundColor: "#41431B",
          maxHeight: scrolled ? "0px" : "80px",
          opacity: scrolled ? 0 : 1,
          overflow: "hidden",
          transition: "all 0.4s ease-in-out",
          paddingTop: scrolled ? 0 : "0.5rem",
          paddingBottom: scrolled ? 0 : "0.5rem"
        }} 
        className="text-xs px-4 hidden md:flex justify-between items-center"
      >
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
        <div className="flex items-center gap-3">
          <span style={{ color: "#AEB784" }}>Tersedia di:</span>
          <a href="https://gofood.link/a/xUWXgHJ" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#1A5231" }} title="Pesan via GoFood">
            <img src="https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75" alt="GoFood" className="w-full h-full object-cover" />
          </a>
          <a href=" https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#52B788" }} title="Pesan via GrabFood">
            <img src="https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg" alt="GrabFood" className="w-full h-full object-cover" />
          </a>
          <a href="https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#F97316" }} title="Pesan via ShopeeFood">
            <img src="https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg" alt="ShopeeFood" className="w-full h-full object-cover" />
          </a>
          <a href="https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan..." target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#25D366" }} title="Chat WhatsApp">
            <svg width="16" height="16" viewBox="1 0 1" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
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
          <a href="https://gofood.link/a/xUWXgHJ" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#1A5231" }} title="Pesan via GoFood">
            <img src="https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75" alt="GoFood" className="w-full h-full object-cover" />
          </a>
          <a href=" https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#52B788" }} title="Pesan via GrabFood">
            <img src="https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg" alt="GrabFood" className="w-full h-full object-cover" />
          </a>
          <a href="https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#F97316" }} title="Pesan via ShopeeFood">
            <img src="https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg" alt="ShopeeFood" className="w-full h-full object-cover" />
          </a>
            <a href="https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan..." target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#25D366" }} title="Chat WhatsApp">
            <svg width="16" height="16" viewBox="1 0 1" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
          </a>
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
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-colors flex items-center justify-center"
              style={{ backgroundColor: "rgba(174,183,132,0.2)", color: "#AEB784" }}
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://www.tiktok.com/@kelapahijaubandung01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-colors flex items-center justify-center"
              style={{ backgroundColor: "rgba(174,183,132,0.2)", color: "#AEB784" }}
            >
              <TikTokIcon size={15} />
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
          <div className="flex gap-3">
            <a href="https://gofood.link/a/xUWXgHJ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#1A5231" }} title="GoFood">
              <img src="https://down-id.img.susercontent.com/file/sg-11134201-22100-9acxecz4lviv75" alt="GoFood" className="w-full h-full object-cover" />
            </a>
            <a href=" https://r.grab.com/g/6-20260331_225106_9430f67a73d34702a28595e2962b3c84_MEXMPS-6-CZM1JCNAJEU2JN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#52B788" }} title="GrabFood">
              <img src="https://i.pinimg.com/1200x/f9/c3/4e/f9c34ec979a505c7dd41124cb14fbc39.jpg" alt="GrabFood" className="w-full h-full object-cover" />
            </a>
            <a href="https://shopee.co.id/universal-link/now-food/shop/1121744?deep_and_deferred=1&shareChannel=copy_link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#F97316" }} title="ShopeeFood">
              <img src="https://i.pinimg.com/736x/66/1e/6c/661e6c8bb4e133784af3df07fba161c4.jpg" alt="ShopeeFood" className="w-full h-full object-cover" />
            </a>
            <a href="https://wa.me/6281321245161?text=Halo+Kelapa+Hijau+Bandung%2C+saya+ingin+memesan..." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-md transition-all transform hover:scale-110" style={{ backgroundColor: "#25D366" }} title="Chat WhatsApp">
              <svg width="16" height="16" viewBox="1 0 1" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
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
        © 2026 Kelapa Hijau Bandung
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
