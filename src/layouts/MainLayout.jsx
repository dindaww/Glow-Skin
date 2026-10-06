import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "../components/Navbar";

export default function MainLayout() {
  const location = useLocation();

  const isDashboard =
    location.pathname === "/";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [appliedSearch, setAppliedSearch] =
    useState("");

  const [appliedCategory, setAppliedCategory] =
    useState("");

  const [appliedPrice, setAppliedPrice] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (!isDashboard) {
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setAppliedSearch(search);
      setAppliedCategory(category);
      setAppliedPrice(price);

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [
    search,
    category,
    price,
    isDashboard,
  ]);

  return (
    <div className="min-h-screen bg-[#faf9f7] flex flex-col">

      <Navbar />

      {isDashboard && (
        <section className="bg-[#faf9f7]">

          {/* HERO */}
          <div className="max-w-7xl mx-auto px-6">

            <div className="min-h-130 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

              <div className="py-16">

                <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-5">
                  Glowé Skin
                </p>

                <h1 className="font-display text-5xl md:text-7xl leading-tight text-gray-900">
                  Beauty begins
                  <br />
                  with healthy skin.
                </h1>

                <p className="text-gray-500 max-w-md mt-6 leading-relaxed">
                  Discover simple skincare essentials
                  designed to keep your skin healthy,
                  hydrated, and naturally glowing.
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="mt-8 border border-gray-900 px-7 py-3 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition"
                >
                  SHOP NOW
                </button>

              </div>

              <div className="hidden md:block h-130 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03"
                  alt="Glowé skincare"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

          {/* SEARCH & FILTER */}
          <div
            id="products"
            className="border-y border-gray-200 bg-white"
          >

            <div className="max-w-7xl mx-auto px-6 py-7">

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Our Collection
                  </p>

                  <h2 className="font-display text-3xl mt-1">
                    Find your skincare
                  </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">

                  {/* SEARCH */}
                  <div className="relative">

                    <input
                      type="text"
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                      placeholder="Search products..."
                      className="w-full md:w-64 px-4 py-3 pl-10 border border-gray-200 bg-[#faf9f7] text-sm outline-none focus:border-gray-500 transition"
                    />

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ⌕
                    </span>

                  </div>

                  {/* CATEGORY */}
                  <select
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value)
                    }
                    className="px-4 py-3 border border-gray-200 bg-[#faf9f7] text-sm outline-none focus:border-gray-500 transition"
                  >
                    <option value="">
                      All Categories
                    </option>

                    <option value="cleanser">
                      Cleanser
                    </option>

                    <option value="serum">
                      Serum
                    </option>

                    <option value="toner">
                      Toner
                    </option>

                    <option value="moisturizer">
                      Moisturizer
                    </option>

                    <option value="sunscreen">
                      Sunscreen
                    </option>
                  </select>

                  {/* PRICE */}
                  <select
                    value={price}
                    onChange={(e) =>
                      setPrice(e.target.value)
                    }
                    className="px-4 py-3 border border-gray-200 bg-[#faf9f7] text-sm outline-none focus:border-gray-500 transition"
                  >
                    <option value="">
                      All Prices
                    </option>

                    <option value="under-75000">
                      Under Rp 75.000
                    </option>

                    <option value="75000-90000">
                      Rp 75.000 - Rp 90.000
                    </option>

                    <option value="above-90000">
                      Above Rp 90.000
                    </option>
                  </select>

                </div>

              </div>

              {loading && (
                <p className="text-xs text-gray-400 mt-4">
                  Finding products...
                </p>
              )}

            </div>

          </div>

        </section>
      )}

      <main className="flex-1">

        <div className="max-w-7xl w-full mx-auto px-6 py-12">

          <Outlet
            context={{
              search: appliedSearch,
              category: appliedCategory,
              price: appliedPrice,
              loading: loading,
            }}
          />

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#222222] text-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div>
              <h2 className="font-display text-3xl">
                Glowé
              </h2>

              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Simple skincare for naturally
                healthy and glowing skin.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4">
                Shop
              </h3>

              <p className="text-gray-400 text-sm">
                Cleanser
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Serum
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Moisturizer
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Sunscreen
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4">
                Information
              </h3>

              <p className="text-gray-400 text-sm">
                About Us
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Shipping
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Contact
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4">
                Glowé Skin
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Care for your skin,
                <br />
                care for yourself.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 text-center">

            <p className="text-xs text-gray-500">
              © 2026 Glowé Skin. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}