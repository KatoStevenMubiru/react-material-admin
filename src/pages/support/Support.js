import React, { useState } from "react";
import classnames from "classnames";
import { 
  Grid, 
  Typography, 
  Paper, 
  Button,
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Box,
  Link as MuiLink,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  FormControlLabel,
  Snackbar,
  Alert
} from "@mui/material";
import { Link } from 'react-router-dom';
import { 
  ExpandMore as ExpandMoreIcon,
  LocalHospital as EmergencyIcon,
  Psychology as TherapyIcon,
  Group as PeerGroupIcon,
  Public as CommunityIcon,
  PrivacyTip as PrivacyIcon,
  Call as CallIcon,
  CalendarToday as CalendarIcon,
  School as AcademicIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  PersonAdd as JoinIcon
} from '@mui/icons-material';

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";

// Language context
import { useLanguage } from '../../context/LanguageContext';

// Support page translations
const supportTranslations = {
  en: {
    pageTitle: "Support Resources at CoCIS at Makerere University",
    privacyNotice: "Your data is confidential under Uganda's Data Protection Act 2019",
    viewPrivacySettings: "View Privacy Settings",
    emergencySection: "Emergency Help for Students",
    counselorSection: "Counselor Resources",
    peerSupportSection: "Peer Support Groups",
    communitySection: "Community Support Network",
    emergencyContact: {
      title: "24/7 Crisis Support",
      description: "Immediate help for urgent situations affecting your recovery or academic progress",
      callButton: "Call Now",
      contactName: "Mental Health Crisis Line",
      contactNumber: "+256-800-2233-44",
    },
    mentalHealthCounselor: {
      name: "Dr. Sarah Namuli",
      role: "University Counselor",
      phone: "+256-771-554422",
      availability: "Available Mon-Fri, 9am-5pm",
      location: "CoCIS Building, Room 302"
    },
    substanceAbuseCounselor: {
      name: "Dr. John Mukisa",
      role: "Substance Recovery Specialist",
      phone: "+256-772-112233",
      availability: "Available Tue & Thu, 10am-4pm",
      location: "Main Campus Health Center"
    },
    peerGroups: {
      recovery: {
        name: "CoCIS Recovery Support Group",
        meetingTime: "Wednesdays at 5:00 PM",
        location: "CoCIS Building, Room 110",
        contact: "David Okello, +256-700-889977"
      },
      academic: {
        name: "Academic Success in Recovery",
        meetingTime: "Mondays at 6:00 PM",
        location: "Main Library, Study Room 4",
        contact: "Faith Nassali, +256-701-223344"
      }
    },
    communityResources: {
      title: "Off-Campus Resources",
      resources: [
        {
          name: "Kampala Recovery Center",
          description: "Outpatient services for substance use disorders",
          contact: "+256-414-556677",
          website: "www.krc.org"
        },
        {
          name: "Uganda National Association for Mental Health",
          description: "Mental health services and advocacy",
          contact: "+256-414-667788",
          website: "www.unamh.org"
        },
        {
          name: "Makerere University Health Services",
          description: "Health and wellness services for students",
          contact: "+256-414-889900",
          website: "health.mak.ac.ug"
        }
      ]
    },
    academicSupport: {
      title: "Academic Support for Recovery",
      description: "Resources to help balance your recovery and academic responsibilities",
      accommodations: "Learn about academic accommodations",
      counseling: "Schedule academic counseling"
    },
    crisisForm: {
      title: "Report Your Emergency Situation",
      description: "Describe your current situation for faster help",
      situationLabel: "Describe Your Emergency",
      situationPlaceholder: "Please describe what you're experiencing...",
      contactPrefLabel: "Contact Preference",
      contactPrefPhone: "Phone Call",
      contactPrefEmail: "Email",
      contactPrefSMS: "SMS/Text",
      contactPrefWhatsapp: "WhatsApp",
      urgencyLabel: "Urgency Level",
      urgencyLow: "Low - I need help but it's not urgent",
      urgencyMedium: "Medium - I need help soon",
      urgencyHigh: "High - I need immediate help",
      academicImpactLabel: "Academic Impact",
      academicImpactDescription: "Is this affecting your studies at CoCIS?",
      yes: "Yes",
      no: "No",
      submitButton: "Submit Emergency Report",
      submissionSuccess: "Your emergency report has been submitted. Help is on the way.",
      validationRequired: "This field is required",
      validationMinLength: "Please provide more details (at least 10 characters)",
    },
    peerGroupForm: {
      title: "Join a Peer Support Group",
      description: "Connect with peers who understand your journey",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      groupTypeLabel: "Preferred Group Type",
      groupTypeRecovery: "Recovery Support",
      groupTypeAcademic: "Academic Success",
      groupTypeBoth: "Both Recovery and Academic",
      meetingPrefLabel: "Meeting Preference",
      meetingPrefInPerson: "In-Person Only",
      meetingPrefVirtual: "Virtual/Online Only",
      meetingPrefHybrid: "Hybrid (Both Options)",
      timePrefLabel: "Preferred Meeting Time",
      timePrefMorning: "Morning (8am-12pm)",
      timePrefAfternoon: "Afternoon (12pm-5pm)",
      timePrefEvening: "Evening (After 5pm)",
      languagePrefLabel: "Preferred Language",
      submitButton: "Join Peer Group",
      submissionSuccess: "Your request to join a peer group has been submitted. You'll be contacted soon.",
      validationRequired: "This field is required",
    }
  },
  lg: {
    pageTitle: "Ebikozesebwa by'Obuyambi ku CoCIS ku Yunivasite ya Makerere",
    privacyNotice: "Ebikukwatako bikuumibwa nga Uganda's Data Protection Act 2019",
    viewPrivacySettings: "Laba Enteekateeka z'Obukuumi",
    emergencySection: "Obuyambi Bwangu eri Abayizi",
    counselorSection: "Ebikozesebwa by'Ababuulirizi",
    peerSupportSection: "Ebibinja by'Abemikwano Abayamba",
    communitySection: "Ennyamba ye Kitundu",
    emergencyContact: {
      title: "Obuyambi mu Biseera Eby'obulabe 24/7",
      description: "Obuyambi obwangu mu mbeera ez'amangu ezikosa enkulaakulana yo oba emisomo",
      callButton: "Kuba Essimu Kati",
      contactName: "Olunyiriri lw'Obuyambi mu Bulwadde bw'Omutwe",
      contactNumber: "+256-800-2233-44",
    },
    mentalHealthCounselor: {
      name: "Dr. Sarah Namuli",
      role: "Omubuulirizi wa Yunivasite",
      phone: "+256-771-554422",
      availability: "Abeera Waliwo Balaza-Lwokutaano, 9am-5pm",
      location: "Ekizimbe kya CoCIS, Ekisenge 302"
    },
    substanceAbuseCounselor: {
      name: "Dr. John Mukisa",
      role: "Omunyonyozi mu Kukuumibwa okuva ku Biragalalagala",
      phone: "+256-772-112233",
      availability: "Abeera Waliwo Lwakubiri ne Lwakuna, 10am-4pm",
      location: "Ekitebe ky'Obulwaliro ku Kampasi Enkulu"
    },
    peerGroups: {
      recovery: {
        name: "Ekibinja ky'Abayambi mu Kuwona e CoCIS",
        meetingTime: "Lwakusatu ku 5:00 PM",
        location: "Ekizimbe kya CoCIS, Ekisenge 110",
        contact: "David Okello, +256-700-889977"
      },
      academic: {
        name: "Obuwanguzi mu Byenjigiriza mu Kuwona",
        meetingTime: "Balaza ku 6:00 PM",
        location: "Elatabiiro Enkulu, Ekisenge ky'Okusomera 4",
        contact: "Faith Nassali, +256-701-223344"
      }
    },
    communityResources: {
      title: "Ebikozesebwa Ebweru wa Kampasi",
      resources: [
        {
          name: "Ekitebe ky'Okuwona e Kampala",
          description: "Obujjanjabi bw'abugunjufu mu biragalalagala",
          contact: "+256-414-556677",
          website: "www.krc.org"
        },
        {
          name: "Ekibiina ky'Eggwanga lya Uganda eky'Obulamu bw'Omutwe",
          description: "Obujjanjabi n'okuwolereza mu bulwadde bw'omutwe",
          contact: "+256-414-667788",
          website: "www.unamh.org"
        },
        {
          name: "Obuweereza bw'Obulamu ku Yunivasite ya Makerere",
          description: "Eby'obulamu n'obulungi bw'abayizi",
          contact: "+256-414-889900",
          website: "health.mak.ac.ug"
        }
      ]
    },
    academicSupport: {
      title: "Obuyambi mu Byenjigiriza mu Kuwona",
      description: "Ebikozesebwa ebiyamba okusisinkana obuvunaanyizibwa bwo mu kuwona n'okusoma",
      accommodations: "Yiga ku buyambi mu byenjigiriza",
      counseling: "Teekateeka okubuulirirwa ku byenjigiriza"
    },
    crisisForm: {
      title: "Loopa Embeera yo Embi",
      description: "Nyonyola embeera yo ey'okati olw'obuyambi obwangu",
      situationLabel: "Nyonyola Embeera yo Embi",
      situationPlaceholder: "Bambi nyonyola ky'oyitamu...",
      contactPrefLabel: "Engeri gy'Okutuukirirwa",
      contactPrefPhone: "Essimu",
      contactPrefEmail: "Email",
      contactPrefSMS: "SMS/Obubaka",
      contactPrefWhatsapp: "WhatsApp",
      urgencyLabel: "Obwetaavu bw'Obuyambi",
      urgencyLow: "Butono - Netaaga obuyambi naye si bwangu",
      urgencyMedium: "Bwabulijjo - Netaaga obuyambi mangu",
      urgencyHigh: "Bungi - Netaaga obuyambi bwangu ddala",
      academicImpactLabel: "Okukyusa ku By'okusoma",
      academicImpactDescription: "Kino kikosa okusoma kwo ku CoCIS?",
      yes: "Yee",
      no: "Nedda",
      submitButton: "Weereza Alipoota y'Embeera Embi",
      submissionSuccess: "Alipoota yo ey'embeera embi eweereddwa. Obuyambi bujja.",
      validationRequired: "Kino kyetaagisa",
      validationMinLength: "Bambi wa ebikwata ebirala (kyetaaga ennukuta 10)",
    },
    peerGroupForm: {
      title: "Weyunge ku Kibinja ky'Abemikwano",
      description: "Tuukirira abalala abamanyi olugendo lwo",
      nameLabel: "Erinnya Lyo",
      namePlaceholder: "Yingiza erinnya lyo",
      groupTypeLabel: "Ekika ky'Ekibinja ky'Oyagala",
      groupTypeRecovery: "Obuyambi mu Kuwona",
      groupTypeAcademic: "Obuwanguzi mu Byenjigiriza",
      groupTypeBoth: "Byombi Okuwona n'Ebyenjigiriza",
      meetingPrefLabel: "Engeri y'Okusisinkana",
      meetingPrefInPerson: "Okusisinkana Butereevu Kwokka",
      meetingPrefVirtual: "Ku Mukutu Gwokka",
      meetingPrefHybrid: "Byombi",
      timePrefLabel: "Obudde bw'Okusisinkana Obwoyagala",
      timePrefMorning: "Enkya (8am-12pm)",
      timePrefAfternoon: "Olweggulo (12pm-5pm)",
      timePrefEvening: "Akawungeezi (Oluvannyuma lwa 5pm)",
      languagePrefLabel: "Olulimi Lwoyagala",
      submitButton: "Weyunge ku Kibinja",
      submissionSuccess: "Okusaba kwo okwetaba mu kibinja ky'abemikwano kuweereddwa. Ojja kutuukibwako mangu.",
      validationRequired: "Kino kyetaagisa",
    }
  },
  sw: {
    pageTitle: "Rasilimali za Msaada katika CoCIS katika Chuo Kikuu cha Makerere",
    privacyNotice: "Data zako ni za siri chini ya Sheria ya Ulinzi wa Data ya Uganda 2019",
    viewPrivacySettings: "Angalia Mipangilio ya Faragha",
    emergencySection: "Msaada wa Dharura kwa Wanafunzi",
    counselorSection: "Rasilimali za Washauri",
    peerSupportSection: "Vikundi vya Msaada vya Rika",
    communitySection: "Mtandao wa Msaada wa Jamii",
    emergencyContact: {
      title: "Msaada wa Dharura 24/7",
      description: "Msaada wa haraka kwa hali za dharura zinazoathiri uokoaji wako au maendeleo ya kimasomo",
      callButton: "Piga Simu Sasa",
      contactName: "Simu ya Dharura ya Afya ya Akili",
      contactNumber: "+256-800-2233-44",
    },
    mentalHealthCounselor: {
      name: "Dr. Sarah Namuli",
      role: "Mshauri wa Chuo Kikuu",
      phone: "+256-771-554422",
      availability: "Anapatikana Jumatatu-Ijumaa, 9am-5pm",
      location: "Jengo la CoCIS, Chumba 302"
    },
    substanceAbuseCounselor: {
      name: "Dr. John Mukisa",
      role: "Mtaalamu wa Uokoaji wa Dawa za Kulevya",
      phone: "+256-772-112233",
      availability: "Anapatikana Jumanne na Alhamisi, 10am-4pm",
      location: "Kituo cha Afya cha Kampasi Kuu"
    },
    peerGroups: {
      recovery: {
        name: "Kikundi cha Msaada wa Uokoaji cha CoCIS",
        meetingTime: "Jumatano saa 11:00 jioni",
        location: "Jengo la CoCIS, Chumba 110",
        contact: "David Okello, +256-700-889977"
      },
      academic: {
        name: "Mafanikio ya Kimasomo katika Uokoaji",
        meetingTime: "Jumatatu saa 12:00 jioni",
        location: "Maktaba Kuu, Chumba cha Kujisomea 4",
        contact: "Faith Nassali, +256-701-223344"
      }
    },
    communityResources: {
      title: "Rasilimali Nje ya Kampasi",
      resources: [
        {
          name: "Kituo cha Uokoaji cha Kampala",
          description: "Huduma za nje kwa matatizo ya matumizi ya dawa za kulevya",
          contact: "+256-414-556677",
          website: "www.krc.org"
        },
        {
          name: "Chama cha Kitaifa cha Uganda cha Afya ya Akili",
          description: "Huduma na utetezi wa afya ya akili",
          contact: "+256-414-667788",
          website: "www.unamh.org"
        },
        {
          name: "Huduma za Afya za Chuo Kikuu cha Makerere",
          description: "Huduma za afya na ustawi kwa wanafunzi",
          contact: "+256-414-889900",
          website: "health.mak.ac.ug"
        }
      ]
    },
    academicSupport: {
      title: "Msaada wa Kimasomo kwa Uokoaji",
      description: "Rasilimali za kusaidia kusawazisha uokoaji wako na majukumu ya kimasomo",
      accommodations: "Jifunze kuhusu malazi ya kimasomo",
      counseling: "Panga ushauri wa kimasomo"
    },
    crisisForm: {
      title: "Ripoti Hali Yako ya Dharura",
      description: "Eleza hali yako ya sasa kwa msaada wa haraka",
      situationLabel: "Eleza Dharura Yako",
      situationPlaceholder: "Tafadhali eleza unachopitia...",
      contactPrefLabel: "Jinsi ya Kuwasiliana",
      contactPrefPhone: "Simu",
      contactPrefEmail: "Barua pepe",
      contactPrefSMS: "SMS/Ujumbe",
      contactPrefWhatsapp: "WhatsApp",
      urgencyLabel: "Kiwango cha Haraka",
      urgencyLow: "Chini - Ninahitaji msaada lakini sio wa haraka",
      urgencyMedium: "Wastani - Ninahitaji msaada hivi karibuni",
      urgencyHigh: "Juu - Ninahitaji msaada wa haraka",
      academicImpactLabel: "Athari kwa Masomo",
      academicImpactDescription: "Je, hii inaathiri masomo yako katika CoCIS?",
      yes: "Ndio",
      no: "Hapana",
      submitButton: "Wasilisha Ripoti ya Dharura",
      submissionSuccess: "Ripoti yako ya dharura imewasilishwa. Msaada unakuja.",
      validationRequired: "Sehemu hii inahitajika",
      validationMinLength: "Tafadhali toa maelezo zaidi (angalau herufi 10)",
    },
    peerGroupForm: {
      title: "Jiunge na Kikundi cha Msaada cha Rika",
      description: "Ungana na wenzako wanaelewa safari yako",
      nameLabel: "Jina Lako",
      namePlaceholder: "Ingiza jina lako",
      groupTypeLabel: "Aina ya Kikundi Unayopendelea",
      groupTypeRecovery: "Msaada wa Uokoaji",
      groupTypeAcademic: "Mafanikio ya Kimasomo",
      groupTypeBoth: "Vyote Uokoaji na Kimasomo",
      meetingPrefLabel: "Mapendeleo ya Mkutano",
      meetingPrefInPerson: "Ana kwa Ana Tu",
      meetingPrefVirtual: "Mtandaoni Tu",
      meetingPrefHybrid: "Mchanganyiko (Chaguzi Zote)",
      timePrefLabel: "Wakati Unaopendelea Kukutana",
      timePrefMorning: "Asubuhi (8am-12pm)",
      timePrefAfternoon: "Mchana (12pm-5pm)",
      timePrefEvening: "Jioni (Baada ya 5pm)",
      languagePrefLabel: "Lugha Unayopendelea",
      submitButton: "Jiunge na Kikundi",
      submissionSuccess: "Ombi lako la kujiunga na kikundi cha rika limewasilishwa. Utawasiliana nawe hivi karibuni.",
      validationRequired: "Sehemu hii inahitajika",
    }
  }
};

function Support() {
  const classes = useStyles();
  // Use the language context
  const { language } = useLanguage();
  
  // Get support translations based on current language
  const t = supportTranslations[language] || supportTranslations.en;
  
  // State for expanded accordions
  const [expanded, setExpanded] = useState({
    emergency: true,
    counselor: false,
    peerSupport: false,
    community: false
  });
  
  // State for forms
  const [crisisForm, setCrisisForm] = useState({
    situation: '',
    contactPreference: 'phone',
    urgencyLevel: 'medium',
    academicImpact: 'yes'
  });
  
  const [peerGroupForm, setPeerGroupForm] = useState({
    name: '',
    groupType: 'recovery',
    meetingPreference: 'inPerson',
    timePreference: 'evening',
    languagePreference: language
  });
  
  // Form validation
  const [crisisFormErrors, setCrisisFormErrors] = useState({});
  const [peerGroupFormErrors, setPeerGroupFormErrors] = useState({});
  
  // Feedback states
  const [crisisSubmitted, setCrisisSubmitted] = useState(false);
  const [peerGroupSubmitted, setPeerGroupSubmitted] = useState(false);
  
  // Handle accordion expansion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded({
      ...expanded,
      [panel]: isExpanded
    });
    
    // If expanding peer support, set the ID in URL for direct navigation
    if (panel === 'peerSupport' && isExpanded) {
      window.history.replaceState(null, '', '#peer-support');
    }
    
    // If expanding emergency, set the ID in URL for direct navigation
    if (panel === 'emergency' && isExpanded) {
      window.history.replaceState(null, '', '#emergency');
    }
  };
  
  // Handle crisis form changes
  const handleCrisisFormChange = (e) => {
    const { name, value } = e.target;
    setCrisisForm({
      ...crisisForm,
      [name]: value
    });
    
    // Clear validation errors when typing
    if (crisisFormErrors[name]) {
      setCrisisFormErrors({
        ...crisisFormErrors,
        [name]: undefined
      });
    }
  };
  
  // Handle peer group form changes
  const handlePeerGroupFormChange = (e) => {
    const { name, value } = e.target;
    setPeerGroupForm({
      ...peerGroupForm,
      [name]: value
    });
    
    // Clear validation errors when typing
    if (peerGroupFormErrors[name]) {
      setPeerGroupFormErrors({
        ...peerGroupFormErrors,
        [name]: undefined
      });
    }
  };
  
  // Add this function for database preparation
  const prepareForDatabaseIntegration = (formData, formType) => {
    // In a real implementation, this would handle database connection/preparation
    console.log(`Preparing ${formType} data for database integration`, formData);
    
    // Create a timestamp
    const timestamp = new Date().toISOString();
    
    // Store form data in sessionStorage for demonstration purposes
    // In a real implementation, this would be sent to a database or API
    sessionStorage.setItem(`${formType}_submission`, JSON.stringify({
      ...formData,
      timestamp,
      user_id: localStorage.getItem('user_id') || 'anonymous',
      source: 'support_page',
      academic_context: window.location.hash === '#academic'
    }));
    
    // Track in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: `${formType}_form_submission`,
        form_data: {
          ...formData,
          timestamp,
          has_academic_impact: formData.academicImpact === 'yes'
        }
      });
    }
    
    return timestamp;
  };
  
  // In the handleCrisisSubmit function, add database preparation
  const handleCrisisSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    let valid = true;
    let validationErrors = {};
    
    if (!crisisForm.situation) {
      validationErrors.situation = t.crisisForm.validationRequired;
      valid = false;
    } else if (crisisForm.situation.length < 10) {
      validationErrors.situation = t.crisisForm.validationMinLength;
      valid = false;
    }
    
    if (!crisisForm.contactPreference) {
      validationErrors.contactPreference = t.crisisForm.validationRequired;
      valid = false;
    }
    
    if (!crisisForm.urgencyLevel) {
      validationErrors.urgencyLevel = t.crisisForm.validationRequired;
      valid = false;
    }
    
    if (!crisisForm.academicImpact) {
      validationErrors.academicImpact = t.crisisForm.validationRequired;
      valid = false;
    }
    
    setCrisisFormErrors(validationErrors);
    
    if (valid) {
      // Prepare the data for database integration
      const submissionTimestamp = prepareForDatabaseIntegration(crisisForm, 'crisis');
      
      // In a real app, this would send the data to a server
      console.log('Crisis form submitted:', {
        ...crisisForm,
        timestamp: submissionTimestamp
      });
      
      // Reset form and show success message
      setCrisisForm({
        situation: '',
        contactPreference: '',
        urgencyLevel: '',
        academicImpact: ''
      });
      
      setCrisisSubmitted(true);
      
      // Accessibility: Set focus to the success message for screen readers
      setTimeout(() => {
        const successAlert = document.getElementById('crisis-submission-success');
        if (successAlert) {
          successAlert.focus();
        }
      }, 100);
    }
  };
  
  // Validate and submit peer group form
  const handlePeerGroupSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    
    if (!peerGroupForm.name) {
      errors.name = t.peerGroupForm.validationRequired;
    }
    
    // Set errors or submit if valid
    if (Object.keys(errors).length > 0) {
      setPeerGroupFormErrors(errors);
    } else {
      // In a real app, this would send data to an API
      console.log('Peer group form submitted:', peerGroupForm);
      
      // For analytics purposes
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'peerGroupJoined',
          peerGroupData: {
            groupType: peerGroupForm.groupType,
            meetingPreference: peerGroupForm.meetingPreference,
            timePreference: peerGroupForm.timePreference,
            languagePreference: peerGroupForm.languagePreference
          }
        });
      }
      
      // Show success message
      setPeerGroupSubmitted(true);
      
      // Reset form after successful submission
      setPeerGroupForm({
        name: '',
        groupType: 'recovery',
        meetingPreference: 'inPerson',
        timePreference: 'evening',
        languagePreference: language
      });
    }
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setCrisisSubmitted(false);
    setPeerGroupSubmitted(false);
  };
  
  // Check URL hash on mount for direct navigation
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#emergency') {
      setExpanded({ ...expanded, emergency: true });
    } else if (hash === '#peer-support') {
      setExpanded({ ...expanded, peerSupport: true });
    }
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Page Title */}
      <Grid item xs={12}>
        <div className={classes.pageHeader}>
          <Typography variant="h4" className={classes.pageTitle} aria-label={t.pageTitle}>
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
      
      {/* Support Resources */}
      <Grid item xs={12}>
        <Paper className={classes.supportContainer}>
          {/* Emergency Help Section */}
          <Accordion 
            expanded={expanded.emergency} 
            onChange={handleAccordionChange('emergency')}
            className={classes.accordion}
            aria-controls="emergency-content"
            aria-expanded={expanded.emergency}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.emergencySection}
            >
              <Typography className={classes.sectionTitle}>
                <EmergencyIcon className={classes.sectionIcon} style={{ color: '#ef5350' }} />
                {t.emergencySection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="emergency-content">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div className={classes.emergencyContact}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.emergencyContact.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {t.emergencyContact.description}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography className={classes.supportLabel}>
                          {t.emergencyContact.contactName}
                        </Typography>
                        <Typography className={classes.supportValue}>
                          {t.emergencyContact.contactNumber}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <Button 
                          variant="contained" 
                          className={classes.emergencyButton}
                          startIcon={<CallIcon />}
                          href={`tel:${t.emergencyContact.contactNumber.replace(/[^0-9+]/g, '')}`}
                          aria-label={`${t.emergencyContact.callButton}: ${t.emergencyContact.contactName}`}
                          fullWidth
                        >
                          {t.emergencyContact.callButton}
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                
                {/* Crisis Reporting Form */}
                <Grid item xs={12}>
                  <Paper 
                    className={classnames(classes.formContainer, {
                      [classes.emergencyFormContainer]: true, // Add specific styling for emergency forms
                      [classes.academicContextForm]: window.location.hash === '#academic' // Add academic context styling
                    })}
                    id="emergency"
                    aria-labelledby="crisis-form-title"
                    elevation={3}
                  >
                    <Typography variant="h5" className={classes.formTitle} id="crisis-form-title">
                      <EmergencyIcon className={classes.formTitleIcon} />
                      {t.crisisForm.title}
                      {window.location.hash === '#academic' && (
                        <Typography component="span" className={classes.academicFormBadge}>
                          {language === 'en' ? 'Academic Emergency' : 
                           language === 'lg' ? 'Embeera Embi mu Byenjigiriza' : 
                           'Dharura ya Kimasomo'}
                        </Typography>
                      )}
                    </Typography>
                    
                    <Typography variant="body1" color="textSecondary" className={classes.formDescription}>
                      {t.crisisForm.description}
                    </Typography>
                    
                    <form className={classes.form} onSubmit={handleCrisisSubmit} noValidate aria-label={t.crisisForm.title}>
                      <TextField
                        label={t.crisisForm.situationLabel}
                        placeholder={t.crisisForm.situationPlaceholder}
                        multiline
                        rows={4}
                        value={crisisForm.situation}
                        onChange={(e) => handleCrisisFormChange({ situation: e.target.value })}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        error={!!crisisFormErrors.situation}
                        helperText={crisisFormErrors.situation}
                        required
                        className={classes.formField}
                        aria-describedby="situation-helper-text"
                        inputProps={{
                          'aria-required': 'true',
                          'data-analytics': 'crisis_situation_field'
                        }}
                      />
                      <div id="situation-helper-text" className="visually-hidden">
                        Describe your emergency situation in detail so we can provide appropriate help
                      </div>
                      
                      <FormControl 
                        component="fieldset" 
                        className={classes.formField}
                        fullWidth
                      >
                        <Typography variant="subtitle1" className={classes.formSubtitle}>
                          {t.crisisForm.contactPrefLabel}
                        </Typography>
                        <RadioGroup
                          aria-label="contact preference"
                          name="contactPreference"
                          value={crisisForm.contactPreference}
                          onChange={handleCrisisFormChange}
                          className={classes.radioGroup}
                        >
                          <FormControlLabel 
                            value="phone" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.contactPrefPhone}
                            className={classes.radioLabel}
                          />
                          <FormControlLabel 
                            value="email" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.contactPrefEmail}
                            className={classes.radioLabel}
                          />
                          <FormControlLabel 
                            value="sms" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.contactPrefSMS}
                            className={classes.radioLabel}
                          />
                          <FormControlLabel 
                            value="whatsapp" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.contactPrefWhatsapp}
                            className={classes.radioLabel}
                          />
                        </RadioGroup>
                      </FormControl>
                      
                      <FormControl 
                        variant="outlined" 
                        className={classes.formField}
                        fullWidth
                      >
                        <InputLabel id="urgency-level-label" className={classes.inputLabel}>
                          {t.crisisForm.urgencyLabel}
                        </InputLabel>
                        <Select
                          labelId="urgency-level-label"
                          id="urgency-level"
                          name="urgencyLevel"
                          value={crisisForm.urgencyLevel}
                          onChange={handleCrisisFormChange}
                          label={t.crisisForm.urgencyLabel}
                          className={classes.select}
                          inputProps={{ className: classes.largeInput }}
                        >
                          <MenuItem value="low">{t.crisisForm.urgencyLow}</MenuItem>
                          <MenuItem value="medium">{t.crisisForm.urgencyMedium}</MenuItem>
                          <MenuItem value="high">{t.crisisForm.urgencyHigh}</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl 
                        component="fieldset" 
                        className={classes.formField}
                        fullWidth
                      >
                        <Typography variant="subtitle1" className={classes.formSubtitle}>
                          {t.crisisForm.academicImpactLabel}
                        </Typography>
                        <FormHelperText className={classes.formHelperText}>
                          {t.crisisForm.academicImpactDescription}
                        </FormHelperText>
                        <RadioGroup
                          aria-label="academic impact"
                          name="academicImpact"
                          value={crisisForm.academicImpact}
                          onChange={handleCrisisFormChange}
                          row
                          className={classes.radioGroupRow}
                        >
                          <FormControlLabel 
                            value="yes" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.yes}
                            className={classes.radioLabel}
                          />
                          <FormControlLabel 
                            value="no" 
                            control={<Radio className={classes.radioButton} />} 
                            label={t.crisisForm.no}
                            className={classes.radioLabel}
                          />
                        </RadioGroup>
                      </FormControl>
                      
                      <Box className={classes.formActions}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="error"
                          className={classes.emergencySubmitButton}
                          startIcon={<EmergencyIcon />}
                          size="large"
                          aria-label={t.crisisForm.submitButton}
                          data-analytics="submit_crisis_report"
                          data-db-prepared="true"
                        >
                          {t.crisisForm.submitButton}
                        </Button>
                      </Box>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Counselor Resources */}
          <Accordion 
            expanded={expanded.counselor} 
            onChange={handleAccordionChange('counselor')}
            className={classes.accordion}
            aria-controls="counselor-content"
            aria-expanded={expanded.counselor}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.counselorSection}
            >
              <Typography className={classes.sectionTitle}>
                <TherapyIcon className={classes.sectionIcon} />
                {t.counselorSection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="counselor-content">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.supportCard} elevation={0}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.mentalHealthCounselor.name}
                    </Typography>
                    <Typography className={classes.secondaryText} gutterBottom>
                      {t.mentalHealthCounselor.role}
                    </Typography>
                    
                    <Box className={classes.meetingTime}>
                      <CalendarIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.mentalHealthCounselor.availability}
                      </Typography>
                    </Box>
                    
                    <Box className={classes.meetingTime}>
                      <LocationIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.mentalHealthCounselor.location}
                      </Typography>
                    </Box>
                    
                    <Button 
                      className={classes.supportContactButton}
                      startIcon={<CallIcon className={classes.contactIcon} />}
                      href={`tel:${t.mentalHealthCounselor.phone.replace(/[^0-9+]/g, '')}`}
                      aria-label={`Call ${t.mentalHealthCounselor.name}`}
                    >
                      <div className={classes.contactText}>
                        <Typography component="span" style={{ display: 'block', fontWeight: 600 }}>
                          {t.emergencyContact.callButton}
                        </Typography>
                        <Typography component="span" sx={{ display: 'block', fontSize: 14, color: 'text.secondary' }}>
                          {t.mentalHealthCounselor.phone}
                        </Typography>
                      </div>
                    </Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper className={classes.supportCard} elevation={0}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.substanceAbuseCounselor.name}
                    </Typography>
                    <Typography className={classes.secondaryText} gutterBottom>
                      {t.substanceAbuseCounselor.role}
                    </Typography>
                    
                    <Box className={classes.meetingTime}>
                      <CalendarIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.substanceAbuseCounselor.availability}
                      </Typography>
                    </Box>
                    
                    <Box className={classes.meetingTime}>
                      <LocationIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.substanceAbuseCounselor.location}
                      </Typography>
                    </Box>
                    
                    <Button 
                      className={classes.supportContactButton}
                      startIcon={<CallIcon className={classes.contactIcon} />}
                      href={`tel:${t.substanceAbuseCounselor.phone.replace(/[^0-9+]/g, '')}`}
                      aria-label={`Call ${t.substanceAbuseCounselor.name}`}
                    >
                      <div className={classes.contactText}>
                        <Typography component="span" style={{ display: 'block', fontWeight: 600 }}>
                          {t.emergencyContact.callButton}
                        </Typography>
                        <Typography component="span" sx={{ display: 'block', fontSize: 14, color: 'text.secondary' }}>
                          {t.substanceAbuseCounselor.phone}
                        </Typography>
                      </div>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Peer Support Groups */}
          <Accordion 
            expanded={expanded.peerSupport} 
            onChange={handleAccordionChange('peerSupport')}
            className={classes.accordion}
            aria-controls="peer-support-content"
            aria-expanded={expanded.peerSupport}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.peerSupportSection}
            >
              <Typography className={classes.sectionTitle}>
                <PeerGroupIcon className={classes.sectionIcon} />
                {t.peerSupportSection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="peer-support-content">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.supportCard} elevation={0}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.peerGroups.recovery.name}
                    </Typography>
                    
                    <Box className={classes.meetingTime}>
                      <TimeIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.peerGroups.recovery.meetingTime}
                      </Typography>
                    </Box>
                    
                    <Box className={classes.meetingTime}>
                      <LocationIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.peerGroups.recovery.location}
                      </Typography>
                    </Box>
                    
                    <Typography className={classes.supportLabel} style={{ marginTop: 16 }}>
                      {t.peerGroups.recovery.contact}
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper className={classes.supportCard} elevation={0}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.peerGroups.academic.name}
                    </Typography>
                    
                    <Box className={classes.meetingTime}>
                      <TimeIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.peerGroups.academic.meetingTime}
                      </Typography>
                    </Box>
                    
                    <Box className={classes.meetingTime}>
                      <LocationIcon className={classes.meetingIcon} />
                      <Typography variant="body2">
                        {t.peerGroups.academic.location}
                      </Typography>
                    </Box>
                    
                    <Typography className={classes.supportLabel} style={{ marginTop: 16 }}>
                      {t.peerGroups.academic.contact}
                    </Typography>
                  </Paper>
                </Grid>
                
                {/* Peer Group Join Form */}
                <Grid item xs={12}>
                  <Paper className={classes.formContainer} elevation={0} id="peer-group-form">
                    <Typography variant="h6" gutterBottom className={classes.formTitle}>
                      {t.peerGroupForm.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {t.peerGroupForm.description}
                    </Typography>
                    
                    <form onSubmit={handlePeerGroupSubmit} className={classes.form}>
                      <TextField
                        label={t.peerGroupForm.nameLabel}
                        placeholder={t.peerGroupForm.namePlaceholder}
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={peerGroupForm.name}
                        onChange={handlePeerGroupFormChange}
                        error={!!peerGroupFormErrors.name}
                        helperText={peerGroupFormErrors.name}
                        className={classes.formField}
                        InputProps={{ className: classes.largeInput }}
                        InputLabelProps={{ className: classes.inputLabel }}
                      />
                      
                      <FormControl 
                        variant="outlined" 
                        className={classes.formField}
                        fullWidth
                      >
                        <InputLabel id="group-type-label" className={classes.inputLabel}>
                          {t.peerGroupForm.groupTypeLabel}
                        </InputLabel>
                        <Select
                          labelId="group-type-label"
                          id="group-type"
                          name="groupType"
                          value={peerGroupForm.groupType}
                          onChange={handlePeerGroupFormChange}
                          label={t.peerGroupForm.groupTypeLabel}
                          className={classes.select}
                          inputProps={{ className: classes.largeInput }}
                        >
                          <MenuItem value="recovery">{t.peerGroupForm.groupTypeRecovery}</MenuItem>
                          <MenuItem value="academic">{t.peerGroupForm.groupTypeAcademic}</MenuItem>
                          <MenuItem value="both">{t.peerGroupForm.groupTypeBoth}</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl 
                        variant="outlined" 
                        className={classes.formField}
                        fullWidth
                      >
                        <InputLabel id="meeting-pref-label" className={classes.inputLabel}>
                          {t.peerGroupForm.meetingPrefLabel}
                        </InputLabel>
                        <Select
                          labelId="meeting-pref-label"
                          id="meeting-pref"
                          name="meetingPreference"
                          value={peerGroupForm.meetingPreference}
                          onChange={handlePeerGroupFormChange}
                          label={t.peerGroupForm.meetingPrefLabel}
                          className={classes.select}
                          inputProps={{ className: classes.largeInput }}
                        >
                          <MenuItem value="inPerson">{t.peerGroupForm.meetingPrefInPerson}</MenuItem>
                          <MenuItem value="virtual">{t.peerGroupForm.meetingPrefVirtual}</MenuItem>
                          <MenuItem value="hybrid">{t.peerGroupForm.meetingPrefHybrid}</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl 
                        variant="outlined" 
                        className={classes.formField}
                        fullWidth
                      >
                        <InputLabel id="time-pref-label" className={classes.inputLabel}>
                          {t.peerGroupForm.timePrefLabel}
                        </InputLabel>
                        <Select
                          labelId="time-pref-label"
                          id="time-pref"
                          name="timePreference"
                          value={peerGroupForm.timePreference}
                          onChange={handlePeerGroupFormChange}
                          label={t.peerGroupForm.timePrefLabel}
                          className={classes.select}
                          inputProps={{ className: classes.largeInput }}
                        >
                          <MenuItem value="morning">{t.peerGroupForm.timePrefMorning}</MenuItem>
                          <MenuItem value="afternoon">{t.peerGroupForm.timePrefAfternoon}</MenuItem>
                          <MenuItem value="evening">{t.peerGroupForm.timePrefEvening}</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <FormControl 
                        variant="outlined" 
                        className={classes.formField}
                        fullWidth
                      >
                        <InputLabel id="language-pref-label" className={classes.inputLabel}>
                          {t.peerGroupForm.languagePrefLabel}
                        </InputLabel>
                        <Select
                          labelId="language-pref-label"
                          id="language-pref"
                          name="languagePreference"
                          value={peerGroupForm.languagePreference}
                          onChange={handlePeerGroupFormChange}
                          label={t.peerGroupForm.languagePrefLabel}
                          className={classes.select}
                          inputProps={{ className: classes.largeInput }}
                        >
                          <MenuItem value="en">English</MenuItem>
                          <MenuItem value="lg">Luganda</MenuItem>
                          <MenuItem value="sw">Swahili</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        startIcon={<JoinIcon />}
                        fullWidth
                        size="large"
                        aria-label={t.peerGroupForm.submitButton}
                      >
                        {t.peerGroupForm.submitButton}
                      </Button>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          
          {/* Community Support Network */}
          <Accordion 
            expanded={expanded.community} 
            onChange={handleAccordionChange('community')}
            className={classes.accordion}
            aria-controls="community-content"
            aria-expanded={expanded.community}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
              aria-label={t.communitySection}
            >
              <Typography className={classes.sectionTitle}>
                <CommunityIcon className={classes.sectionIcon} />
                {t.communitySection}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails} id="community-content">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                    {t.communityResources.title}
                  </Typography>
                </Grid>
                
                {t.communityResources.resources.map((resource, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Paper className={classes.supportCard} elevation={0}>
                      <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                        {resource.name}
                      </Typography>
                      <Typography className={classes.secondaryText} gutterBottom>
                        {resource.description}
                      </Typography>
                      <Typography className={classes.supportLabel}>
                        {resource.contact}
                      </Typography>
                      <MuiLink 
                        href={`https://${resource.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={classes.privacyLink}
                      >
                        {resource.website}
                      </MuiLink>
                    </Paper>
                  </Grid>
                ))}
                
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <Paper className={classes.supportCard} elevation={0}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                      {t.academicSupport.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {t.academicSupport.description}
                    </Typography>
                    <Grid container spacing={2} style={{ marginTop: 8 }}>
                      <Grid item xs={12} sm={6}>
                        <Button 
                          className={classes.resourceButton}
                          startIcon={<AcademicIcon className={classes.resourceIcon} />}
                          component={Link}
                          to="/app/academic/accommodations"
                          aria-label={t.academicSupport.accommodations}
                          fullWidth
                        >
                          {t.academicSupport.accommodations}
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button 
                          className={classes.resourceButton}
                          startIcon={<CalendarIcon className={classes.resourceIcon} />}
                          component={Link}
                          to="/app/schedule/appointments"
                          aria-label={t.academicSupport.counseling}
                          fullWidth
                        >
                          {t.academicSupport.counseling}
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
      
      {/* Success Notifications */}
      <Snackbar 
        open={crisisSubmitted} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success"
          className={classes.alert}
        >
          {t.crisisForm.submissionSuccess}
        </Alert>
      </Snackbar>
      
      <Snackbar 
        open={peerGroupSubmitted} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success"
          className={classes.alert}
        >
          {t.peerGroupForm.submissionSuccess}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Support; 