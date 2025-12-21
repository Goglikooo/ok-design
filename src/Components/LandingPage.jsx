import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SECTIONS } from "../../sections.config";
import { Reveal } from "../utils/reveal";
const images = [
  "images/hero images/1.jpg",
  "images/hero images/2.jpg",
  "images/hero images/3.jpg",
  "images/hero images/4.jpg",
  "images/hero images/5.jpg",
];
export default function LandingPage({ id }) {
  const { t } = useTranslation();

  const scrollToSection = (section) => {
    document
      .getElementById(`${section}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className="
      scroll-mt-15.5
      p-18
      h-full
      px-4 xl:px-5   text-[#253c3f]
      xl:flex xl:justify-center xl:items-start"
    >
      <div
        className=" 
        max-w-7xl mx-auto relative flex flex-col  xl:gap-0 items-center xl:m-auto 
    [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]!
    [&_.swiper-pagination-bullet]:bg-gray-300! 
    [&_.swiper-pagination-bullet-active]:bg-[#548780]!
    "
      >
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
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="w-full  
          xl:absolute
          z-1 
          xl:bottom-0
          xl:left-1/2 
          xl:-translate-x-1/2  
          flex flex-col gap-20 xl:gap-3 justify-start 
          xl:justify-center items-center
        xl:bg-[#f5be9e93] 
          pb-3 
          xl:rounded-b-xl  
          h-full
          xl:h-auto 
         
        "
        >
          <Reveal>
            <h1
              className={`pt-4  text-4xl ml:text-5xl lg:text-5xl font-bold text-center tracking-tight`}
            >
              {t("slogan")}
            </h1>
          </Reveal>
          <Reveal>
            <p className=" text-1xl md:text-2xl font-semibold text-center">
              {t("sloganAddition")}
            </p>
          </Reveal>
          <Reveal>
            <div className="md:flex-row text-[#ffffff] font-bold flex flex-col gap-3 ">
              <button
                className="bg-[#ea9573]  rounded-2xl pt-2 pb-2 pl-10 pr-10 flex justify-between align-center cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                {t("projectsButton")} <ArrowRight />
              </button>

              <button
                className="bg-[#ea9573]  rounded-2xl pt-2 pb-2 pl-10 pr-10 font-bold flex justify-between align-center cursor-pointer"
                onClick={() => scrollToSection(SECTIONS.SERVICES)}
              >
                {t("getStarted")}
                <ArrowRight />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
