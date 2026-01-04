import { useTranslation } from "react-i18next";
import { Reveal } from "../utils/reveal";
import { services } from "../data/services.js";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../data/projects.js";

export default function ProjectReview() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const projectIndex = Number(params.projectId) - 1;
  const project = projects[projectIndex];
  return (
    <section
      id={params.projectId}
      className="fixed inset-0 z-20 bg-red-100 flex items-center justify-center"
    >
      <div
        className="max-w-7xl mx-auto relative flex flex-col  xl:gap-0 items-center xl:m-auto 
    [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]!
    [&_.swiper-pagination-bullet]:bg-gray-300! 
    [&_.swiper-pagination-bullet-active]:bg-[#548780]!"
      >
        <Link to="/projects">X</Link>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          loop={true}
          className="md:rounded-xl overflow-hidden shadow-lg w-full max-w-full"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-full object-cover"
                loading="lazy"
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
