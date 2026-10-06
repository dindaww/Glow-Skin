import { useOutletContext } from "react-router-dom";

import { products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
  const {
    search,
    category,
    price,
    loading,
  } = useOutletContext();

  const filteredProducts = products.filter(
    (product) => {

      const matchSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "" ||
        product.category === category;

      let matchPrice = true;

      if (price === "under-75000") {
        matchPrice =
          product.price < 75000;
      }

      if (price === "75000-90000") {
        matchPrice =
          product.price >= 75000 &&
          product.price <= 90000;
      }

      if (price === "above-90000") {
        matchPrice =
          product.price > 90000;
      }

      return (
        matchSearch &&
        matchCategory &&
        matchPrice
      );
    }
  );

  return (
    <section>

      {/* TITLE */}
      <div className="flex items-end justify-between mb-8">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Glowé Skin
          </p>

          <h2 className="font-display text-4xl text-gray-900 mt-1">
            Our Products
          </h2>
        </div>

        <p className="text-sm text-gray-500">
          {filteredProducts.length} products
        </p>

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="py-24 text-center">

          <div className="text-3xl animate-pulse">
            ♡
          </div>

          <p className="text-sm text-gray-400 mt-3">
            Finding products...
          </p>

        </div>

      ) : filteredProducts.length === 0 ? (

        <div className="py-24 text-center border-y border-gray-200">

          <h3 className="font-display text-2xl">
            No products found
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Try another search or category.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">

          {filteredProducts.map(
            (item) => (
              <ProductCard
                key={item.id}
                p={item}
              />
            )
          )}

        </div>

      )}

    </section>
  );
}