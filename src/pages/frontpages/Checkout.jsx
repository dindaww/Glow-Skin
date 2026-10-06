import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../utils/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    clearCart,
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    clearCart();

    alert(
      "Pesanan berhasil dibuat! Terima kasih sudah berbelanja di Glowé Skin."
    );

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Checkout
        </p>

        <h1 className="font-display text-4xl mt-3">
          Nothing to checkout.
        </h1>

        <p className="text-gray-500 mt-4">
          Your shopping bag is currently empty.
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
          Glowé Skin
        </p>

        <h1 className="font-display text-5xl mt-2">
          Checkout
        </h1>

        <p className="text-gray-500 mt-3">
          Complete your order.
        </p>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* FORM */}

        <div className="lg:col-span-2">

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            <section>

              <h2 className="font-display text-3xl mb-6">
                Your Information
              </h2>

              <div className="space-y-5">

                <div>

                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Your name"
                    className="w-full border-b border-gray-300 bg-transparent px-1 py-3 outline-none focus:border-gray-900 transition"
                  />

                </div>


                <div>

                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="08xxxxxxxxxx"
                    className="w-full border-b border-gray-300 bg-transparent px-1 py-3 outline-none focus:border-gray-900 transition"
                  />

                </div>


                <div>

                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Shipping Address
                  </label>

                  <textarea
                    required
                    rows="4"
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    placeholder="Your complete address"
                    className="w-full border border-gray-300 bg-transparent p-4 outline-none focus:border-gray-900 transition resize-none"
                  />

                </div>

              </div>

            </section>


            <section>

              <h2 className="font-display text-3xl mb-6">
                Payment
              </h2>

              <select
                required
                value={payment}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
                className="w-full border border-gray-300 bg-[#faf9f7] px-4 py-3 text-sm outline-none focus:border-gray-900"
              >

                <option value="">
                  Select payment method
                </option>

                <option value="transfer">
                  Bank Transfer
                </option>

                <option value="ewallet">
                  E-Wallet
                </option>

                <option value="cod">
                  Cash on Delivery
                </option>

              </select>

            </section>


            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-700 transition"
            >
              Place Order
            </button>

          </form>

        </div>


        {/* ORDER SUMMARY */}

        <aside className="lg:border-l lg:border-gray-200 lg:pl-10 h-fit">

          <h2 className="font-display text-3xl">
            Your Order
          </h2>

          <div className="mt-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 py-4 border-b border-gray-200"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-24 object-cover bg-gray-100"
                />

                <div className="flex-1">

                  <p className="text-sm font-medium">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.qty} × Rp{" "}
                    {item.price.toLocaleString(
                      "id-ID"
                    )}
                  </p>

                </div>

              </div>

            ))}

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

        </aside>

      </div>

    </div>
  );
}