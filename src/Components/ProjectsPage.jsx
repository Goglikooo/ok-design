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
import { EffectCards } from "swiper/modules";
import { useTranslation } from "react-i18next";
export default function ProjectsPage() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Vazha-Pshavela",
      description: "Total Area: 45m²",
      images: [
        "images/project1/picture2_2.jpg",
        "images/project1/picture2_1.jpg",
        "images/project1/picture2_3.jpg",
      ],
    },
    {
      title: "Elbakidze",
      description: "Total Area: 35m²",
      images: [
        "images/project2/picture3_2.jpg",
        "images/project2/picture3_1.jpg",
        "images/project2/picture3_3.jpg",
        "images/project2/picture3_4.jpg",
      ],
    },
    {
      title: "Saburtalo",
      description: "Total Area: 42m²",
      images: [
        "images/project3/picture4_2.jpg",
        "images/project3/picture4_1.jpg",
        "images/project3/picture4_3.jpg",
        "images/project3/picture4_4.jpg",
      ],
    },
  ];

  const Cardgenerator = ({ projectsArray }) => {
    return (
      <>
        {projectsArray.map((card, i) => (
          <Card
            key={i}
            style={{ border: "3px solid #253c3f", backgroundColor: "#f5be9e" }}
          >
            <Swiper
              pagination={true}
              effect={"cards"}
              grabCursor={true}
              modules={[Pagination, EffectCards]}
            >
              {card.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} style={{}} />
                </SwiperSlide>
              ))}
            </Swiper>

            <CardContent className="bg-[#f5be9e]  text-[#253c3f] border-t-2">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontFamily: "Cinzel",
                  fontOpticalSizing: "auto",
                  fontWeight: "600",
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
            <CardActions className="bg-[rgb(245,190,158)] ">
              <Button size="small">Details</Button>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        ))}
      </>
    );
  };

  return (
    <div
      className="relative p-5 flex justify-center align-center flex-col gap-5 bg-[#548780] border-t-[#ea9573] border-t-4 [&_.swiper-pagination-bullet-active]:bg-[#548780]! "
      style={{
        fontFamily: "Cinzel",
        fontOpticalSizing: "auto",
        letterSpacing: "0.1rem",
      }}
    >
      <h2 className="text-4xl text-center font-bold text-white">
        {t("ourProjects")}
      </h2>
      <Cardgenerator projectsArray={projects} />
      <button className="bg-[#ea9573]   pt-2 pb-2 pl-10 pr-10 text-white font-semibold">
        Explore More...
      </button>
    </div>
  );
}
