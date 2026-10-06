import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="group">

      {/* IMAGE */}
      <Link
        to={`/product/${p.slug}`}
        state={p}
        className="block"
      >

        <div className="relative aspect-3/4 bg-[#f1eeeb] overflow-hidden">

          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* STOCK */}
          {p.stock <= 15 && (
            <span className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] uppercase tracking-wider">
              Low Stock
            </span>
          )}

        </div>

      </Link>

      {/* INFO */}
      <div className="pt-4">

        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
          {p.category_name}
        </p>

        <div className="flex justify-between gap-3 mt-1">

          <Link
            to={`/product/${p.slug}`}
            state={p}
            className="font-medium text-sm text-gray-900 hover:underline"
          >
            {p.name}
          </Link>

          <span className="text-sm whitespace-nowrap">
            Rp {p.price.toLocaleString("id-ID")}
          </span>

        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">

          <div className="text-[11px] tracking-tight">
            ★★★★★
          </div>

          <span className="text-xs text-gray-400">
            {p.rating}
          </span>

        </div>

        {/* CART */}
        <button
          onClick={() => addToCart(p)}
          className="mt-4 w-full border border-gray-300 py-2.5 text-xs uppercase tracking-widest text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}