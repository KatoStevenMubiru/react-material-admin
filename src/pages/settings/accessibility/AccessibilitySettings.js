import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Keyboard as KeyboardIcon,
} from '@mui/icons-material';
import useStyles from './styles';
import { useLanguage } from '../../../context/LanguageContext';

// Accessibility-specific translations
const accessibilityTranslations = {
  en: {
    accessibilitySettingsTitle: 'Accessibility Settings',
    visualSettingsTitle: 'Visual Settings',
    inputMethodsTitle: 'Input Methods',
    highContrastLabel: 'High Contrast Mode',
    textSizeLabel: 'Text Size',
    colorSchemeLabel: 'Color Scheme',
    colorSchemeDefault: 'Default',
    colorSchemeHighContrast: 'High Contrast',
    colorSchemeDarkMode: 'Dark Mode',
    screenReaderLabel: 'Screen Reader Support',
    reducedMotionLabel: 'Reduced Motion',
    savePreferencesButton: 'Save Preferences'
  },
  lg: {
    accessibilitySettingsTitle: 'Entegeka z\'Enkozesa',
    visualSettingsTitle: 'Entegeka z\'Okulaba',
    inputMethodsTitle: 'Entegeka z\'Okuwandiika',
    highContrastLabel: 'Endabika Ennungi',
    textSizeLabel: 'Obunene bw\'Ebigambo',
    colorSchemeLabel: 'Langi',
    colorSchemeDefault: 'Eyabulijjo',
    colorSchemeHighContrast: 'Endabika Ennungi',
    colorSchemeDarkMode: 'Endabika Enzikiza',
    screenReaderLabel: 'Okusoma Ekiwandiko',
    reducedMotionLabel: 'Okutambuza Kutono',
    savePreferencesButton: 'Kuuma Entegeka'
  },
  sw: {
    accessibilitySettingsTitle: 'Mipangilio ya Ufikiaji',
    visualSettingsTitle: 'Mipangilio ya Kuona',
    inputMethodsTitle: 'Mbinu za Kuingiza',
    highContrastLabel: 'Hali ya Tofauti Kubwa',
    textSizeLabel: 'Ukubwa wa Maandishi',
    colorSchemeLabel: 'Mpangilio wa Rangi',
    colorSchemeDefault: 'Kawaida',
    colorSchemeHighContrast: 'Tofauti Kubwa',
    colorSchemeDarkMode: 'Hali ya Giza',
    screenReaderLabel: 'Msomaji wa Skrini',
    reducedMotionLabel: 'Mwendo Mdogo',
    savePreferencesButton: 'Hifadhi Mipangilio'
  }
};

const AccessibilitySettings = () => {
  const classes = useStyles();
  const { language } = useLanguage();
  
  // Get translations based on current language
  const t = accessibilityTranslations[language] || accessibilityTranslations.en;

  // State for accessibility preferences
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [textSize, setTextSize] = useState(16);
  const [colorScheme, setColorScheme] = useState('default');

  // Handle preference changes
  const handlePreferenceChange = (preference, value) => {
    // Update local state
    switch (preference) {
      case 'highContrast':
        setHighContrast(value);
        break;
      case 'screenReader':
        setScreenReader(value);
        break;
      case 'reducedMotion':
        setReducedMotion(value);
        break;
      case 'textSize':
        setTextSize(value);
        break;
      case 'colorScheme':
        setColorScheme(value);
        break;
      default:
        break;
    }

    // Track analytics
    window.dataLayer?.push({
      event: 'accessibility_preference_change',
      preference,
      value,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        {t.accessibilitySettingsTitle}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Visual Settings */}
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Box display="flex" alignItems="center" mb={2}>
                <VisibilityIcon className={classes.icon} />
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.visualSettingsTitle}
                </Typography>
              </Box>
              
              <FormControlLabel
                className={classes.switch}
                control={
                  <Switch
                    checked={highContrast}
                    onChange={(e) => handlePreferenceChange('highContrast', e.target.checked)}
                    color="primary"
                  />
                }
                label={<Typography className={classes.switchLabel}>{t.highContrastLabel}</Typography>}
              />
              
              <Box mt={2}>
                <Typography id="text-size-slider" className={classes.sliderLabel} gutterBottom>
                  {t.textSizeLabel}
                </Typography>
                <Slider
                  className={classes.slider}
                  value={textSize}
                  onChange={(_, value) => handlePreferenceChange('textSize', value)}
                  aria-labelledby="text-size-slider"
                  min={12}
                  max={24}
                  step={2}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
              
              <Box mt={2}>
                <Typography className={classes.selectLabel} gutterBottom>
                  {t.colorSchemeLabel}
                </Typography>
                <Select
                  className={classes.select}
                  value={colorScheme}
                  onChange={(e) => handlePreferenceChange('colorScheme', e.target.value)}
                  fullWidth
                >
                  <MenuItem value="default">{t.colorSchemeDefault}</MenuItem>
                  <MenuItem value="highContrast">{t.colorSchemeHighContrast}</MenuItem>
                  <MenuItem value="darkMode">{t.colorSchemeDarkMode}</MenuItem>
                </Select>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Input Methods */}
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Box display="flex" alignItems="center" mb={2}>
                <KeyboardIcon className={classes.icon} />
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.inputMethodsTitle}
                </Typography>
              </Box>
              
              <FormControlLabel
                className={classes.switch}
                control={
                  <Switch
                    checked={screenReader}
                    onChange={(e) => handlePreferenceChange('screenReader', e.target.checked)}
                    color="primary"
                  />
                }
                label={<Typography className={classes.switchLabel}>{t.screenReaderLabel}</Typography>}
              />
              
              <FormControlLabel
                className={classes.switch}
                control={
                  <Switch
                    checked={reducedMotion}
                    onChange={(e) => handlePreferenceChange('reducedMotion', e.target.checked)}
                    color="primary"
                  />
                }
                label={<Typography className={classes.switchLabel}>{t.reducedMotionLabel}</Typography>}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          className={classes.saveButton}
          size="large"
          onClick={() => {
            // Save preferences to backend
            window.dataLayer?.push({
              event: 'save_accessibility_preferences',
              preferences: {
                highContrast,
                screenReader,
                reducedMotion,
                textSize,
                colorScheme,
              },
            });
          }}
        >
          {t.savePreferencesButton}
        </Button>
      </Box>
    </Box>
  );
};

export default AccessibilitySettings; 