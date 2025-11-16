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
  return (
    <div
      className="md:rounded-xl h-full md:h-[680px] pb-4 md:bg-linear-to-r from-[#f5be9e] to-transparent  md:flex md:flex-row-reverse text-[#2c2c2c] "
      style={{
        fontFamily: "Cormorant Garamond",
        fontSize: "20px",
      }}
    >
      <div
        className="md:w-250 
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
      <div className="md:w-120 text-center mt-2 flex md:mt-20 gap-5 md:gap-20 justify-start items-center flex-col">
        <h1 className="text-3xl md:text-5xl font-bold  ">{t("slogan")}</h1>
        <p className="text-3xs md:text-2xl font-semibold">
          {t("sloganAddition")}
        </p>
        <button className="bg-[#ea9573] rounded-2xl pt-2 pb-2 pl-10 pr-10 font-bold">
          Explore our Projects
        </button>
        <button className="bg-[#ea9573] rounded-2xl pt-2 pb-2 pl-10 pr-10 font-bold">
          Meet OK Design
        </button>
        <button className="cursor-pointer animate-bounce">
          <KeyboardDoubleArrowDownOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
