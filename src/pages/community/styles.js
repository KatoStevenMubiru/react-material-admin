import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  // Page layout
  pageContainer: {
    padding: theme.spacing(2),
    '@media (max-width: 768px)': {
      padding: theme.spacing(1),
    },
  },
  
  // Cards and containers
  card: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  cardContent: {
    padding: theme.spacing(3),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  
  // Typography
  sectionTitle: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: 600,
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -8,
      width: 40,
      height: 4,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 2,
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontSize: '1.5rem',
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    fontSize: '1rem',
    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
  
  // Form elements
  formField: {
    marginBottom: theme.spacing(3),
  },
  button: {
    minHeight: 48, // 48px touch target
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5),
    fontWeight: 600,
    textTransform: 'none',
    '&:focus-visible': {
      outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
      outlineOffset: 2,
    },
  },
  
  // Avatar and user info
  avatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  username: {
    fontWeight: 600,
    marginLeft: theme.spacing(1),
  },
  userRole: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
  },
  
  // Youth community badge
  youthBadge: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    fontSize: '0.75rem',
    fontWeight: 600,
    display: 'inline-block',
    marginRight: theme.spacing(1),
  },
  
  // Loading indicators
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5),
  },
  loadingText: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  
  // Tabs
  tabs: {
    marginBottom: theme.spacing(3),
    '& .MuiTab-root': {
      minHeight: 48, // 48px touch target
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '0.875rem',
        minWidth: 'auto',
        padding: theme.spacing(1),
      },
    },
  },
  tabIndicator: {
    height: 4,
    borderRadius: 2,
  },
  tabPanel: {
    padding: theme.spacing(2, 0),
  },
  
  // Discussion forums section
  forumButton: {
    backgroundColor: alpha('#2196f3', 0.08),
    color: '#2196f3',
    '&:hover': {
      backgroundColor: alpha('#2196f3', 0.15),
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha('#2196f3', 0.5)}`,
    },
  },
  forumPost: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    borderRadius: theme.spacing(0, 1, 1, 0),
  },
  
  // Success stories section
  storyButton: {
    backgroundColor: alpha('#3CD4A0', 0.08),
    color: '#3CD4A0',
    '&:hover': {
      backgroundColor: alpha('#3CD4A0', 0.15),
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha('#3CD4A0', 0.5)}`,
    },
  },
  storyCard: {
    borderLeft: `4px solid #3CD4A0`,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: alpha('#3CD4A0', 0.05),
    borderRadius: theme.spacing(0, 1, 1, 0),
  },
  storyImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  
  // Authentication and restriction screens
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  authIcon: {
    fontSize: 64,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  restrictionIcon: {
    fontSize: 64,
    color: theme.palette.error.main,
    marginBottom: theme.spacing(2),
  },
  
  // Empty state
  emptyState: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
  // Events calendar section
  calendarButton: {
    backgroundColor: alpha('#2196f3', 0.08),
    color: '#2196f3',
    '&:hover': {
      backgroundColor: alpha('#2196f3', 0.15),
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha('#2196f3', 0.5)}`,
    },
  },
  eventCard: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    borderRadius: theme.spacing(0, 1, 1, 0),
  },
  dateChip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  
  // Icons
  icon: {
    fontSize: 48, // 48px touch target
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  successIcon: {
    fontSize: 48, // 48px touch target
    marginBottom: theme.spacing(1),
    color: '#3CD4A0',
  },
  
  // Accessibility
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap',
  },
  
  // Mobile responsiveness
  mobileFullWidth: {
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  
  // Z-index management
  modal: {
    zIndex: 1100,
  },
  snackbar: {
    zIndex: 1200,
  },
})); 