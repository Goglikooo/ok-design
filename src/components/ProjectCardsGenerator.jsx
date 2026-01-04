import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Reveal } from "../utils/reveal";
import { div } from "motion/react-client";
export default function ProjectCardsGenerator({ projectsArray }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      {projectsArray.map((card, i) => (
        <Card
          key={i}
          style={{
            border: "3px solid #253c3f",
            backgroundColor: "#f5be9e",
            marginBottom: "0px",
          }}
        >
          <Reveal>
            <Swiper
              pagination={true}
              effect={"cards"}
              grabCursor={true}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation]}
            >
              {card.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    style={{}}
                    loading="lazy"
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
          <CardContent className="bg-[#f5be9e]  text-[#1D3E33] ">
            <Reveal>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontFamily: `${
                    i18n.language == "ge" ? "GeorgianUI" : "Cinzel"
                  }`,
                  fontWeight: "600",
                }}
              >
                {t(`${card.title}`)}
              </Typography>

              <Typography
                variant="body2"
                style={{
                  fontFamily: `${
                    i18n.language == "ge" ? "GeorgianUI" : "Cinzel"
                  }`,
                  fontWeight: "500",
                }}
                className="font-georgian"
              >
                {t(`${t("totalArea")}: ${card.description}${t("m2")}`)}
              </Typography>
            </Reveal>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
