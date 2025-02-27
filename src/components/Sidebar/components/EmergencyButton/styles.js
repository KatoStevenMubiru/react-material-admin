import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  emergencyButton: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: 'none',
    minHeight: 48,
    borderWidth: 2,
    borderColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: 'rgba(211, 47, 47, 0.08)',
      borderWidth: 2,
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(211, 47, 47, 0.3)',
    },
    fontSize: '1rem',
    color: theme.palette.error.main,
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
      color: theme.palette.error.main,
    },
  },
  emergencyButtonCollapsed: {
    margin: theme.spacing(1.5, 'auto'),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    fontSize: '1.1rem',
    width: 48,
    height: 48,
    minWidth: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: 'rgba(211, 47, 47, 0.08)', 
      borderWidth: 2,
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(211, 47, 47, 0.3)',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
      color: theme.palette.error.main,
    },
  },
  tooltip: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[2],
    fontSize: '0.875rem',
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
  },
  dialogTitle: {
    backgroundColor: '#ffebee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  dialogTitleText: {
    fontWeight: 700,
    color: '#c62828',
    fontSize: '1.5rem',
  },
  closeButton: {
    color: theme.palette.grey[700],
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    minWidth: 48,
    minHeight: 48,
  },
  dialogSubtitle: {
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontSize: '1.2rem',
  },
  contactCard: {
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
    '& .MuiListItem-root': {
      minHeight: 72,
      padding: theme.spacing(2),
    },
  },
  contactIcon: {
    minWidth: 48,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
      fontSize: '1.8rem',
    },
  },
  contactNumber: {
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
  },
  contactLocation: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5),
  },
  dialogActions: {
    padding: theme.spacing(2),
  },
  actionButton: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    textTransform: 'none',
    fontWeight: 600,
    minHeight: 48,
    fontSize: '1rem',
  },
})); 