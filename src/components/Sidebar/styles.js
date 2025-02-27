import { makeStyles } from '@mui/styles';

const drawerWidth = 280;

export default makeStyles((theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
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
        fontSize: '3rem',
        color: theme.palette.primary.main,
      }
    },
    '& .MuiListItemText-primary': {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
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
        fontSize: '3rem',
        color: theme.palette.primary.main,
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
      minHeight: 60,
      '&:hover': {
        backgroundColor: 'rgba(33, 150, 243, 0.08)',
      },
      '&:focus-visible': {
        outline: `3px solid ${theme.palette.primary.main}`,
        outlineOffset: 2,
      },
      '&.Mui-selected': {
        backgroundColor: 'rgba(33, 150, 243, 0.15)',
        '&:hover': {
          backgroundColor: 'rgba(33, 150, 243, 0.25)',
        },
      },
      '@media (hover: none)': {
        '&:active': {
          backgroundColor: 'rgba(33, 150, 243, 0.25)',
        },
      },
    },
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
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
      color: theme.palette.text.secondary,
    },
  },
  emergencyButton: {
    backgroundColor: 'rgba(239, 83, 80, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(239, 83, 80, 0.15)',
    },
    borderRadius: theme.spacing(1),
    minHeight: 60,
    padding: theme.spacing(1.5),
    '& .MuiListItemIcon-root': {
      color: '#ef5350',
    },
    '& .MuiListItemText-primary': {
      color: '#c62828',
      fontWeight: 600,
      fontSize: '1.125rem',
    },
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
      background: 'rgba(0, 0, 0, 0.06)',
    },
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
  descriptionTooltip: {
    fontSize: '1rem',
    maxWidth: 300,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  headerIcon: {
    fontSize: 32,
    color: theme.palette.text.primary,
  },
  headerIconCollapse: {
    color: theme.palette.text.primary,
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  sectionDivider: {
    margin: theme.spacing(1, 2),
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
  focusVisible: {
    outline: `3px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  touchFriendly: {
    padding: theme.spacing(1.5),
    '& .MuiSvgIcon-root': {
      fontSize: '1.75rem',
    },
  },
  linkHover: {
    '&:hover': {
      backgroundColor: 'rgba(33, 150, 243, 0.08)',
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
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
}));
