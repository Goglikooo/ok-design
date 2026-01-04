import { useTranslation } from "react-i18next";
export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full bg-[#548780]">
      <h1 className="text-4xl font-bold text-center pt-20">{t("contactMe")}</h1>
    </div>
  );
}
