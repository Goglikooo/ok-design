import { services } from "../data/services.js";

import { useTranslation } from "react-i18next";

import { Link, Outlet, useParams } from "react-router-dom";
export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden bg-[#548780]  flex flex-col gap-8 
        ${i18n.language == "ge" ? "font-georgian" : ""}`}
    >
      <h1 className="text-4xl font-bold text-center pt-20 text-white">
        {t("ourServices")}
      </h1>

      <div className="max-w-6xl mx-auto px-3 grid grid-cols-3 gap-2 md:gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={` ${
              params.serviceId == index
                ? "bg-[#55baac] shadow-[#5c5b5b] shadow-lg"
                : "bg-[#ea9573] hover:bg-[#f4804e]"
            }   p-3 min-w-0 text-center  text-white rounded-md shadow-md flex justify-center items-center cursor-pointer`}
          >
            <Link to={`/services/${index}`}>
              <h2
                className={` sm:text-xl md:text-2xl lg:text-2xl ${
                  i18n.language == "ge" ? "text-[15px]" : " text-[12px]"
                }`}
              >
                {t(service.title)}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      <div className=" flex-1 max-w-6xl mx-auto w-full px-4 flex flex-col items-center justify-start mt-0 xl:mt-15">
        <Outlet />
        <Link
          to="/contact"
          className="bg-[#ea9573] hover:bg-[#f4804e] text-md lg:text-lg text-white px-8 py-3 rounded-md  transition-colors cursor-pointer"
        >
          {t("contactMe")}
        </Link>
      </div>
    </div>
  );
}
