import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcomeMessage: "Welcome to React and react-i18next",
      homeButton: "Home",
      aboutButton: "About",
      projectsButton: "Projects",
      contactButton: "Contact",
      getStarted: "Get Started",
      slogan: "Sophisticated interiors for modern living",
      sloganAddition:
        "OK Design delivers high-end design solutions tailored to your lifestyle and vision.",
      ourProjects: "Featured Projects",
      viewAllProjects: "View All Projects",
      viewAllServices: "View All Services",
      initialConsultation: "Initial Consultation",
      conceptDevelopment: "Concept Development",
      _3DVisualization: "3D Visualization",
      clientReviewAndRevisions: "Client Review & Revisions",
      finalDocumentation: "Final Documentation",
      implementation: "Implementation",
      finalReveal: "Final Reveal",
      howWeWork: "How We Work",
      howWeWorkFullText:
        "Our structured 7-step workflow keeps your project clear, efficient and predictable — from the first conversation to the final handover. We stay transparent, responsive, and detail-focused at every stage.",
      LearnAboutOurProcess: "Learn About Our Process",
    },
  },
  ge: {
    translation: {
      welcomeMessage: "მოგესალმებათ რეაქთი!",
      homeButton: "მთავარი",
      aboutButton: "ჩემ შესახებ",
      projectsButton: "პროექტები",
      contactButton: "კონტაქტი",
      getStarted: "პირველი ნაბიჯი",
      slogan: "თანამედროვე ცხოვრებისთვის შექმნილი დახვეწილი ინტერიერი",
      sloganAddition:
        "OK Design გთავაზობთ თქვენს საჭიროებებზე მორგებულ მაღალი დონის დიზაინს",
      ourProjects: "ჩვენი პროექტები",
      viewAllProjects: "ყველა პროექტის ნახვა",
      viewAllServices: "ყველა სერვისის ნახვა",
      initialConsultation: "საწყისი კონსულტაცია",
      conceptDevelopment: "კონცეფციის განვითარება",
      _3DVisualization: "3D ვიზუალიზაცია",
      clientReviewAndRevisions: "რენდერების განხილვა კლიენტთან & დახვეწა",
      finalDocumentation: "საბოლოო დოკუმენტაცია",
      implementation: "განხორციელება",
      finalReveal: "საბოლოო წარდგენა",
      howWeWork: "როგორ ვმუშაობთ",
      howWeWorkFullText:
        "ჩვენი სტრუქტურირებული 7-საფეხურიანი სამუშაო პროცესი უზრუნველყოფს პროექტის მკაფიო, ეფექტურ და პროგნოზირებად განვითარებას — პირველი კონტაქტიდან პროექტის დასრულებამდე. თითოეულ ეტაპზე, კი, ყურადღება პროცესის ხარისხზეა მიმართული",
      LearnAboutOurProcess: "პროცესების დეტალურად ნახვა",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
