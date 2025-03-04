import React from 'react';
import {
  Warning as EmergencyIcon,
  Person as ProfileIcon,
  LocalHospital as MedicationIcon,
  SupportAgent as SupportIcon,
  Groups as CommunityIcon,
  HelpOutline as HelpIcon,
  Settings as SettingsIcon,
  Dashboard as RecoveryIcon,
} from '@mui/icons-material';

// components
import Dot from './components/Dot';

// Import language hook
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

// User role (would come from auth context in a real implementation)
const userRole = 'patient'; // or 'counselor'

const sidebarTranslations = {
  en: {
    emergencySOSTitle: 'Emergency SOS',
    emergencySOSDescription: 'Get immediate help in crisis situations',
    dashboardTitle: 'Dashboard',
    dashboardDescription: 'View your recovery progress and insights',
    profileTitle: 'Profile',
    profileDescription: 'Manage your personal information',
    medicationTitle: 'Medication',
    medicationDescription: 'Track and manage your medication schedule',
    supportResourcesTitle: 'Support Resources',
    supportResourcesDescription: 'Access helpful recovery resources',
    communityTitle: 'Community',
    communityDescription: 'Connect with peers in recovery',
    helpTitle: 'Help',
    helpDescription: 'Get assistance using the application',
    settingsTitle: 'Settings',
    settingsDescription: 'Customize your application preferences',
    notificationPreferencesTitle: 'Notifications',
    notificationPreferencesDescription: 'Manage your notification settings',
    privacySettingsTitle: 'Privacy',
    privacySettingsDescription: 'Control your privacy settings',
    accessibilitySettingsTitle: 'Accessibility',
    accessibilitySettingsDescription: 'Customize accessibility options',
    languageSettingsTitle: 'Language',
    languageSettingsDescription: 'Change application language'
  },
  lg: {
    emergencySOSTitle: 'Obuyambi bwangu',
    emergencySOSDescription: 'Funa obuyambi bwangu mu mbeera ez\'obulabe',
    dashboardTitle: 'Ekiwandiiko',
    dashboardDescription: 'Laba enkulaakulana yo n\'ebirowozo',
    profileTitle: 'Ebikwata ku ggwe',
    profileDescription: 'Tereza ebikwata ku ggwe',
    medicationTitle: 'Eddagala',
    medicationDescription: 'Goberera era tereza enteekateeka y\'eddagala lyo',
    supportResourcesTitle: 'Obuyambi',
    supportResourcesDescription: 'Funa ebikozesebwa ebiyamba mu kuwona',
    communityTitle: 'Ekibiina',
    communityDescription: 'Yogera ne bannakibiina mu kuwona',
    helpTitle: 'Obuyambi',
    helpDescription: 'Funa obuyambi mu kukozesa aplikeesheni',
    settingsTitle: 'Entegeka',
    settingsDescription: 'Tegeka aplikeesheni yo nga bw\'oyagala',
    notificationPreferencesTitle: 'Obubaka',
    notificationPreferencesDescription: 'Tereza entegeka z\'obubaka',
    privacySettingsTitle: 'Obukuumi',
    privacySettingsDescription: 'Tereza entegeka z\'obukuumi',
    accessibilitySettingsTitle: 'Enkozesa',
    accessibilitySettingsDescription: 'Tegeka enkozesa y\'aplikeesheni',
    languageSettingsTitle: 'Olulimi',
    languageSettingsDescription: 'Kyusa olulimi lw\'aplikeesheni'
  },
  sw: {
    emergencySOSTitle: 'Msaada wa Dharura',
    emergencySOSDescription: 'Pata msaada wa haraka katika hali ya dharura',
    dashboardTitle: 'Dashibodi',
    dashboardDescription: 'Tazama maendeleo yako na ufahamu',
    profileTitle: 'Wasifu',
    profileDescription: 'Simamia taarifa zako binafsi',
    medicationTitle: 'Dawa',
    medicationDescription: 'Fuatilia na simamia ratiba yako ya dawa',
    supportResourcesTitle: 'Rasilimali za Msaada',
    supportResourcesDescription: 'Fikia rasilimali muhimu za kupona',
    communityTitle: 'Jamii',
    communityDescription: 'Unganisha na wenzako katika kupona',
    helpTitle: 'Msaada',
    helpDescription: 'Pata usaidizi wa kutumia programu',
    settingsTitle: 'Mipangilio',
    settingsDescription: 'Rekebisha mapendeleo yako ya programu',
    notificationPreferencesTitle: 'Arifa',
    notificationPreferencesDescription: 'Simamia mipangilio ya arifa',
    privacySettingsTitle: 'Faragha',
    privacySettingsDescription: 'Dhibiti mipangilio yako ya faragha',
    accessibilitySettingsTitle: 'Ufikiaji',
    accessibilitySettingsDescription: 'Rekebisha chaguo za ufikiaji',
    languageSettingsTitle: 'Lugha',
    languageSettingsDescription: 'Badilisha lugha ya programu'
  }
};

/**
 * The SidebarStructure component defines all sidebar navigation items
 * for the AI-Driven Personalized Drug Addiction Recovery System.
 * 
 * Features:
 * - Accessibility-focused with ARIA labels and proper descriptions
 * - Touch-friendly targets (48px) for mobile interfaces
 * - Emergency items prominently displayed for quick access
 * - Multilingual support (English, Luganda, Swahili)
 * - Role-based visibility for patient/counselor views
 * - Analytics tracking attributes for user engagement metrics
 */
const SidebarStructure = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const userRole = user?.role || 'patient';
  
  // Get translations based on current language
  const t = sidebarTranslations[language] || sidebarTranslations.en;
  
  // Icon sizes standardized for consistency and accessibility
  const EMERGENCY_ICON_SIZE = 48; // Larger for critical functions
  const NORMAL_ICON_SIZE = 36; // Standard size for most items
  
  // High contrast colors from theme for better visibility
  const EMERGENCY_COLOR = '#ef5350'; // Error red for urgent items
  const PRIMARY_COLOR = '#2196f3'; // Primary blue for main actions
  const SUCCESS_COLOR = '#3CD4A0'; // Success green for positive actions

  return [
    {
      id: 'emergency',
      label: t.emergencySOSTitle,
      link: '/app/emergency',
      icon: <EmergencyIcon style={{ fontSize: EMERGENCY_ICON_SIZE, color: EMERGENCY_COLOR }} />,
      info: t.emergencySOSDescription,
      priority: 'high',
    },
    {
      id: 'dashboard',
      label: t.dashboardTitle,
      link: '/app/dashboard',
      icon: <RecoveryIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.dashboardDescription,
    },
    {
      id: 'profile',
      label: t.profileTitle,
      link: '/app/profile',
      icon: <ProfileIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.profileDescription,
    },
    {
      id: 'medication',
      label: t.medicationTitle,
      link: '/app/medication',
      icon: <MedicationIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.medicationDescription,
    },
    {
      id: 'support',
      label: t.supportResourcesTitle,
      link: '/app/support-resources',
      icon: <SupportIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.supportResourcesDescription,
    },
    {
      id: 'community',
      label: t.communityTitle,
      link: '/app/community',
      icon: <CommunityIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.communityDescription,
    },
    {
      id: 'help',
      label: t.helpTitle,
      link: '/app/help',
      icon: <HelpIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.helpDescription,
    },
    {
      id: 'settings',
      label: t.settingsTitle,
      link: '/app/settings',
      icon: <SettingsIcon style={{ fontSize: NORMAL_ICON_SIZE, color: PRIMARY_COLOR }} />,
      info: t.settingsDescription,
      children: [
        {
          label: t.notificationPreferencesTitle,
          link: '/app/settings/notifications',
          info: t.notificationPreferencesDescription,
        },
        {
          label: t.privacySettingsTitle,
          link: '/app/settings/privacy',
          info: t.privacySettingsDescription,
        },
        {
          label: t.accessibilitySettingsTitle,
          link: '/app/settings/accessibility',
          info: t.accessibilitySettingsDescription,
        },
        {
          label: t.languageSettingsTitle,
          link: '/app/settings/language',
          info: t.languageSettingsDescription,
        },
      ],
    },
  ].filter(item => {
    // Filter items based on user role
    if (userRole === 'patient') {
      return !item.counselorOnly;
    }
    return true;
  }).map(item => ({
    ...item,
    // Add analytics tracking attributes
    'data-testid': `sidebar-${item.id}`,
    'aria-label': item.info,
    role: 'menuitem',
  }));
};

export default SidebarStructure;
