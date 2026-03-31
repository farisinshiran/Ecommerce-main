import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Grid, List } from "lucide-react";

const coconutDrinkImg = "https://images.unsplash.com/photo-1722460228785-733ae3a0e8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const drinkImg = "https://images.unsplash.com/photo-1765827620772-3129b91847b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const marketImg = "https://images.unsplash.com/photo-1539672663019-14678deb71f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const plantationImg = "https://images.unsplash.com/photo-1719406287028-6e0028e5d12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const freshCoconutImg = "https://images.unsplash.com/photo-1638517307486-4c2ae5c45764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const iceCoconutImg = "https://images.unsplash.com/photo-1617983918440-83e6ff606271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

interface GalleryPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  date: string;
  liked: boolean;
  saved: boolean;
}

const posts: GalleryPost[] = [
  {
    id: 1,
    image: coconutDrinkImg,
    caption: "Segar dan menyehatkan! Air kelapa hijau murni langsung dari kebun. Rasakan sensasi kesegaran alami di setiap tegukan. 🥥💚 #KelapaHijauBandung #SegarAlami",
    likes: 1247,
    comments: 89,
    tag: "lansir",
    date: "2 jam lalu",
    liked: false,
    saved: false,
  },
  {
    id: 2,
    image: drinkImg,
    caption: "Es kelapa hijau muda yang segar banget! Cocok banget diminum di siang hari yang panas. Tersedia di toko kami setiap hari. ❄️🥥",
    likes: 3456,
    comments: 201,
    tag: "pesanan",
    date: "1 hari lalu",
    liked: false,
    saved: false,
  },
  {
    id: 3,
    image: plantationImg,
    caption: "Berkebun bersama! Kelapa hijau kami tumbuh subur di kebun terbaik Jawa Barat. Dari kebun langsung ke mejamu. 🌿🥥 #BerkebunKelapa #KelapaSegar",
    likes: 2100,
    comments: 134,
    tag: "berkebun",
    date: "2 hari lalu",
    liked: false,
    saved: false,
  },
  {
    id: 4,
    image: marketImg,
    caption: "Kelapa hijau super 1,5L siap kirim! Perfect untuk keluarga atau gathering. Pesan sekarang via GoFood, GrabFood, atau ShopeeFood! https://i.pinimg.com/1200x/45/06/16/450616b61655fd61d39d227434d03e90.jpg✨",
    likes: 892,
    comments: 56,
    tag: "super 1,5L",
    date: "3 hari lalu",
    liked: false,
    saved: false,
  },
  {
    id: 5,
    image: freshCoconutImg,
    caption: "Daging kelapa muda yang lembut dan kenyal. Nikmati langsung atau jadikan topping es krim favoritmu! 😋🥥 #DagingKelapa #KulineranBandung",
    likes: 1876,
    comments: 98,
    tag: "super 1,5L",
    date: "4 hari lalu",
    liked: false,
    saved: false,
  },
  {
    id: 6,
    image: iceCoconutImg,
    caption: "Paket grosir kelapa hijau siap kirim! Cocok untuk restoran, kafe, dan event organizer. Hub: 0812-3456-7890 https://i.pinimg.com/1200x/45/06/16/450616b61655fd61d39d227434d03e90.jpg📦 #GrosirKelapa #SupplierBandung",
    likes: 743,
    comments: 67,
    tag: "lansir",
    date: "5 hari lalu",
    liked: false,
    saved: false,
  },
];

const tags = ["semua", "lansir", "berkebun", "super 1,5L", "pesanan"];

export function GalleryPage() {
  const [activeTag, setActiveTag] = useState("semua");
  const [galleryPosts, setGalleryPosts] = useState(posts);
  const [selectedPost, setSelectedPost] = useState<GalleryPost | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleLike = (id: number) => {
    setGalleryPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
    if (selectedPost?.id === id) {
      setSelectedPost((prev) =>
        prev
          ? { ...prev, liked: !prev.liked, likes: prev.liked ? prev.likes - 1 : prev.likes + 1 }
          : null
      );
    }
  };

  const toggleSave = (id: number) => {
    setGalleryPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
    );
  };

  const filtered =
    activeTag === "semua"
      ? galleryPosts
      : galleryPosts.filter((p) => p.tag === activeTag);

  return (
    <div style={{ backgroundColor: "#F8F3E1" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#41431B" }} className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#AEB784" }}>
                Feed Foto
              </p>
              <h1
                style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3E1", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}
              >
                Galeri 📸
              </h1>
              <p className="text-sm font-medium mt-1" style={{ color: "#AEB784" }}>
                @kelapahijaubandung01 · 366 kiriman
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className="p-2.5 rounded-xl transition-colors border"
                style={{
                  backgroundColor: viewMode === "grid" ? "#AEB784" : "transparent",
                  borderColor: viewMode === "grid" ? "#AEB784" : "rgba(174,183,132,0.4)",
                  color: viewMode === "grid" ? "#41431B" : "#AEB784",
                }}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className="p-2.5 rounded-xl transition-colors border"
                style={{
                  backgroundColor: viewMode === "list" ? "#AEB784" : "transparent",
                  borderColor: viewMode === "list" ? "#AEB784" : "rgba(174,183,132,0.4)",
                  color: viewMode === "list" ? "#41431B" : "#AEB784",
                }}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-all border"
                style={
                  activeTag === tag
                    ? { backgroundColor: "#AEB784", color: "#41431B", borderColor: "#AEB784" }
                    : { backgroundColor: "transparent", borderColor: "rgba(174,183,132,0.4)", color: "#AEB784" }
                }
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative group aspect-square cursor-pointer rounded-2xl overflow-hidden shadow-sm"
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.caption.slice(0, 30)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-5 text-white">
                    <div className="flex items-center gap-1.5">
                      <Heart size={18} fill="white" />
                      <span className="text-sm font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={18} fill="white" />
                      <span className="text-sm font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(65,67,27,0.8)", color: "#E3DBBB" }}
                  >
                    #{post.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden shadow-sm border"
                style={{ backgroundColor: "white", borderColor: "#E3DBBB" }}
              >
                {/* Post Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "linear-gradient(135deg, #AEB784, #41431B)" }}
                    >
                      🥥
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "#41431B" }}>
                        kelapahijaubandung01
                      </div>
                      <div className="text-xs font-medium" style={{ color: "#8A8A6A" }}>{post.date}</div>
                    </div>
                  </div>
                  <button className="transition-colors" style={{ color: "#AEB784" }}>
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <img src={post.image} alt="" className="w-full aspect-video object-cover" />

                {/* Actions */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-4">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 transition-colors`}
                        style={{ color: post.liked ? "#E53E3E" : "#8A8A6A" }}
                      >
                        <Heart size={20} fill={post.liked ? "currentColor" : "none"} />
                        <span className="text-sm font-semibold">{post.likes.toLocaleString()}</span>
                      </button>
                      <button className="flex items-center gap-1.5 transition-colors" style={{ color: "#8A8A6A" }}>
                        <MessageCircle size={20} />
                        <span className="text-sm font-semibold">{post.comments}</span>
                      </button>
                      <button className="transition-colors" style={{ color: "#8A8A6A" }}>
                        <Share2 size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => toggleSave(post.id)}
                      className="transition-colors"
                      style={{ color: post.saved ? "#F59E0B" : "#8A8A6A" }}
                    >
                      <Bookmark size={20} fill={post.saved ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#41431B" }}>
                    <span className="font-semibold">kelapahijaubandung01</span>{" "}
                    <span style={{ color: "#6B6B4D" }}>{post.caption}</span>
                  </p>
                  <div className="mt-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#F8F3E1", color: "#41431B" }}
                    >
                      #{post.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(65,67,27,0.85)" }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="rounded-3xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row shadow-2xl"
              style={{ backgroundColor: "white", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2">
                <img
                  src={selectedPost.image}
                  alt=""
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "#E3DBBB" }}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "linear-gradient(135deg, #AEB784, #41431B)" }}
                    >
                      🥥
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#41431B" }}>kelapahijaubandung01</span>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="transition-colors"
                    style={{ color: "#8A8A6A" }}
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#41431B" }}>
                    <span className="font-semibold">kelapahijaubandung01</span>{" "}
                    <span style={{ color: "#6B6B4D" }}>{selectedPost.caption}</span>
                  </p>
                  <div className="text-xs font-semibold" style={{ color: "#AEB784" }}>
                    {selectedPost.date}
                  </div>
                </div>
                <div className="p-4 border-t" style={{ borderColor: "#E3DBBB" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <button
                        onClick={() => toggleLike(selectedPost.id)}
                        className="flex items-center gap-1.5 transition-colors"
                        style={{ color: selectedPost.liked ? "#E53E3E" : "#8A8A6A" }}
                      >
                        <Heart size={20} fill={selectedPost.liked ? "currentColor" : "none"} />
                        <span className="text-sm font-semibold">{selectedPost.likes.toLocaleString()}</span>
                      </button>
                      <div className="flex items-center gap-1.5" style={{ color: "#8A8A6A" }}>
                        <MessageCircle size={20} />
                        <span className="text-sm font-semibold">{selectedPost.comments}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSave(selectedPost.id)}
                      className="transition-colors"
                      style={{ color: selectedPost.saved ? "#F59E0B" : "#8A8A6A" }}
                    >
                      <Bookmark size={20} fill={selectedPost.saved ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
