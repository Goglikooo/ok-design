import { useTranslation } from "react-i18next";
export default function ProcessPreview({ id }) {
  const { t, i18n } = useTranslation();
  const processSteps = [
    `${t("initialConsultation")}`,
    `${t("conceptDevelopment")}`,
    `${t("_3DVisualization")}`,
    `${t("clientReviewAndRevisions")}`,
    `${t("finalDocumentation")}`,
    `${t("implementation")}`,
    `${t("finalReveal")}`,
  ];
  return (
    <section
      id={id}
      className="bg-[#548780] border-t-[#ea9573] border-t-4 text-white scroll-mt-15.5"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div>
            <h2
              style={{ fontSize: "40px" }}
              className={`text-5xl font-semibold mb-6 ${
                i18n.language == "ge" ? "font-georgian " : ""
              }`}
            >
              {t("howWeWork")}
            </h2>
            <p className=" mb-8">{t("howWeWorkFullText")}</p>
            <div className="space-y-3 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#253c3f] text-white rounded-full flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-white">{step}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#ea9573] w-full text-white font-semibold pt-2 pb-2 pl-10 pr-10">
              <span>{t("LearnAboutOurProcess")}</span>
            </button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg hidden lg:block">
            <img
              src="./images/how we work.jpeg"
              alt="Design Process"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
