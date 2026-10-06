import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Frontpage
import Dashboard from "./pages/frontpages/Dashboard";
import About from "./pages/frontpages/About";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";

// Admin
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AboutPage from "./pages/adminpages/AboutPage";

export default function App() {
  return (
    <Routes>

      {/* =========================
          FRONT WEBSITE
      ========================= */}

      <Route
        path="/"
        element={<MainLayout />}
      >

        {/* HOME */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* ABOUT */}
        <Route
          path="about"
          element={<About />}
        />

        {/* PRODUCT DETAIL */}
        <Route
          path="product/:id"
          element={<ProductDetail />}
        />

        {/* CART */}
        <Route
          path="cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}
        <Route
          path="checkout"
          element={<Checkout />}
        />

      </Route>


      {/* =========================
          ADMIN WEBSITE
      ========================= */}

      <Route
        path="/admin"
        element={<AdminLayout />}
      >

        {/* ADMIN DASHBOARD */}
        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        {/* ADMIN ABOUT */}
        <Route
          path="about"
          element={<AboutPage />}
        />

      </Route>

    </Routes>
  );
}