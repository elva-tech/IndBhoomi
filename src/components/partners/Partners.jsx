import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { partnersData } from "./partnersData";

export default function Partners() {
  return (
    <section id="partners" className="bg-beige py-28 text-forest">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm tracking-widest text-earth mb-3">
            OUR PARTNERS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Trusted Across Global <br /> Supply Networks
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
            swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {partnersData.map((item) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={item.id}>
                <div className="group h-[220px] rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <div className="mb-6 text-earth transition group-hover:text-gold">
                    <Icon size={36} />
                  </div>

                  <h3 className="font-serif text-2xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-forest/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
