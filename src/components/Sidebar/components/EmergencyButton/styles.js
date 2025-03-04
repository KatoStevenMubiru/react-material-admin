import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  // Main button styles
  emergencyButton: {
    margin: theme.spacing(1, 1, 2, 1),
    padding: theme.spacing(1.5),
    fontWeight: 600,
    boxShadow: '0 2px 10px rgba(242, 28, 14, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 15px rgba(242, 28, 14, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:focus': {
      boxShadow: `0 0 0 3px ${alpha(theme.palette.error.main, 0.5)}`,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle, transparent 20%, transparent 20%, rgba(255, 255, 255, 0.3) 30%, transparent 100%)',
      top: '-50%',
      left: '-50%',
      opacity: 0,
      transition: 'all 0.6s ease',
    },
    '&:active:after': {
      top: '0',
      left: '0',
      opacity: 1,
      transition: '0s',
    },
    // High contrast mode support
    '@media (forced-colors: active)': {
      border: '2px solid ButtonText',
      '&:focus': {
        outline: '2px solid ButtonText',
        outlineOffset: '2px',
      },
    },
  },
  emergencyButtonCollapsed: {
    minWidth: 'auto',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    padding: 0,
    margin: theme.spacing(1, 0.5),
    boxShadow: '0 2px 10px rgba(242, 28, 14, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 15px rgba(242, 28, 14, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:focus': {
      boxShadow: `0 0 0 3px ${alpha(theme.palette.error.main, 0.5)}`,
    },
    // High contrast mode support
    '@media (forced-colors: active)': {
      border: '2px solid ButtonText',
      '&:focus': {
        outline: '2px solid ButtonText',
        outlineOffset: '2px',
      },
    },
  },
  
  // Dialog styles
  dialogPaper: {
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
  dialogTitle: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogTitleText: {
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  dialogSubtitle: {
    margin: theme.spacing(2, 0),
    color: theme.palette.error.dark,
    fontWeight: 500,
    textAlign: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
    backgroundColor: alpha(theme.palette.error.light, 0.1),
  },
  closeButton: {
    color: theme.palette.common.white,
    padding: theme.spacing(0.5),
    minWidth: 'auto',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
  },
  closeTextButton: {
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: alpha(theme.palette.text.secondary, 0.1),
    },
  },
  
  // Section styles
  sectionTitle: {
    margin: theme.spacing(2, 0, 1),
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  
  // Emergency actions grid
  actionsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  actionCard: {
    padding: theme.spacing(2.5),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[8],
      borderColor: theme.palette.primary.light,
    },
  },
  actionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  actionIcon: {
    fontSize: 28,
  },
  actionTitle: {
    fontWeight: 600,
    color: theme.palette.error.main,
  },
  actionDescription: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
  actionButton: {
    marginTop: 'auto',
    alignSelf: 'flex-start',
    fontWeight: 500,
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  divider: {
    margin: theme.spacing(2, 0, 2),
  },
  
  // Contact list styles
  contactList: {
    padding: 0,
    marginTop: theme.spacing(1),
  },
  contactItem: {
    padding: theme.spacing(1.5, 2),
    margin: theme.spacing(0.5, 0),
    borderRadius: theme.spacing(1),
    backgroundColor: alpha(theme.palette.background.default, 0.6),
    border: `1px solid ${theme.palette.divider}`,
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.light, 0.05),
      borderColor: theme.palette.primary.light,
    },
  },
  avatar: {
    backgroundColor: alpha(theme.palette.error.light, 0.1),
    color: theme.palette.error.main,
  },
  contactName: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  contactNumber: {
    fontWeight: 500,
    color: theme.palette.error.main,
    display: 'block',
  },
  contactLocation: {
    color: theme.palette.text.secondary,
    display: 'block',
    fontSize: '0.75rem',
  },
  callIcon: {
    opacity: 0.7,
    transition: 'all 0.2s ease',
    '$contactItem:hover &': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
  },
  
  // Dialog actions
  dialogActions: {
    padding: theme.spacing(2, 3, 3),
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  fullPageButton: {
    fontWeight: 500,
  },
  
  // Tooltip
  tooltip: {
    backgroundColor: alpha(theme.palette.error.dark, 0.95),
    color: theme.palette.common.white,
    fontWeight: 500,
    fontSize: '0.875rem',
    padding: theme.spacing(1, 1.5),
    boxShadow: theme.shadows[4],
  },
})); 