import { motion } from "framer-motion";
import { Droplet, Leaf, Hexagon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-forest via-forestLight to-earth text-beige"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-36 pb-24">
        
        {/* Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif font-semibold text-5xl md:text-7xl leading-[1.08] tracking-tight"
          >
            Sustainability That <br />
            Scales Globally
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-sm md:text-base uppercase tracking-[0.3em] text-beige/70"
          >
            From Ugandan farms to global markets
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="mt-10 text-xl leading-relaxed text-beige/90"
          >
            We cultivate high-value agricultural produce using sustainable,
            smart-farming practices — delivering export-grade essential oils,
            spices, and forest honey through a vertically integrated value chain.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-28 grid gap-8 md:grid-cols-3"
        >
          <FeatureCard
            icon={<Droplet size={32} />}
            title="Essential Oils"
            text="High-purity oils cultivated and processed for premium fragrance and wellness brands."
          />
          <FeatureCard
            icon={<Leaf size={32} />}
            title="Spices"
            text="Carefully grown, ethically sourced spices meeting global quality standards."
          />
          <FeatureCard
            icon={<Hexagon size={32} />}
            title="Forest Honey"
            text="Naturally harvested honey sourced through sustainable forest ecosystems."
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20"
        >
          <button
            onClick={() => {
  document.getElementById("value")?.scrollIntoView({
    behavior: "smooth",
  });
}}

            className="group relative overflow-hidden border border-gold px-12 py-4 text-sm uppercase tracking-widest"
          >
            <span className="absolute inset-0 translate-y-full bg-gold transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative z-10 text-gold group-hover:text-forest transition">
              See Our Business Model
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* -------- Feature Card -------- */

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-gold/60 hover:shadow-[0_0_40px_rgba(184,155,94,0.15)]"
    >
      <div className="mb-6 text-gold group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="mb-4 font-serif text-2xl font-medium">
        {title}
      </h3>
      <p className="text-beige/80 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
