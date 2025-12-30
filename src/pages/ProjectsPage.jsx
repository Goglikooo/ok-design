import { useTranslation } from "react-i18next";
export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full bg-[#548780] border-b-3 border-[#ea9573]">
      <h1 className="text-4xl font-bold text-center pt-20 text-amber-50">
        {t("ourProjects")}
      </h1>
    </div>
  );
}
