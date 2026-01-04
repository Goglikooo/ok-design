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
        className="max-w-7xl w-full flex flex-col items-center gap-4 max-h-[80vh] relative xl:gap-0 xl:m-auto 
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
          className="md:rounded-xl overflow-hidden shadow-lg w-full max-w-full max-h-[80vh]"
        >
          {project.images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={img}
                className="w-full max-h-[80vh] object-contain"
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
