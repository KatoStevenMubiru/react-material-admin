import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles((theme) => ({
  logotype: {
    color: 'white',
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 700,
    fontSize: 22,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '@media (prefers-reduced-data: reduce)': {
      fontSize: 18,
    },
  },
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2196f3',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: 56,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      minHeight: 48,
      height: 48,
    },
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    backgroundColor: alpha(theme.palette.common.black, 0),
    transition: theme.transitions.create(['background-color', 'width']),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  searchFocused: {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create('right'),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: '100%',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerMenu: {
    marginTop: theme.spacing(2),
    zIndex: 1100,
  },
  headerMenuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerMenuItem: {
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.light,
      color: theme.palette.primary.main,
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '-2px',
    },
    padding: theme.spacing(1.5),
    minHeight: 48,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.75),
    minWidth: 40,
    minHeight: 40,
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      padding: theme.spacing(0.5),
    },
  },
  headerMenuButtonSandwich: {
    marginLeft: 9,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    padding: theme.spacing(1),
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
    },
  },
  headerIcon: {
    fontSize: 32,
    color: 'white',
  },
  headerIconCollapse: {
    color: 'white',
  },
  profileMenu: {
    minWidth: 265,
    maxWidth: 300,
    zIndex: 1100,
  },
  profileMenuUser: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  profileMenuItem: {
    color: theme.palette.text.hint,
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '-2px',
    },
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint,
    fontSize: 48,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    display: 'flex',
    alignItems: 'center',
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
  },
  logoutIcon: {
    fontSize: 48,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
  logoutButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    color: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: 4,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      textDecoration: 'underline',
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
    minHeight: 48,
    width: '100%',
    textAlign: 'left',
  },
  messageNotification: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.light,
    },
  },
  messageNotificationSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  messageNotificationBodySide: {
    alignItems: 'flex-start',
    marginRight: 0,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: 'none',
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  purchaseBtn: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginRight: theme.spacing(3),
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  emergencyButton: {
    backgroundColor: '#ef5350',
    color: 'white',
    fontWeight: 'bold',
    minWidth: 48,
    minHeight: 40,
    height: 40,
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    '&:focus-visible': {
      outline: `3px solid white`,
      outlineOffset: '2px',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 200,
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(0.75),
      minWidth: 48,
    },
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(211, 47, 47, 0.4)',
    transition: 'all 0.3s ease',
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  languageButton: {
    minWidth: 36,
    color: alpha(theme.palette.common.white, 0.85),
    marginRight: theme.spacing(2),
    fontSize: 16,
    borderRadius: 8,
    height: 40,
    padding: theme.spacing(0.5, 1.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(0.5, 1),
    },
  },
  themeToggleButton: {
    minWidth: 36,
    color: alpha(theme.palette.common.white, 0.85),
    marginRight: theme.spacing(2),
    fontSize: 16,
    borderRadius: 8,
    height: 40,
    padding: theme.spacing(0.5, 1.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(0.5, 1),
    },
  },
  languageMenu: {
    minWidth: 180,
    zIndex: 1100,
    '& .MuiPaper-root': {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
  },
  flagIcon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  '@media (prefers-contrast: more)': {
    appBar: {
      backgroundColor: '#000000',
    },
    logotype: {
      color: '#ffffff',
      fontWeight: 800,
    },
    headerMenuItem: {
      '&:focus-visible': {
        outline: `3px solid #ffffff`,
      },
    },
    emergencyButton: {
      backgroundColor: '#ff0000',
      border: '2px solid #ffffff',
      '&:focus-visible': {
        outline: `3px solid #ffffff`,
      },
    },
    languageButton: {
      border: '2px solid #ffffff',
      '&:focus-visible': {
        outline: `3px solid #ffffff`,
      },
    },
    headerMenuButton: {
      '&:focus-visible': {
        outline: `3px solid #ffffff`,
      },
    },
  },
  '@media (prefers-reduced-motion: reduce)': {
    appBar: {
      transition: 'none',
    },
    emergencyButton: {
      transition: 'none',
    },
  },
}));
