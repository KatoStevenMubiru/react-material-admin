import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles(theme => ({
  root: {}, 
  // Recovery-specific profile styles
  recoveryProfileContainer: {
    padding: 24,
    marginBottom: 16,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
    margin: '16px 0',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  visualProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  profileImage: {
    padding: 5,
    border: `3px dotted ${theme.palette.primary.main}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      maxWidth: 200,
    },
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
    },
  },
  profileDescription: {
    marginTop: 24,
    paddingLeft: 20,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      textAlign: 'center',
    },
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginBottom: 8,
    display: 'block',
  },
  profileValue: {
    fontSize: 16,
    marginBottom: 16,
    display: 'block',
    wordBreak: 'break-word',
  },
  // Section styles
  sectionTitle: {
    fontSize: 20,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  sectionIcon: {
    marginRight: 16,
    color: theme.palette.primary.main,
    fontSize: 32,
  },
  accordion: {
    margin: '8px 0',
    borderRadius: 8,
    '&.MuiAccordion-root:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '8px 0',
    },
    boxShadow: theme.customShadows.widget,
  },
  accordionSummary: {
    padding: '0 16px',
    minHeight: 56,
    '&.Mui-expanded': {
      minHeight: 56,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
  },
  accordionDetails: {
    padding: '8px 16px 16px',
    display: 'block',
  },
  recoveryButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 24,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  recoveryButton: {
    minWidth: 140,
    height: 48,
    fontSize: 16,
    margin: '0 8px',
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 120,
      fontSize: 14,
    },
  },
  // Privacy notice
  privacyNotice: {
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    padding: '16px',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 24,
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${alpha(theme.palette.error.main, 0.3)}`,
  },
  privacyIcon: {
    color: theme.palette.error.main,
    fontSize: 32,
    marginRight: 16,
  },
  privacyText: {
    color: theme.palette.text.primary,
    fontSize: 16,
    flexGrow: 1,
  },
  privacyLink: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
  // Progress indicators
  progressContainer: {
    marginBottom: 16,
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressTitle: {
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.text.primary,
  },
  progressValue: {
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  progress: {
    height: 12,
    borderRadius: 6,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  progressBar: {
    borderRadius: 6,
    backgroundColor: theme.palette.primary.main,
  },
  progressBarSuccess: {
    borderRadius: 6,
    backgroundColor: theme.palette.success.main,
  },
  progressBarWarning: {
    borderRadius: 6,
    backgroundColor: theme.palette.warning.main,
  },
  progressBarInfo: {
    borderRadius: 6,
    backgroundColor: theme.palette.info.main,
  },
  // Support contact
  supportContactButton: {
    margin: '8px 0',
    height: 48,
    width: '100%',
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '0 16px',
    borderRadius: 8,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
    },
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'left',
    flexGrow: 1,
  },
  // Responsive adjustments
  mobileFullWidth: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  // Accessibility styles
  accessibleFocus: {
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
  // Original styles (maintained for compatibility)
  chipMargin: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: 20,
    fontWeight: 700,
    fontSize: 11,
    width: 48,
    height: 26,
  },
  socials: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
    maxWidth: 180,
  },
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
  },
  // Text styles
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  smallSecondaryText: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    display: 'block',
  },
}));
