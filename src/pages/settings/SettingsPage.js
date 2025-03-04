import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  IconButton,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Link,
  Tooltip,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  PrivacyTip as PrivacyIcon,
  EmojiEvents as GoalsIcon,
  Psychology as TherapyIcon,
  Call as ContactsIcon,
  School as AcademicIcon,
  ExpandMore as ExpandMoreIcon,
  InfoOutlined as InfoIcon,
  HelpOutline as HelpIcon,
  Save as SaveIcon,
  AccessibilityNew as AccessibilityIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

// styles
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import AccessibilitySettings from './accessibility/AccessibilitySettings';

// context
import { useLanguage } from '../../context/LanguageContext';

// Setting-specific translations
const settingsTranslations = {
  en: {
    pageTitle: 'My Recovery Settings at CoCIS at Makerere',
    privacySection: 'Privacy Preferences',
    privacyNotice: 'Your data is protected under Uganda\'s Data Protection Act 2019',
    moreInfo: 'Learn more about your privacy',
    notificationSection: 'Notification Settings',
    emergencySection: 'Emergency Contacts',
    recoverySection: 'Recovery Goals',
    therapySection: 'Therapy Preferences',
    contactsSection: 'Support Contacts',
    academicSection: 'Academic Recovery Settings for Makerere',
    primaryContact: 'Primary Emergency Contact',
    secondaryContact: 'Secondary Emergency Contact',
    name: 'Name',
    relationship: 'Relationship',
    phone: 'Phone Number',
    emailNotifications: 'Email Notifications',
    smsNotifications: 'SMS Notifications',
    appNotifications: 'App Notifications',
    emergencyAlerts: 'Emergency Alerts',
    reminderAlerts: 'Appointment Reminders',
    progressAlerts: 'Progress Updates',
    academicAlerts: 'Academic Deadline Reminders',
    shareProgress: 'Share My Progress with Counselor',
    shareAcademic: 'Share Academic Progress with Counselor',
    shareEmergency: 'Share Emergency Contacts with University',
    shareMedical: 'Share Medical Information with Counselor',
    therapyType: 'Preferred Therapy Type',
    therapySchedule: 'Preferred Session Schedule',
    therapyLocation: 'Preferred Session Location',
    therapyLanguage: 'Preferred Session Language',
    goalVisibility: 'Share Recovery Goals with Counselor',
    academicReminders: 'Academic Deadline Reminders',
    studyTools: 'Study Tools Integration',
    academicAccommodations: 'Request Academic Accommodations',
    saveSettings: 'Save Settings',
    saveSuccess: 'Settings saved successfully',
    highContrast: 'High Contrast Mode',
    largeText: 'Large Text Mode',
    screenReader: 'Screen Reader Compatibility',
    reducedMotion: 'Reduced Motion',
    academicNote: 'Academic settings help coordinate your recovery with your studies at CoCIS',
    privacyNoticeExpanded: 'All your information is kept confidential according to Uganda\'s Data Protection Act 2019. Only authorized personnel can access your information with your consent.',
    accessibilitySection: 'Accessibility Preferences',
    lastUpdated: 'Last Updated:',
  },
  lg: {
    pageTitle: 'Ebikwatako by\'Okulongoosa ku CoCIS ku Makerere',
    privacySection: 'Enteekateeka z\'Obukuumi',
    privacyNotice: 'Ebikukwatako bikuumibwa nga Uganda\'s Data Protection Act 2019',
    moreInfo: 'Manya ebisingawo ku bukuumi bwo',
    notificationSection: 'Enteekateka z\'Amawulire',
    emergencySection: 'Enamba z\'Obuyambi Bwangu',
    recoverySection: 'Ebigyimo by\'Okuwona',
    therapySection: 'Enteekateka y\'Okubudaabudibwa',
    contactsSection: 'Enamba z\'Obuyambi',
    academicSection: 'Enteekateeka z\'Okuwona n\'Okusoma mu Makerere',
    primaryContact: 'Eyasooka okutuukirira mu Bwangu',
    secondaryContact: 'Owookubiri okutuukirira mu Bwangu',
    name: 'Erinnya',
    relationship: 'Enkolagana',
    phone: 'Enamba y\'Essimu',
    emailNotifications: 'Amawulire ga Email',
    smsNotifications: 'Amawulire ga SMS',
    appNotifications: 'Amawulire g\'App',
    emergencyAlerts: 'Amawulire g\'Obwangu',
    reminderAlerts: 'Okujjukiza Okukyalira',
    progressAlerts: 'Amawulire g\'Enkulakulana',
    academicAlerts: 'Okujjukiza Ebiseera by\'Emisomo',
    shareProgress: 'Gabanira Enkulakulana yange n\'Omubuulirizi',
    shareAcademic: 'Gabanira Enkukakulana y\'Emisomo n\'Omubuulirizi',
    shareEmergency: 'Gabanira Enamba z\'Obwangu ne Yunivasite',
    shareMedical: 'Gabanira Ebikwata ku Bulamu n\'Omubuulirizi',
    therapyType: 'Engeri y\'Okubudaabudibwa Gyoyagala',
    therapySchedule: 'Enteekateka y\'Okubudaabudibwa Gyoyagala',
    therapyLocation: 'Ekifo ky\'Okubudaabudibwa Kyoyagala',
    therapyLanguage: 'Olulimi lw\'Okubudaabudibwa lwoyagala',
    goalVisibility: 'Gabanira Ebigyimo by\'Okuwona n\'Omubuulirizi',
    academicReminders: 'Okujjukiza Ebiseera by\'Emisomo',
    studyTools: 'Ebikozesebwa by\'Okusoma',
    academicAccommodations: 'Okusaba Obuyambi bw\'Okusoma',
    saveSettings: 'Kuuma Enteekateka',
    saveSuccess: 'Enteekateka zikuumiddwa bulungi',
    highContrast: 'Endabika Ennungi',
    largeText: 'Ennukuta Ennene',
    screenReader: 'Okusoma Ekiwandiko',
    reducedMotion: 'Okutambuza kutono',
    academicNote: 'Enteekateeka z\'okusoma ziyamba okugatta okuwona n\'okusoma kwo ku CoCIS',
    privacyNoticeExpanded: 'Amawulire go gonna gakuumibwa mu kyama okusinziira ku mateeka g\'e Uganda\'s Data Protection Act 2019. Abantu abakkirizibwa bokka be basobola okutuuka ku mawulire go nga okkirizza.',
    accessibilitySection: 'Enteekateeka z\'Obuyambi Obwenjawulo',
    lastUpdated: 'Gyakakyusibwa:',
  },
  sw: {
    pageTitle: 'Mipangilio yangu ya Uokoaji katika CoCIS katika Makerere',
    privacySection: 'Mapendeleo ya Faragha',
    privacyNotice: 'Data zako zinalindwa chini ya Sheria ya Ulinzi wa Data ya Uganda 2019',
    moreInfo: 'Jifunze zaidi kuhusu faragha yako',
    notificationSection: 'Mipangilio ya Arifa',
    emergencySection: 'Anwani za Dharura',
    recoverySection: 'Malengo ya Uokoaji',
    therapySection: 'Mapendeleo ya Tiba',
    contactsSection: 'Anwani za Msaada',
    academicSection: 'Mipangilio ya Uokoaji Kimasomo kwa Makerere',
    primaryContact: 'Mwasiliani wa Kwanza wa Dharura',
    secondaryContact: 'Mwasiliani wa Pili wa Dharura',
    name: 'Jina',
    relationship: 'Uhusiano',
    phone: 'Namba ya Simu',
    emailNotifications: 'Arifa za Barua Pepe',
    smsNotifications: 'Arifa za SMS',
    appNotifications: 'Arifa za Programu',
    emergencyAlerts: 'Arifa za Dharura',
    reminderAlerts: 'Vikumbusho vya Miadi',
    progressAlerts: 'Taarifa za Maendeleo',
    academicAlerts: 'Vikumbusho vya Tarehe za Kimasomo',
    shareProgress: 'Shiriki Maendeleo Yangu na Mshauri',
    shareAcademic: 'Shiriki Maendeleo ya Kimasomo na Mshauri',
    shareEmergency: 'Shiriki Anwani za Dharura na Chuo Kikuu',
    shareMedical: 'Shiriki Taarifa za Matibabu na Mshauri',
    therapyType: 'Aina ya Tiba Unayopendelea',
    therapySchedule: 'Ratiba ya Kikao Unayopendelea',
    therapyLocation: 'Eneo la Kikao Unayopendelea',
    therapyLanguage: 'Lugha ya Kikao Unayopendelea',
    goalVisibility: 'Shiriki Malengo ya Uokoaji na Mshauri',
    academicReminders: 'Vikumbusho vya Tarehe za Kimasomo',
    studyTools: 'Ushirikishwaji wa Zana za Kujifunza',
    academicAccommodations: 'Omba Huduma Maalum za Kimasomo',
    saveSettings: 'Hifadhi Mipangilio',
    saveSuccess: 'Mipangilio imehifadhiwa kwa mafanikio',
    highContrast: 'Hali ya Tofauti Kubwa',
    largeText: 'Hali ya Maandishi Makubwa',
    screenReader: 'Utangamano wa Kisoma Skrini',
    reducedMotion: 'Mchezomchezo Mdogo',
    academicNote: 'Mipangilio ya kimasomo husaidia kuratibu uokoaji wako na masomo yako katika CoCIS',
    privacyNoticeExpanded: 'Taarifa zako zote zinawekwa kwa siri kulingana na Sheria ya Ulinzi wa Data ya Uganda 2019. Wafanyakazi walioidhinishwa pekee wanaweza kufikia taarifa zako kwa idhini yako.',
    accessibilitySection: 'Mapendeleo ya Ufikiaji',
    lastUpdated: 'Ilisasishwa Mwisho:',
  }
};

function SettingsPage() {
  const classes = useStyles();
  const { language } = useLanguage();
  
  // Get settings translations based on current language
  const t = settingsTranslations[language] || settingsTranslations.en;
  
  // State for settings
  const [settings, setSettings] = useState({
    // Notification settings
    emailNotifications: true,
    smsNotifications: true,
    appNotifications: true,
    emergencyAlerts: true,
    reminderAlerts: true,
    progressAlerts: true,
    academicAlerts: true,
    
    // Privacy settings
    shareProgress: true,
    shareAcademic: true,
    shareEmergency: false,
    shareMedical: false,
    
    // Therapy preferences
    therapyType: 'individual',
    therapySchedule: 'weekly',
    therapyLocation: 'inPerson',
    therapyLanguage: language,
    
    // Academic settings
    academicReminders: true,
    studyTools: true,
    academicAccommodations: false,
    
    // Accessibility settings
    highContrast: false,
    largeText: false,
    screenReader: false,
    reducedMotion: false,
    
    // Emergency contacts
    primaryContact: {
      name: 'John Doe',
      relationship: 'Parent',
      phone: '+256 700 123456',
    },
    secondaryContact: {
      name: 'Jane Smith',
      relationship: 'Counselor',
      phone: '+256 777 654321',
    },
  });

  // Handle setting changes
  const handleSettingChange = (setting, value) => {
    setSettings({
      ...settings,
      [setting]: value,
    });
  };

  // Handle emergency contact changes
  const handleContactChange = (contact, field, value) => {
    setSettings({
      ...settings,
      [contact]: {
        ...settings[contact],
        [field]: value,
      },
    });
  };

  // Handle save settings
  const handleSaveSettings = () => {
    // In a real app, this would save to a backend
    console.log('Saving settings:', settings);
    // Show success message
    alert(t.saveSuccess);
  };

  return (
    <Grid container spacing={4} className={classes.settingsContainer}>
      {/* Page header */}
      <Grid item xs={12}>
        <Paper className={classes.headerPaper} elevation={2}>
          <Box display="flex" alignItems="center">
            <SettingsIcon className={classes.headerIcon} />
            <Typography variant="h4" className={classes.pageTitle} aria-label={t.pageTitle}>
              {t.pageTitle}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            {t.lastUpdated} {new Date().toLocaleDateString()}
          </Typography>
        </Paper>
      </Grid>

      {/* Privacy Settings */}
      <Grid item xs={12} md={6}>
        <Widget
          title={
            <Box display="flex" alignItems="center">
              <PrivacyIcon className={classes.sectionIcon} />
              <Typography variant="h5">{t.privacySection}</Typography>
            </Box>
          }
          elevation={4}
          disableWidgetMenu
          aria-label={t.privacySection}
        >
          <Box className={classes.privacyNotice}>
            <Typography variant="body1" color="error" className={classes.privacyText}>
              <PrivacyIcon className={classes.inlineIcon} />
              {t.privacyNotice}
            </Typography>
            <Link href="/privacy-policy" className={classes.privacyLink}>
              {t.moreInfo}
            </Link>
            <Tooltip title={t.privacyNoticeExpanded}>
              <IconButton aria-label="More information about privacy">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
          
          <Divider className={classes.divider} />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.shareProgress}
                onChange={(e) => handleSettingChange('shareProgress', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.shareProgress}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.shareAcademic}
                onChange={(e) => handleSettingChange('shareAcademic', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.shareAcademic}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.shareEmergency}
                onChange={(e) => handleSettingChange('shareEmergency', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.shareEmergency}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.shareMedical}
                onChange={(e) => handleSettingChange('shareMedical', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.shareMedical}</Typography>}
            className={classes.formControlLabel}
          />
        </Widget>
      </Grid>

      {/* Notification Settings */}
      <Grid item xs={12} md={6}>
        <Widget
          title={
            <Box display="flex" alignItems="center">
              <NotificationsIcon className={classes.sectionIcon} />
              <Typography variant="h5">{t.notificationSection}</Typography>
            </Box>
          }
          elevation={4}
          disableWidgetMenu
          aria-label={t.notificationSection}
        >
          <FormControlLabel
            control={
              <Switch
                checked={settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.emailNotifications}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.smsNotifications}
                onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.smsNotifications}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.appNotifications}
                onChange={(e) => handleSettingChange('appNotifications', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.appNotifications}</Typography>}
            className={classes.formControlLabel}
          />
          
          <Divider className={classes.divider} />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.emergencyAlerts}
                onChange={(e) => handleSettingChange('emergencyAlerts', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.emergencyAlerts}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.reminderAlerts}
                onChange={(e) => handleSettingChange('reminderAlerts', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.reminderAlerts}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.progressAlerts}
                onChange={(e) => handleSettingChange('progressAlerts', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.progressAlerts}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.academicAlerts}
                onChange={(e) => handleSettingChange('academicAlerts', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.academicAlerts}</Typography>}
            className={classes.formControlLabel}
          />
        </Widget>
      </Grid>

      {/* Emergency Contacts */}
      <Grid item xs={12}>
        <Accordion defaultExpanded className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="emergency-contacts-content"
            id="emergency-contacts-header"
            className={classes.accordionSummary}
          >
            <ContactsIcon className={classes.sectionIcon} />
            <Typography variant="h5">{t.emergencySection}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.contactTitle}>{t.primaryContact}</Typography>
                <TextField
                  label={t.name}
                  value={settings.primaryContact.name}
                  onChange={(e) => handleContactChange('primaryContact', 'name', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label={t.relationship}
                  value={settings.primaryContact.relationship}
                  onChange={(e) => handleContactChange('primaryContact', 'relationship', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label={t.phone}
                  value={settings.primaryContact.phone}
                  onChange={(e) => handleContactChange('primaryContact', 'phone', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.contactTitle}>{t.secondaryContact}</Typography>
                <TextField
                  label={t.name}
                  value={settings.secondaryContact.name}
                  onChange={(e) => handleContactChange('secondaryContact', 'name', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label={t.relationship}
                  value={settings.secondaryContact.relationship}
                  onChange={(e) => handleContactChange('secondaryContact', 'relationship', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  label={t.phone}
                  value={settings.secondaryContact.phone}
                  onChange={(e) => handleContactChange('secondaryContact', 'phone', e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>

      {/* Therapy Preferences */}
      <Grid item xs={12} md={6}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="therapy-preferences-content"
            id="therapy-preferences-header"
            className={classes.accordionSummary}
          >
            <TherapyIcon className={classes.sectionIcon} />
            <Typography variant="h5">{t.therapySection}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="therapy-type-label">{t.therapyType}</InputLabel>
                  <Select
                    labelId="therapy-type-label"
                    value={settings.therapyType}
                    onChange={(e) => handleSettingChange('therapyType', e.target.value)}
                    label={t.therapyType}
                    className={classes.select}
                  >
                    <MenuItem value="individual">Individual Therapy</MenuItem>
                    <MenuItem value="group">Group Therapy</MenuItem>
                    <MenuItem value="family">Family Therapy</MenuItem>
                    <MenuItem value="cbt">Cognitive Behavioral Therapy</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="therapy-schedule-label">{t.therapySchedule}</InputLabel>
                  <Select
                    labelId="therapy-schedule-label"
                    value={settings.therapySchedule}
                    onChange={(e) => handleSettingChange('therapySchedule', e.target.value)}
                    label={t.therapySchedule}
                    className={classes.select}
                  >
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="biweekly">Bi-weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="asNeeded">As Needed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="therapy-location-label">{t.therapyLocation}</InputLabel>
                  <Select
                    labelId="therapy-location-label"
                    value={settings.therapyLocation}
                    onChange={(e) => handleSettingChange('therapyLocation', e.target.value)}
                    label={t.therapyLocation}
                    className={classes.select}
                  >
                    <MenuItem value="inPerson">In-Person (Makerere Counseling Center)</MenuItem>
                    <MenuItem value="virtual">Virtual/Online</MenuItem>
                    <MenuItem value="hybrid">Hybrid (Both)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="therapy-language-label">{t.therapyLanguage}</InputLabel>
                  <Select
                    labelId="therapy-language-label"
                    value={settings.therapyLanguage}
                    onChange={(e) => handleSettingChange('therapyLanguage', e.target.value)}
                    label={t.therapyLanguage}
                    className={classes.select}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="lg">Luganda</MenuItem>
                    <MenuItem value="sw">Swahili</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>

      {/* Recovery Goals */}
      <Grid item xs={12} md={6}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="recovery-goals-content"
            id="recovery-goals-header"
            className={classes.accordionSummary}
          >
            <GoalsIcon className={classes.sectionIcon} />
            <Typography variant="h5">{t.recoverySection}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.goalVisibility}
                      onChange={(e) => handleSettingChange('goalVisibility', e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={<Typography className={classes.settingLabel}>{t.goalVisibility}</Typography>}
                  className={classes.formControlLabel}
                />
              </Grid>
              {/* This would be expanded with actual goal tracking options in a real implementation */}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>

      {/* Academic Settings */}
      <Grid item xs={12}>
        <Widget
          title={
            <Box display="flex" alignItems="center">
              <AcademicIcon className={classes.sectionIcon} />
              <Typography variant="h5">{t.academicSection}</Typography>
            </Box>
          }
          elevation={4}
          disableWidgetMenu
          aria-label={t.academicSection}
        >
          <Box className={classes.academicBox}>
            <Typography variant="body1" className={classes.academicNote}>
              <InfoIcon className={classes.inlineIcon} />
              {t.academicNote}
            </Typography>
          </Box>
          
          <Divider className={classes.divider} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.academicReminders}
                    onChange={(e) => handleSettingChange('academicReminders', e.target.checked)}
                    color="primary"
                    className={classes.switch}
                  />
                }
                label={<Typography className={classes.settingLabel}>{t.academicReminders}</Typography>}
                className={classes.formControlLabel}
              />
            </Grid>
            
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.studyTools}
                    onChange={(e) => handleSettingChange('studyTools', e.target.checked)}
                    color="primary"
                    className={classes.switch}
                  />
                }
                label={<Typography className={classes.settingLabel}>{t.studyTools}</Typography>}
                className={classes.formControlLabel}
              />
            </Grid>
            
            <Grid item xs={12} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.academicAccommodations}
                    onChange={(e) => handleSettingChange('academicAccommodations', e.target.checked)}
                    color="primary"
                    className={classes.switch}
                  />
                }
                label={<Typography className={classes.settingLabel}>{t.academicAccommodations}</Typography>}
                className={classes.formControlLabel}
              />
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      {/* Accessibility Settings */}
      <Grid item xs={12} md={6}>
        <Widget
          title={
            <Box display="flex" alignItems="center">
              <AccessibilityIcon className={classes.sectionIcon} />
              <Typography variant="h5">{t.accessibilitySection}</Typography>
            </Box>
          }
          elevation={4}
          disableWidgetMenu
          aria-label={t.accessibilitySection}
        >
          <FormControlLabel
            control={
              <Switch
                checked={settings.highContrast}
                onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.highContrast}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.largeText}
                onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.largeText}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.screenReader}
                onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.screenReader}</Typography>}
            className={classes.formControlLabel}
          />
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.reducedMotion}
                onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                color="primary"
                className={classes.switch}
              />
            }
            label={<Typography className={classes.settingLabel}>{t.reducedMotion}</Typography>}
            className={classes.formControlLabel}
          />
        </Widget>
      </Grid>

      {/* Save Button */}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleSaveSettings}
            className={classes.saveButton}
            aria-label={t.saveSettings}
          >
            {t.saveSettings}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SettingsPage;
