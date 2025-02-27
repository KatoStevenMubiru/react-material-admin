import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2.5),
    marginTop: 'auto', // Push to bottom of sidebar
    marginBottom: theme.spacing(2),
  },
  languageButton: {
    width: '100%',
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 1.5),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
  languageText: {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  iconButton: {
    minWidth: 48,
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
  menu: {
    marginTop: theme.spacing(1),
  },
  menuItem: {
    minHeight: 48,
    '&.Mui-selected': {
      backgroundColor: 'rgba(63, 81, 181, 0.08)',
      '&:hover': {
        backgroundColor: 'rgba(63, 81, 181, 0.12)',
      },
    },
  },
  flagIcon: {
    minWidth: 36,
    fontSize: '1.2rem',
  },
})); 