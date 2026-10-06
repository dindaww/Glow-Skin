import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  const goToShop = () => {
    if (window.location.pathname === "/") {
      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      window.location.href = "/#products";
    }
  };

  return (
    <nav className="bg-[#faf9f7] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="font-display text-3xl tracking-wide text-gray-900"
          >
            Glowé
          </Link>


          {/* NAVIGATION */}

          <div className="flex items-center gap-8">

            {/* HOME */}

            <Link
              to="/"
              className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-black transition"
            >
              Home
            </Link>


            {/* SHOP */}

            <button
              onClick={goToShop}
              className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-black transition"
            >
              Shop
            </button>


            {/* CART */}

            <Link
              to="/cart"
              className="relative text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-black transition"
            >
              Cart

              {totalQty > 0 && (
                <span className="absolute -top-3 -right-5 bg-gray-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </Link>


            {/* ABOUT
                Dipisahkan sebagai menu terakhir */}

            <div className="ml-3 pl-6 border-l border-gray-300">

              <Link
                to="/about"
                className="text-xs uppercase tracking-[0.15em] text-gray-500 hover:text-black transition"
              >
                About
              </Link>

            </div>

          </div>

        </div>

      </div>
    </nav>
  );
}