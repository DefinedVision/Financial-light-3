import { createContext, useContext, useState, ReactNode } from 'react';
import { serviceTranslations } from '../translations/service-translations';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Navigation
    home: 'Home',
    about: 'Over Ons',
    services: 'Diensten',
    pricing: 'Tarieven',
    certifications: 'Certificeringen',
    contact: 'Contact',
    language: 'Language',
    
    // Hero
    heroTitle: 'Uw Partner in',
    heroTitleHighlight: 'Financieel Advies',
    heroDescription: 'Financial Light biedt professionele boekhoud- en belastingdiensten voor ondernemers en bedrijven. Met jarenlange ervaring en NOAB certificering staan wij voor kwaliteit en betrouwbaarheid.',
    
    // Services
    servicesTitle: 'Onze Diensten',
    servicesDescription: 'Financial Light biedt professionele administratieve en fiscale diensten voor ondernemers',
    readMore: 'Lees meer',
    
    service1Title: 'Boekhouding',
    service1Desc: 'Volledige verzorging van uw administratie, van dagelijkse boekingen tot jaarstukken. Vaste maandtarieven.',
    
    service2Title: 'Belastingaangifte',
    service2Desc: 'Alle belastingaangiften: IB, VPB, BTW en loonheffing. Correct en tijdig ingediend.',
    
    service3Title: 'Loonadministratie',
    service3Desc: 'Loonstroken, aangifte loonheffing, jaaropgaven en arbeidscontracten voor uw personeel.',
    
    service4Title: 'Financieel Advies',
    service4Desc: 'Begeleiding bij het opstarten van uw onderneming met haalbare ondernemingsplannen.',
    
    // About
    aboutTitle: 'Over Financial Light',
    aboutP1: 'Financial Light is een modern en dynamisch administratiekantoor dat zich specialiseert in boekhoudkundige en fiscale dienstverlening voor ondernemers en bedrijven.',
    aboutP2: 'Met onze jarenlange ervaring en expertise helpen wij u bij het administratief en fiscaal in orde maken en houden van uw onderneming. Wij geloven in een persoonlijke benadering en werken graag met u samen om uw financiële doelen te bereiken.',
    
    aboutBenefit1: 'Persoonlijke begeleiding en advies',
    aboutBenefit2: 'NOAB gecertificeerde professionals',
    aboutBenefit3: 'Snelle responstijd en bereikbaarheid',
    aboutBenefit4: 'Transparante prijzen zonder verborgen kosten',
    aboutBenefit5: 'Digitaal werken voor optimale efficiency',
    aboutBenefit6: 'Jarenlange ervaring in diverse sectoren',
    
    whyChooseUs: 'Waarom Kiezen Voor Ons?',
    experienceTitle: 'Ervaring',
    experienceDesc: 'Meer dan 15 jaar ervaring in administratieve dienstverlening voor ondernemers in verschillende branches.',
    qualityTitle: 'Kwaliteit',
    qualityDesc: 'NOAB gecertificeerd kantoor met gekwalificeerde professionals die continue bijgeschoold worden.',
    personalTitle: 'Persoonlijk',
    personalDesc: 'Bij ons bent u geen nummer. Wij bieden persoonlijke begeleiding en staan altijd voor u klaar.',
    modernTitle: 'Modern',
    modernDesc: 'Wij werken met de nieuwste software en technieken voor een efficiënte en accurate administratie.',
    
    // Certifications
    certTitle: 'Certificeringen & Kwaliteit',
    certDescription: 'Wij voldoen aan de hoogste kwaliteitseisen en zijn aangesloten bij erkende brancheorganisaties',
    
    noabCertTitle: 'NOAB Certificering',
    noabCertDesc: 'Aangesloten bij de Nederlandse Orde van Administratie- en Belastingdeskundigen (NOAB). Dit garandeert kwaliteit en vakbekwaamheid.',
    
    trustTitle: 'Vertrouwelijk & Veilig',
    trustDesc: 'Wij werken volgens strikte privacy- en veiligheidsnormen. Uw gegevens zijn bij ons in veilige handen.',
    
    devTitle: 'Continue Ontwikkeling',
    devDesc: 'Onze professionals volgen regelmatig opleidingen en trainingen om op de hoogte te blijven van de laatste wet- en regelgeving.',
    
    noabMemberTitle: 'NOAB Lidmaatschap',
    noabMemberDesc: 'Als NOAB-lid voldoen wij aan strenge eisen op het gebied van opleiding, ervaring en permanente educatie. Dit betekent dat u verzekerd bent van vakbekwame dienstverlening op het hoogste niveau.',
    
    // Contact
    contactTitle: 'Neem Contact Op',
    contactDescription: 'Heeft u vragen of wilt u kennismaken? Neem gerust contact met ons op',
    contactDetailsTitle: 'Contactgegevens',
    
    phone: 'Telefoon',
    email: 'Email',
    address: 'Adres',
    openingHours: 'Openingstijden',
    mondayFriday: 'Maandag-vrijdag',
    saturday: 'Zaterdag',
    sunday: 'Zondag',
    closed: 'Gesloten',
    hours1018: '10:00 tot 18:00',
    callUs: 'U kunt ons altijd telefonisch bereiken op',
    
    makeAppointment: 'Maak een Afspraak',
    appointmentDesc: 'Wilt u liever persoonlijk kennismaken? Bel ons voor het maken van een afspraak op ons kantoor.',
    freeIntro: 'Eerste kennismaking is altijd vrijblijvend!',
    
    sendMessage: 'Stuur ons een Bericht',
    name: 'Naam',
    yourName: 'Uw naam',
    yourEmail: 'uw@email.nl',
    telephone: 'Telefoon',
    message: 'Bericht',
    messagePlaceholder: 'Waar kunnen wij u mee helpen?',
    sendButton: 'Verstuur Bericht',
    
    // Footer
    footerTagline: 'Uw betrouwbare partner in financieel advies en administratie.',
    allRightsReserved: 'Alle rechten voorbehouden.',
    
    // Pricing Page
    pricingTitle: 'Onze Tarieven',
    pricingSubtitle: 'Transparante pakketten voor elke ondernemer. Vaste maandtarieven zonder verborgen kosten.',
    
    lightPackage: 'Light Pakket',
    lightPackageSubtitle: 'Voor de taxi branche en startende ZZPers',
    lightFeature1: 'GEHELE BOEKHOUDING (indien de klant zijn eigen kasboek bijhoudt)',
    lightFeature2: 'BTW EN IB AANGIFTE',
    lightFeature3: 'JAARREKENING',
    lightFeature4: 'ADVIES',
    lightFeature5: 'OVERIGE ZAKEN IN OVERLEG',
    
    businessPackage: 'Business Pakket',
    businessPackageSubtitle: 'Voor startende eenmanszaken',
    businessFeature1: 'GEHELE BOEKHOUDING',
    businessFeature2: 'BTW EN IB AANGIFTE',
    businessFeature3: 'Persoonlijk gesprek en belasting-advies op maat',
    businessFeature4: 'JAARREKENING',
    businessFeature5: 'OVERIGE ZAKEN IN OVERLEG',
    
    megaPackage: 'Mega Pakket',
    megaPackageSubtitle: 'Voor VOFs en BVs',
    megaFeature1: 'GEHELE BOEKHOUDING',
    megaFeature2: 'BTW EN IB AANGIFTE',
    megaFeature3: 'JAARREKENING',
    megaFeature4: 'ADVIES',
    megaFeature5: 'OVERIGE ZAKEN IN OVERLEG',
    
    from: 'v.a.',
    pricingInfoTitle: 'Wat u moet weten over onze tarieven',
    pricingInfo1: 'Alle genoemde prijzen zijn vanaf-prijzen en exclusief BTW. Het exacte tarief wordt bepaald op basis van de grootte en complexiteit van uw administratie.',
    pricingInfo2: 'We hanteren transparante vaste maandtarieven, zodat u precies weet waar u aan toe bent. Geen verrassingen achteraf.',
    pricingInfo3: 'Neem vrijblijvend contact met ons op voor een persoonlijk gesprek en een tarief op maat voor uw specifieke situatie.',
    requestQuote: 'Offerte aanvragen',
    payrollAdministration: 'Salarisadministratie',
    perEmployee: 'per medewerker per maand',
    
    // Stats
    satisfiedClients: 'Tevreden Klanten',
    certified: 'Gecertificeerd',
    yearsExperience: 'Jaar Ervaring',
    
    // About Page
    aboutSubtitle: 'Financial Light is uw betrouwbare partner voor professionele administratieve en fiscale dienstverlening',
    ourStoryTitle: 'Ons Verhaal',
    ourStoryP1: 'Financial Light is opgericht met één doel: ondernemers ontzorgen op financieel en administratief gebied. We begrijpen dat het runnen van een bedrijf veel tijd en energie kost, en dat administratieve verplichtingen vaak als last worden ervaren.',
    ourStoryP2: 'Met onze expertise en persoonlijke aanpak nemen wij deze zorgen uit handen. Wij geloven in een langdurige samenwerking waarbij we niet alleen uw cijfers bijhouden, maar ook actief meedenken over de financiële toekomst van uw onderneming.',
    ourStoryP3: 'Als NOAB-gecertificeerd kantoor en erkend leerbedrijf staan wij voor kwaliteit, vakmanschap en continue ontwikkeling. Onze medewerkers worden regelmatig geschoold om u altijd de beste en meest actuele adviezen te kunnen geven.',
    
    ourValuesTitle: 'Onze Kernwaarden',
    professionalismTitle: 'Professionaliteit',
    professionalismDesc: 'NOAB-gecertificeerd en altijd op de hoogte van de laatste wet- en regelgeving',
    personalApproachTitle: 'Persoonlijke Aanpak',
    personalApproachDesc: 'Vaste contactpersoon die uw onderneming kent en persoonlijk advies geeft',
    
    whyChooseUsTitle: 'Waarom Kiezen Voor Financial Light?',
    noabCertifiedTitle: 'NOAB Gecertificeerd',
    noabCertifiedDesc: 'Als lid van de NOAB voldoen wij aan de hoogste kwaliteitseisen en werken volgens strikte gedragscodes.',
    experiencedTeamTitle: 'Ervaren Team',
    experiencedTeamDesc: 'Ons team bestaat uit ervaren professionals met jarenlange expertise in verschillende branches.',
    fixedRatesTitle: 'Vaste Tarieven',
    fixedRatesDesc: 'Wij hanteren transparante, vaste maandtarieven. Zo weet u precies waar u aan toe bent.',
    modernToolsTitle: 'Moderne Tools',
    modernToolsDesc: 'We werken met de nieuwste software en online portals voor optimale efficiency en inzicht.',
    
    recognizedTrainingCompanyTitle: 'Erkend Leerbedrijf',
    recognizedTrainingCompanyDesc: 'Financial Light is een erkend leerbedrijf. Dit betekent dat wij stagiaires en BBL-leerlingen begeleiden in hun opleiding tot financieel professional.',
    recognizedTrainingCompanyP2: 'Door jonge mensen op te leiden en te begeleiden, investeren wij in de toekomst van ons vak en zorgen we ervoor dat de kennis en ervaring wordt doorgegeven aan een nieuwe generatie vakbekwame professionals.',
    
    // Services Overview Page
    servicesOverviewTitle: 'Onze Diensten',
    servicesOverviewSubtitle: 'Financial Light biedt een breed scala aan administratieve en fiscale diensten voor ondernemers',
    
    completeAdministration: 'Volledige administratie',
    fixedMonthlyRates: 'Vaste maandtarieven',
    incomeTaxReturns: 'Aangifte inkomstenbelasting',
    corporateTaxReturns: 'Aangifte vennootschapsbelasting',
    payrollTaxReturns: 'Aangifte loonheffing',
    payslipsManagement: 'Loonstroken beheer',
    annualStatements: 'Jaaropgaven',
    employmentContracts: 'Arbeidscontracten',
    businessPlans: 'Ondernemingsplannen',
    startupGuidance: 'Begeleiding starters',
    financingAdvice: 'Financieringsadvies',
    fiscalOptimization: 'Fiscale optimalisatie',
    readMore: 'Lees meer',
    
    needHelp: 'Hulp Nodig?',
    needHelpDesc: 'Neem vrijblijvend contact met ons op om te bespreken wat wij voor u kunnen betekenen',
    contactUs: 'Neem Contact Op',
    
    // Certifications Page
    certificationsTitle: 'Certificeringen & Kwaliteit',
    certificationsSubtitle: 'Financial Light voldoet aan de hoogste kwaliteitseisen en is aangesloten bij erkende branche-organisaties',
    
    noabCertificationTitle: 'NOAB Certificering',
    noabCertificationP1: 'Financial Light is aangesloten bij de Nederlandse Orde van Administratie- en Belastingdeskundigen (NOAB). De NOAB is de beroepsorganisatie voor administratie- en belastingadviseurs in Nederland.',
    noabCertificationP2: 'Als NOAB-lid voldoen wij aan strikte eisen op het gebied van vakbekwaamheid, ervaring en permanente educatie. Daarnaast zijn wij verplicht om ons te houden aan de NOAB-gedragscode en zijn onze werkzaamheden gedekt door een beroepsaansprakelijkheidsverzekering.',
    
    noabQuality1: 'Gekwalificeerde en ervaren professionals',
    noabQuality2: 'Verplichte permanente educatie',
    noabQuality3: 'Beroepsaansprakelijkheidsverzekering',
    noabQuality4: 'Gebonden aan strikte gedragscode',
    
    erkendLeerbedrijfTitle: 'Erkend Leerbedrijf',
    erkendLeerbedrijfP1: 'Financial Light is een erkend leerbedrijf. Dit betekent dat wij voldoen aan de kwaliteitseisen die gesteld worden aan bedrijven die leerlingen begeleiden tijdens hun BBL-opleiding (Beroeps Begeleidende Leerweg).',
    erkendLeerbedrijfP2: 'Wij begeleiden jongeren in hun opleiding tot administratief of fiscaal medewerker en bieden hen de mogelijkheid om in de praktijk ervaring op te doen. Zo investeren wij in de toekomst van ons vakgebied en zorgen we voor de volgende generatie vakbekwame professionals.',
    
    leerbedrijf1: 'Praktijkgerichte begeleiding van leerlingen',
    leerbedrijf2: 'Investering in de toekomst van het vak',
    leerbedrijf3: 'Kwaliteitsborging en overdracht van kennis',
    
    professionalStandardsTitle: 'Professionele Normen',
    professionalStandardsP1: 'Naast onze certificeringen hanteren wij ook strikte professionele normen in ons dagelijkse werk:',
    
    standard1: 'Vertrouwelijkheid en geheimhouding',
    standard2: 'Onafhankelijkheid en objectiviteit',
    standard3: 'Integriteit en eerlijkheid',
    standard4: 'Vakbekwaamheid en zorgvuldigheid',
    
    backToOverview: 'Terug naar overzicht',
    
    // Merge service translations
    ...serviceTranslations.nl,
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    pricing: 'Pricing',
    certifications: 'Certifications',
    contact: 'Contact',
    language: 'Language',

    // Hero
    heroTitle: 'Your Financial',
    heroTitleHighlight: 'Partner',
    heroSubtitle: 'Professional administrative and tax services for entrepreneurs. We take care of your financial administration, so you can focus on what you do best: running your business.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',

    // Stats
    satisfiedClients: 'Satisfied Clients',
    certified: 'Certified',
    yearsExperience: 'Years Experience',
    
    // Footer
    footerTagline: 'Your trusted partner in financial advice and administration.',
    allRightsReserved: 'All rights reserved.',
    
    // Pricing Page
    pricingTitle: 'Our Pricing',
    pricingSubtitle: 'Transparent packages for every entrepreneur. Fixed monthly rates without hidden costs.',
    
    lightPackage: 'Light Package',
    lightPackageSubtitle: 'For taxi industry and starting freelancers',
    lightFeature1: 'COMPLETE BOOKKEEPING (if client maintains own cashbook)',
    lightFeature2: 'VAT AND INCOME TAX RETURNS',
    lightFeature3: 'ANNUAL ACCOUNTS',
    lightFeature4: 'ADVICE',
    lightFeature5: 'OTHER MATTERS IN CONSULTATION',
    
    businessPackage: 'Business Package',
    businessPackageSubtitle: 'For starting sole proprietorships',
    businessFeature1: 'COMPLETE BOOKKEEPING',
    businessFeature2: 'VAT AND INCOME TAX RETURNS',
    businessFeature3: 'Personal consultation and tailored tax advice',
    businessFeature4: 'ANNUAL ACCOUNTS',
    businessFeature5: 'OTHER MATTERS IN CONSULTATION',
    
    megaPackage: 'Mega Package',
    megaPackageSubtitle: 'For partnerships and corporations',
    megaFeature1: 'COMPLETE BOOKKEEPING',
    megaFeature2: 'VAT AND CORPORATE TAX RETURNS',
    megaFeature3: 'ANNUAL ACCOUNTS',
    megaFeature4: 'ADVICE',
    megaFeature5: 'OTHER MATTERS IN CONSULTATION',
    
    from: 'from',
    pricingInfoTitle: 'What you need to know about our rates',
    pricingInfo1: 'All mentioned prices are starting prices and exclude VAT. The exact rate will be determined based on the size and complexity of your administration.',
    pricingInfo2: 'We use transparent fixed monthly rates, so you know exactly where you stand. No surprises afterwards.',
    pricingInfo3: 'Contact us without obligation for a personal consultation and a customized rate for your specific situation.',
    requestQuote: 'Request Quote',
    payrollAdministration: 'Payroll Administration',
    perEmployee: 'per employee per month',
    
    // Opening hours
    openingHours: 'Opening Hours',
    mondayFriday: 'Monday-Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    hours1018: '10:00 to 18:00',
    callUs: 'You can always reach us by phone at',
    
    // Contact info
    address: 'Address',
    phone: 'Tel',
    email: 'Email',
    
    // About Page
    aboutSubtitle: 'Financial Light is your trusted partner for professional administrative and tax services',
    ourStoryTitle: 'Our Story',
    ourStoryP1: 'Financial Light was founded with one goal: to provide entrepreneurs with peace of mind in financial and administrative matters. We understand that running a business takes a lot of time and energy, and that administrative obligations are often experienced as a burden.',
    ourStoryP2: 'With our expertise and personal approach, we take these worries off your hands. We believe in long-term partnerships where we not only keep track of your numbers, but also actively think along about the financial future of your business.',
    ourStoryP3: 'As a NOAB-certified firm and recognized training company, we stand for quality, professionalism, and continuous development. Our employees are regularly trained to always provide you with the best and most up-to-date advice.',
    
    ourValuesTitle: 'Our Core Values',
    professionalismTitle: 'Professionalism',
    professionalismDesc: 'NOAB-certified and always up-to-date with the latest laws and regulations',
    personalApproachTitle: 'Personal Approach',
    personalApproachDesc: 'Dedicated contact person who knows your business and provides personal advice',
    qualityTitle: 'Quality',
    qualityDesc: 'High-quality work with attention to detail and accuracy',
    trustTitle: 'Trust',
    trustDesc: 'Transparent communication and a reliable partnership',
    
    whyChooseUsTitle: 'Why Choose Financial Light?',
    noabCertifiedTitle: 'NOAB Certified',
    noabCertifiedDesc: 'As a NOAB member, we meet the highest quality standards and work according to strict codes of conduct.',
    experiencedTeamTitle: 'Experienced Team',
    experiencedTeamDesc: 'Our team consists of experienced professionals with years of expertise in various industries.',
    fixedRatesTitle: 'Fixed Rates',
    fixedRatesDesc: 'We use transparent, fixed monthly rates. So you know exactly where you stand.',
    modernToolsTitle: 'Modern Tools',
    modernToolsDesc: 'We work with the latest software and online portals for optimal efficiency and insight.',
    
    recognizedTrainingCompanyTitle: 'Recognized Training Company',
    recognizedTrainingCompanyDesc: 'Financial Light is a recognized training company. This means we guide interns and BBL students in their training to become financial professionals.',
    recognizedTrainingCompanyP2: 'By training and guiding young people, we invest in the future of our profession and ensure that knowledge and experience are passed on to a new generation of skilled professionals.',
    
    // Services Overview Page
    servicesOverviewTitle: 'Our Services',
    servicesOverviewSubtitle: 'Financial Light offers a wide range of administrative and tax services for entrepreneurs',
    
    completeAdministration: 'Complete administration',
    fixedMonthlyRates: 'Fixed monthly rates',
    vatReturns: 'VAT returns',
    annualAccounts: 'Annual accounts',
    incomeTaxReturns: 'Income tax returns',
    corporateTaxReturns: 'Corporate tax returns',
    payrollTaxReturns: 'Payroll tax returns',
    payslipsManagement: 'Payslip management',
    annualStatements: 'Annual statements',
    employmentContracts: 'Employment contracts',
    businessPlans: 'Business plans',
    startupGuidance: 'Startup guidance',
    financingAdvice: 'Financing advice',
    fiscalOptimization: 'Fiscal optimization',
    readMore: 'Read more',
    
    needHelp: 'Need Help?',
    needHelpDesc: 'Contact us without obligation to discuss what we can do for you',
    contactUs: 'Contact Us',
    
    // Certifications Page
    certificationsTitle: 'Certifications & Quality',
    certificationsSubtitle: 'Financial Light meets the highest quality standards and is affiliated with recognized industry organizations',
    
    noabCertificationTitle: 'NOAB Certification',
    noabCertificationP1: 'Financial Light is affiliated with the Dutch Association of Tax Advisers (NOAB). The NOAB is the professional organization for administrative and tax advisers in the Netherlands.',
    noabCertificationP2: 'As a NOAB member, we meet strict requirements in terms of professional competence, experience, and continuing education. In addition, we are required to adhere to the NOAB code of conduct and our work is covered by professional liability insurance.',
    
    noabQuality1: 'Qualified and experienced professionals',
    noabQuality2: 'Mandatory continuing education',
    noabQuality3: 'Professional liability insurance',
    noabQuality4: 'Bound by strict code of conduct',
    
    erkendLeerbedrijfTitle: 'Recognized Training Company',
    erkendLeerbedrijfP1: 'Financial Light is a recognized training company. This means we meet the quality requirements set for companies that guide students during their BBL training (Work-Based Learning Route).',
    erkendLeerbedrijfP2: 'We guide young people in their training to become administrative or tax employees and offer them the opportunity to gain practical experience. This is how we invest in the future of our profession and ensure the next generation of skilled professionals.',
    
    leerbedrijf1: 'Practical guidance of students',
    leerbedrijf2: 'Investment in the future of the profession',
    leerbedrijf3: 'Quality assurance and knowledge transfer',
    
    professionalStandardsTitle: 'Professional Standards',
    professionalStandardsP1: 'In addition to our certifications, we also apply strict professional standards in our daily work:',
    
    standard1: 'Confidentiality and secrecy',
    standard2: 'Independence and objectivity',
    standard3: 'Integrity and honesty',
    standard4: 'Professional competence and diligence',
    
    backToOverview: 'Back to overview',
    
    // Merge service translations
    ...serviceTranslations.en,
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}