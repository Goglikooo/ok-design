import { useTranslation } from "react-i18next";
import { ArrowLeft, CircleX } from "lucide-react";
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
      className={
        i18n.language === "ge"
          ? "bg-[#548780] flex items-start justify-center py-18 font-georgian"
          : "bg-[#548780] flex items-start justify-center py-18"
      }
    >
      <div
        className="max-w-7xl w-full flex flex-col items-center gap-4  relative xl:gap-0 xl:m-auto 
    [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]!
    [&_.swiper-pagination-bullet]:bg-gray-300! 
    [&_.swiper-pagination-bullet-active]:bg-[#548780]!"
      >
        <div className="flex flex-row justify-end w-full px-2">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-end gap-2 text-neutral-100 hover:text-neutral-50 transition-colors "
          >
            <span className="text-lg tracking-wide ">{t("Close")}</span>
            <CircleX
              size={20}
              className="transition-transform group-hover:scale-110"
            />
          </Link>
        </div>

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
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="bg-[#548780] px-4 md:px-20 py-2 md:py-8  w-full max-w-7xl">
          <h2 className="text-3xl  font-semibold tracking-tight text-neutral-50">
            {t(project.title)}
          </h2>

          {/* Meta info */}
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 border-t border-white/20 pt-6">
            <div>
              <p className="text-lg  uppercase tracking-wider text-neutral-300">
                {t("Location")}
              </p>
              <p className="mt-1 text-xl  font-medium text-neutral-100">
                {t(project.location)}
              </p>
            </div>

            <div>
              <p className="text-lg   uppercase tracking-wider text-neutral-300">
                {t("Area")}
              </p>
              <p className="mt-1 text-xl  font-medium text-neutral-100">
                {project.description} {t("m2")}
              </p>
            </div>

            <div>
              <p className="text-lg   uppercase tracking-wider text-neutral-300">
                {t("Services")}
              </p>
              <p className="mt-1 text-xl  font-medium text-neutral-100">
                {t(project.services)}
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
