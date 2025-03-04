import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

// Define consistent colors
const COLORS = {
  primary: '#536DFE',
  error: '#ef5350',
  success: '#3CD4A0',
  neutral: '#757575',
  text: {
    primary: '#4A4A4A',
    secondary: '#6E6E6E'
  }
};

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
    color: COLORS.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  paper: {
    boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    },
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& .MuiTab-root': {
      minHeight: 48,
      minWidth: 120,
      color: COLORS.text.primary,
      [theme.breakpoints.down('sm')]: {
        minWidth: 'auto',
      },
    },
  },
  tabPanel: {
    padding: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
    color: COLORS.primary,
    fontSize: 48,
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  switch: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    minHeight: 48,
    minWidth: 200,
    color: COLORS.text.primary,
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
  settingsContainer: {
    marginBottom: theme.spacing(4),
  },
  headerPaper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    backgroundColor: COLORS.primary,
    color: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: '2px',
    },
  },
  headerIcon: {
    fontSize: 48,
    marginRight: theme.spacing(2),
    color: '#ffffff',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 600,
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
    '@media (prefers-reduced-data: reduce)': {
      fontSize: 24,
    },
  },
  sectionIcon: {
    fontSize: 32,
    marginRight: theme.spacing(2),
    color: COLORS.primary,
  },
  formControlLabel: {
    display: 'flex',
    marginBottom: theme.spacing(1.5),
    '&:focus-within': {
      backgroundColor: alpha(COLORS.primary, 0.05),
      borderRadius: 4,
    },
    minHeight: 48,
    '&:hover': {
      backgroundColor: alpha(COLORS.primary, 0.08),
      borderRadius: 4,
    },
  },
  settingLabel: {
    fontSize: 18,
    marginLeft: theme.spacing(1),
    color: COLORS.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      minHeight: 56,
      fontSize: 18,
      '& fieldset': {
        borderColor: alpha(COLORS.primary, 0.3),
      },
      '&:hover fieldset': {
        borderColor: COLORS.primary,
      },
      '&.Mui-focused fieldset': {
        borderColor: COLORS.primary,
        borderWidth: 2,
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: 18,
      color: COLORS.text.secondary,
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(2),
      color: COLORS.text.primary,
    },
  },
  privacyNotice: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: alpha(COLORS.error, 0.1),
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
  },
  privacyText: {
    fontSize: 18,
    color: COLORS.error,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    flex: 1,
    minWidth: 260,
  },
  privacyLink: {
    color: COLORS.primary,
    marginLeft: theme.spacing(2),
    fontSize: 16,
    fontWeight: 500,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: '2px',
    },
  },
  inlineIcon: {
    fontSize: 24,
    marginRight: theme.spacing(1),
    verticalAlign: 'middle',
  },
  accordion: {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px !important',
    '&:before': {
      display: 'none',
    },
    marginBottom: theme.spacing(2),
    '&.Mui-expanded': {
      marginTop: 0,
      marginBottom: theme.spacing(2),
    },
  },
  accordionSummary: {
    minHeight: 64,
    '&.Mui-expanded': {
      minHeight: 64,
    },
    '& .MuiAccordionSummary-content': {
      margin: `${theme.spacing(1.5)}px 0`,
      alignItems: 'center',
      '&.Mui-expanded': {
        margin: `${theme.spacing(1.5)}px 0`,
      },
    },
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: '2px',
      backgroundColor: alpha(COLORS.primary, 0.08),
    },
  },
  accordionDetails: {
    padding: theme.spacing(2, 3, 3),
  },
  contactTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    fontSize: 20,
    color: theme.palette.text.primary,
    borderLeft: `4px solid ${COLORS.primary}`,
    paddingLeft: theme.spacing(1.5),
  },
  select: {
    minHeight: 56,
    '& .MuiSelect-select': {
      padding: theme.spacing(2),
      fontSize: 18,
    },
  },
  academicBox: {
    padding: theme.spacing(2),
    backgroundColor: alpha(COLORS.primary, 0.08),
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    borderLeft: `4px solid ${COLORS.primary}`,
  },
  academicNote: {
    fontSize: 18,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  saveButton: {
    padding: theme.spacing(1.5, 4),
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: COLORS.success,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#2AAB7D',
    },
    boxShadow: '0 4px 12px rgba(60, 212, 160, 0.3)',
    minHeight: 56,
    minWidth: 200,
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: '2px',
    },
  },
  expandIconButton: {
    padding: 8,
    color: COLORS.text.secondary,
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    '&:hover': {
      backgroundColor: alpha(COLORS.primary, 0.08),
    },
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: '2px',
    },
  },
  // Special handling for media queries
  '@media (prefers-contrast: more)': {
    headerPaper: {
      backgroundColor: '#000000',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      border: '3px solid white',
    },
    privacyNotice: {
      backgroundColor: '#000000',
      border: '2px solid #ff0000',
    },
    privacyText: {
      color: '#ffffff',
      fontWeight: 700,
    },
    privacyLink: {
      color: '#ffffff',
      textDecoration: 'underline',
      fontWeight: 700,
    },
    settingLabel: {
      color: '#000000',
      fontWeight: 700,
    },
    formControlLabel: {
      '&:focus-within': {
        backgroundColor: '#e0e0e0',
        outline: '2px solid #ffffff',
      },
    },
    saveButton: {
      backgroundColor: '#000000',
      color: '#ffffff',
      border: '2px solid #ffffff',
    },
  },
  '@media (prefers-reduced-motion: reduce)': {
    accordion: {
      transition: 'none !important',
    },
    saveButton: {
      transition: 'none !important',
    },
  },
  '@media (prefers-reduced-data: reduce)': {
    // Simplified styles for low-bandwidth conditions
    headerPaper: {
      boxShadow: 'none',
      border: `1px solid ${COLORS.primary}`,
    },
    accordion: {
      boxShadow: 'none',
      border: `1px solid ${theme.palette.grey[300]}`,
    },
    saveButton: {
      boxShadow: 'none',
    },
  },
  // Mobile responsiveness
  [theme.breakpoints.down('sm')]: {
    headerIcon: {
      fontSize: 36,
      marginRight: theme.spacing(1),
    },
    sectionIcon: {
      fontSize: 24,
      marginRight: theme.spacing(1),
    },
    settingLabel: {
      fontSize: 16,
    },
    textField: {
      '& .MuiOutlinedInput-root': {
        minHeight: 48,
        fontSize: 16,
      },
      '& .MuiInputLabel-root': {
        fontSize: 16,
      },
    },
    privacyText: {
      fontSize: 16,
    },
    formControl: {
      '& .MuiOutlinedInput-root': {
        minHeight: 48,
        fontSize: 16,
      },
      '& .MuiInputLabel-root': {
        fontSize: 16,
      },
    },
    select: {
      minHeight: 48,
      '& .MuiSelect-select': {
        padding: theme.spacing(1.5),
        fontSize: 16,
      },
    },
    saveButton: {
      width: '100%',
      padding: theme.spacing(1.5, 3),
      fontSize: 16,
    },
    contactTitle: {
      fontSize: 18,
    },
    academicNote: {
      fontSize: 16,
    },
    accordionSummary: {
      minHeight: 56,
      '&.Mui-expanded': {
        minHeight: 56,
      },
    },
  },
})); 