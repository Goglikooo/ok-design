import { useTranslation } from "react-i18next";
import { ProcessStep } from "../components/ProcessStep.jsx";
import { steps } from "../data/processesSteps.js";
import { Link } from "react-router-dom";
export default function ProcessesPage() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`min-h-screen w-full bg-[#548780] ${
        i18n.language === "ge" ? "font-georgian" : ""
      }`}
    >
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            {t("howWeWork")}
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-5 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/contact"
            className="bg-[#ea9573] hover:bg-[#f4804e] text-white px-8 py-3 rounded-md  transition-colors cursor-pointer"
          >
            {t("contactUs")}
          </Link>
        </div>
      </section>
    </div>
  );
}
