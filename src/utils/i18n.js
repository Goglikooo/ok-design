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
      viewAllServices: "View All Details",
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
      // - Design and Visualization
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
      serviceDVresult:
        "Make decisions with confidence, without unnecessary risk.",
      // - Turn-Key Service
      serviceTKSubtitle: "Full process — one responsible party",
      serviceTKDescription:
        "Complete project management from concept to final delivery",
      ServiceTKSpacePlanning: "Full realization of the design project",
      ServiceTKStyleAtmosphere: "Coordination of renovation works",
      ServiceTKMaterialsFurniture: "Selection and purchase of materials",
      ServiceTK3DVisualizations: "Ordering furniture and finishing elements",
      ServiceTKTechnicalDrawings: "Quality and timeline control",

      serviceTKresult: "A finished space — delivered calmly and stress-free.",
      serviceWhatYouGet: "What You Get",
      serviceTKresultTitle: "Result",
      serviceTKresult: "A finished space — delivered calmly and stress-free.",
      // - Renovation Monitoring
      serviceRMSubtitle: "When the design must be executed exactly as planned",
      serviceRMDescription:
        "Details define the outcome. OK Design ensures that construction work follows the approved design and visualizations precisely.",
      ServiceRMVisits: "Regular on-site visits",
      ServiceRMWorkControl: "Quality control based on the design project",
      ServiceRMInstructions: "Clear guidance for contractors",
      ServiceRMCorrections: "Early detection and correction of issues",
      ServiceRMChangeManagement:
        "Management of necessary adjustments during the process",
      serviceRMresult:
        "The final result matches exactly what you approved at the start.",

      // Adresses
      LisiLakeTkhilnari: "Lisi Tkhinvala",
      Kazbegi: "Kazbegi Street",
      Mirtskhulava: "Mirtskhulava Street",
      Saburtalo: "Saburtalo",
      AlliancePriviledge: "Alliance Priviledge",
      Gulripshi: "Gulripshi Street",
      Shartava: "Shartava Street",
      Gorgiladze: "Gorgiladze Street",
      Pirosmani: "Pirosmani Street",
      GabrielSalosi: "Gabriel Salosi Street",
      Cholokashvili: "Cholokashvili Street",
      FrenchDistrict: "French district",
      Tashkenti: "Tashkenti Street",
      Tamarashvili: "Tamarashvili Street",
      //Cities
      Tbilisi: "Tbilisi",
      Batumi: "Batumi",
      Gudauri: "Gudauri",
      TbilisiGeorgia: "Tbilisi, Georgia",
      BatumiGeorgia: "Batumi, Georgia",
      GudauriGeorgia: "Gudauri, Georgia",

      // square meters abbreviation
      m2: "m²",

      //project info example
      Location: "Location",
      Area: "Area",
      Services: "Services",
      Close: "Close",

      // process steps descriptions
      initialConsultationDescription:
        "We start with an in-depth consultation to understand your lifestyle, aesthetic preferences, budget, and project goals. This step defines the vision and scope for the entire design journey.",
      conceptDevelopmentDescription:
        "Based on our consultation, we develop a cohesive design concept including space planning, mood boards, and initial layouts. This phase establishes the creative direction of your project.",
      _3DVisualizationDescription:
        "We bring the concept to life with photorealistic 3D renderings, allowing you to experience the space before execution. Materials, lighting, and proportions are visualized in detail.",
      clientReviewAndRevisionsDescription:
        "You review the proposed design and visuals, and we refine the project based on your feedback. This collaborative process ensures the final design fully reflects your expectations.",
      finalDocumentationDescription:
        "Once approved, we prepare detailed technical drawings, specifications, and material schedules required for accurate and efficient execution.",
      implementationDescription:
        "Depending on your selected service, we manage the project from start to finish (Turn-Key), provide professional renovation monitoring, or hand over the documentation to your execution team.",
      finalRevealDescription:
        "We complete a final walkthrough to ensure every detail meets our standards and yours. Your space is delivered fully realized, refined, and ready to enjoy.",

      //timeframe

      _1or2Hours: "1-2 hours",
      _1day: "1 day",
      _3till7Days: "3-7 days",
      _1till2Weeks: "1-2 weeks",
      variesOnProject: "Varies by project",

      //button
      contactUs: "Book Your Consultation",

      //contact page
      contactTitle: "Contact",
      contactDescription:
        "Ready to start your design journey? We'd love to hear about your project. Fill out the form below or reach out directly.",
      Email: "E-Mail",
      EmailPlaceholder: "your@email.com",
      Phonenumber: "Phone",
      WorkingHours: "Hours",
      WorkingPeriod: "Mo - Sa: 11:00 AM - 7:00 PM",
      SendUsMessage: "Send us a message",
      Name: "Name",
      NamePlaceholder: "Your full name",
      ServiceInterestedIn: "Service interested in",
      SelectService: "Select a service",
      JustConsultation: "Just a Consultation",
      MessageField: "Message",
      MessageFieldPlaceholder: "Tell us about your project",
      SendMessage: "Send message",
      MessageSentSuccess: "Message sent successfully",
      WeWillGetBackToYou: "We'll get back to you within 24 hours.",

      //FAQ
      FAQ: "Frequently Asked Questions",
      FirstQuestion: "How is the project cost determined?",
      FirstQuestionAnswer:
        "The project cost depends on the size of the space, project complexity, selected services, and overall scope. Each project is priced individually after reviewing the details.",
      SecondQuestion: "How involved do I need to be in the process?",
      SecondQuestionAnswer:
        "The process is structured and transparent. All key decisions are approved in advance, and clear visualizations and guidance are provided, minimizing the need for ongoing involvement.",
      ThirdQuestion: "Do you work remotely in other cities?",
      ThirdQuestionAnswer:
        "Yes. OK Design has completed projects remotely in different cities. Planning, visualizations, and coordination are handled online without compromising quality.",
      FourthQuestion:
        "At which stages is the designer involved, and when is contact required?",
      FourthQuestionAnswer:
        "The designer is actively involved at all key stages. Client contact is required only for decision-making moments — the rest of the process is managed independently by OK Design.",
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
      viewAllServices: "ყველა სერვისი დეტალურად",
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
      // - Design and Visualization
      serviceDVSubtitle: "იდეა, რომელიც წინასწარ ხედვად იქცევა",
      serviceDVDescription:
        "OK Design-ში დიზაინი იწყება შენგან — შენი ცხოვრების სტილიდან, საჭიროებებიდან და სივრცის პოტენციალიდან. ვიზუალიზაციის ეტაპზე შენ უკვე ხედავ საბოლოო შედეგს, სანამ რემონტი დაიწყება.",
      ServiceDVSpacePlanning: "სივრცის გააზრებული დაგეგმვა",
      ServiceDVStyleAtmosphere: "ინდივიდუალური სტილი და ატმოსფერო",
      ServiceDVMaterialsFurniture: "მასალებისა და ავეჯის ზუსტი შერჩევა",
      ServiceDV3DVisualizations: "დეტალური 3D ვიზუალიზაციები",
      ServiceDVTechnicalDrawings: "სამუშაო ნახაზები რეალური შესრულებისთვის",
      serviceDVresult:
        "დასრულებული სივრცე — მშვიდად და ზედმეტი სტრესის გარეშე.",
      serviceWhatYouGet: "რას იღებ",
      serviceDVresultTitle: "შედეგი",
      serviceDVresult: "გადაწყვეტილებებს იღებ დარწმუნებით, რისკების გარეშე.",
      // - Turn-Key Service
      serviceTKSubtitle: "სრული პროცესი — ერთი პასუხისმგებელი",
      serviceTKDescription:
        "თუ გინდა შედეგი, მაგრამ არ გინდა პროცესში ჩაძირვა, Turn-Key სერვისი შენთვისაა. OK Design მართავს ყველაფერს — იდეიდან მზადყოფნაში ჩაბარებამდე.",
      ServiceTKSpacePlanning: "დიზაინ-პროექტის სრული რეალიზაცია",
      ServiceTKStyleAtmosphere: "სარემონტო სამუშაოების კოორდინაცია",
      ServiceTKMaterialsFurniture: "მასალების შერჩევა და შეძენა",
      ServiceTK3DVisualizations: "ავეჯისა და დეტალების შეკვეთა",
      ServiceTKTechnicalDrawings: "ხარისხისა და ვადების კონტროლი",
      serviceTKresult:
        "დასრულებული სივრცე — მშვიდად და სტრესის გარეშე ჩაბარებული.",

      // - Renovation Monitoring
      serviceRMSubtitle: "როცა დიზაინი ზუსტად უნდა განხორციელდეს",
      serviceRMDescription:
        "რემონტის დროს დეტალები წყვეტს ყველაფერს. OK Design უზრუნველყოფს, რომ შესრულება ზუსტად შეესაბამებოდეს დამტკიცებულ დიზაინსა და ვიზუალიზაციას.",
      ServiceRMVisits: "ობიექტზე რეგულარული ვიზიტები",
      ServiceRMWorkControl: "სამუშაოების კონტროლი პროექტის მიხედვით",
      ServiceRMInstructions: "ხელოსნებისთვის დეტალური მითითებები",
      ServiceRMCorrections: "შეცდომების დროული კორექცია",
      ServiceRMChangeManagement: "ცვლილებების მართვა პროცესში",
      serviceRMresult: "საბოლოო შედეგი ისეთივეა, როგორსაც თავიდან ხედავდი.",

      // Adresses
      LisiLakeTkhilnari: "ლისი თხინვალა",
      Kazbegi: "ყაზბეგის ქუჩა",
      Mirtskhulava: "მირცხულავას ქუჩა",
      Saburtalo: "საბურთალო",
      AlliancePriviledge: "ალიანს ფრივილეჯი",
      Gulripshi: "გულრიფშის ქუჩა",
      Shartava: "შარტავას ქუჩა",
      Gorgiladze: "გორგილაძის ქუჩა",

      Pirosmani: "ფიროსმანის ქუჩა",
      Cholokashvili: "ჩოლოყაშვილის ქუჩა",
      FrenchDistrict: "ფრანგული უბანი",
      GabrielSalosi: "გაბრიელ სალოსის ქუჩა",
      Tashkenti: "ტაშკენტის ქუჩა",
      Tamarashvili: "თამარაშვილის ქუჩა",
      Tbilisi: "თბილისი",
      Batumi: "ბათუმი",
      Gudauri: "გუდაური",
      TbilisiGeorgia: "თბილისი, საქართველო",
      BatumiGeorgia: "ბათუმი, საქართველო",
      GudauriGeorgia: "გუდაური, საქართველო",
      // square meters abbreviation
      m2: "მ²",

      //project info example
      Location: "ლოკაცია",
      Area: "ფართობი",
      Services: "სერვისები",
      Close: "დახურვა",

      // process steps descriptions
      initialConsultationDescription:
        "პირველ ეტაპზე ვხვდებით ერთმანეთს და დეტალურად ვსაუბრობთ თქვენს საჭიროებებზე, გემოვნებაზე, ბიუჯეტსა და მიზნებზე. აქედან იწყება პროექტის საერთო ხედვის ჩამოყალიბება.",
      conceptDevelopmentDescription:
        "მიღებული ინფორმაციის საფუძველზე ვამუშავებთ სივრცის დაგეგმვას, სტილის მიმართულებას და საწყის იდეებს, რომლებიც პროექტის ხასიათს განსაზღვრავს.",
      _3DVisualizationDescription:
        "დიზაინის იდეას ვაქცევთ რეალისტურ ვიზუალად, რათა წინასწარ დაინახოთ, როგორი იქნება თქვენი სივრცე — მასალებით, განათებითა და დეტალებით.",
      clientReviewAndRevisionsDescription:
        "თქვენი შეფასებისა და კომენტარების მიხედვით დიზაინი იხვეწება, სანამ საბოლოო შედეგი სრულად არ დაემთხვევა თქვენს მოლოდინებს.",
      finalDocumentationDescription:
        "დამტკიცებული პროექტის საფუძველზე ვამზადებთ ყველა საჭირო ნახაზსა და დეტალს, რაც რეალიზაციისთვის აუცილებელია.",
      implementationDescription:
        "არჩეული სერვისის მიხედვით, ვმართავთ პროექტს სრულად, ვაკვირდებით სარემონტო პროცესს ან გადმოგცემთ სრულ დოკუმენტაციას.",
      finalRevealDescription:
        "სამუშაოების ბოლოს ვამოწმებთ თითოეულ დეტალს და გადმოგცემთ სრულად დასრულებულ, ფუნქციურ და ჰარმონიულ სივრცეს.",

      //timeframe

      _1or2Hours: "1-2 საათი",
      _1day: "1 დღე",
      _3till7Days: "3-7 დღე",
      _1till2Weeks: "1-2 კვირა",
      variesOnProject: "დამოკიდებულია პროექტზე",

      //button
      contactUs: "დაჯავშნე კონსულტაცია",
      //contact page
      contactTitle: "საკონტაქტო ველი",
      contactDescription:
        "თუ მზად ხარ პროცესის დასაწყებად, სიამოვნებით მოვისმენთ თქვენი პროექტის შესახებ. მოგვწერე ფორმის საშუალებით ან დაგვიკავშირდი პირდაპირ",
      Email: "ელ.ფოსტა",
      EmailPlaceholder: "your@email.com",
      Phonenumber: "ტელეფონის ნომერი",
      WorkingHours: "სამუშაო საათები",
      WorkingPeriod: "ორშაბათი - შაბათი: 11:00 - 19:00",
      SendUsMessage: "გამოგვიგზავნე შეტყობინება",
      Name: "თქვენი სახელი",
      NamePlaceholder: "სახელი გვარი",
      ServiceInterestedIn: "აირჩიე სერვისი",
      SelectService: "სერვისის არჩევა",
      JustConsultation: "კონსულტაცია",
      MessageField: "შეტყობინების ველი",
      MessageFieldPlaceholder: "მოგვიყევი თქვენი პროექტის შესახებ",
      SendMessage: "შეტყობინების გაგზავნა",
      MessageSentSuccess: "შეტყობინება წარმატებით გაიგზავნა",
      WeWillGetBackToYou: "ჩვენ დაგიბრუნდებით პასუხით არაუგვიანეს 24 საათისა",

      //FAQ
      FAQ: "ხშირად დასმული კითხვები",
      FirstQuestion: "როგორ განისაზღვრება პროექტის ღირებულება?",
      FirstQuestionAnswer:
        "პროექტის ღირებულება დამოკიდებულია სივრცის ზომაზე, პროექტის სირთულეზე, შერჩეულ სერვისზე და სამუშაოს მასშტაბზე. თითოეული პროექტი ფასდება ინდივიდუალურად, დეტალების განხილვის შემდეგ.",
      SecondQuestion: "რამდენად ჩართული ვიქნები პროცესში?",
      SecondQuestionAnswer:
        "მუშაობის პროცესი გამჭვირვალე და სტრუქტურირებულია. ყველა მნიშვნელოვანი გადაწყვეტილება წინასწარ შეთანხმდება, ხოლო პროცესის განმავლობაში იღებთ მკაფიო ვიზუალიზაციებსა და მიმართულებებს, რაც ზედმეტ ჩართულობას არ საჭიროებს.",
      ThirdQuestion: "მუშაობთ თუ არა დისტანციურად სხვა ქალაქებში?",
      ThirdQuestionAnswer:
        "დიახ. OK Design წარმატებით მუშაობს დისტანციურად სხვადასხვა ქალაქში. დაგეგმვა, ვიზუალიზაციები და კოორდინაცია შესაძლებელია ონლაინ, შედეგის ხარისხის დაკარგვის გარეშე.",
      FourthQuestion:
        "რა ეტაპზე არის დიზაინერი ჩართული და როდის არის საჭირო კონტაქტი?",
      FourthQuestionAnswer:
        "დიზაინერი აქტიურად არის ჩართული ყველა საკვანძო ეტაპზე. კონტაქტი საჭიროა მხოლოდ გადაწყვეტილებების მიღების მომენტებში — დანარჩენ პროცესს OK Design მართავს დამოუკიდებლად.",
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
