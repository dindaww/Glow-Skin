import { Link } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

export default function Cart() {
  const {
    cart,
    updateQty,
    removeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Your Cart
        </p>

        <h1 className="font-display text-4xl mt-3">
          Your cart is empty.
        </h1>

        <p className="text-gray-500 mt-4">
          Discover something beautiful for your skincare routine.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-700 transition"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div>

      {/* HEADER */}

      <div className="border-b border-gray-200 pb-8 mb-10">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Shopping Bag
        </p>

        <div className="flex items-end justify-between mt-2">

          <h1 className="font-display text-5xl">
            Your Cart
          </h1>

          <p className="text-sm text-gray-500">
            {cart.reduce(
              (sum, item) =>
                sum + item.qty,
              0
            )}{" "}
            items
          </p>

        </div>

      </div>


      {/* CONTENT */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* PRODUCTS */}

        <div className="lg:col-span-2">

          {cart.map((item) => (

            <div
              key={item.id}
              className="border-b border-gray-200 py-6 first:pt-0"
            >

              <div className="flex gap-5">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-36 object-cover bg-gray-100"
                />

                <div className="flex-1">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    {item.category_name}
                  </p>

                  <h2 className="font-display text-2xl mt-1">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-2">
                    Rp{" "}
                    {item.price.toLocaleString(
                      "id-ID"
                    )}
                  </p>


                  {/* QUANTITY */}

                  <div className="flex items-center mt-6">

                    <button
                      onClick={() =>
                        updateQty(
                          item.id,
                          item.qty - 1
                        )
                      }
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="w-10 text-center text-sm">
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        updateQty(
                          item.id,
                          item.qty + 1
                        )
                      }
                      className="w-8 h-8 border border-gray-300 hover:bg-gray-100"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="ml-6 text-xs uppercase tracking-wider text-gray-400 hover:text-black"
                    >
                      Remove
                    </button>

                  </div>

                </div>


                {/* ITEM TOTAL */}

                <div className="text-sm font-medium">
                  Rp{" "}
                  {(
                    item.price *
                    item.qty
                  ).toLocaleString(
                    "id-ID"
                  )}
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* SUMMARY */}

        <div className="lg:border-l lg:border-gray-200 lg:pl-10 h-fit">

          <h2 className="font-display text-3xl">
            Order Summary
          </h2>

          <div className="border-t border-gray-200 mt-6 pt-5">

            <div className="flex justify-between text-sm">

              <span className="text-gray-500">
                Subtotal
              </span>

              <span>
                Rp{" "}
                {totalPrice.toLocaleString(
                  "id-ID"
                )}
              </span>

            </div>

          </div>

          <div className="border-t border-gray-200 mt-5 pt-5">

            <div className="flex justify-between">

              <span className="font-medium">
                Total
              </span>

              <span className="font-medium">
                Rp{" "}
                {totalPrice.toLocaleString(
                  "id-ID"
                )}
              </span>

            </div>

          </div>

          <Link
            to="/checkout"
            className="block text-center bg-gray-900 text-white py-4 mt-7 text-xs uppercase tracking-[0.2em] hover:bg-gray-700 transition"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/"
            className="block text-center text-xs uppercase tracking-widest mt-5 text-gray-500 hover:text-black"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
}