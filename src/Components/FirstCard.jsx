import MainPicture from "../assets/Main Picture.jpg";
import SecondPicture from "../assets/2.jpg";
import ThirdPicture from "../assets/3.jpg";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const images = [MainPicture, SecondPicture, ThirdPicture];
export default function FirstCard() {
  const { t } = useTranslation();
  // xl:bg-linear-to-r from-[#f5be9e] to-transparent  xl:flex-row-reverse
  return (
    <div
      className="
      py-18 min-h-screen
      flex flex-col 
      relative z-18  px-4   text-[#253c3f]"
      style={{
        fontFamily: "Cinzel",
        fontOpticalSizing: "auto",
        letterSpacing: "0.1rem",
      }}
    >
      <div
        className=" 
        shrink-0
        xl:w-230
    [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]!
    [&_.swiper-pagination-bullet]:bg-gray-300! 
    [&_.swiper-pagination-bullet-active]:bg-[#548780]!
    "
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          loop={true}
          className="md:rounded-xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" text-center flex my-2 justify-around items-center flex-col flex-1 ">
        <h1 className="text-4xl ml:text-5xl font-bold ">{t("slogan")}</h1>
        <p className="text-1xl md:text-2xl font-semibold ">
          {t("sloganAddition")}
        </p>
        <div className="text-[#ffffff] font-bold flex flex-col gap-3 ">
          <button className="bg-[#ea9573]  rounded-2xl pt-2 pb-2 pl-10 pr-10 ">
            Explore our Projects
          </button>
          <button className="bg-[#ea9573]  rounded-2xl pt-2 pb-2 pl-10 pr-10 font-bold">
            Meet OK Design
          </button>
        </div>
      </div>
    </div>
  );
}
