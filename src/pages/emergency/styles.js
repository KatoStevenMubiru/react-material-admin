import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles(theme => ({
  // Page container
  pageContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  // Page header styling
  pageHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  headerIcon: {
    fontSize: 48,
    color: '#ef5350', // High contrast emergency red
    marginBottom: theme.spacing(2),
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
    color: '#ef5350', // High contrast emergency red
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  pageDescription: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 800,
    margin: '0 auto',
    color: theme.palette.text.secondary,
  },
  // Card container styling
  cardContainer: {
    marginBottom: theme.spacing(4),
  },
  // Emergency Actions card styling
  actionsCard: {
    padding: theme.spacing(3),
    borderRadius: 8,
    border: `2px solid ${alpha('#ef5350', 0.7)}`,
    backgroundColor: alpha('#ef5350', 0.05),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(2),
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#c62828', // Darker red for better text contrast
    marginLeft: theme.spacing(2),
  },
  cardIcon: {
    fontSize: 48,
    color: '#ef5350',
  },
  // Emergency form styling
  formContainer: {
    marginTop: theme.spacing(3),
  },
  form: {
    width: '100%',
  },
  formField: {
    marginBottom: theme.spacing(3),
    '& .MuiInputLabel-root': {
      fontSize: 16,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 8,
    },
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  formSubtitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  formHelperText: {
    marginBottom: theme.spacing(1),
  },
  // Radio group styling
  radioGroup: {
    marginTop: theme.spacing(1),
  },
  radioGroupRow: {
    marginTop: theme.spacing(1),
    flexDirection: 'row',
  },
  radioLabel: {
    marginRight: theme.spacing(2),
  },
  // Form actions styling
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
  // Emergency action buttons
  emergencySubmitButton: {
    backgroundColor: '#ef5350',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    height: 48,
    fontSize: 16,
    fontWeight: 600,
    padding: theme.spacing(0, 3),
  },
  // Emergency contacts card styling
  contactsCard: {
    padding: theme.spacing(3),
    borderRadius: 8,
    boxShadow: theme.customShadows ? theme.customShadows.widget : '0 2px 10px 0 rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.background.paper, 0.7),
    border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
  },
  contactInfo: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },
  contactRole: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  contactDetail: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  },
  contactIcon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  contactText: {
    fontSize: 14,
  },
  // Call to action button styling
  callButton: {
    backgroundColor: '#ef5350',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    marginTop: theme.spacing(1),
    height: 48,
  },
  callButtonLarge: {
    backgroundColor: '#c62828',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
    height: 60,
    fontSize: 18,
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  // Academic emergency badge
  academicBadge: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: 16,
    fontSize: 14,
    fontWeight: 500,
    display: 'inline-block',
    marginLeft: theme.spacing(2),
  },
  // Success message styling
  successMessage: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.success.main, 0.15),
    border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
    borderRadius: 8,
  },
  // Responsive helper classes
  centerOnMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  // Accessibility focus styles
  accessibleFocus: {
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
  // High contrast mode support
  '@media (prefers-contrast: high)': {
    pageTitle: {
      color: '#000',
    },
    cardIcon: {
      color: '#000',
    },
    emergencySubmitButton: {
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#333',
      },
    },
    callButton: {
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#333',
      },
    },
    callButtonLarge: {
      backgroundColor: '#000',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#333',
      },
    },
  },
  // Accessibility notes section
  accessibilityNotes: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
    marginTop: theme.spacing(4),
    backgroundColor: alpha(theme.palette.info.light, 0.1),
    borderRadius: theme.spacing(1),
    border: `1px solid ${alpha(theme.palette.info.main, 0.3)}`,
  },
  accessibilityIcon: {
    color: theme.palette.info.main,
    fontSize: 24,
  },
  // Additional resources section
  additionalResources: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  resourcesLink: {
    padding: theme.spacing(1, 3),
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: theme.spacing(1),
    '&:hover': {
      transform: 'translateY(-2px)',
      transition: 'transform 0.2s',
    },
  },
  resourcesNote: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    maxWidth: 500,
  },
})); 