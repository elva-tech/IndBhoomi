import { reasons } from "./whyData";

export default function WhyIndbhoomi() {
  return (
    <section
      id="whyindbhoomi"
      className="bg-forest text-beige py-28"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-gold mb-3">
            WHY INDBHOOMI
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Strategic Strengths That <br /> Drive Long-Term Value
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_0_45px_rgba(184,155,94,0.2)]"
              >
                {/* Icon */}
                <div className="mb-6 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon size={34} />
                </div>

                <h3 className="mb-4 font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="text-beige/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
