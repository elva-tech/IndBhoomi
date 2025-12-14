import { valueData } from "./valueData";

export default function Value() {
  return (
    <section id="value" className="bg-beige text-forest py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-24">
          <p className="text-sm tracking-widest text-earth mb-3">
            OUR VALUE PROPOSITION
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Built for Sustainability,<br />Designed for Scale
          </h2>
        </div>

        <div className="space-y-28">
          {valueData.map((item, index) => (
            <div
              key={item.id}
              className={`grid items-center gap-16 md:grid-cols-2 ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center h-[420px] ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="max-h-[360px] max-w-[520px] w-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="font-serif text-3xl mb-6">{item.title}</h3>
                <p className="text-lg text-forest/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
