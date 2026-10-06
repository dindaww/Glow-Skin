export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto">

      <section className="border-b border-gray-200 pb-10 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Glowé Skin
        </p>

        <h1 className="font-display text-5xl md:text-6xl mt-2">
          About
        </h1>

        <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">
          Information about the Glowé Skin store and
          its skincare concept.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="bg-[#ebe7e3] aspect-4/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
            alt="Glowé Skin"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Our Brand
          </p>

          <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
            Skincare made simple.
          </h2>

          <p className="text-gray-500 leading-relaxed mt-6">
            Glowé Skin adalah toko skincare yang
            menghadirkan produk perawatan kulit
            sederhana untuk kebutuhan sehari-hari.
          </p>

          <p className="text-gray-500 leading-relaxed mt-4">
            Kami percaya bahwa skincare tidak harus
            rumit. Produk yang tepat, penggunaan yang
            konsisten, dan perawatan yang sederhana
            dapat menjadi bagian dari rutinitas sehari-hari.
          </p>
        </div>

      </section>

      <section className="border-y border-gray-200 mt-16 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              01
            </p>

            <h3 className="font-display text-2xl mt-3">
              Simple
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Produk skincare yang mudah dipahami
              dan digunakan dalam rutinitas harian.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              02
            </p>

            <h3 className="font-display text-2xl mt-3">
              Gentle
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Mengutamakan pengalaman perawatan
              kulit yang nyaman dan praktis.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              03
            </p>

            <h3 className="font-display text-2xl mt-3">
              Glow
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Membantu membangun rutinitas skincare
              untuk kulit yang terlihat sehat dan glowing.
            </p>
          </div>

        </div>

      </section>

      <section className="py-16">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Administration
        </p>

        <h2 className="font-display text-4xl mt-3">
          Glowé Skin Admin
        </h2>

        <p className="text-gray-500 max-w-2xl mt-5 leading-relaxed">
          Halaman ini merupakan bagian dari sistem
          administrasi website Glowé Skin. Admin dapat
          mengelola data produk melalui Dashboard.
        </p>

      </section>

    </div>
  );
}