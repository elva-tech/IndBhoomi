import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Team.css";
import { teamData } from "./teamData";

export default function Team() {
  return (
    <section id="ourteam" className="bg-beige py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm tracking-widest text-earth mb-3">
            OUR TEAM
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Leadership & Expertise
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
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
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <div className="team-card-inner">
                  {/* Front */}
                  <div className="team-card-front">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  {/* Back */}
                 {/* Back */}
<div className="team-card-back">
  <h3>{member.name}</h3>
  <ul>
    {member.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
</div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
