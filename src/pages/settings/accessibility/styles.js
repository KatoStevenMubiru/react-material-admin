import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  card: {
    height: '100%',
    boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    },
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: 36,
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  switch: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.grey[300],
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  slider: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& .MuiSlider-rail': {
      backgroundColor: theme.palette.grey[300],
    },
    '& .MuiSlider-track': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiSlider-thumb': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  select: {
    width: '100%',
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: alpha(theme.palette.primary.main, 0.3),
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  saveButton: {
    minHeight: 48,
    minWidth: 200,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: theme.spacing(3, 0),
  },
  cardContent: {
    padding: theme.spacing(3),
    '&:last-child': {
      paddingBottom: theme.spacing(3),
    },
  },
  switchLabel: {
    color: theme.palette.text.primary,
  },
  sliderLabel: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  selectLabel: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
})); 