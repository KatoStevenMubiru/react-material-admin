import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  // Page container
  pageContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  
  // Section wrappers
  sectionWrapper: {
    marginBottom: theme.spacing(4),
  },
  
  // Card styles
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[8],
      transform: 'translateY(-5px)',
    },
  },
  
  // Card header
  cardHeader: {
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  },
  
  // Card content
  cardContent: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  
  // Card actions
  cardActions: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  
  // Paper container
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  
  // Tab panel
  tabPanel: {
    padding: theme.spacing(3),
  },
  
  // Tabs
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& .MuiTab-root': {
      minHeight: 48, // Ensure 48px touch target
      [theme.breakpoints.down('sm')]: {
        minWidth: 'auto',
        padding: theme.spacing(1),
      },
    },
  },
  
  // Icons
  icon: {
    fontSize: 48, // Large icons for accessibility
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  
  // Icon in boxes
  boxIcon: {
    fontSize: 48,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  
  // Accordion
  accordion: {
    marginBottom: theme.spacing(2),
    '&:before': {
      display: 'none', // Remove default divider
    },
  },
  
  // Accordion summary
  accordionSummary: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&.Mui-expanded': {
      minHeight: 48, // Maintain 48px touch target when expanded
    },
    '& .MuiAccordionSummary-content': {
      margin: theme.spacing(1, 0),
      '&.Mui-expanded': {
        margin: theme.spacing(1, 0),
      },
    },
  },
  
  // Accordion details
  accordionDetails: {
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
  },
  
  // FAQ Category
  faqCategory: {
    marginBottom: theme.spacing(4),
  },
  
  // Help resource item
  resourceItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
  },
  
  // Resource type icons
  videoIcon: {
    color: '#FF0000', // YouTube red for video icons
  },
  
  articleIcon: {
    color: '#3CD4A0', // Success green for articles
  },
  
  linkIcon: {
    color: '#2196f3', // Primary blue for links
  },
  
  // Contact buttons
  contactButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 3),
    height: 48, // 48px touch target
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
  
  // Contact form
  contactForm: {
    marginTop: theme.spacing(2),
  },
  
  // Form fields
  formField: {
    marginBottom: theme.spacing(3),
  },
  
  // Submit button
  submitButton: {
    marginTop: theme.spacing(2),
    height: 48, // 48px touch target
  },
  
  // Contact card
  contactCard: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  },
  
  // Contact icon
  contactIcon: {
    fontSize: 36,
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  
  // Emergency contact
  emergencyContact: {
    borderLeft: `4px solid ${theme.palette.error.main}`,
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    '& .MuiSvgIcon-root': {
      color: theme.palette.error.main,
    },
  },
  
  // Divider with text
  dividerWithText: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '&::before, &::after': {
      content: '""',
      flex: 1,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    '&::before': {
      marginRight: theme.spacing(2),
    },
    '&::after': {
      marginLeft: theme.spacing(2),
    },
  },
  
  // Typography styles
  sectionTitle: {
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  
  // Typography subtitle
  subtitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  
  // Link styles
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
    // Focus state for accessibility
    '&:focus': {
      outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
      outlineOffset: '2px',
    },
  },
  
  // Feedback form container
  feedbackContainer: {
    marginTop: theme.spacing(4),
  },
  
  // Resource content
  resourceContent: {
    flex: 1,
    paddingLeft: theme.spacing(2),
  },
  
  // Resource title
  resourceTitle: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  
  // Resource description
  resourceDescription: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
  },
  
  // Resource link
  resourceLink: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
  },

  // Accessibility focus styles
  focusVisible: {
    outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    outlineOffset: '2px',
  },
  
  // High contrast mode
  highContrast: {
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      color: '#000000 !important',
    },
    '& p, & span, & div': {
      color: '#000000 !important',
    },
    '& a': {
      color: '#0000EE !important',
      textDecoration: 'underline !important',
    },
    '& button': {
      backgroundColor: '#000000 !important',
      color: '#FFFFFF !important',
      border: '2px solid #FFFFFF !important',
    },
  },
})); 