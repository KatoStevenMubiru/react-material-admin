import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  Radio,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
  Link as MuiLink,
  Card,
  CardContent,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Chip,
  Fade,
} from '@mui/material';
import {
  Report as ReportIcon,
  Call as CallIcon,
  LocalHospital,
  School as SchoolIcon,
  Psychology as TherapyIcon,
  CalendarToday as CalendarIcon,
  LocationOn,
  Send as SendIcon,
  AccessTime as TimeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  WarningAmber as WarningIcon,
  Message as MessageIcon,
  Security as SecurityIcon,
  AccessibilityNew as AccessibilityIcon,
  CheckCircle as CheckCircleIcon,
  ContentCopy as ContentCopyIcon,
  SupportAgent,
  ArrowBack as ArrowBackIcon,
  School as AcademicIcon,
  LocationOn as LocationIcon,
  Warning as EmergencyIcon
} from '@mui/icons-material';

// styles
import useStyles from './styles';

// components
import PageTitle from '../../components/PageTitle/PageTitle';
import Widget from '../../components/Widget/Widget';

// context
import { useLanguage } from '../../context/LanguageContext';

// Emergency page translations
const emergencyTranslations = {
  en: {
    pageTitle: "Emergency SOS at CoCIS at Makerere University",
    pageDescription: "Immediate support for crisis situations affecting your recovery or academic progress at CoCIS",
    privacyNotice: "Your data is confidential under Uganda's Data Protection Act 2019",
    callToAction: "Need immediate help? Call our 24/7 helpline directly:",
    emergencyActionsTitle: "Emergency Actions at CoCIS at Makerere University",
    emergencyActionsDescription: "Get immediate support for crisis situations through our emergency actions below",
    emergencyFormTitle: "Report Crisis Now",
    emergencyFormDescription: "Submit an urgent crisis report for immediate assistance with your recovery or studies",
    situationLabel: "Describe Your Emergency",
    situationPlaceholder: "Please provide details about your current emergency situation so we can assist you appropriately...",
    contactPrefLabel: "Contact Preference",
    contactPrefPhone: "Phone Call",
    contactPrefEmail: "Email",
    contactPrefSMS: "SMS",
    contactPrefWhatsapp: "WhatsApp",
    urgencyLabel: "Urgency Level",
    urgencyLow: "Low - I need assistance but it's not urgent",
    urgencyMedium: "Medium - I need help soon",
    urgencyHigh: "High - I need immediate assistance",
    academicImpactLabel: "Is this affecting your academic performance?",
    academicImpactDescription: "Let us know if this emergency is impacting your studies at CoCIS",
    yes: "Yes",
    no: "No",
    submitButton: "Submit Emergency Report",
    callNowButton: "Call Helpline Now",
    emergencyContactsTitle: "Emergency Contacts at CoCIS",
    validationRequired: "This field is required",
    validationMinLength: "Please provide at least 10 characters",
    submissionSuccess: "Your emergency report has been submitted. Help is on the way.",
    callConfirmation: "You are about to call the emergency helpline. Continue?",
    academicEmergency: "Academic Emergency",
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
    emergencyHelplines: {
      title: "CoCIS Emergency Helplines",
      mainHelpline: {
        name: "CoCIS Crisis Helpline",
        phone: "+256-772-308331",
        hours: "24/7 Emergency Support"
      },
      mentalHealthHelpline: {
        name: "Mental Health Crisis Line",
        phone: "+256-800-2233-44",
        hours: "24/7 Support"
      }
    }
  },
  lg: {
    pageTitle: "Obuyambi Bwangu ku CoCIS ku Yunivasite ya Makerere",
    pageDescription: "Obuyambi obwangu mu mbeera ez'amangu ezikosa enkulaakulana yo oba emisomo ku CoCIS",
    privacyNotice: "Ebikukwatako bikuumibwa nga Uganda's Data Protection Act 2019",
    callToAction: "Wetaaga obuyambi mangu? Kuba essimu ku lunyiriri lwaffe olw'obuyambi lwonna:",
    emergencyActionsTitle: "Ebikolwa by'Obuyambi Bwangu ku CoCIS ku Yunivasite ya Makerere",
    emergencyActionsDescription: "Funa obuyambi obwangu mu mbeera ez'amangu ng'oyita mu bikolwa by'obuyambi bwangu wansi",
    emergencyFormTitle: "Tegeeza Embeera Embi Kati",
    emergencyFormDescription: "Wereza alipoota y'embeera embi eno amangu ddala olw'obuyambi obwangu mu kuwona kwo oba mu kusoma",
    situationLabel: "Nnyonyola Embeera Yo Embi",
    situationPlaceholder: "Mwattu wa ebikwata ku mbeera yo embi eya kaakati tusobole okukuyamba mu ngeri esaanidde...",
    contactPrefLabel: "Engeri Gy'oyagala Okutukirirwamu",
    contactPrefPhone: "Okukuba Essimu",
    contactPrefEmail: "Email",
    contactPrefSMS: "SMS",
    contactPrefWhatsapp: "WhatsApp",
    urgencyLabel: "Obuzibu bw'Embeera",
    urgencyLow: "Butono - Ntaaga obuyambi naye si bwangu nnyo",
    urgencyMedium: "Wakati - Ntaaga obuyambi amangu",
    urgencyHigh: "Bungi - Ntaaga obuyambi mangu ddala",
    academicImpactLabel: "Kino kikosa okusoma kwo?",
    academicImpactDescription: "Tumanyise oba ng'embeera eno embi ekosa okusoma kwo ku CoCIS",
    yes: "Ye",
    no: "Nedda",
    submitButton: "Wereza Alipoota y'Embeera Embi",
    callNowButton: "Kuba Essimu Kati",
    emergencyContactsTitle: "Enamba z'Obuyambi Bwangu ku CoCIS",
    validationRequired: "Ekiwandiko kino kyetaagisa",
    validationMinLength: "Mwattu waayo ebigambo bisukka mu 10",
    submissionSuccess: "Alipoota yo ey'embeera embi eweereddwa. Obuyambi bujja.",
    callConfirmation: "Ogenda okukuba essimu ku lunyiriri lw'obuyambi obwangu. Weeyongereyo?",
    academicEmergency: "Embeera Embi mu Byenjigiriza",
    mentalHealthCounselor: {
      name: "Dr. Sarah Namuli",
      role: "Omubuulirizi wa Yunivasite",
      phone: "+256-771-554422",
      availability: "Abeera wano Mde-Lwa, 9am-5pm",
      location: "CoCIS Building, Room 302"
    },
    substanceAbuseCounselor: {
      name: "Dr. John Mukisa",
      role: "Omutuukirivu mu Kuwonyezebwa Ebiragalalagala",
      phone: "+256-772-112233",
      availability: "Abeera wano Lw'okubiri & Lw'okuna, 10am-4pm",
      location: "Main Campus Health Center"
    },
    emergencyHelplines: {
      title: "Enamba za CoCIS ez'Obuyambi Bwangu",
      mainHelpline: {
        name: "Olunyiriri lwa CoCIS olw'Embeera Embi",
        phone: "+256-772-308331",
        hours: "Obuyambi bw'Embeera Embi 24/7"
      },
      mentalHealthHelpline: {
        name: "Olunyiriri lw'Embeera y'Obwongo Embi",
        phone: "+256-800-2233-44",
        hours: "Obuyambi 24/7"
      }
    }
  },
  sw: {
    pageTitle: "Dharura SOS katika CoCIS katika Chuo Kikuu cha Makerere",
    pageDescription: "Msaada wa haraka kwa hali za dharura zinazoathiri ahueni yako au maendeleo ya kimasomo katika CoCIS",
    privacyNotice: "Data zako ni za siri chini ya Sheria ya Ulinzi wa Data ya Uganda 2019",
    callToAction: "Unahitaji msaada wa mara moja? Piga simu kwa laini yetu ya msaada ya 24/7 moja kwa moja:",
    emergencyActionsTitle: "Vitendo vya Dharura katika CoCIS katika Chuo Kikuu cha Makerere",
    emergencyActionsDescription: "Pata msaada wa haraka kwa hali za dharura kupitia vitendo vyetu vya dharura hapa chini",
    emergencyFormTitle: "Ripoti Dharura Sasa",
    emergencyFormDescription: "Tuma ripoti ya dharura ya haraka kwa msaada wa haraka na ahueni yako au masomo",
    situationLabel: "Eleza Dharura Yako",
    situationPlaceholder: "Tafadhali toa maelezo kuhusu hali yako ya dharura ya sasa ili tuweze kukusaidia ipasavyo...",
    contactPrefLabel: "Upendeleo wa Mawasiliano",
    contactPrefPhone: "Simu",
    contactPrefEmail: "Barua pepe",
    contactPrefSMS: "SMS",
    contactPrefWhatsapp: "WhatsApp",
    urgencyLabel: "Kiwango cha Dharura",
    urgencyLow: "Chini - Ninahitaji msaada lakini sio wa haraka",
    urgencyMedium: "Katikati - Ninahitaji msaada hivi karibuni",
    urgencyHigh: "Juu - Ninahitaji msaada wa haraka",
    academicImpactLabel: "Je, hii inaathiri utendaji wako wa kimasomo?",
    academicImpactDescription: "Tujulishe ikiwa dharura hii inaathiri masomo yako katika CoCIS",
    yes: "Ndio",
    no: "La",
    submitButton: "Wasilisha Ripoti ya Dharura",
    callNowButton: "Piga Simu kwa Msaada Sasa",
    emergencyContactsTitle: "Mawasiliano ya Dharura katika CoCIS",
    validationRequired: "Sehemu hii inahitajika",
    validationMinLength: "Tafadhali toa angalau herufi 10",
    submissionSuccess: "Ripoti yako ya dharura imewasilishwa. Msaada unakuja.",
    callConfirmation: "Unakaribia kupiga simu kwa laini ya msaada ya dharura. Endelea?",
    academicEmergency: "Dharura ya Kimasomo",
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
      availability: "Anapatikana Jumanne & Alhamisi, 10am-4pm",
      location: "Kituo cha Afya cha Kampasi Kuu"
    },
    emergencyHelplines: {
      title: "Laini za Msaada za Dharura za CoCIS",
      mainHelpline: {
        name: "Laini ya Msaada ya Dharura ya CoCIS",
        phone: "+256-772-308331",
        hours: "Msaada wa Dharura 24/7"
      },
      mentalHealthHelpline: {
        name: "Laini ya Msaada ya Dharura ya Afya ya Akili",
        phone: "+256-800-2233-44",
        hours: "Msaada 24/7"
      }
    }
  }
};

// Emergency contacts specific to Makerere University
const emergencyContacts = [
  {
    name: 'University Health Services',
    number: '+256 414 532 631',
    location: 'Makerere University Main Campus',
    description: 'For medical emergencies and health-related issues',
    icon: <LocalHospital />,
  },
  {
    name: 'Mental Health Helpline',
    number: '+256 800 21 21 21',
    location: '24/7 Toll-Free Support',
    description: 'Confidential counseling and crisis intervention',
    icon: <SupportAgent />,
  },
  {
    name: 'Campus Security',
    number: '+256 414 531 441',
    location: 'Main Security Office',
    description: 'For security emergencies and safety concerns',
    icon: <SecurityIcon />,
  },
  {
    name: 'CoCIS Support Office',
    number: '+256 414 540 628',
    location: 'College of Computing & IS',
    description: 'Academic and administrative support for CoCIS students',
    icon: <SchoolIcon />,
  },
];

export default function EmergencyPage() {
  const classes = useStyles();
  const { language } = useLanguage();
  const t = emergencyTranslations[language] || emergencyTranslations.en;
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    situation: '',
    contactPreference: 'phone',
    phone: '',
    email: '',
    academicContext: false,
    academicImpact: false,
    preferredTime: '',
  });
  
  // State for form validation errors
  const [errors, setErrors] = useState({});
  
  // State for form submission status
  const [submitted, setSubmitted] = useState(false);
  
  // State for snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  // State for copied number
  const [copiedNumber, setCopiedNumber] = useState(null);
  
  // References for scroll navigation
  const reportSectionRef = useRef(null);
  const callSectionRef = useRef(null);
  
  // Handle form field changes
  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear validation error when field is changed
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };
  
  // Handle direct action like phone calls
  const handleCallHelpline = (phoneNumber, name) => {
    // Track in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_call_initiated',
        helpline: name,
        timestamp: new Date().toISOString(),
        from_page: 'emergency_page',
        academic_context: window.location.hash === '#academic'
      });
    }
    
    // Confirm before initiating call
    const confirmed = window.confirm(t.callConfirmation);
    if (confirmed) {
      // Create call data object
      const callData = prepareCallForDatabaseIntegration({
        helpline: name,
        phone_number: phoneNumber,
        timestamp: new Date().toISOString(),
        user_id: localStorage.getItem('user_id') || 'anonymous',
        academic_context: window.location.hash === '#academic',
        from_page: 'emergency_page'
      });
      
      // Store the call action in session storage (would be in database in real implementation)
      sessionStorage.setItem('emergency_call', JSON.stringify(callData));
      
      // Initiate call
      window.location.href = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;
    }
  };
  
  // Utility function to prepare call data for database integration
  const prepareCallForDatabaseIntegration = (data) => {
    // Format the data according to database schema
    const formattedData = {
      helpline_name: data.helpline,
      phone_number: data.phone_number.replace(/[^0-9+]/g, ''),
      timestamp: data.timestamp,
      user_id: data.user_id,
      source_page: data.from_page,
      is_academic_context: data.academic_context,
      call_initiated: true,
      call_completed: null, // Will be updated when the call completes
      call_duration: null, // Will be updated when the call completes
      app_version: '1.0',
      data_schema_version: '1.0',
      device_info: {
        user_agent: navigator.userAgent,
        platform: navigator.platform,
        network_type: navigator.connection ? navigator.connection.effectiveType : 'unknown'
      }
    };
    
    // Add a unique ID for the call
    formattedData.call_id = `HC-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
    return formattedData;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    
    if (!formData.situation) {
      errors.situation = t.validationRequired;
    } else if (formData.situation.length < 10) {
      errors.situation = t.validationMinLength;
    }
    
    // Update error state
    setErrors(errors);
    
    // If valid, process submission
    if (Object.keys(errors).length === 0) {
      // Create submission data with timestamp
      const submissionData = prepareForDatabaseIntegration({
        ...formData,
        timestamp: new Date().toISOString(),
        user_id: localStorage.getItem('user_id') || 'anonymous',
        source: 'emergency_page',
        academic_context: window.location.hash === '#academic'
      });
      
      // In a real app, this would send to a server/API
      console.log('Crisis report submitted:', submissionData);
      
      // Store in session storage (would be in database in real implementation)
      sessionStorage.setItem('crisis_report', JSON.stringify(submissionData));
      
      // Track in analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'crisis_report_submitted',
          report_data: submissionData
        });
      }
      
      // Show success message
      setSubmitted(true);
      setSnackbarMessage(t.submissionSuccess);
      setSnackbarOpen(true);
      
      // Reset form
      setFormData({
        name: '',
        studentId: '',
        situation: '',
        contactPreference: 'phone',
        phone: '',
        email: '',
        academicContext: false,
        academicImpact: false,
        preferredTime: '',
      });
      
      // Trigger focus on success message for accessibility
      setTimeout(() => {
        const successAlert = document.getElementById('submission-success');
        if (successAlert) {
          successAlert.focus();
        }
      }, 100);
    }
  };
  
  // Utility function to prepare form data for database integration
  const prepareForDatabaseIntegration = (data) => {
    // Format the data according to database schema
    const formattedData = {
      situation_description: data.situation.trim(),
      contact_preference: data.contactPreference,
      urgency_level: data.academicContext ? 'high' : 'medium',
      academic_impact: data.academicImpact ? 'yes' : 'no',
      timestamp: data.timestamp,
      user_id: data.user_id,
      source_page: data.source,
      is_academic_context: data.academic_context,
      status: 'submitted', // Initial status
      handler_assigned: false, // No handler assigned yet
      submission_complete: true, // Flag to mark complete submissions
      app_version: '1.0',
      data_schema_version: '1.0',
      location: navigator.geolocation ? 'available_on_request' : 'unavailable',
      device_info: {
        user_agent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
      }
    };
    
    // Add a unique ID for the submission
    formattedData.submission_id = `CR-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
    return formattedData;
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  
  // Check for URL hash on component mount
  useEffect(() => {
    // Scroll to actions section if #actions is in the URL
    if (window.location.hash === '#actions') {
      setTimeout(() => {
        const actionsElement = document.getElementById('emergency-actions');
        if (actionsElement) {
          actionsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Scroll to call section if #call is in the URL
    if (window.location.hash === '#call') {
      setTimeout(() => {
        const callElement = document.getElementById('helpline-call');
        if (callElement) {
          callElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Check for hash in URL
    const hash = window.location.hash;
    if (hash === '#report' && reportSectionRef.current) {
      reportSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#call' && callSectionRef.current) {
      callSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Record page visit in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_page_visit',
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        user_id: sessionStorage.getItem('user_id') || 'anonymous'
      });
    }
    
    // Clear copied number status after 3 seconds
    if (copiedNumber) {
      const timer = setTimeout(() => {
        setCopiedNumber(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <div className={classes.pageContainer}>
      {/* Page header */}
      <div className={classes.pageHeader}>
        <EmergencyIcon className={classes.headerIcon} />
        <Typography variant="h4" className={classes.pageTitle}>
          {t.pageTitle}
        </Typography>
        <Typography variant="body1" className={classes.pageDescription}>
          {t.pageDescription}
        </Typography>
      </div>
      
      {/* Quick call to action for immediate help */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card className={classes.actionsCard}>
            <CardContent>
              <Box className={classes.cardHeader}>
                <CallIcon className={classes.cardIcon} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" style={{ fontWeight: 600, color: '#c62828' }}>
                    {t.callToAction}
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: 700, color: '#c62828', marginTop: '8px' }}>
                    {t.emergencyHelplines.mainHelpline.phone}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  className={classes.callButtonLarge}
                  startIcon={<CallIcon />}
                  fullWidth
                  size="large"
                  onClick={() => handleCallHelpline(
                    t.emergencyHelplines.mainHelpline.phone,
                    t.emergencyHelplines.mainHelpline.name
                  )}
                  aria-label={`${t.callNowButton}: ${t.emergencyHelplines.mainHelpline.name}`}
                  id="helpline-call"
                >
                  {t.callNowButton}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Emergency Actions */}
      <Grid container spacing={4} className={classes.cardContainer} id="emergency-actions">
        <Grid item xs={12}>
          <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '16px' }}>
            {t.emergencyActionsTitle}
            {window.location.hash === '#academic' && (
              <span className={classes.academicBadge}>
                {t.academicEmergency}
              </span>
            )}
          </Typography>
          <Typography variant="body1" paragraph>
            {t.emergencyActionsDescription}
          </Typography>
        </Grid>
        
        {/* Crisis Reporting Form */}
        <Grid item xs={12} md={7}>
          <Paper className={classes.contactsCard}>
            <Box className={classes.cardHeader}>
              <ReportIcon className={classes.cardIcon} />
              <Typography variant="h6" className={classes.cardTitle}>
                {t.emergencyFormTitle}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {t.emergencyFormDescription}
            </Typography>
            
            <Divider style={{ margin: '16px 0' }} />
            
            {submitted ? (
              <Alert 
                severity="success" 
                className={classes.successMessage}
                id="submission-success"
                tabIndex={-1}
              >
                {t.submissionSuccess}
              </Alert>
            ) : (
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField
                  label={t.situationLabel}
                  placeholder={t.situationPlaceholder}
                  multiline
                  rows={4}
                  value={formData.situation}
                  onChange={(e) => handleFormChange('situation', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.formField}
                  error={!!errors.situation}
                  helperText={errors.situation}
                  required
                  inputProps={{
                    'aria-required': 'true',
                    'data-analytics': 'crisis_situation_field',
                    'minLength': 10
                  }}
                />
                
                <FormControl 
                  component="fieldset" 
                  className={classes.formField}
                  fullWidth
                >
                  <Typography variant="subtitle1" className={classes.formSubtitle}>
                    {t.contactPrefLabel}
                  </Typography>
                  <RadioGroup
                    aria-label="contact preference"
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={(e) => handleFormChange('contactPreference', e.target.value)}
                    className={classes.radioGroup}
                  >
                    <FormControlLabel 
                      value="phone" 
                      control={<Radio />} 
                      label={t.contactPrefPhone}
                      className={classes.radioLabel}
                    />
                    <FormControlLabel 
                      value="email" 
                      control={<Radio />} 
                      label={t.contactPrefEmail}
                      className={classes.radioLabel}
                    />
                    <FormControlLabel 
                      value="sms" 
                      control={<Radio />} 
                      label={t.contactPrefSMS}
                      className={classes.radioLabel}
                    />
                    <FormControlLabel 
                      value="whatsapp" 
                      control={<Radio />} 
                      label={t.contactPrefWhatsapp}
                      className={classes.radioLabel}
                    />
                  </RadioGroup>
                </FormControl>
                
                <FormControl 
                  variant="outlined" 
                  className={classes.formField}
                  fullWidth
                >
                  <InputLabel id="urgency-level-label">
                    {t.urgencyLabel}
                  </InputLabel>
                  <Select
                    labelId="urgency-level-label"
                    id="urgency-level"
                    value={formData.academicContext ? 'high' : 'medium'}
                    onChange={(e) => handleFormChange('academicContext', e.target.value === 'high')}
                    label={t.urgencyLabel}
                  >
                    <MenuItem value="low">{t.urgencyLow}</MenuItem>
                    <MenuItem value="medium">{t.urgencyMedium}</MenuItem>
                    <MenuItem value="high">{t.urgencyHigh}</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl 
                  component="fieldset" 
                  className={classes.formField}
                  fullWidth
                >
                  <Typography variant="subtitle1" className={classes.formSubtitle}>
                    {t.academicImpactLabel}
                  </Typography>
                  <FormHelperText className={classes.formHelperText}>
                    {t.academicImpactDescription}
                  </FormHelperText>
                  <RadioGroup
                    aria-label="academic impact"
                    name="academicImpact"
                    value={formData.academicImpact ? 'yes' : 'no'}
                    onChange={(e) => handleFormChange('academicImpact', e.target.value === 'yes')}
                    row
                    className={classes.radioGroupRow}
                  >
                    <FormControlLabel 
                      value="yes" 
                      control={<Radio />} 
                      label={t.yes}
                      className={classes.radioLabel}
                    />
                    <FormControlLabel 
                      value="no" 
                      control={<Radio />} 
                      label={t.no}
                      className={classes.radioLabel}
                    />
                  </RadioGroup>
                </FormControl>
                
                <Box className={classes.formActions}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.emergencySubmitButton}
                    startIcon={<SendIcon />}
                    size="large"
                    aria-label={t.submitButton}
                    data-analytics="submit_crisis_report"
                    data-db-prepared="true"
                  >
                    {t.submitButton}
                  </Button>
                </Box>
              </form>
            )}
          </Paper>
        </Grid>
        
        {/* Emergency Contacts */}
        <Grid item xs={12} md={5}>
          <Paper className={classes.contactsCard}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              {t.emergencyContactsTitle}
            </Typography>
            
            <Box className={classes.contactItem}>
              <CallIcon className={classes.cardIcon} style={{ color: '#ef5350' }} />
              <Box className={classes.contactInfo}>
                <Typography className={classes.contactName}>
                  {t.emergencyHelplines.mainHelpline.name}
                </Typography>
                <Typography className={classes.contactRole}>
                  {t.emergencyHelplines.mainHelpline.hours}
                </Typography>
                <Box className={classes.contactDetail}>
                  <CallIcon className={classes.contactIcon} style={{ color: '#ef5350' }} />
                  <Typography className={classes.contactText}>
                    {t.emergencyHelplines.mainHelpline.phone}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  className={classes.callButton}
                  startIcon={<CallIcon />}
                  fullWidth
                  onClick={() => handleCallHelpline(
                    t.emergencyHelplines.mainHelpline.phone,
                    t.emergencyHelplines.mainHelpline.name
                  )}
                  aria-label={`${t.callNowButton}: ${t.emergencyHelplines.mainHelpline.name}`}
                  data-analytics="emergency_helpline_call"
                >
                  {t.callNowButton}
                </Button>
              </Box>
            </Box>
            
            <Box className={classes.contactItem}>
              <TherapyIcon className={classes.cardIcon} style={{ color: '#2196f3' }} />
              <Box className={classes.contactInfo}>
                <Typography className={classes.contactName}>
                  {t.emergencyHelplines.mentalHealthHelpline.name}
                </Typography>
                <Typography className={classes.contactRole}>
                  {t.emergencyHelplines.mentalHealthHelpline.hours}
                </Typography>
                <Box className={classes.contactDetail}>
                  <CallIcon className={classes.contactIcon} style={{ color: '#2196f3' }} />
                  <Typography className={classes.contactText}>
                    {t.emergencyHelplines.mentalHealthHelpline.phone}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  className={classes.callButton}
                  startIcon={<CallIcon />}
                  fullWidth
                  onClick={() => handleCallHelpline(
                    t.emergencyHelplines.mentalHealthHelpline.phone,
                    t.emergencyHelplines.mentalHealthHelpline.name
                  )}
                  aria-label={`${t.callNowButton}: ${t.emergencyHelplines.mentalHealthHelpline.name}`}
                  color="primary"
                  data-analytics="mental_health_helpline_call"
                >
                  {t.callNowButton}
                </Button>
              </Box>
            </Box>
            
            <Box className={classes.contactItem}>
              <AcademicIcon className={classes.cardIcon} style={{ color: '#3CD4A0' }} />
              <Box className={classes.contactInfo}>
                <Typography className={classes.contactName}>
                  {t.mentalHealthCounselor.name}
                </Typography>
                <Typography className={classes.contactRole}>
                  {t.mentalHealthCounselor.role}
                </Typography>
                
                <Box className={classes.contactDetail}>
                  <TimeIcon className={classes.contactIcon} />
                  <Typography className={classes.contactText}>
                    {t.mentalHealthCounselor.availability}
                  </Typography>
                </Box>
                
                <Box className={classes.contactDetail}>
                  <LocationIcon className={classes.contactIcon} />
                  <Typography className={classes.contactText}>
                    {t.mentalHealthCounselor.location}
                  </Typography>
                </Box>
                
                <Box className={classes.contactDetail}>
                  <CallIcon className={classes.contactIcon} />
                  <Typography className={classes.contactText}>
                    {t.mentalHealthCounselor.phone}
                  </Typography>
                </Box>
                
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<CallIcon />}
                  fullWidth
                  onClick={() => handleCallHelpline(
                    t.mentalHealthCounselor.phone,
                    t.mentalHealthCounselor.name
                  )}
                  aria-label={`${t.callNowButton}: ${t.mentalHealthCounselor.name}`}
                  style={{ marginTop: '8px' }}
                  data-analytics="counselor_call"
                >
                  {t.callNowButton}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Success Snackbar */}
      <Snackbar 
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Box className={classes.accessibilityNotes}>
        <AccessibilityIcon className={classes.accessibilityIcon} />
        <Typography variant="body2">
          If you are unable to use the form or make a call, please send an SMS with "HELP" to +256 800 21 21 21 
          or ask someone nearby to assist you.
        </Typography>
      </Box>

      <Box className={classes.additionalResources}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/app/support-resources"
          className={classes.resourcesLink}
          startIcon={<SupportAgent />}
        >
          View All Recovery & Support Resources
        </Button>
        <Typography variant="body2" className={classes.resourcesNote}>
          Find additional recovery resources, academic support, and counseling services
        </Typography>
      </Box>
    </div>
  );
} 