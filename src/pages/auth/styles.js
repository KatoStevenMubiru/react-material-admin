import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.background.default,
  },
  formContainer: {
    width: '100%',
    maxWidth: 520,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  card: {
    boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    },
  },
  form: {
    width: '100%',
    padding: theme.spacing(3),
  },
  greeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  errorMessage: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  textFieldUnderline: {
    '&:before': {
      borderBottomColor: theme.palette.primary.light,
    },
    '&:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '&:hover:before': {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
    '&::placeholder': {
      color: theme.palette.text.secondary,
    },
  },
  loginLink: {
    marginTop: theme.spacing(2),
    textTransform: 'none',
    fontWeight: 400,
    display: 'block',
    textAlign: 'center',
  },
})); 