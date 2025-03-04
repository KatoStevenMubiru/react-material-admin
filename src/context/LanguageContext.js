import React, { createContext, useState, useContext, useEffect } from 'react';

// Translation data moved from SidebarStructure.js
const translations = {
  en: {
    support: 'SUPPORT & EMERGENCY',
    emergencyHelp: 'Emergency Help',
    emergencyContacts: 'Emergency Contacts',
    supportContacts: 'Support Contacts',
    supportResources: 'Support Resources',
    reportCrisis: 'Report Crisis',
    joinPeerGroup: 'Join Peer Group',
    resources: 'Resources',
    recoveryDashboard: 'Recovery Dashboard',
    recoveryJourney: 'PROGRESS & PLANNING',
    progressTracking: 'Recovery Progress',
    recoverySchedule: 'Recovery Schedule',
    medication: 'Medication at CoCIS at Makerere University',
    milestones: 'Recovery Milestones',
    academic: 'Academic Support',
    personal: 'PERSONAL',
    profile: 'My Profile',
    patients: 'Patients',
    settings: 'Recovery Settings',
    notifications: 'Notifications',
    accessibility: 'Accessibility',
    help: 'HELP',
    helpFaq: 'Help & FAQ',
    community: 'Community Support',
    language: 'English',
    languageCode: 'en',
    accessibilityTitle: "Accessibility at CoCIS at Makerere University",
    accessibilityDescription: "Customize accessibility features for your recovery experience at CoCIS",
    visualSettingsTitle: "Visual Settings",
    visualSettingsDescription: "Adjust contrast, text size, and color settings for your recovery journey",
    readingPreferencesTitle: "Reading Preferences",
    readingPreferencesDescription: "Set up text-to-speech and reading options for recovery materials",
    inputMethodsTitle: "Input Methods",
    inputMethodsDescription: "Configure keyboard navigation and alternative input for accessing recovery tools"
  },
  lg: {
    support: 'OBUYAMBI N\'OBUYAMBI MU BWANGU',
    emergencyHelp: 'Obuyambi Bwangu',
    emergencyContacts: 'Enamba z\'Obuyambi Bwangu',
    supportContacts: 'Enamba z\'Obuyambi',
    supportResources: 'Ensibuko z\'Obuyambi',
    reportCrisis: 'Tegeeza Embeera Embi',
    joinPeerGroup: 'Weyunge ku Kibinja ky\'Abemikwano',
    resources: 'Ebikozesebwa',
    recoveryDashboard: 'Okulongoosa Dashboard',
    recoveryJourney: 'ENKULAAKULANA N\'ENTEGEKA',
    progressTracking: 'Enkulaakulana mu Kuwona',
    recoverySchedule: 'Entegeka y\'Okuwona',
    medication: 'Eddagala ku CoCIS ku Yunivasite ya Makerere',
    milestones: 'Ebigyimo mu Kuwona',
    academic: 'Obuyambi bw\'Okusoma',
    personal: 'EBIKUKWATAKO',
    profile: 'Ebikwatako',
    patients: 'Abalwadde',
    settings: 'Entegeka y\'Okuwona',
    notifications: 'Amawulire',
    accessibility: 'Obuyambi obw\'enjawulo',
    help: 'OBUYAMBI',
    helpFaq: 'Obuyambi n\'Ebibuuzo',
    community: 'Obuyambi bw\'Ekitundu',
    language: 'Luganda',
    languageCode: 'lg',
    accessibilityTitle: "Obukuumi ku CoCIS ku Yunivasite ya Makerere",
    accessibilityDescription: "Kyuusa obukuumi bwo mu kuwona kwo ku CoCIS",
    visualSettingsTitle: "Entegeka y'Okulaba",
    visualSettingsDescription: "Kyuusa enjawulo, obunene bw'ennukuta, n'entegeka y'emirala mu lugendo lwo olw'okuwona",
    readingPreferencesTitle: "Ensonga z'Okusoma",
    readingPreferencesDescription: "Tegeka ebigambo mu ddoboozi n'ensonga z'okusoma z'ebikozesebwa by'okuwona",
    inputMethodsTitle: "Enkola z'Okuyingiza",
    inputMethodsDescription: "Tegeka okutambula n'amapeesa n'enkola endala z'okuyingiza z'okufuna ebikozesebwa by'okuwona"
  },
  sw: {
    support: 'MSAADA NA DHARURA',
    emergencyHelp: 'Msaada wa Dharura',
    emergencyContacts: 'Mawasiliano ya Dharura',
    supportContacts: 'Anwani za Msaada',
    supportResources: 'Rasilimali za Msaada',
    reportCrisis: 'Ripoti Dharura',
    joinPeerGroup: 'Jiunge na Kikundi cha Rika',
    resources: 'Rasilimali',
    recoveryDashboard: 'Dashibodi ya Uokoaji',
    recoveryJourney: 'MAENDELEO NA MPANGO',
    progressTracking: 'Maendeleo ya Uokoaji',
    recoverySchedule: 'Ratiba ya Uokoaji',
    medication: 'Dawa katika CoCIS katika Chuo Kikuu cha Makerere',
    milestones: 'Hatua za Uokoaji',
    academic: 'Msaada wa Kielimu',
    personal: 'BINAFSI',
    profile: 'Wasifu Wangu',
    patients: 'Wagonjwa',
    settings: 'Mipangilio ya Uokoaji',
    notifications: 'Arifa',
    accessibility: 'Ufikiaji',
    help: 'MSAADA',
    helpFaq: 'Msaada na Maswali',
    community: 'Msaada wa Jamii',
    language: 'Kiswahili',
    languageCode: 'sw',
    accessibilityTitle: "Ufikiaji katika CoCIS katika Chuo Kikuu cha Makerere",
    accessibilityDescription: "Weka mipangilio ya ufikiaji kwa uzoefu wako wa ahueni katika CoCIS",
    visualSettingsTitle: "Mipangilio ya Kuona",
    visualSettingsDescription: "Rekebisha tofauti, ukubwa wa maandishi, na mipangilio ya rangi kwa safari yako ya ahueni",
    readingPreferencesTitle: "Mapendeleo ya Kusoma",
    readingPreferencesDescription: "Weka chaguo za maandishi hadi hotuba na kusoma kwa nyenzo za ahueni",
    inputMethodsTitle: "Mbinu za Ingizo",
    inputMethodsDescription: "Sanikisha urambazaji wa kibodi na ingizo mbadala kwa kupata zana za ahueni"
  }
};

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Try to get language from local storage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage && translations[savedLanguage] ? savedLanguage : 'en';
  });

  // Current translation object
  const t = translations[language];

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Function to change language
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  // Context value
  const contextValue = {
    language,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations).map(code => ({
      code,
      name: translations[code].language
    }))
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 