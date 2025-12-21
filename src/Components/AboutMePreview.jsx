import { useTranslation } from "react-i18next";
import { Reveal } from "../utils/reveal";
export default function AboutMePreview({ id }) {
  const { t } = useTranslation();
  return (
    <section id={id} className="bg-[#f5be9e] scroll-mt-15.5">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8  ">
        <div className=" mx-auto grid md:grid-cols-2 gap-5 items-center ">
          <div className=" border-[#254c3f] border-2 shadow-black shadow">
            <img
              src="./images/About me/MyPhoto.jpeg"
              alt="Designer's Photo"
              loading="lazy"
            />
          </div>
          <div>
            <Reveal>
              <h2 className="text-5xl font-semibold text-white mb-6">
                {t("aboutMe")}
              </h2>
            </Reveal>
            <div className="font-medium tracking-wider mb-8">
              <Reveal>
                <p>{t("aboutMeText")}</p>
                <p className="mt-8">{t("aboutMeTextEnd")}</p>
              </Reveal>
            </div>
            <button className="bg-[#ea9573] w-full text-white font-semibold pt-2 pb-2 pl-10 pr-10">
              <span>{t("contactMe")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
