import { useTranslation } from "react-i18next";
export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full bg-green-200">
      <h1 className="text-4xl font-bold text-center pt-20">
        {t("ourProjects")}
      </h1>
    </div>
  );
}
