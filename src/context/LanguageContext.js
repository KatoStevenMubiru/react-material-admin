import React, { createContext, useState, useContext, useEffect } from 'react';

// Translation data moved from SidebarStructure.js
const translations = {
  en: {
    support: 'SUPPORT & EMERGENCY',
    emergencyHelp: 'Emergency Help',
    emergencyContacts: 'Emergency Contacts',
    supportContacts: 'Support Contacts',
    supportResources: 'Support Resources',
    resources: 'Resources',
    recoveryDashboard: 'Recovery Dashboard',
    recoveryJourney: 'PROGRESS & PLANNING',
    progressTracking: 'Recovery Progress',
    recoverySchedule: 'Recovery Schedule',
    medication: 'Medication',
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
    languageCode: 'en'
  },
  lg: {
    support: 'OBUYAMBI N\'OBUYAMBI MU BWANGU',
    emergencyHelp: 'Obuyambi Bwangu',
    emergencyContacts: 'Enamba z\'Obuyambi Bwangu',
    supportContacts: 'Enamba z\'Obuyambi',
    supportResources: 'Ensibuko z\'Obuyambi',
    resources: 'Ebikozesebwa',
    recoveryDashboard: 'Okulongoosa Dashboard',
    recoveryJourney: 'ENKULAAKULANA N\'ENTEGEKA',
    progressTracking: 'Enkulaakulana mu Kuwona',
    recoverySchedule: 'Entegeka y\'Okuwona',
    medication: 'Eddagala',
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
    languageCode: 'lg'
  },
  sw: {
    support: 'MSAADA NA DHARURA',
    emergencyHelp: 'Msaada wa Dharura',
    emergencyContacts: 'Mawasiliano ya Dharura',
    supportContacts: 'Anwani za Msaada',
    supportResources: 'Rasilimali za Msaada',
    resources: 'Rasilimali',
    recoveryDashboard: 'Dashibodi ya Uokoaji',
    recoveryJourney: 'MAENDELEO NA MPANGO',
    progressTracking: 'Maendeleo ya Uokoaji',
    recoverySchedule: 'Ratiba ya Uokoaji',
    medication: 'Dawa',
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
    languageCode: 'sw'
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