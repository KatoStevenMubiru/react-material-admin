import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

const drawerWidth = 280;

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

export default makeStyles((theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: COLORS.text.primary,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    '& .MuiListItemIcon-root': {
      minWidth: 60,
      '& .MuiSvgIcon-root': {
        fontSize: 48,
        color: COLORS.primary,
      }
    },
    '& .MuiListItemText-primary': {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: COLORS.text.primary,
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9) + 40,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    '& .MuiListItemIcon-root': {
      minWidth: 60,
      marginLeft: 'auto',
      marginRight: 'auto',
      '& .MuiSvgIcon-root': {
        fontSize: 48,
        color: COLORS.primary,
      }
    },
  },
  navContainer: {
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: theme.spacing(8),
    '-webkit-overflow-scrolling': 'touch',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarList: {
    overflow: 'auto',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 0),
    paddingBottom: theme.spacing(10),
    width: '100%',
    '& .MuiListItem-root': {
      marginBottom: theme.spacing(1.5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      borderRadius: theme.spacing(1),
      minHeight: 48,
      '&:hover': {
        backgroundColor: alpha(COLORS.primary, 0.08),
      },
      '&:focus-visible': {
        outline: `3px solid ${COLORS.primary}`,
        outlineOffset: 2,
      },
      '&.Mui-selected': {
        backgroundColor: alpha(COLORS.primary, 0.15),
        '&:hover': {
          backgroundColor: alpha(COLORS.primary, 0.25),
        },
      },
    },
    '& .MuiListItemIcon-root': {
      color: COLORS.primary,
      minWidth: 60,
    },
    '& .MuiDivider-root': {
      margin: theme.spacing(2, 0),
    },
    '& .MuiTypography-subtitle1': {
      fontWeight: 700,
      fontSize: '1rem',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      color: COLORS.text.secondary,
    },
  },
  nestedList: {
    padding: theme.spacing(0, 0, 0, 2),
    margin: theme.spacing(0, 0, 1.5, 1.5),
    borderLeft: `2px solid ${alpha(COLORS.primary, 0.25)}`,
    '& .MuiListItem-root': {
      marginBottom: theme.spacing(0.5),
      minHeight: 48,
      borderRadius: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      '&:hover': {
        backgroundColor: alpha(COLORS.primary, 0.05),
      },
      '&:focus-visible': {
        outline: `3px solid ${COLORS.primary}`,
        outlineOffset: 2,
      },
      '&.Mui-selected': {
        backgroundColor: alpha(COLORS.primary, 0.12),
        '&:hover': {
          backgroundColor: alpha(COLORS.primary, 0.20),
        },
      },
    },
    '& .MuiListItemText-primary': {
      fontSize: '0.9375rem',
    },
  },
  nestedItem: {
    paddingLeft: theme.spacing(3),
    '&:before': {
      content: '""',
      position: 'absolute',
      left: theme.spacing(1),
      top: '50%',
      width: 6,
      height: 6,
      backgroundColor: alpha(COLORS.primary, 0.5),
      borderRadius: '50%',
      transform: 'translateY(-50%)',
    },
  },
  expandIcon: {
    right: theme.spacing(1),
    top: '50%',
    transform: 'translateY(-50%)',
    position: 'absolute',
    zIndex: 2,
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
  emergencyButton: {
    backgroundColor: alpha(COLORS.error, 0.08),
    '&:hover': {
      backgroundColor: alpha(COLORS.error, 0.15),
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha(COLORS.error, 0.7)}`,
      outlineOffset: 3,
    },
    borderRadius: theme.spacing(1),
    minHeight: 48,
    padding: theme.spacing(1.5),
    '& .MuiListItemIcon-root': {
      color: COLORS.error,
    },
    '& .MuiListItemText-primary': {
      color: '#c62828',
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    '@media (hover: none)': {
      '&:active': {
        backgroundColor: alpha(COLORS.error, 0.25),
      },
    }
  },
  emergencyContainer: {
    margin: theme.spacing(1, 1, 0, 1),
    borderRadius: theme.spacing(1),
    position: 'relative',
    zIndex: 10,
    transition: 'all 0.3s ease',
    background: 'transparent',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -16,
      left: 8,
      right: 8,
      height: 1,
      background: alpha(theme.palette.divider, 0.5),
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      pointerEvents: 'none',
      borderRadius: theme.spacing(1),
      border: `1px solid ${alpha(COLORS.error, 0.3)}`,
    },
    '&.academic-context': {
      '&::after': {
        border: `1px solid ${alpha(COLORS.error, 0.5)}`,
        borderLeftWidth: 4,
      },
      '& .MuiTypography-root': {
        '&::after': {
          content: '"for Academic Emergency"',
          display: 'block',
          fontSize: '0.75rem',
          color: alpha(COLORS.error, 0.8),
          fontWeight: 500,
        }
      }
    },
    '&:focus-within': {
      '&::after': {
        border: `2px solid ${alpha(COLORS.error, 0.8)}`,
      }
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    '& .nestedList': {
      borderLeft: `2px solid ${alpha(COLORS.error, 0.4)}`,
      '& .MuiListItem-root': {
        minHeight: 48,
        margin: '4px 0',
        '&:hover': {
          backgroundColor: alpha(COLORS.error, 0.05),
        },
        '&:focus-visible': {
          outline: `3px solid ${alpha(COLORS.error, 0.5)}`,
          outlineOffset: 2,
        },
        '&.Mui-selected': {
          backgroundColor: alpha(COLORS.error, 0.08),
          '&:hover': {
            backgroundColor: alpha(COLORS.error, 0.15),
          },
        },
        '&.direct-action': {
          backgroundColor: alpha(COLORS.error, 0.1),
          '&:hover': {
            backgroundColor: alpha(COLORS.error, 0.2),
          },
          '& .MuiListItemIcon-root': {
            color: '#d32f2f',
          },
          '& .MuiListItemText-primary': {
            fontWeight: 600,
          }
        }
      },
      '& .MuiListItemText-primary': {
        color: '#d32f2f',
        fontSize: '0.9375rem',
        fontWeight: 500,
      },
      '& .MuiListItemIcon-root': {
        color: COLORS.error,
        minWidth: 48,
      }
    },
  },
  directActionItem: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      right: 12,
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: COLORS.error,
      transform: 'translateY(-50%)',
    },
    '&:hover::after': {
      backgroundColor: '#c62828',
    }
  },
  touchFriendly: {
    minHeight: 48,
    '& .MuiListItemIcon-root': {
      minWidth: 48,
    }
  },
  descriptionTooltip: {
    backgroundColor: alpha(theme.palette.background.paper, 0.95),
    color: theme.palette.text.primary,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    fontSize: 14,
    maxWidth: 250,
    padding: 12,
    borderLeft: `3px solid ${COLORS.primary}`,
    '&.emergency': {
      borderLeft: `3px solid ${COLORS.error}`,
    }
  },
  languageSelectorContainer: {
    padding: theme.spacing(1, 2),
    position: 'fixed',
    bottom: 0,
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
    zIndex: 1100,
    borderTop: `1px solid ${theme.palette.divider}`,
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.05)',
    transition: theme.transitions.create(['width', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  mobileBackButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.only('sm')]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileTitle: {
    textAlign: 'center',
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: '1.25rem',
  },
  popover: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  fab: {
    width: 60,
    height: 60,
  },
  noBoxShadow: {
    boxShadow: 'none !important',
    marginRight: theme.spacing(1),
  },
  buttonLabel: {
    color: '#fff',
  },
  input: {
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(255, 255, 255, .45)',
    },
  },
  headerIcon: {
    fontSize: 32,
    color: COLORS.text.primary,
  },
  headerIconCollapse: {
    color: COLORS.text.primary,
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: alpha(theme.palette.divider, 0.5),
  },
  sectionDivider: {
    margin: theme.spacing(1, 2),
    backgroundColor: alpha(theme.palette.divider, 0.3),
  },
  focusVisible: {
    outline: `3px solid ${COLORS.primary}`,
    outlineOffset: 2,
  },
  linkHover: {
    '&:hover': {
      backgroundColor: alpha(COLORS.primary, 0.08),
    },
    '&:focus-visible': {
      outline: `3px solid ${COLORS.primary}`,
      outlineOffset: 2,
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
  spacer: {
    minHeight: 0,
    display: 'none',
    '@media (max-width: 768px)': {
      minHeight: 0,
    },
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    letterSpacing: '0.5px',
  },
  hiddenTitle: {
    display: 'none',
  },
  analyticsTracked: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: 8,
      height: 8,
      backgroundColor: alpha(COLORS.success, 0.7),
      borderRadius: '50%',
      bottom: 8,
      right: 8,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:active::after': {
      opacity: 1,
    },
  },
  '@media (max-width: 768px)': {
    drawerClose: {
      width: '0px',
    },
    drawerOpen: {
      width: '100%',
      maxWidth: 320,
    },
    languageSelectorContainer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      maxWidth: 320,
      zIndex: 1000,
    },
    sidebarList: {
      paddingBottom: theme.spacing(12),
    },
    nestedList: {
      '& .MuiListItem-root': {
        minHeight: 52,
      }
    },
    expandIconButton: {
      padding: 12,
    }
  },
  '@media (prefers-reduced-data: reduce)': {
    drawerOpen: {
      transition: 'none',
    },
    drawerClose: {
      transition: 'none',
    },
    '& *': {
      transition: 'none !important',
      animation: 'none !important',
    }
  },
  '@media (prefers-contrast: high)': {
    emergencyButton: {
      backgroundColor: '#ffcdd2',
      border: '2px solid #d32f2f',
      '& .MuiListItemText-primary': {
        color: '#000000',
        fontWeight: 700,
      },
    },
    nestedList: {
      borderLeft: '3px solid #000000',
    },
    emergencyContainer: {
      '& .nestedList': {
        borderLeft: '3px solid #d32f2f',
        '& .MuiListItemText-primary': {
          color: '#000000',
          fontWeight: 700,
        },
      },
    },
  },
}));
