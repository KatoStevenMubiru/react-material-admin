import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Divider,
  Box,
  Tabs,
  Tab,
  MenuItem,
  Slider,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  Link
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  MenuBook as ReadingIcon,
  Keyboard as KeyboardIcon,
  AccessibilityNew as AccessibilityIcon,
  VolumeUp as VolumeUpIcon,
  TextFields as TextFieldsIcon,
  FormatLineSpacing as LineSpacingIcon,
  Mic as MicIcon,
  Save as SaveIcon,
  Info as InfoIcon,
  Help as HelpIcon,
  Settings as SettingsIcon,
  TouchApp as TouchAppIcon
} from '@mui/icons-material';

// styles
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import PageTitle from '../../components/PageTitle/PageTitle';

// context
import { useLanguage } from '../../context/LanguageContext';

// Accessibility-specific translations
const accessibilityTranslations = {
  en: {
    pageTitle: 'Accessibility at CoCIS at Makerere University',
    pageDescription: 'Customize accessibility settings for your recovery journey',
    visualSettingsTitle: 'Visual Settings',
    readingPreferencesTitle: 'Reading Preferences',
    inputMethodsTitle: 'Input Methods',
    contrastLabel: 'Contrast',
    fontSizeLabel: 'Font Size',
    colorFilterLabel: 'Color Filter',
    textToSpeechLabel: 'Text-to-Speech',
    lineSpacingLabel: 'Line Spacing',
    readingGuideLabel: 'Reading Guide',
    keyboardNavigationLabel: 'Keyboard Navigation',
    voiceInputLabel: 'Voice Input',
    touchTargetsLabel: 'Large Touch Targets',
    saveSettings: 'Save Settings',
    resetDefaults: 'Reset to Defaults',
    highContrast: 'High',
    lowContrast: 'Low',
    normalContrast: 'Normal',
    largeFont: 'Large',
    mediumFont: 'Medium',
    smallFont: 'Small',
    noFilter: 'None',
    deuteranopiaFilter: 'Deuteranopia',
    protanopiaFilter: 'Protanopia',
    tritanopiaFilter: 'Tritanopia',
    wideSpacing: 'Wide',
    normalSpacing: 'Normal',
    tightSpacing: 'Tight',
    settingsSaved: 'Your accessibility settings have been saved',
    academicNote: 'These settings will apply to your academic recovery experience at CoCIS'
  },
  lg: {
    pageTitle: 'Obukuumi ku CoCIS ku Yunivasite ya Makerere',
    pageDescription: 'Tegeka obukuumi bwo mu lugendo lwo olw\'okuwona',
    visualSettingsTitle: 'Entegeka y\'Okulaba',
    readingPreferencesTitle: 'Ensonga z\'Okusoma',
    inputMethodsTitle: 'Enkola z\'Okuyingiza',
    contrastLabel: 'Enjawulo y\'Okulaba',
    fontSizeLabel: 'Obunene bw\'Ennukuta',
    colorFilterLabel: 'Ekisengejja Langi',
    textToSpeechLabel: 'Ebigambo mu Ddoboozi',
    lineSpacingLabel: 'Ebbanga ly\'Ennyiriri',
    readingGuideLabel: 'Okulungamya Okusoma',
    keyboardNavigationLabel: 'Okutambula n\'Amapeesa',
    voiceInputLabel: 'Okuyingiza n\'Eddoboozi',
    touchTargetsLabel: 'Obufo bw\'Okukwatako Obunene',
    saveSettings: 'Kuuma Entegeka',
    resetDefaults: 'Ddayo ku Entegeka Entongole',
    highContrast: 'Enjawulo Ennyingi',
    lowContrast: 'Enjawulo Entono',
    normalContrast: 'Enjawulo Enyangu',
    largeFont: 'Ennene',
    mediumFont: 'Wakati',
    smallFont: 'Entono',
    noFilter: 'Tewali',
    deuteranopiaFilter: 'Deuteranopia',
    protanopiaFilter: 'Protanopia',
    tritanopiaFilter: 'Tritanopia',
    wideSpacing: 'Ebbanga Eggazi',
    normalSpacing: 'Ebbanga Enyangu',
    tightSpacing: 'Ebbanga Ettono',
    settingsSaved: 'Entegeka zo ez\'obukuumi zikuumiddwa',
    academicNote: 'Entegeka zino zijja kukola ku by\'okuyiga byo eby\'okuwona ku CoCIS'
  },
  sw: {
    pageTitle: 'Ufikiaji katika CoCIS katika Chuo Kikuu cha Makerere',
    pageDescription: 'Weka mipangilio ya ufikiaji kwa safari yako ya ahueni',
    visualSettingsTitle: 'Mipangilio ya Kuona',
    readingPreferencesTitle: 'Mapendeleo ya Kusoma',
    inputMethodsTitle: 'Mbinu za Ingizo',
    contrastLabel: 'Tofauti',
    fontSizeLabel: 'Ukubwa wa Fonti',
    colorFilterLabel: 'Kichungi cha Rangi',
    textToSpeechLabel: 'Maandishi hadi Hotuba',
    lineSpacingLabel: 'Nafasi ya Mstari',
    readingGuideLabel: 'Mwongozo wa Kusoma',
    keyboardNavigationLabel: 'Urambazaji wa Kibodi',
    voiceInputLabel: 'Ingizo la Sauti',
    touchTargetsLabel: 'Vilengo Vikubwa vya Kugusa',
    saveSettings: 'Hifadhi Mipangilio',
    resetDefaults: 'Rudisha kwa Mipangilio ya Kawaida',
    highContrast: 'Juu',
    lowContrast: 'Chini',
    normalContrast: 'Kawaida',
    largeFont: 'Kubwa',
    mediumFont: 'Wastani',
    smallFont: 'Ndogo',
    noFilter: 'Hakuna',
    deuteranopiaFilter: 'Deuteranopia',
    protanopiaFilter: 'Protanopia',
    tritanopiaFilter: 'Tritanopia',
    wideSpacing: 'Pana',
    normalSpacing: 'Kawaida',
    tightSpacing: 'Finyu',
    settingsSaved: 'Mipangilio yako ya ufikiaji imehifadhiwa',
    academicNote: 'Mipangilio hii itatumika kwa uzoefu wako wa ahueni ya kitaaluma katika CoCIS'
  }
};

/**
 * Accessibility page component for managing accessibility preferences
 * Provides settings for visual, reading, and input preferences with a focus on 
 * recovery needs for CoCIS students at Makerere University
 */
function Accessibility() {
  const classes = useStyles();
  const { t, languageCode } = useLanguage();
  
  // Get translations for current language
  const at = accessibilityTranslations[languageCode] || accessibilityTranslations.en;
  
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);
  
  // Visual settings state
  const [contrast, setContrast] = useState('normal');
  const [fontSize, setFontSize] = useState('medium');
  const [colorFilter, setColorFilter] = useState('none');
  
  // Reading preferences state
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [lineSpacing, setLineSpacing] = useState('normal');
  const [readingGuide, setReadingGuide] = useState(false);
  
  // Input methods state
  const [keyboardNavigation, setKeyboardNavigation] = useState(true);
  const [voiceInput, setVoiceInput] = useState(false);
  const [largeTouchTargets, setLargeTouchTargets] = useState(true);
  
  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    
    // Tracking tab change via analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'accessibility_tab_change',
        tab_name: ['visual', 'reading', 'input'][newValue],
        user_context: 'recovery_settings'
      });
    }
  };
  
  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setContrast(settings.contrast || 'normal');
      setFontSize(settings.fontSize || 'medium');
      setColorFilter(settings.colorFilter || 'none');
      setTextToSpeech(settings.textToSpeech || false);
      setLineSpacing(settings.lineSpacing || 'normal');
      setReadingGuide(settings.readingGuide || false);
      setKeyboardNavigation(settings.keyboardNavigation || true);
      setVoiceInput(settings.voiceInput || false);
      setLargeTouchTargets(settings.largeTouchTargets || true);
    }
    
    // Check URL hash to set initial tab
    const hash = window.location.hash;
    if (hash === '#visual') setActiveTab(0);
    else if (hash === '#reading') setActiveTab(1);
    else if (hash === '#input') setActiveTab(2);
    
  }, []);
  
  // Apply settings to document when they change
  useEffect(() => {
    // Apply font size
    let rootFontSize = '16px';
    if (fontSize === 'large') rootFontSize = '20px';
    if (fontSize === 'small') rootFontSize = '14px';
    document.documentElement.style.fontSize = rootFontSize;
    
    // Apply contrast
    if (contrast === 'high') {
      document.body.classList.add('high-contrast');
      document.body.classList.remove('low-contrast');
    } else if (contrast === 'low') {
      document.body.classList.add('low-contrast');
      document.body.classList.remove('high-contrast');
    } else {
      document.body.classList.remove('high-contrast', 'low-contrast');
    }
    
    // Apply line spacing
    document.body.style.lineHeight = lineSpacing === 'wide' ? '1.8' : 
                                     lineSpacing === 'tight' ? '1.2' : '1.5';
    
    // Apply large touch targets
    if (largeTouchTargets) {
      document.body.classList.add('large-touch-targets');
    } else {
      document.body.classList.remove('large-touch-targets');
    }
    
  }, [fontSize, contrast, lineSpacing, largeTouchTargets]);
  
  // Save settings
  const handleSaveSettings = () => {
    const settings = {
      contrast,
      fontSize,
      colorFilter,
      textToSpeech,
      lineSpacing,
      readingGuide,
      keyboardNavigation,
      voiceInput,
      largeTouchTargets
    };
    
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    
    // Track settings saved via analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'accessibility_settings_saved',
        settings: settings,
        user_context: 'recovery_settings'
      });
    }
  };
  
  // Reset to defaults
  const handleResetDefaults = () => {
    setContrast('normal');
    setFontSize('medium');
    setColorFilter('none');
    setTextToSpeech(false);
    setLineSpacing('normal');
    setReadingGuide(false);
    setKeyboardNavigation(true);
    setVoiceInput(false);
    setLargeTouchTargets(true);
    
    // Remove styles
    document.documentElement.style.fontSize = '16px';
    document.body.classList.remove('high-contrast', 'low-contrast');
    document.body.style.lineHeight = '1.5';
    document.body.classList.remove('large-touch-targets');
    
    // Clear saved settings
    localStorage.removeItem('accessibilitySettings');
    
    // Track reset via analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'accessibility_settings_reset',
        user_context: 'recovery_settings'
      });
    }
  };
  
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.headerPaper} aria-label={at.pageTitle}>
          <Box display="flex" alignItems="center">
            <AccessibilityIcon className={classes.headerIcon} />
            <Typography variant="h1" className={classes.pageTitle}>
              {at.pageTitle}
            </Typography>
          </Box>
          <Typography variant="subtitle1" className={classes.pageDescription}>
            {at.pageDescription}
          </Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={12}>
        <Paper className={classes.tabsContainer}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Accessibility settings tabs"
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
          >
            <Tab 
              icon={<VisibilityIcon />} 
              label={at.visualSettingsTitle}
              id="accessibility-tab-0"
              aria-controls="accessibility-tabpanel-0"
              className={classes.tab}
            />
            <Tab 
              icon={<ReadingIcon />} 
              label={at.readingPreferencesTitle}
              id="accessibility-tab-1"
              aria-controls="accessibility-tabpanel-1"
              className={classes.tab}
            />
            <Tab 
              icon={<KeyboardIcon />} 
              label={at.inputMethodsTitle}
              id="accessibility-tab-2"
              aria-controls="accessibility-tabpanel-2"
              className={classes.tab}
            />
          </Tabs>
        </Paper>
      </Grid>
      
      <Grid item xs={12}>
        {/* Visual Settings Panel */}
        <TabPanel value={activeTab} index={0}>
          <Widget
            title={
              <Box display="flex" alignItems="center">
                <VisibilityIcon className={classes.sectionIcon} />
                <Typography variant="h4">{at.visualSettingsTitle}</Typography>
              </Box>
            }
            disableWidgetMenu
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="contrast-select-label">{at.contrastLabel}</InputLabel>
                  <Select
                    labelId="contrast-select-label"
                    id="contrast-select"
                    value={contrast}
                    onChange={(e) => setContrast(e.target.value)}
                    fullWidth
                    className={classes.select}
                  >
                    <MenuItem value="high">{at.highContrast}</MenuItem>
                    <MenuItem value="normal">{at.normalContrast}</MenuItem>
                    <MenuItem value="low">{at.lowContrast}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="font-size-select-label">{at.fontSizeLabel}</InputLabel>
                  <Select
                    labelId="font-size-select-label"
                    id="font-size-select"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    fullWidth
                    className={classes.select}
                  >
                    <MenuItem value="large">{at.largeFont}</MenuItem>
                    <MenuItem value="medium">{at.mediumFont}</MenuItem>
                    <MenuItem value="small">{at.smallFont}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="color-filter-select-label">{at.colorFilterLabel}</InputLabel>
                  <Select
                    labelId="color-filter-select-label"
                    id="color-filter-select"
                    value={colorFilter}
                    onChange={(e) => setColorFilter(e.target.value)}
                    fullWidth
                    className={classes.select}
                  >
                    <MenuItem value="none">{at.noFilter}</MenuItem>
                    <MenuItem value="deuteranopia">{at.deuteranopiaFilter}</MenuItem>
                    <MenuItem value="protanopia">{at.protanopiaFilter}</MenuItem>
                    <MenuItem value="tritanopia">{at.tritanopiaFilter}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <Box className={classes.previewBox}>
                  <Typography variant="h6" gutterBottom>Preview</Typography>
                  <Paper 
                    className={`${classes.previewPaper} ${
                      contrast === 'high' ? classes.highContrast : 
                      contrast === 'low' ? classes.lowContrast : ''
                    } ${
                      fontSize === 'large' ? classes.largeFont :
                      fontSize === 'small' ? classes.smallFont : ''
                    }`}
                  >
                    <Typography variant="body1">
                      This is a preview of your visual settings for your recovery journey at CoCIS.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </TabPanel>
        
        {/* Reading Preferences Panel */}
        <TabPanel value={activeTab} index={1}>
          <Widget
            title={
              <Box display="flex" alignItems="center">
                <ReadingIcon className={classes.sectionIcon} />
                <Typography variant="h4">{at.readingPreferencesTitle}</Typography>
              </Box>
            }
            disableWidgetMenu
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={textToSpeech}
                      onChange={(e) => setTextToSpeech(e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <VolumeUpIcon className={classes.optionIcon} />
                      <Typography variant="body1">{at.textToSpeechLabel}</Typography>
                    </Box>
                  }
                  className={classes.formControlLabel}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="line-spacing-select-label">{at.lineSpacingLabel}</InputLabel>
                  <Select
                    labelId="line-spacing-select-label"
                    id="line-spacing-select"
                    value={lineSpacing}
                    onChange={(e) => setLineSpacing(e.target.value)}
                    fullWidth
                    className={classes.select}
                  >
                    <MenuItem value="wide">{at.wideSpacing}</MenuItem>
                    <MenuItem value="normal">{at.normalSpacing}</MenuItem>
                    <MenuItem value="tight">{at.tightSpacing}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={readingGuide}
                      onChange={(e) => setReadingGuide(e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <LineSpacingIcon className={classes.optionIcon} />
                      <Typography variant="body1">{at.readingGuideLabel}</Typography>
                    </Box>
                  }
                  className={classes.formControlLabel}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box className={classes.previewBox}>
                  <Typography variant="h6" gutterBottom>Preview</Typography>
                  <Paper 
                    className={`${classes.previewPaper} ${
                      lineSpacing === 'wide' ? classes.wideSpacing :
                      lineSpacing === 'tight' ? classes.tightSpacing : ''
                    }`}
                  >
                    <Typography variant="body1">
                      This is a preview of your reading preferences for recovery materials at CoCIS.
                      The spacing between lines will adjust based on your preferences.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </TabPanel>
        
        {/* Input Methods Panel */}
        <TabPanel value={activeTab} index={2}>
          <Widget
            title={
              <Box display="flex" alignItems="center">
                <KeyboardIcon className={classes.sectionIcon} />
                <Typography variant="h4">{at.inputMethodsTitle}</Typography>
              </Box>
            }
            disableWidgetMenu
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={keyboardNavigation}
                      onChange={(e) => setKeyboardNavigation(e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <KeyboardIcon className={classes.optionIcon} />
                      <Typography variant="body1">{at.keyboardNavigationLabel}</Typography>
                    </Box>
                  }
                  className={classes.formControlLabel}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={voiceInput}
                      onChange={(e) => setVoiceInput(e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <MicIcon className={classes.optionIcon} />
                      <Typography variant="body1">{at.voiceInputLabel}</Typography>
                    </Box>
                  }
                  className={classes.formControlLabel}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={largeTouchTargets}
                      onChange={(e) => setLargeTouchTargets(e.target.checked)}
                      color="primary"
                      className={classes.switch}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <TouchAppIcon className={classes.optionIcon} />
                      <Typography variant="body1">{at.touchTargetsLabel}</Typography>
                    </Box>
                  }
                  className={classes.formControlLabel}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box className={classes.previewBox}>
                  <Typography variant="h6" gutterBottom>Preview</Typography>
                  <Paper className={classes.previewPaper}>
                    <Typography variant="body1">
                      These input settings will help you navigate the recovery system more easily.
                      Large touch targets make buttons and controls easier to tap on mobile devices.
                    </Typography>
                    <Box display="flex" mt={2} className={classes.buttonContainer}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        className={`${largeTouchTargets ? classes.largeButton : ''}`}
                        style={{ marginRight: 16 }}
                      >
                        Sample Button
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        className={`${largeTouchTargets ? classes.largeButton : ''}`}
                      >
                        Another Button
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </TabPanel>
      </Grid>
      
      <Grid item xs={12}>
        <Box className={classes.actionsContainer}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSaveSettings}
            className={classes.actionButton}
            aria-label={at.saveSettings}
          >
            {at.saveSettings}
          </Button>
          
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleResetDefaults}
            className={classes.actionButton}
            aria-label={at.resetDefaults}
          >
            {at.resetDefaults}
          </Button>
          
          {showSuccess && (
            <Paper className={classes.successMessage} elevation={3}>
              <Typography variant="body1">
                {at.settingsSaved}
              </Typography>
            </Paper>
          )}
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Paper className={classes.academicNote}>
          <Box display="flex" alignItems="center">
            <InfoIcon className={classes.noteIcon} />
            <Typography variant="body1">
              {at.academicNote}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

// TabPanel component for the tabbed interface
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`accessibility-tabpanel-${index}`}
      aria-labelledby={`accessibility-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default Accessibility; 