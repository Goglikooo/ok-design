import { ArrowRight, Pen, Key, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function ServicesPreview({ id }) {
  const { t, i18n } = useTranslation();
  const services = [
    {
      icon: Pen,
      title: `${t("firstServiceTitle")}`,
      description: `${t("firstServiceDescription")}`,
    },
    {
      icon: Key,
      title: `${t("secondServiceTitle")}`,
      description: `${t("secondServiceDescription")}`,
    },
    {
      icon: ClipboardCheck,
      title: `${t("thirdServiceTitle")}`,
      description: `${t("thirdServiceDescription")}`,
    },
  ];

  return (
    <section
      id={id}
      className="py-8 bg-[#f5be9e] border-t-[#ea9573] border-t-4 scroll-mt-15.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-10 text-white font-bold">
          <h2
            style={{
              fontOpticalSizing: "auto",
              letterSpacing: "0.1rem",
              fontSize: "40px",
            }}
            className={` mb-4  ${i18n.language == "ge" ? "font-georgian" : ""}`}
          >
            {t("ourServices")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 bg-[#548780] rounded-lg hover:shadow-md transition-shadow border-[#253c3f] border-4"
              style={{
                fontFamily: "Cinzel",
                fontOpticalSizing: "auto",
                boxShadow: "5px 5px 5px black",
              }}
            >
              <div className="inline-flex p-4 bg-[#f5be9e] text-white rounded-full mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-white mb-3">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-[#ea9573] w-full text-white font-semibold pt-2 pb-2 pl-10 pr-10">
            <span>{t("viewAllServices")}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
