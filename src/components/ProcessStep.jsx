import { useTranslation } from "react-i18next";

export function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  duration,
  image,
  isLast,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-neutral-200 -mb-12" />
      )}

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Content Side */}
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-24 h-24 bg-[#253c3f] text-white rounded-full flex items-center justify-center relative z-10">
              <span className="text-4xl">{number}</span>
            </div>

            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-6 h-6 text-white" />
                <h3 className="text-white text-xl font-semibold">{t(title)}</h3>
              </div>

              <p
                className={`text-white mb-3 ${
                  i18n.language == "ge" ? "text-lg" : ""
                }`}
              >
                {t(description)}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ea9573] text-white rounded-full">
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg">{t(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={number % 2 === 0 ? "md:order-first" : ""}>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
