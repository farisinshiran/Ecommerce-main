import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
// import { MenuPage } from "./components/MenuPage";
import { OrderPage } from "./components/OrderPage";
import { GalleryPage } from "./components/GalleryPage";
import { AboutPage } from "./components/AboutPage";
import { CartPage } from "./components/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      // { path: "menu", Component: MenuPage },
      { path: "pesan", Component: OrderPage },
      { path: "galeri", Component: GalleryPage },
      { path: "tentang", Component: AboutPage },
      { path: "keranjang", Component: CartPage },
    ],
  },
]);
