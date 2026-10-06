import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { useCart } from "../../utils/CartContext";
import { products } from "../../utils/data";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const p =
    location.state ||
    products.find((item) => item.slug === id);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !review.trim()) {
      return;
    }

    const newReview = {
      id: Date.now(),
      rating: rating,
      review: review,
    };

    setReviews([
      ...reviews,
      newReview,
    ]);

    setRating(0);
    setReview("");
  };

  if (!p) {
    return (
      <div className="py-20 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Glowé Skin
        </p>

        <h1 className="font-display text-4xl mt-3">
          Product not found.
        </h1>

        <Link
          to="/"
          className="inline-block mt-8 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-700 transition"
        >
          Back to Shop
        </Link>

      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(p);
  };

  return (
    <div>

      {/* =========================
          PRODUCT DETAIL
      ========================= */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

        {/* IMAGE */}

        <div className="bg-[#f1eeeb] aspect-3/4 overflow-hidden">

          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover"
          />

        </div>


        {/* PRODUCT INFO */}

        <div className="flex flex-col justify-center py-8">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            {p.category_name}
          </p>

          <h1 className="font-display text-5xl md:text-6xl leading-tight mt-3 text-gray-900">
            {p.name}
          </h1>


          {/* RATING */}

          <div className="flex items-center gap-3 mt-5">

            <span className="text-sm tracking-widest">
              ★★★★★
            </span>

            <span className="text-sm text-gray-500">
              {p.rating}
            </span>

          </div>


          {/* PRICE */}

          <p className="text-lg mt-7">
            Rp {p.price.toLocaleString("id-ID")}
          </p>


          {/* STOCK */}

          <p className="text-xs text-gray-400 mt-2">
            {p.stock} pieces available
          </p>


          <div className="border-t border-gray-200 my-8" />


          {/* DESCRIPTION */}

          <p className="text-gray-500 leading-relaxed max-w-lg">
            {p.name} merupakan produk skincare pilihan
            dari Glowé Skin yang dirancang untuk membantu
            merawat kulit agar tetap sehat, lembap,
            dan glowing.
          </p>


          {/* ACTION */}

          <div className="flex gap-3 mt-8">

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                navigate("/cart")
              }
              className="px-7 border border-gray-300 text-xs uppercase tracking-widest hover:bg-gray-100 transition"
            >
              View Cart
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          REVIEWS
      ========================= */}

      <section className="border-t border-gray-200 mt-20 pt-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


          {/* REVIEW LIST */}

          <div className="lg:col-span-2">

            <div className="mb-8">

              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Customer Feedback
              </p>

              <h2 className="font-display text-4xl mt-2">
                Reviews
              </h2>

            </div>


            {reviews.length === 0 ? (

              <div className="border-y border-gray-200 py-10">

                <p className="text-gray-500 text-sm">
                  Belum ada review untuk produk ini.
                </p>

                <p className="text-gray-400 text-xs mt-2">
                  Jadilah orang pertama yang memberikan
                  review.
                </p>

              </div>

            ) : (

              <div>

                {reviews.map((r) => (

                  <div
                    key={r.id}
                    className="border-b border-gray-200 py-6"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex text-sm tracking-tight">
                          {[1, 2, 3, 4, 5].map(
                            (star) => (
                              <span
                                key={star}
                                className={
                                  star <= r.rating
                                    ? "text-gray-900"
                                    : "text-gray-300"
                                }
                              >
                                ★
                              </span>
                            )
                          )}
                        </div>

                        <span className="text-xs text-gray-400">
                          {r.rating}/5
                        </span>

                      </div>

                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mt-4">
                      {r.review}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* WRITE REVIEW */}

          <div className="lg:border-l lg:border-gray-200 lg:pl-10">

            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Your Opinion
            </p>

            <h2 className="font-display text-3xl mt-2">
              Write a Review
            </h2>


            <form
              onSubmit={handleSubmit}
              className="mt-7"
            >

              {/* STAR SELECTOR */}

              <div>

                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Rating
                </label>

                <div className="flex gap-1">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (

                      <button
                        type="button"
                        key={star}
                        onClick={() =>
                          setRating(star)
                        }
                        className={`
                          text-2xl
                          transition
                          ${
                            star <= rating
                              ? "text-gray-900"
                              : "text-gray-300"
                          }
                          hover:text-gray-900
                        `}
                      >
                        ★
                      </button>

                    )
                  )}

                </div>

              </div>


              {/* REVIEW TEXT */}

              <div className="mt-7">

                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Review
                </label>

                <textarea
                  value={review}
                  onChange={(e) =>
                    setReview(
                      e.target.value
                    )
                  }
                  rows="5"
                  placeholder="Share your experience..."
                  className="w-full border border-gray-300 bg-transparent p-4 text-sm outline-none focus:border-gray-900 transition resize-none"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 mt-5 text-xs uppercase tracking-[0.2em] hover:bg-gray-700 transition"
              >
                Submit Review
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* BACK TO SHOP */}

      <div className="border-t border-gray-200 mt-16 pt-8">

        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition"
        >
          ← Back to Shop
        </Link>

      </div>

    </div>
  );
}