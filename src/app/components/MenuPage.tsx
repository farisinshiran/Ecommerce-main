import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Star, Plus, Check, Search, Filter, Tag } from "lucide-react";
import { useStore, Product } from "./store-context";

const coconutDrinkImg = "https://images.unsplash.com/photo-1722460228785-733ae3a0e8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const drinkImg = "https://images.unsplash.com/photo-1765827620772-3129b91847b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const marketImg = "https://images.unsplash.com/photo-1539672663019-14678deb71f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const plantationImg = "https://images.unsplash.com/photo-1719406287028-6e0028e5d12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const freshCoconutImg = "https://images.unsplash.com/photo-1638517307486-4c2ae5c45764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const iceCoconutImg = "https://images.unsplash.com/photo-1617983918440-83e6ff606271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Es Kelapa Muda Bandung",
    description: "Kelapa muda segar pilihan dari kebun Bandung, disajikan dingin dengan nata de coco dan cincau hitam.",
    price: 18000,
    originalPrice: 22000,
    image: coconutDrinkImg,
    category: "es-kelapa",
    badge: "⭐ Best Seller",
    rating: 4.9,
    sold: 1245,
    volume: "400ml",
  },
  {
    id: 2,
    name: "Kelapa Pandan Susu",
    description: "Perpaduan kelapa muda segar dengan susu segar dan daun pandan harum. Creamy dan menyegarkan!",
    price: 22000,
    image: drinkImg,
    category: "minuman",
    badge: "🔥 Hot",
    rating: 4.8,
    sold: 892,
    volume: "400ml",
  },
  {
    id: 3,
    name: "Kelapa Jeruk Nipis",
    description: "Kombinasi air kelapa hijau segar dengan perasan jeruk nipis asli. Asam manis menyegarkan!",
    price: 20000,
    image: iceCoconutImg,
    category: "minuman",
    rating: 4.7,
    sold: 567,
    volume: "400ml",
  },
  {
    id: 4,
    name: "Buko Pandan Bowl",
    description: "Daging kelapa muda yang lembut dengan puding pandan, nata de coco, dan santan. Dessert favorit!",
    price: 25000,
    image: freshCoconutImg,
    category: "dessert",
    badge: "🆕 Baru",
    rating: 4.8,
    sold: 430,
  },
  {
    id: 5,
    name: "Es Kelapa Hijau Super 1,5L",
    description: "Kelapa hijau ukuran super jumbo 1,5 liter. Cocok untuk keluarga atau berbagi bersama!",
    price: 35000,
    originalPrice: 45000,
    image: marketImg,
    category: "es-kelapa",
    badge: "💚 Super Size",
    rating: 4.9,
    sold: 1100,
    volume: "1.5L",
  },
  {
    id: 6,
    name: "Air Kelapa + Nata de Coco",
    description: "Air kelapa hijau segar dipadukan dengan nata de coco kenyal. Kombinasi sempurna!",
    price: 22000,
    image: coconutDrinkImg,
    category: "minuman",
    rating: 4.7,
    sold: 623,
    volume: "400ml",
  },
  {
    id: 7,
    name: "Paket Kelapa Segar 5pcs",
    description: "Paket hemat 5 buah kelapa hijau segar langsung dari kebun. Lebih hemat untuk keluarga!",
    price: 65000,
    originalPrice: 80000,
    image: plantationImg,
    category: "paket",
    badge: "💰 Hemat",
    rating: 4.9,
    sold: 341,
  },
  {
    id: 8,
    name: "Paket Keluarga 10pcs",
    description: "Paket ekonomis 10 buah kelapa hijau segar untuk keluarga besar. Pengiriman gratis area Bandung!",
    price: 120000,
    originalPrice: 160000,
    image: marketImg,
    category: "paket",
    badge: "🏆 Best Deal",
    rating: 5.0,
    sold: 189,
  },
];

const categories = [
  { id: "semua", label: "🥥 Semua Menu" },
  { id: "es-kelapa", label: "🧊 Es Kelapa" },
  { id: "minuman", label: "🍹 Minuman" },
  { id: "dessert", label: "🍧 Dessert" },
  { id: "paket", label: "📦 Paket Hemat" },
];

function formatPrice(price: number) {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart } = useStore();
  const [added, setAdded] = useState(false);
  const inCart = cart.find((i) => i.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border"
      style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
    >
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className="absolute top-2 left-2 px-2.5 py-1 rounded-lg text-xs font-semibold text-white shadow-sm"
            style={{ backgroundColor: "#41431B" }}
          >
            {product.badge}
          </span>
        )}
        {discount && (
          <span
            className="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: "#F97316" }}
          >
            -{discount}%
          </span>
        )}
        {product.volume && (
          <span
            className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "rgba(248,243,225,0.92)", color: "#41431B" }}
          >
            {product.volume}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3
          className="mb-1 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: "#41431B", fontWeight: 700, fontSize: "0.95rem" }}
        >
          {product.name}
        </h3>
        <p className="text-xs mb-3 line-clamp-2 leading-relaxed" style={{ color: "#8A8A6A" }}>
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs" style={{ color: "#F59E0B" }}>
            <Star size={11} fill="currentColor" />
            <span className="font-semibold">{product.rating}</span>
          </div>
          <span style={{ color: "#D5CEAB" }}>•</span>
          <span className="text-xs font-medium" style={{ color: "#8A8A6A" }}>
            {product.sold.toLocaleString("id-ID")} terjual
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div
              className="leading-tight"
              style={{ color: "#41431B", fontWeight: 700, fontSize: "1rem" }}
            >
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs line-through" style={{ color: "#AEB784" }}>
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {inCart && (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#F8F3E1", color: "#41431B" }}
              >
                {inCart.quantity}×
              </span>
            )}
            <button
              onClick={handleAdd}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all shadow-sm"
              style={{
                backgroundColor: added ? "#AEB784" : "#41431B",
                color: "white",
              }}
            >
              {added ? <Check size={16} /> : <Plus size={16} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const navigate = useNavigate();
  const { cart } = useStore();
  const totalInCart = cart.reduce((s, i) => s + i.quantity, 0);

  let filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === "semua" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === "sold") filtered = [...filtered].sort((a, b) => b.sold - a.sold);

  return (
    <div style={{ backgroundColor: "#F8F3E1" }}>
      {/* Header */}
      <div className="border-b" style={{ backgroundColor: "#41431B", borderColor: "rgba(174,183,132,0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#AEB784" }}>
            Katalog Produk
          </p>
          <h1
            className="mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}
          >
            Menu Kelapa Hijau 🥥
          </h1>
          <p className="text-sm font-medium" style={{ color: "#AEB784" }}>
            Pilih minuman kelapa hijau segar favoritmu
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#AEB784" }} />
            <input
              type="text"
              placeholder="Cari menu kelapa..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none border"
              style={{
                backgroundColor: "white",
                borderColor: "#D5CEAB",
                color: "#41431B",
              }}
            />
          </div>
          <div className="relative">
            <Filter size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#AEB784" }} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-9 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none appearance-none cursor-pointer border"
              style={{
                backgroundColor: "white",
                borderColor: "#D5CEAB",
                color: "#41431B",
              }}
            >
              <option value="default">Urutkan</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="rating">Rating Terbaik</option>
              <option value="sold">Terlaris</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all border"
              style={{
                backgroundColor: activeCategory === cat.id ? "#41431B" : "white",
                color: activeCategory === cat.id ? "#F8F3E1" : "#41431B",
                borderColor: activeCategory === cat.id ? "#41431B" : "#D5CEAB",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Count */}
        <div className="flex items-center gap-2 mb-5">
          <Tag size={14} style={{ color: "#AEB784" }} />
          <span className="text-sm font-semibold" style={{ color: "#6B6B4D" }}>
            {filtered.length} produk ditemukan
          </span>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "#8A8A6A" }}>
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-semibold" style={{ color: "#41431B" }}>Produk tidak ditemukan</p>
            <p className="text-sm mt-1">Coba kata kunci yang berbeda</p>
          </div>
        )}

        {/* Cart Sticky CTA */}
        {totalInCart > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4"
          >
            <button
              onClick={() => navigate("/keranjang")}
              className="text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transition-opacity hover:opacity-90 border-none cursor-pointer"
              style={{ backgroundColor: "#41431B" }}
            >
              <ShoppingCart size={20} />
              <span className="font-semibold">{totalInCart} Item di Keranjang</span>
              <span
                className="ml-1 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#AEB784", color: "#41431B" }}
              >
                Lihat →
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
