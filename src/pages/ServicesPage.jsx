import { services } from "../data/services.js";

import { useTranslation } from "react-i18next";

import { Link, Outlet, useParams } from "react-router-dom";
export default function ServicesPage() {
  const { t } = useTranslation();
  const params = useParams();
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f5be9e] flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center pt-20">
        {t("ourServices")}
      </h1>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8 font-georgian">
        {services.map((service, index) => (
          <div
            key={index}
            className={` ${
              params.serviceId == index
                ? "bg-[#55baac]"
                : "bg-[#548780] hover:bg-[#69aaa1]"
            }   p-3 min-w-0 text-center  text-white rounded-md shadow-md flex justify-center items-center cursor-pointer`}
          >
            <Link to={`/services/${index}`}>
              <h2 className="text-[14px] md:text-2xl font-semibold">
                {t(service.title)}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      <div className=" flex-1 max-w-6xl mx-auto w-full px-4 font-georgian flex flex-col items-center justify-start mt-0 xl:mt-20">
        <Outlet />
        <Link to="/contact">
          <button className="bg-[#ea9573] w-full text-white font-semibold pt-2 pb-2 pl-10 pr-10 cursor-pointer hover:bg-[#f4804e] mb-10 ">
            <span>{t("contactMe")}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
