import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles(theme => ({
  root: {}, 
  // Support page container styles
  supportContainer: {
    padding: 24,
    marginBottom: 16,
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
    margin: '16px 0',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
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
  // Accordion styles
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
  // Support contact
  supportCard: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`,
    },
  },
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
  resourceButton: {
    margin: '8px 0',
    height: 48,
    width: '100%',
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '0 16px',
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
    },
  },
  resourceIcon: {
    fontSize: 24,
    marginRight: 16,
    color: theme.palette.primary.main,
  },
  // Label styles
  supportLabel: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.text.secondary,
    marginBottom: 8,
    display: 'block',
  },
  supportValue: {
    fontSize: 16,
    marginBottom: 16,
    display: 'block',
    wordBreak: 'break-word',
  },
  // Emergency contact styles
  emergencyContact: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.error.main, 0.05),
    border: `2px solid ${theme.palette.error.main}`,
    marginBottom: 16,
  },
  emergencyButton: {
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
    height: 48,
    fontSize: 16,
    fontWeight: 600,
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
  meetingTime: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  meetingIcon: {
    color: theme.palette.success.main,
    marginRight: 8,
    fontSize: 20,
  },
  // Responsive adjustments
  mobileFullWidth: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  // Accessibility focus
  accessibleFocus: {
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
  // Form container styles
  formContainer: {
    padding: 24,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    backgroundColor: alpha(theme.palette.background.paper, 0.7),
  },
  form: {
    width: '100%',
    marginTop: 16,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginBottom: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  formSubtitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
    color: theme.palette.text.primary,
  },
  formField: {
    marginBottom: 24,
    '& .MuiFormLabel-root': {
      fontSize: 16,
    },
  },
  largeInput: {
    fontSize: 16,
    padding: '16px 14px',
    borderRadius: 8,
    '&.Mui-focused': {
      boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.25)}`,
    },
    '&::placeholder': {
      fontSize: 16,
    },
  },
  inputLabel: {
    fontSize: 16,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  select: {
    borderRadius: 8,
    '& .MuiSelect-select': {
      padding: '16px 14px',
      fontSize: 16,
    },
  },
  radioGroup: {
    marginTop: 8,
  },
  radioGroupRow: {
    marginTop: 8,
    flexDirection: 'row',
    '& .MuiFormControlLabel-root': {
      marginRight: 24,
    },
  },
  radioButton: {
    padding: 12, // Larger touch target
    color: theme.palette.primary.main,
    '&.Mui-checked': {
      color: theme.palette.primary.main,
    },
  },
  radioLabel: {
    '& .MuiFormControlLabel-label': {
      fontSize: 16,
    },
    marginBottom: 8,
  },
  formHelperText: {
    fontSize: 14,
    marginBottom: 8,
  },
  submitButton: {
    height: 54, // Large touch target
    fontSize: 16,
    fontWeight: 600,
    marginTop: 16,
    borderRadius: 8,
    textTransform: 'none',
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
    '&:hover': {
      boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.25)}`,
    },
    '&:focus': {
      outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    },
  },
  // Alert styles
  alert: {
    borderRadius: 8,
    fontSize: 16,
    '& .MuiAlert-icon': {
      fontSize: 24,
    },
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  // Add new emergency form container styles
  emergencyFormContainer: {
    backgroundColor: alpha('#ef5350', 0.03),
    border: `2px solid ${alpha('#ef5350', 0.7)}`,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -8,
      left: 16,
      right: 16,
      height: 2,
      backgroundColor: alpha('#ef5350', 0.3),
    },
    '&:focus-within': {
      border: `2px solid ${alpha('#ef5350', 0.9)}`,
      boxShadow: `0 4px 20px ${alpha('#ef5350', 0.25)}`,
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
  // Academic context form styling
  academicFormBadge: {
    display: 'inline-block',
    marginLeft: 16,
    fontSize: 14,
    fontWeight: 500,
    color: alpha('#ef5350', 0.9),
    backgroundColor: alpha('#ef5350', 0.1),
    padding: '2px 8px',
    borderRadius: 4,
    verticalAlign: 'middle',
  },
  academicContextForm: {
    borderLeft: `4px solid ${alpha('#ef5350', 0.9)}`,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 24,
      left: -4,
      width: 4,
      height: 48,
      backgroundColor: alpha('#3f51b5', 0.6),
    },
  },
  // Form title icon
  formTitleIcon: {
    color: '#ef5350',
    fontSize: 28,
    verticalAlign: 'middle',
    marginRight: 16,
  },
  // Form description
  formDescription: {
    marginBottom: 24,
    fontSize: 16,
  },
  // Form actions container
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 32,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  // Emergency submit button
  emergencySubmitButton: {
    height: 48,
    padding: '0 32px',
    backgroundColor: '#ef5350',
    color: '#fff',
    fontWeight: 600,
    fontSize: 16,
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    '&:focus': {
      outline: `3px solid ${alpha('#ef5350', 0.5)}`,
      outlineOffset: 2,
    },
  },
  // Accessible alert
  accessibleAlert: {
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  },
  // Visually hidden for screen readers
  '.visually-hidden': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
})); 