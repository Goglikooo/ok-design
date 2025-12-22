import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const date = (new Date().getFullYear() - 2019).toString();
const resources = {
  en: {
    translation: {
      welcomeMessage: "Welcome to React and react-i18next",
      homeButton: "Home",
      servicesButton: "Services",
      projectsButton: "Projects",
      processesButton: "Workflow",
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
      ourServices: "Our Services",
      ourServicesSlogan:
        "Comprehensive interior design solutions tailored to your needs",
      firstServiceTitle: "Design & Visualization",
      firstServiceDescription:
        "Complete design solutions with 3D renderings and technical drawings",
      secondServiceTitle: "Turn-Key Solution",
      secondServiceDescription: "Full project management from start to finish",
      thirdServiceTitle: "Renovation Monitoring",
      thirdServiceDescription: "Professional oversight for quality execution",
      aboutMe: "About Me",
      aboutMeText: `I discovered my passion for interior design during the pandemic
                and have since built a practice around creating beautiful,
                functional spaces. With ${date}+ years of experience and a
                portfolio of successful projects, I handle every step personally
                — from consultation and concept to 3D visualization, feedback,
                documentation, and final implementation.`,
      aboutMeTextEnd:
        "OK Design is based on my initials — Oliko Kikvilashvili — and every project carries my personal signature. Each space is created to perfectly reflect your personality, offering you an inspiring and comfortable environment for life. I am ready to turn your vision into tangible reality!",
      totalArea: "Total Area",
      m: "m",
      contactMe: "Get in Touch",
      contact: "Contact",
      followUs: "Follow Us",

      // Services Page
      serviceDVSubtitle: "An idea you can see before it becomes reality",
      serviceDVDescription:
        "Complete design solutions with 3D renderings and technical drawings",
      ServiceDVSpacePlanning: "Thoughtful space planning",
      ServiceDVStyleAtmosphere: "A personalized style and atmosphere",
      ServiceDVMaterialsFurniture:
        "Precise selection of materials and furniture",
      ServiceDV3DVisualizations: "Detailed 3D visualizations",
      ServiceDVTechnicalDrawings: "Technical drawings for execution",

      serviceDVresult:
        "Make decisions with confidence, without unnecessary risk.",
      serviceWhatYouGet: "What You Get",
      serviceDVresultTitle: "Result",
    },
  },
  ge: {
    translation: {
      welcomeMessage: "მოგესალმებათ რეაქთი!",
      homeButton: "მთავარი",
      servicesButton: "სერვისები",
      projectsButton: "პროექტები",
      processesButton: "პროცესები",
      contactButton: "კონტაქტი",
      getStarted: "პირველი ნაბიჯი",
      slogan: "თანამედროვე ცხოვრებისთვის შექმნილი დახვეწილი ინტერიერი",
      sloganAddition:
        "OK Design გთავაზობთ თქვენს საჭიროებებზე მორგებულ დიზაინს",
      ourProjects: "ჩვენი პროექტები",
      viewAllProjects: "ყველა პროექტის ნახვა",
      viewAllServices: "ყველა სერვისის ნახვა",
      initialConsultation: "საწყისი კონსულტაცია",
      conceptDevelopment: "კონცეფციის განვითარება",
      _3DVisualization: "3D ვიზუალიზაცია",
      clientReviewAndRevisions: "რენდერების განხილვა კლიენტთან და დახვეწა",
      finalDocumentation: "საბოლოო დოკუმენტაცია",
      implementation: "განხორციელება",
      finalReveal: "საბოლოო წარდგენა",
      howWeWork: "როგორ ვმუშაობთ",
      howWeWorkFullText:
        "ჩვენი სტრუქტურირებული 7-საფეხურიანი სამუშაო პროცესი უზრუნველყოფს პროექტის მკაფიო, ეფექტურ და პროგნოზირებად განვითარებას — პირველი კონტაქტიდან პროექტის დასრულებამდე. თითოეულ ეტაპზე, კი, ყურადღება პროცესის ხარისხზეა მიმართული",
      LearnAboutOurProcess: "პროცესების დეტალურად ნახვა",
      ourServices: "ჩვენი სერვისები",
      ourServicesSlogan:
        "ინტერიერის დიზაინი, რომელიც თქვენს საჭიროებებზეა მორგებული",
      firstServiceTitle: "დიზაინი და ვიზუალიზაცია",
      firstServiceDescription:
        "სრული დიზაინი 3D რენდერებითა და ტექნიკური ნახაზებით",
      secondServiceTitle: 'Turn-Key ("გასაღების") სერვისი',
      secondServiceDescription:
        "პროექტის სრული მართვა დასაწყისიდან დასრულებამდე",
      thirdServiceTitle: "სარემონტო სამუშაოების მონიტორინგი",
      thirdServiceDescription:
        "პროფესიული ზედამხედველობა ხარისხიანი შესრულებისთვის",
      aboutMe: "ჩემს შესახებ",
      aboutMeText: `დიზაინისადმი სიყვარული პანდემიის დროს აღმოვაჩინე და მას შემდეგ ჩემი პრაქტიკა ულამაზესი და უაღრესად ფუნქციური სივრცეების შექმნაზეა ორიენტირებული. ${date}+ წლიანი პრაქტიკული გამოცდილებით და წარმატებული პროექტების შთამბეჭდავი პორტფოლიოთი, პროექტის ყველა ეტაპს პირადად ვხელმძღვანელობ — დაწყებული პირველადი კონსულტაციით, კონცეფციის შემუშავებით, 3D ვიზუალიზაციით, დეტალური განხილვებითა და დოკუმენტაციის მომზადებით, დამთავრებული საბოლოო შედეგის წარდგენით.`,
      aboutMeTextEnd:
        "OK Design ჩემს ინიციალებზეა დაფუძნებული — ოლიკო კიკვილაშვილი — და თითოეული პროექტი ჩემი ხელწერაა. თითოეული სივრცე იქმნება იმისთვის, რომ იდეალურად ასახავდეს თქვენს პიროვნებას და გთავაზობდეთ ინსპირაციულ და კომფორტულ გარემოს ცხოვრებისათვის. მე მზად ვარ ვაქციო თქვენი ხედვა ხელშესახებ რეალობად!",
      totalArea: "ფართობი",
      m: "მ",
      contactMe: "საკონტაქტო ინფორმაცია",
      contact: "კონტაქტი",
      followUs: "სოციალური ქსელები",

      // Services Page
      serviceDVSubtitle: "იდეა, რომელიც წინასწარ ხედვად იქცევა",
      serviceDVDescription:
        "OK Design-ში დიზაინი იწყება შენგან — შენი ცხოვრების სტილიდან, საჭიროებებიდან და სივრცის პოტენციალიდან. ვიზუალიზაციის ეტაპზე შენ უკვე ხედავ საბოლოო შედეგს, სანამ რემონტი დაიწყება.",
      ServiceDVSpacePlanning: "დიზაინ-პროექტის სრული რეალიზაცია",
      ServiceDVStyleAtmosphere: "სარემონტო სამუშაოების კოორდინაცია",
      ServiceDVMaterialsFurniture: "მასალების შერჩევა და შეძენა",
      ServiceDV3DVisualizations: "ავეჯისა და დეტალების შეკვეთა",
      ServiceDVTechnicalDrawings: "ხარისხისა და ვადების კონტროლი",
      serviceDVresult:
        "დასრულებული სივრცე — მშვიდად და ზედმეტი სტრესის გარეშე.",
      serviceWhatYouGet: "რას იღებ",
      serviceDVresultTitle: "შედეგი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ge", // default language
  fallbackLng: "en", // use en if detected lng is not available

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
