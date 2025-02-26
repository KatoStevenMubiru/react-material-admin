import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  activityCard: {
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)'
    }
  }
}));
