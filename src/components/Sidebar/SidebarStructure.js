import React from 'react';
import {
  Home as HomeIcon,
  Assignment as ProgressIcon,
  CalendarToday as ScheduleIcon,
  LocalHospital as MedicationIcon,
  Psychology as TherapyIcon,
  Group as SupportGroupIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
  EmojiEvents as MilestonesIcon,
  School as EducationIcon,
  ReportProblem as EmergencyIcon,
  HelpOutline as HelpIcon,
  SupportAgent as SupportIcon,
  Info as ResourcesIcon,
  Notifications as AlertsIcon,
  AccessibilityNew as AccessibilityIcon,
  Dashboard as RecoveryIcon,
  Timeline as ProgressChartIcon,
  People as PatientsIcon,
  Groups as CommunityIcon,
  Shield as ConfidentialityIcon,
  Call as ContactsIcon,
  Healing as RecoveryToolsIcon
} from '@mui/icons-material';

// components
import Dot from './components/Dot';

// Import language hook
import { useLanguage } from '../../context/LanguageContext';

// User role (would come from auth context in a real implementation)
const userRole = 'patient'; // or 'counselor'

const SidebarStructure = () => {
  // Use the language context
  const { t } = useLanguage();

  // Emergency Icon size increased for better visibility
  const EMERGENCY_ICON_SIZE = 48;
  const NORMAL_ICON_SIZE = 36;

  const structure = [
    // Support & Emergency section at the top for immediate access
    { id: 0, type: 'title', label: t.support },
    {
      id: 1,
      label: t.emergencyHelp,
      link: '/app/emergency',
      icon: <EmergencyIcon style={{ fontSize: EMERGENCY_ICON_SIZE, color: '#ef5350' }} />, // Larger size and high contrast color
      description: 'Get immediate help for crisis situations',
      badge: 'SOS',
      badgeColor: 'error',
      isEmergency: true, // Flag for emergency styling
    },
    {
      id: 2,
      label: t.emergencyContacts,
      link: '/app/emergency-contacts',
      icon: <ContactsIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Critical emergency contact information',
    },
    {
      id: 3,
      label: t.supportResources,
      link: '/app/support-resources',
      icon: <SupportIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Find counselors and support resources',
    },
    {
      id: 4,
      label: t.resources,
      link: '/app/resources',
      icon: <ResourcesIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Educational materials and self-help resources',
    },
    { id: 5, type: 'divider' },

    // Recovery Dashboard (Main entry point)
    { 
      id: 6, 
      label: t.recoveryDashboard, 
      link: '/app/dashboard', 
      icon: <RecoveryIcon style={{ fontSize: NORMAL_ICON_SIZE, color: '#2196f3' }} />, // Highlight dashboard with primary color
      description: 'Your main recovery overview' 
    },
    { id: 7, type: 'divider' },
    
    // Progress & Planning section
    { id: 8, type: 'title', label: t.recoveryJourney },
    {
      id: 9,
      label: t.progressTracking,
      link: '/app/progress',
      icon: <ProgressChartIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Track your recovery journey progress',
      children: [
        {
          label: 'Weekly Check-ins',
          link: '/app/progress/checkins',
          description: 'Complete your weekly assessment'
        },
        {
          label: 'Recovery Goals',
          link: '/app/progress/goals',
          description: 'Set and track your goals'
        },
        {
          label: 'Progress Charts',
          link: '/app/progress/charts',
          description: 'View your recovery charts'
        }
      ],
    },
    {
      id: 10,
      label: t.recoverySchedule,
      link: '/app/schedule',
      icon: <ScheduleIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Your recovery calendar and appointments',
      children: [
        {
          label: 'Appointments',
          link: '/app/schedule/appointments',
          description: 'View your upcoming appointments'
        },
        {
          label: 'Therapy Sessions',
          link: '/app/schedule/therapy',
          description: 'Manage therapy sessions'
        },
        {
          label: 'Support Groups',
          link: '/app/schedule/groups',
          description: 'Find support group meetings'
        }
      ],
    },
    {
      id: 11,
      label: t.medication,
      link: '/app/medication',
      icon: <MedicationIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Medication management and reminders',
      badge: 'Important',
      badgeColor: 'error',
    },
    {
      id: 12,
      label: t.milestones,
      link: '/app/milestones',
      icon: <MilestonesIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Track important recovery achievements',
    },
    {
      id: 13,
      label: t.community,
      link: '/app/community',
      icon: <CommunityIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Connect with peers for community support',
    },
    {
      id: 14,
      label: t.academic,
      link: '/app/academic',
      icon: <EducationIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'University studies support',
      children: [
        {
          label: 'Study Plans',
          link: '/app/academic/study-plans',
          description: 'Manage your study schedule'
        },
        {
          label: 'Academic Resources',
          link: '/app/academic/resources',
          description: 'Access study materials'
        },
        {
          label: 'Special Accommodations',
          link: '/app/academic/accommodations',
          description: 'Request university accommodations'
        }
      ],
    },
    { id: 15, type: 'divider' },
    
    // Personal section
    { id: 16, type: 'title', label: t.personal },
    { 
      id: 17, 
      label: t.profile, 
      link: '/app/profile', 
      icon: <ProfileIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Manage your personal information',
    },
    // Conditional item for counselors - always included but with role check inside
    { 
      id: 18, 
      label: t.patients, 
      link: '/app/patients', 
      icon: <PatientsIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Manage patient information',
      visible: userRole === 'counselor', // Only visible for counselors
      children: [
        {
          label: 'Patient List',
          link: '/app/patients/list',
          description: 'View your patients'
        },
        {
          label: 'Add Patient',
          link: '/app/patients/add',
          description: 'Register a new patient'
        },
        {
          label: 'Patient Reports',
          link: '/app/patients/reports',
          description: 'Generate patient reports'
        }
      ]
    },
    {
      id: 19,
      label: t.settings,
      link: '/app/settings',
      icon: <SettingsIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Customize your recovery dashboard settings',
    },
    {
      id: 20,
      label: t.notifications,
      link: '/app/notifications',
      icon: <AlertsIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Manage alerts and reminders',
    },
    {
      id: 21,
      label: t.accessibility,
      link: '/app/accessibility',
      icon: <AccessibilityIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Customize your accessibility preferences',
    },
    { id: 22, type: 'divider' },
    
    // Help section
    { id: 23, type: 'title', label: t.help },
    { 
      id: 24, 
      label: t.helpFaq, 
      link: '/app/help', 
      icon: <HelpIcon style={{ fontSize: NORMAL_ICON_SIZE }} />,
      description: 'Get help using the system'
    },
  ];

  // Filter out items that should not be visible based on user role
  const filteredStructure = structure.filter(item => item.visible !== false);
  
  return filteredStructure;
};

export default SidebarStructure;
