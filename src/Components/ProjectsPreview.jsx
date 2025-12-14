import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { EffectCards, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
export default function ProjectsPreview() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Vazha-Pshavela",
      description: `${t("totalArea")}: 45${t("m")}²`,
      images: [
        "images/project1/project1_1.jpeg",
        "images/project1/project1_3.jpeg",
        "images/project1/project1_2.jpeg",
        "images/project1/project1_4.jpeg",
      ],
    },
    {
      title: "Elbakidze",
      description: `${t("totalArea")}: 35${t("m")}²`,
      images: [
        "images/project2/project2_1.jpeg",
        "images/project2/project2_2.jpeg",
        "images/project2/project2_3.jpeg",
        "images/project2/project2_4.jpeg",
      ],
    },
    {
      title: "Saburtalo",
      description: `${t("totalArea")}: 42${t("m")}²`,
      images: [
        "images/project3/project3_1.jpeg",
        "images/project3/project3_2.jpeg",
        "images/project3/project3_3.jpeg",
        "images/project3/project3_4.jpeg",
      ],
    },
  ];

  const Cardgenerator = ({ projectsArray }) => {
    return (
      <div
        className=" grid md:grid-cols-3 gap-5 mb-5 [&_.swiper-button-next]:text-[#548780]!
    [&_.swiper-button-prev]:text-[#548780]! "
      >
        {projectsArray.map((card, i) => (
          <Card
            key={i}
            style={{
              border: "3px solid #253c3f",
              backgroundColor: "#f5be9e",
            }}
          >
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
                  <img src={img} style={{}} />
                </SwiperSlide>
              ))}
            </Swiper>

            <CardContent className="bg-[#f5be9e]  text-white ">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontFamily: "Cinzel",
                  fontOpticalSizing: "auto",
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Cinzel",
                  fontOpticalSizing: "auto",
                  fontWeight: "500",
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 bg-[#548780] border-t-[#ea9573] border-t-4">
      <div
        className="mx-auto px-4 max-w-7xl  [&_.swiper-pagination-bullet-active]:bg-[#548780]!"
        style={{
          fontFamily: "Cinzel",
          fontOpticalSizing: "auto",
          letterSpacing: "0.1rem",
        }}
      >
        <h2 className="text-4xl pb-5 text-center font-bold text-white">
          {t("ourProjects")}
        </h2>

        <Cardgenerator projectsArray={projects} />

        <button className="bg-[#ea9573]  w-full pt-2 pb-2 pl-10 pr-10 text-white font-semibold">
          {t("viewAllProjects")}
        </button>
      </div>
    </section>
  );
}
