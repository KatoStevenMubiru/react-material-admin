import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
    padding: theme.spacing(1, 2),
    position: 'relative',
    transition: 'all 0.2s ease',
    borderRadius: '4px',
    margin: '2px 8px',
  },
  linkActive: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
    },
    borderLeft: '4px solid #3f51b5', // Primary color border for active items
    paddingLeft: 12, // Adjusted for the border
  },
  linkNested: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  linkIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    transition: theme.transitions.create('color'),
    minWidth: 'auto',
    width: 24,
    height: 24,
    '& .MuiSvgIcon-root': {
      fontSize: 24,
    },
  },
  linkIconActive: {
    color: theme.palette.primary.main,
  },
  linkText: {
    padding: '0 0 0 16px',
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    whiteSpace: 'nowrap',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['color', 'opacity']),
  },
  linkTextHidden: {
    opacity: 0,
    width: 0,
    display: 'none',
  },
  linkTextActive: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  sectionTitle: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(1, 0),
    backgroundColor: alpha(theme.palette.divider, 0.1),
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s',
    color: '#6E6E6E',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandActive: {
    color: '#3f51b5',
  },
  nestedList: {
    paddingLeft: theme.spacing(2),
  },
  nestedLink: {
    paddingLeft: theme.spacing(4),
  },
  nestedMenu: {
    padding: 0,
    '& .MuiList-root': {
      padding: 0,
    },
  },
  // High contrast mode support
  '@media (forced-colors: active)': {
    linkActive: {
      borderColor: 'CanvasText',
      '& .MuiListItemText-primary': {
        color: 'CanvasText',
      },
      '& .MuiListItemIcon-root': {
        color: 'CanvasText',
      },
    },
    link: {
      '&:focus-visible': {
        outline: '2px solid CanvasText',
        outlineOffset: '2px',
      },
    },
  },
  // Add new styles for emergency items
  emergencyIcon: {
    color: theme.palette.error.main,
  },
  // Emergency text styling
  emergencyText: {
    color: theme.palette.error.main,
  },
  // Emergency badge styling
  emergencyBadge: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    }
  },
  // Direct action indicator
  directActionIndicator: {
    position: 'absolute',
    right: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    opacity: 0.5,
  },
  emergencyButton: {
    backgroundColor: alpha(theme.palette.error.main, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.error.main, 0.2),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.error.main, 0.2),
      boxShadow: `0 0 0 2px ${theme.palette.error.main}`,
    },
  },
  touchFriendly: {
    padding: theme.spacing(1.5, 2),
    '& .MuiListItemIcon-root': {
      minWidth: 40,
    },
    '& .MuiListItemText-root': {
      padding: '0 0 0 16px',
    },
  },
  focusVisible: {
    outline: 'none',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
  },
  descriptionTooltip: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontSize: 14,
    padding: theme.spacing(1, 2),
    boxShadow: theme.shadows[4],
    '& .MuiTooltip-arrow': {
      color: theme.palette.background.paper,
    },
  },
}));
