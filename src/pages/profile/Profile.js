import React, { useState } from "react";
import { 
  Grid, 
  Typography, 
  Paper, 
  Button, 
  LinearProgress, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  TextField,
  Tooltip
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { 
  Person as PersonIcon, 
  School as AcademicIcon, 
  EmojiEvents as MilestoneIcon, 
  Psychology as TherapyIcon, 
  People as SupportIcon,
  PrivacyTip as PrivacyIcon,
  Call as CallIcon,
  AccessibilityNew as AccessibilityIcon, 
  ExpandMore as ExpandMoreIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Badge, Chip } from '../../components/Wrappers';
import Tabs from './Components/Tabs';
import Donut from './Components/DonutChart';
import RNSWidget from './Components/RNSWIdget';
import ToDo from './Components/ToDo';
import Calendar from './Components/Calendar/Calendar';
import MediaBlock from './Components/MediaBlock';
import ViewsWidget from './Components/ViewsWidget';
import ProfileIcon from '../../images/profile/profilePhoto.svg';
import BehanceIcon from '../../images/profile/BehanceIcon.svg';
import MediumIcon from '../../images/profile/MediumIcon.svg';
import FacebookIcon from '../../images/profile/FacebookIcon.svg';
import DribbleIcon from '../../images/profile/DribbleIcon.svg';
import InstagramIcon from '../../images/profile/InstagramIcon.svg';
import CloudIcon from './Icons/CloudIcon' 

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";

// Context
import { useLanguage } from '../../context/LanguageContext';
import { useManagementState } from '../../context/ManagementContext';

// Profile-specific translations
const profileTranslations = {
  en: {
    pageTitle: "My Recovery Profile at CoCIS at Makerere University",
    personalInfoSection: "Personal Recovery Information",
    academicSection: "Academic Progress for CoCIS Recovery at Makerere University",
    milestonesSection: "Recovery Milestones Supporting Your Studies at CoCIS",
    therapySection: "Therapy History for Academic Success",
    supportSection: "Support Network",
    privacyNotice: "Your data is confidential under Uganda's Data Protection Act 2019",
    viewPrivacySettings: "View Privacy Settings",
    personalInfo: {
      name: "Full Name",
      studentId: "Student ID",
      program: "Program",
      recoveryStage: "Recovery Stage",
      sobrietyDate: "Sobriety Date",
      primarySubstance: "Primary Substance",
      secondarySubstance: "Secondary Substance",
      triggers: "Known Triggers",
      copingStrategies: "Coping Strategies"
    },
    academic: {
      program: "Academic Program",
      year: "Current Year",
      semester: "Current Semester",
      coursesProgress: "Courses Progress",
      academicStanding: "Academic Standing",
      attendance: "Class Attendance",
      accommodations: "Academic Accommodations",
      gradeTrend: "Grade Trend"
    },
    milestones: {
      sobrietyDays: "Days of Sobriety",
      counselingSessions: "Counseling Sessions Completed",
      academicGoals: "Academic Goals Met",
      personalGoals: "Personal Recovery Goals Met",
      upcomingMilestone: "Upcoming Milestone"
    },
    therapy: {
      therapist: "Current Therapist",
      therapyType: "Therapy Type",
      sessionFrequency: "Session Frequency",
      lastSession: "Last Session",
      nextSession: "Next Session",
      progress: "Therapy Progress",
      notes: "Recent Session Notes"
    },
    support: {
      primaryContact: "Primary Emergency Contact",
      counselor: "University Counselor",
      peerSupport: "Peer Support Group",
      communityResources: "Community Resources",
      callNow: "Call Now"
    },
    saveChanges: "Save Changes",
    cancelChanges: "Cancel",
    excellent: "Excellent",
    good: "Good",
    satisfactory: "Satisfactory",
    needsImprovement: "Needs Improvement"
  },
  lg: {
    pageTitle: "Ebikwatako by'Okulongoosa ku CoCIS ku Yunivasite ya Makerere",
    personalInfoSection: "Ebikukwatako eby'Okulongoosa",
    academicSection: "Enkulakulana y'Okusoma ku CoCIS ku Makerere",
    milestonesSection: "Ebituukiddwako mu Kulongoosa Okuyambako Emisomo ku CoCIS",
    therapySection: "Ebyafaayo by'Okubudabudibwa Okuyamba mu Kusoma",
    supportSection: "Ennyamba yo",
    privacyNotice: "Ebikukwatako bikuumibwa nga Uganda's Data Protection Act 2019",
    viewPrivacySettings: "Laba Enteekateeka z'Obukuumi",
    personalInfo: {
      name: "Erinnya Lyonna",
      studentId: "Ennamba y'Obuyigirize",
      program: "Porogulaamu",
      recoveryStage: "Omutendera gw'Okulongoosa",
      sobrietyDate: "Ennaku z'Okwewala Ebiragalalagala",
      primarySubstance: "Ekibuuka Ekikulu",
      secondarySubstance: "Ebibuuka Ebirala",
      triggers: "Ebikuviirako Okwagala Ebibuuka",
      copingStrategies: "Enkola z'Okwewala Ebibuuka"
    },
    academic: {
      program: "Porogulaamu y'Obuyigirize",
      year: "Omwaka gwa Kaakano",
      semester: "Ekkasa Eriwo",
      coursesProgress: "Enkulakulana ya Amasomo",
      academicStanding: "Embeera y'Obuyigirize",
      attendance: "Okubeerawo mu Kibiina",
      accommodations: "Obuyambi Obwenjawulo mu Buyigirize",
      gradeTrend: "Enkukulana y'Obudaala"
    },
    milestones: {
      sobrietyDays: "Ennaku z'Okwewala Ebiragalalagala",
      counselingSessions: "Okubuuliriz Okuwedde",
      academicGoals: "Ebigendererwa by'Obuyigirize Ebituukiddwako",
      personalGoals: "Ebigendererwa by'Okulongoosa Ebituukiddwako",
      upcomingMilestone: "Ekituukibwako Ekiddako"
    },
    therapy: {
      therapist: "Omubudaabudi wa Kakano",
      therapyType: "Ekika ky'Okubudaabudibwa",
      sessionFrequency: "Obungi bw'Okukyaala",
      lastSession: "Okukyala Okusembayo",
      nextSession: "Okukyala Okuddako",
      progress: "Enkulakulana y'Okubudaabudibwa",
      notes: "Ebiwandiiko by'Okukyala Okusembayo"
    },
    support: {
      primaryContact: "Eyasooka Okutuukirira mu Bwangu",
      counselor: "Omubuulirizi wa Yunivasite",
      peerSupport: "Ekibinja ky'Abemikwano Ekiyamba",
      communityResources: "Obuyambi mu Kitundu",
      callNow: "Kuba Essimu Kakati"
    },
    saveChanges: "Kuuma Enkyukakyuka",
    cancelChanges: "Sazaamu",
    excellent: "Kirungi Nnyo",
    good: "Kirungi",
    satisfactory: "Kimala",
    needsImprovement: "Kyetaaga Okulongoosebwa"
  },
  sw: {
    pageTitle: "Wasifu Wangu wa Uokoaji katika CoCIS katika Chuo Kikuu cha Makerere",
    personalInfoSection: "Taarifa za Kibinafsi za Uokoaji",
    academicSection: "Maendeleo ya Kimasomo kwa Uokoaji wa CoCIS katika Makerere",
    milestonesSection: "Hatua za Uokoaji Zinazounga Mkono Masomo Yako katika CoCIS",
    therapySection: "Historia ya Tiba kwa Mafanikio ya Kimasomo",
    supportSection: "Mtandao wa Usaidizi",
    privacyNotice: "Data zako ni za siri chini ya Sheria ya Ulinzi wa Data ya Uganda 2019",
    viewPrivacySettings: "Angalia Mipangilio ya Faragha",
    personalInfo: {
      name: "Jina Kamili",
      studentId: "Kitambulisho cha Mwanafunzi",
      program: "Programu",
      recoveryStage: "Hatua ya Uokoaji",
      sobrietyDate: "Tarehe ya Kuacha Ulevi",
      primarySubstance: "Dutu Kuu",
      secondarySubstance: "Dutu za Ziada",
      triggers: "Vichocheo Vilivyojulikana",
      copingStrategies: "Mikakati ya Kukabiliana"
    },
    academic: {
      program: "Programu ya Kimasomo",
      year: "Mwaka wa Sasa",
      semester: "Mhula wa Sasa",
      coursesProgress: "Maendeleo ya Kozi",
      academicStanding: "Msimamo wa Kimasomo",
      attendance: "Mahudhurio ya Darasa",
      accommodations: "Huduma Maalum za Kimasomo",
      gradeTrend: "Mwelekeo wa Alama"
    },
    milestones: {
      sobrietyDays: "Siku za Kuacha Ulevi",
      counselingSessions: "Vikao vya Ushauri Vilivyokamilika",
      academicGoals: "Malengo ya Kimasomo Yaliyofikiwa",
      personalGoals: "Malengo ya Uokoaji ya Kibinafsi Yaliyofikiwa",
      upcomingMilestone: "Hatua Ijayo"
    },
    therapy: {
      therapist: "Mtaalamu wa Tiba wa Sasa",
      therapyType: "Aina ya Tiba",
      sessionFrequency: "Mara ya Vikao",
      lastSession: "Kikao cha Mwisho",
      nextSession: "Kikao Kijacho",
      progress: "Maendeleo ya Tiba",
      notes: "Maelezo ya Vikao vya Hivi Karibuni"
    },
    support: {
      primaryContact: "Mwasiliani Mkuu wa Dharura",
      counselor: "Mshauri wa Chuo Kikuu",
      peerSupport: "Kikundi cha Usaidizi cha Rika",
      communityResources: "Rasilimali za Jamii",
      callNow: "Piga Simu Sasa"
    },
    saveChanges: "Hifadhi Mabadiliko",
    cancelChanges: "Ghairi",
    excellent: "Bora Sana",
    good: "Nzuri",
    satisfactory: "Ya Kuridhisha",
    needsImprovement: "Inahitaji Uboreshaji"
  }
};

// Sample data - would normally come from API/context
const sampleProfileData = {
  personalInfo: {
    name: "Nalwanga Diana",
    studentId: "2020/HD/1234/PS",
    program: "Bachelor of Science in Software Engineering",
    recoveryStage: "Maintenance",
    sobrietyDate: "2023-03-15",
    primarySubstance: "Alcohol",
    secondarySubstance: "Cannabis",
    triggers: "Academic stress, Peer pressure, Social events",
    copingStrategies: "Meditation, Exercise, Support group meetings, Academic counseling"
  },
  academic: {
    program: "Bachelor of Science in Software Engineering",
    year: "3",
    semester: "2",
    coursesProgress: 75,
    academicStanding: "Good",
    attendance: 85,
    accommodations: "Extended deadlines for major projects",
    gradeTrend: "Improving"
  },
  milestones: {
    sobrietyDays: 450,
    counselingSessions: 24,
    academicGoals: 8,
    personalGoals: 12,
    upcomingMilestone: "500 days of sobriety (in 50 days)"
  },
  therapy: {
    therapist: "Dr. Namuli Sarah",
    therapyType: "Cognitive Behavioral Therapy",
    sessionFrequency: "Weekly",
    lastSession: "2023-10-15",
    nextSession: "2023-10-22",
    progress: 70,
    notes: "Focusing on academic stress management techniques and healthy coping mechanisms for exam period."
  },
  support: {
    primaryContact: {
      name: "Mulindwa John",
      relationship: "Father",
      phone: "+256 700 123456"
    },
    counselor: {
      name: "Dr. Namuli Sarah",
      role: "University Counselor",
      phone: "+256 777 654321"
    },
    peerSupport: "CoCIS Recovery Group (Meets Wednesdays at 5PM)",
    communityResources: "Makerere University Counseling Center, National Drug Helpline"
  }
};

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const { language } = useLanguage();
  const managementValue = useManagementState();
  
  // Get profile translations based on current language
  const t = profileTranslations[language] || profileTranslations.en;
  
  // State for expanded accordions
  const [expanded, setExpanded] = useState({
    personalInfo: true,
    academic: false,
    milestones: false,
    therapy: false,
    support: false
  });
  
  // Current user info from context
  const currentUser = managementValue.currentUser || {};
  
  // Handle accordion expansion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded({
      ...expanded,
      [panel]: isExpanded
    });
  };
  
  // Calculate days since sobriety date
  const calculateSobrietyDays = (dateString) => {
    const sobrietyDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - sobrietyDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Grid container spacing={3}>
      {/* Page Title */}
      <Grid item xs={12}>
        <div className={classes.profileHeader}>
          <Typography variant="h4" className={classes.profileTitle} aria-label={t.pageTitle}>
            {t.pageTitle}
          </Typography>
        </div>
      </Grid>
      
      {/* Privacy Notice */}
      <Grid item xs={12}>
        <div className={classes.privacyNotice} aria-label="Privacy Notice">
          <PrivacyIcon className={classes.privacyIcon} />
          <Typography className={classes.privacyText}>
            {t.privacyNotice}
          </Typography>
          <Link to="/app/settings" className={classes.privacyLink} aria-label={t.viewPrivacySettings}>
            {t.viewPrivacySettings}
          </Link>
        </div>
      </Grid>
      
      {/* Personal Information */}
      <Grid item xs={12} md={4}>
        <Widget>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={12} lg={5}>
              <div className={classes.visualProfile}>
                <div className={classes.profileImage} role="img" aria-label="Profile photo">
                  <img width="100%" src={ProfileIcon} alt="profile" />
                </div>
                <Badge
                  className={classes.chipMargin}
                  color="secondary"
                  label={sampleProfileData.personalInfo.recoveryStage}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={12} lg={7}>
              <div className={classes.profileDescription}>
                <Typography variant="h5" style={{ fontWeight: 600, marginBottom: 8 }}>
                  {sampleProfileData.personalInfo.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 4 }}>
                  {sampleProfileData.personalInfo.studentId}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 16 }}>
                  {sampleProfileData.personalInfo.program}
                </Typography>
                <div>
                  <Badge type="tag" badgeContent={"Recovery"} color="primary"/>
                  <Badge type="tag" badgeContent={"Student"} color="warning"/>
                  <Badge type="tag" badgeContent={"CoCIS"} color="success"/>
                </div>
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      
      {/* Recovery Milestones Summary */}
      <Grid item xs={12} md={8}>
        <Widget title={t.milestonesSection} upperTitle aria-labelledby="Recovery Milestones Widget">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className={classes.progressContainer}>
                <div className={classes.progressLabel}>
                  <Typography className={classes.progressTitle}>{t.milestones.sobrietyDays}</Typography>
                  <Typography className={classes.progressValue}>{sampleProfileData.milestones.sobrietyDays}</Typography>
                </div>
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min((sampleProfileData.milestones.sobrietyDays / 500) * 100, 100)} 
                  className={classes.progress}
                  classes={{ bar: classes.progressBar }}
                  aria-label={`${sampleProfileData.milestones.sobrietyDays} ${t.milestones.sobrietyDays}`}
                />
              </div>
              <div className={classes.progressContainer}>
                <div className={classes.progressLabel}>
                  <Typography className={classes.progressTitle}>{t.milestones.counselingSessions}</Typography>
                  <Typography className={classes.progressValue}>{sampleProfileData.milestones.counselingSessions}</Typography>
                </div>
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min((sampleProfileData.milestones.counselingSessions / 30) * 100, 100)} 
                  className={classes.progress}
                  classes={{ bar: classes.progressBarSuccess }}
                  aria-label={`${sampleProfileData.milestones.counselingSessions} ${t.milestones.counselingSessions}`}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.progressContainer}>
                <div className={classes.progressLabel}>
                  <Typography className={classes.progressTitle}>{t.milestones.academicGoals}</Typography>
                  <Typography className={classes.progressValue}>{sampleProfileData.milestones.academicGoals}</Typography>
                </div>
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min((sampleProfileData.milestones.academicGoals / 10) * 100, 100)} 
                  className={classes.progress}
                  classes={{ bar: classes.progressBarWarning }}
                  aria-label={`${sampleProfileData.milestones.academicGoals} ${t.milestones.academicGoals}`}
                />
              </div>
              <div className={classes.progressContainer}>
                <div className={classes.progressLabel}>
                  <Typography className={classes.progressTitle}>{t.milestones.personalGoals}</Typography>
                  <Typography className={classes.progressValue}>{sampleProfileData.milestones.personalGoals}</Typography>
                </div>
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min((sampleProfileData.milestones.personalGoals / 15) * 100, 100)} 
                  className={classes.progress}
                  classes={{ bar: classes.progressBarInfo }}
                  aria-label={`${sampleProfileData.milestones.personalGoals} ${t.milestones.personalGoals}`}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" style={{ fontWeight: 500 }}>
                <strong>{t.milestones.upcomingMilestone}:</strong> {sampleProfileData.milestones.upcomingMilestone}
              </Typography>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      
      {/* Detailed Sections with Accordions */}
      <Grid item xs={12}>
        <Paper className={classes.recoveryProfileContainer}>
          {/* Personal Recovery Information */}
          <Accordion 
            expanded={expanded.personalInfo} 
            onChange={handleAccordionChange('personalInfo')}
            className={classes.accordion}
            aria-controls="personal-info-content"
            aria-expanded={expanded.personalInfo}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.personalInfoSection}
            >
              <Typography className={classes.sectionTitle}>
                <PersonIcon className={classes.sectionIcon} />
                {t.personalInfoSection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="personal-info-content">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.personalInfo.name}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.name}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.studentId}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.studentId}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.program}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.program}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.recoveryStage}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.recoveryStage}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.personalInfo.sobrietyDate}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.sobrietyDate}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.primarySubstance}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.primarySubstance}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.secondarySubstance}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.secondarySubstance}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.profileLabel}>{t.personalInfo.triggers}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.triggers}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.personalInfo.copingStrategies}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.personalInfo.copingStrategies}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Academic Progress */}
          <Accordion 
            expanded={expanded.academic} 
            onChange={handleAccordionChange('academic')}
            className={classes.accordion}
            aria-controls="academic-content"
            aria-expanded={expanded.academic}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.academicSection}
            >
              <Typography className={classes.sectionTitle}>
                <AcademicIcon className={classes.sectionIcon} />
                {t.academicSection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="academic-content">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.academic.program}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.program}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.academic.year}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.year}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.academic.semester}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.semester}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.academic.academicStanding}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.academicStanding}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.academic.coursesProgress}</Typography>
                  <div className={classes.progressContainer}>
                    <LinearProgress 
                      variant="determinate" 
                      value={sampleProfileData.academic.coursesProgress} 
                      className={classes.progress}
                      classes={{ bar: classes.progressBar }}
                      aria-label={`${sampleProfileData.academic.coursesProgress}% ${t.academic.coursesProgress}`}
                    />
                    <Typography style={{ textAlign: 'right', marginTop: 4 }}>
                      {sampleProfileData.academic.coursesProgress}%
                    </Typography>
                  </div>
                  
                  <Typography className={classes.profileLabel}>{t.academic.attendance}</Typography>
                  <div className={classes.progressContainer}>
                    <LinearProgress 
                      variant="determinate" 
                      value={sampleProfileData.academic.attendance} 
                      className={classes.progress}
                      classes={{ bar: classes.progressBarSuccess }}
                      aria-label={`${sampleProfileData.academic.attendance}% ${t.academic.attendance}`}
                    />
                    <Typography style={{ textAlign: 'right', marginTop: 4 }}>
                      {sampleProfileData.academic.attendance}%
                    </Typography>
                  </div>
                  
                  <Typography className={classes.profileLabel}>{t.academic.accommodations}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.accommodations}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.academic.gradeTrend}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.academic.gradeTrend}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Therapy History */}
          <Accordion 
            expanded={expanded.therapy} 
            onChange={handleAccordionChange('therapy')}
            className={classes.accordion}
            aria-controls="therapy-content"
            aria-expanded={expanded.therapy}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.therapySection}
            >
              <Typography className={classes.sectionTitle}>
                <TherapyIcon className={classes.sectionIcon} />
                {t.therapySection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="therapy-content">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.therapy.therapist}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.therapist}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.therapy.therapyType}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.therapyType}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.therapy.sessionFrequency}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.sessionFrequency}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.profileLabel}>{t.therapy.lastSession}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.lastSession}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.therapy.nextSession}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.nextSession}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.therapy.progress}</Typography>
                  <div className={classes.progressContainer}>
                    <LinearProgress 
                      variant="determinate" 
                      value={sampleProfileData.therapy.progress} 
                      className={classes.progress}
                      classes={{ bar: classes.progressBarInfo }}
                      aria-label={`${sampleProfileData.therapy.progress}% ${t.therapy.progress}`}
                    />
                    <Typography style={{ textAlign: 'right', marginTop: 4 }}>
                      {sampleProfileData.therapy.progress}%
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.profileLabel}>{t.therapy.notes}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.therapy.notes}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Support Network */}
          <Accordion 
            expanded={expanded.support} 
            onChange={handleAccordionChange('support')}
            className={classes.accordion}
            aria-controls="support-content"
            aria-expanded={expanded.support}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.supportSection}
            >
              <Typography className={classes.sectionTitle}>
                <SupportIcon className={classes.sectionIcon} />
                {t.supportSection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="support-content">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.profileLabel}>{t.support.primaryContact}</Typography>
                  <Button 
                    className={classes.supportContactButton}
                    startIcon={<CallIcon className={classes.contactIcon} />}
                    href={`tel:${sampleProfileData.support.primaryContact.phone}`}
                    aria-label={`${t.support.callNow}: ${sampleProfileData.support.primaryContact.name}`}
                  >
                    <div className={classes.contactText}>
                      <Typography component="span" style={{ display: 'block', fontWeight: 600 }}>
                        {sampleProfileData.support.primaryContact.name}
                      </Typography>
                      <Typography component="span" sx={{ display: 'block', fontSize: 14, color: 'text.secondary' }}>
                        {sampleProfileData.support.primaryContact.relationship} · {sampleProfileData.support.primaryContact.phone}
                      </Typography>
                    </div>
                  </Button>
                  
                  <Typography className={classes.profileLabel} style={{ marginTop: 16 }}>{t.support.counselor}</Typography>
                  <Button 
                    className={classes.supportContactButton}
                    startIcon={<CallIcon className={classes.contactIcon} />}
                    href={`tel:${sampleProfileData.support.counselor.phone}`}
                    aria-label={`${t.support.callNow}: ${sampleProfileData.support.counselor.name}`}
                  >
                    <div className={classes.contactText}>
                      <Typography component="span" style={{ display: 'block', fontWeight: 600 }}>
                        {sampleProfileData.support.counselor.name}
                      </Typography>
                      <Typography component="span" sx={{ display: 'block', fontSize: 14, color: 'text.secondary' }}>
                        {sampleProfileData.support.counselor.role} · {sampleProfileData.support.counselor.phone}
                      </Typography>
                    </div>
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.profileLabel}>{t.support.peerSupport}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.support.peerSupport}</Typography>
                  
                  <Typography className={classes.profileLabel}>{t.support.communityResources}</Typography>
                  <Typography className={classes.profileValue}>{sampleProfileData.support.communityResources}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
      
      {/* Action Buttons */}
      <Grid item xs={12}>
        <div className={classes.recoveryButtonContainer}>
          <Button
            variant="contained"
            className={classes.recoveryButton}
            aria-label={t.cancelChanges}
          >
            {t.cancelChanges}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.recoveryButton}
            startIcon={<SettingsIcon />}
            aria-label={t.saveChanges}
          >
            {t.saveChanges}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

// #######################################################################

export default Profile;
