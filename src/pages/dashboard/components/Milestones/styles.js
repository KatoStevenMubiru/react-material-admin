import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  milestoneCard: {
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
      transform: 'translateY(-3px)'
    }
  }
}));
