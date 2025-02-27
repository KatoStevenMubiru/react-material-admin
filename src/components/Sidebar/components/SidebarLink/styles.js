import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    padding: theme.spacing(1, 2),
  },
  linkActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderLeft: '4px solid #3f51b5', // Primary color border for active items
    paddingLeft: 12, // Adjusted for the border
  },
  linkNested: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    minWidth: 24,
    color: '#6E6E6E',
    transition: 'all 0.3s',
    fontSize: '1.5rem', // Larger icons for better visibility
  },
  linkIconActive: {
    color: '#3f51b5',
  },
  linkText: {
    padding: 0,
    color: '#4A4A4A',
    fontWeight: 500,
    transition: 'opacity 0.3s',
    fontSize: '1rem', // More readable text size
  },
  linkTextActive: {
    color: '#3f51b5',
    fontWeight: 600,
  },
  linkTextHidden: {
    opacity: 0,
  },
  sectionTitle: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: '#4A4A4A',
    fontWeight: 700,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
    paddingLeft: theme.spacing(3),
    transition: 'all 0.3s',
  },
}));
