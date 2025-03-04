import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles(theme => ({
  // Page layout
  supportResourcesContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    position: 'relative',
  },
  
  // Header styles
  pageHeader: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  pageTitle: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    fontSize: '2rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.75rem',
    },
  },
  pageDescription: {
    maxWidth: 800,
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  
  // Privacy Notice
  privacyNotice: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  privacyIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: theme.spacing(0.5),
    },
  },
  privacyText: {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
  },
  privacyLink: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: theme.spacing(0.5),
      display: 'block',
    },
  },
  
  // Section styles
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    '& svg': {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.main,
    },
  },
  sectionIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  
  // Resource cards styles
  resourcesGrid: {
    marginBottom: theme.spacing(4),
  },
  
  // Accordion styles
  accordion: {
    margin: theme.spacing(1, 0),
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.05)',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    padding: theme.spacing(0, 2),
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.light, 0.15),
    },
  },
  accordionDetails: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },

  // Support card styles
  supportCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
  },
  supportCardMedia: {
    height: 200,
    marginBottom: theme.spacing(2),
    backgroundSize: 'contain',
  },
  supportCardContent: {
    padding: theme.spacing(1, 0),
    flex: 1,
  },
  supportCardTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  supportCardDescription: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  supportCardActions: {
    padding: 0,
    marginTop: 'auto',
  },
  supportContactButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  
  // Contact information styles
  contactCard: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    borderRadius: theme.shape.borderRadius,
  },
  contactHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  contactAvatar: {
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& svg': {
      marginRight: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
  },
  contactText: {
    fontWeight: 500,
  },
  
  // Emergency contact styles (high visibility)
  emergencyContactCard: {
    backgroundColor: alpha(theme.palette.error.light, 0.1),
    border: `1px solid ${theme.palette.error.main}`,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
  },
  emergencyTitle: {
    color: theme.palette.error.main,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  emergencyDescription: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  emergencyButton: {
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  emergencyNumber: {
    fontWeight: 700,
    fontSize: '1.2rem',
    marginTop: theme.spacing(1),
    color: theme.palette.error.main,
  },
  
  // Educational resources styles
  resourceList: {
    marginTop: theme.spacing(2),
  },
  resourceItem: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
    borderRadius: theme.shape.borderRadius,
  },
  resourceTitle: {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.main,
    },
  },
  resourceDescription: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  resourceLink: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
    '& svg': {
      fontSize: '1rem',
      marginRight: theme.spacing(0.5),
    },
  },
  
  // Peer group specific styles
  peerGroupCard: {
    backgroundColor: alpha(theme.palette.success.light, 0.1),
    border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
  },
  peerGroupTitle: {
    color: theme.palette.success.dark,
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  peerGroupInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& svg': {
      marginRight: theme.spacing(1),
      color: theme.palette.success.main,
      fontSize: '1.2rem',
    },
  },
  
  // Academic resources styles
  academicCard: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: alpha(theme.palette.info.light, 0.1),
    border: `1px solid ${alpha(theme.palette.info.main, 0.3)}`,
    borderRadius: theme.shape.borderRadius,
  },
  academicResourceTitle: {
    color: theme.palette.info.dark,
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  academicDescription: {
    marginBottom: theme.spacing(2),
  },
  academicLinks: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      marginBottom: theme.spacing(1),
      color: theme.palette.info.main,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      '& svg': {
        marginRight: theme.spacing(1),
      },
    },
  },
  
  // Tab styles for organizing content
  tabsContainer: {
    marginBottom: theme.spacing(3),
  },
  tabContent: {
    padding: theme.spacing(3, 0),
  },
  
  // Video resources styles
  videoCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  videoCardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundColor: theme.palette.action.hover,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
  },
  videoCardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  videoCardActions: {
    padding: theme.spacing(0, 2, 2),
  },
  
  // Article resources styles
  articleCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  articleCardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundColor: theme.palette.action.hover,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
  },
  articleCardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  articleCardActions: {
    padding: theme.spacing(0, 2, 2),
  },
  
  // Accessibility styles
  accessibilityContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
  },
  highContrastText: props => ({
    color: props.highContrast ? '#000' : 'inherit',
    fontWeight: props.highContrast ? 700 : 'inherit',
  }),
  highContrastBackground: props => ({
    backgroundColor: props.highContrast ? '#fff' : 'inherit',
    border: props.highContrast ? '1px solid #000' : 'inherit',
  }),
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  focusHighlight: {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
  emergencyLink: {
    fontWeight: 600,
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 10px rgba(242, 28, 14, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 15px rgba(242, 28, 14, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:focus': {
      boxShadow: `0 0 0 3px ${alpha(theme.palette.error.main, 0.5)}`,
    },
    '@media (forced-colors: active)': {
      border: '2px solid ButtonText',
      '&:focus': {
        outline: '2px solid ButtonText',
        outlineOffset: '2px',
      },
    },
  },
})); 