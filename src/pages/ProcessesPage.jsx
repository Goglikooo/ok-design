import { useTranslation } from "react-i18next";
export default function ProcessesPage() {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full bg-green-200">
      <h1 className="text-4xl font-bold text-center pt-20">How We Work</h1>
    </div>
  );
}
