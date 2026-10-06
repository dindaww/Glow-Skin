export default function About() {
  return (
    <div className="bg-[#faf9f7]">

      {/* HERO */}

      <section className="py-16 md:py-24 border-b border-gray-200">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            About Glowé
          </p>

          <h1 className="font-display text-5xl md:text-7xl mt-4 text-gray-900">
            Skincare made simple.
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-gray-500 leading-relaxed">
            Glowé Skin is a skincare store created
            for those who believe that healthy skin
            is the foundation of natural beauty.
          </p>

        </div>

      </section>


      {/* ABOUT CONTENT */}

      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <div className="h-125 overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
              alt="Glowé skincare"
              className="w-full h-full object-cover"
            />

          </div>


          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Our Story
            </p>

            <h2 className="font-display text-4xl md:text-5xl mt-3 text-gray-900">
              Care for your skin,
              <br />
              care for yourself.
            </h2>

            <p className="text-gray-500 leading-relaxed mt-6">
              Glowé Skin hadir untuk memberikan pilihan
              skincare yang sederhana dan mudah digunakan
              dalam rutinitas sehari-hari.
            </p>

            <p className="text-gray-500 leading-relaxed mt-4">
              Kami percaya bahwa skincare tidak harus
              rumit. Dengan produk yang tepat dan rutinitas
              yang konsisten, setiap orang dapat merawat
              kulitnya dengan lebih percaya diri.
            </p>

          </div>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="bg-white border-y border-gray-200 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Our Philosophy
            </p>

            <h2 className="font-display text-4xl mt-3">
              Simple. Gentle. Glow.
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="text-center">

              <div className="text-3xl mb-4">
                ◯
              </div>

              <h3 className="font-display text-2xl">
                Simple
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mt-3">
                Skincare essentials yang mudah
                dimasukkan ke dalam rutinitas harian.
              </p>

            </div>


            <div className="text-center">

              <div className="text-3xl mb-4">
                ♡
              </div>

              <h3 className="font-display text-2xl">
                Gentle
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mt-3">
                Pilihan produk untuk membantu
                menjaga kulit tetap nyaman dan terawat.
              </p>

            </div>


            <div className="text-center">

              <div className="text-3xl mb-4">
                ✦
              </div>

              <h3 className="font-display text-2xl">
                Glow
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mt-3">
                Membantu kamu merasa lebih percaya
                diri dengan kulitmu sendiri.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}