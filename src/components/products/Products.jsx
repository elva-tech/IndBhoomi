import { products } from "./productData";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-beige text-forest py-28"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest text-earth mb-3">
            OUR PRODUCE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Crafted for Global Markets
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest to-forestLight opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Category label */}
                <p className="mb-4 text-sm tracking-widest text-earth group-hover:text-gold transition">
                  {item.category}
                </p>

                {/* Title – FIXED VISIBILITY */}
                <h3 className="mb-6 font-serif text-3xl text-forest group-hover:text-beige transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-forest/80 leading-relaxed group-hover:text-beige/85 transition">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
