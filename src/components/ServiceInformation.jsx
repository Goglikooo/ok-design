import { div } from "motion/react-client";
import { servicesExplained } from "../data/servicesExplained.js";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ServicesElement() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const service = servicesExplained[params.serviceId];
  return (
    <div className="grid xl:grid-cols-2 gap-10 pb-15 text-white md:text-xl xl:text-2xl ">
      <div className=" flex flex-col gap-5 ">
        <div>
          <h3 className="text-2xl font-bold">{t(`${service.subtitle}`)}</h3>
        </div>
        <div>
          <p>{t(`${service.description}`)}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{t(`serviceWhatYouGet`)}:</h3>
          <div>
            <ol className="list-decimal list-inside ">
              {service.includes.map((item, idx) => (
                <li key={idx}>{t(`${item}`)}</li>
              ))}
            </ol>
          </div>
        </div>
        <div>
          <div className=" flex flex-row gap-2">
            <p className="text-2xl font-bold">{t(`serviceDVresultTitle`)}:</p>
            <p>{t(`${service.result}`)}</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <img src="/images/Service.jpg" alt="servicesImage" />
      </div>
    </div>
  );
}
