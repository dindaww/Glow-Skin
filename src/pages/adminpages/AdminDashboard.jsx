import { useState } from "react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price || !category) {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category,
    };

    setProducts((prev) => [...prev, newProduct]);

    setName("");
    setPrice("");
    setCategory("");
  };

  const handleDelete = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}

      <div className="border-b border-gray-200 pb-8 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Glowé Skin
        </p>

        <h1 className="font-display text-5xl md:text-6xl mt-2">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-3">
          Manage your skincare products.
        </p>
      </div>


      {/* SUMMARY */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

        <div className="bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Products Added
          </p>

          <p className="font-display text-4xl mt-3">
            {products.length}
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Categories
          </p>

          <p className="font-display text-4xl mt-3">
            5
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Status
          </p>

          <p className="font-display text-4xl mt-3">
            Active
          </p>
        </div>

      </div>


      {/* ADD PRODUCT */}

      <section className="bg-white border border-gray-200 p-6 md:p-8">

        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Product Management
          </p>

          <h2 className="font-display text-3xl mt-2">
            Add Product
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Product Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
              className="w-full border-b border-gray-300 bg-transparent px-1 py-3 outline-none focus:border-gray-900 transition"
            />
          </div>


          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="89000"
              className="w-full border-b border-gray-300 bg-transparent px-1 py-3 outline-none focus:border-gray-900 transition"
            />
          </div>


          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border-b border-gray-300 bg-[#faf9f7] px-1 py-3 outline-none focus:border-gray-900 transition"
            >
              <option value="">Select category</option>
              <option value="cleanser">Cleanser</option>
              <option value="serum">Serum</option>
              <option value="toner">Toner</option>
              <option value="moisturizer">Moisturizer</option>
              <option value="sunscreen">Sunscreen</option>
            </select>
          </div>


          <button
            type="submit"
            className="md:col-span-3 bg-gray-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-700 transition"
          >
            + Add Product
          </button>

        </form>

      </section>


      {/* PRODUCT LIST */}

      <section className="mt-12">

        <div className="flex items-end justify-between border-b border-gray-200 pb-5 mb-5">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Inventory
            </p>

            <h2 className="font-display text-3xl mt-2">
              Added Products
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {products.length} products
          </p>

        </div>


        {products.length === 0 ? (

          <div className="bg-white border-y border-gray-200 py-12 text-center">
            <p className="text-gray-400 text-sm">
              No additional products yet.
            </p>
          </div>

        ) : (

          <div className="bg-white border-t border-gray-200">

            {products.map((product) => (

              <div
                key={product.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-gray-200 py-6"
              >

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="font-display text-2xl mt-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>


                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-xs uppercase tracking-widest text-gray-400 hover:text-red-600 transition"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}