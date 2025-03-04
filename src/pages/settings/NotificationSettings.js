import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Switch,
  Paper,
  Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    color: COLORS.text.primary,
    marginBottom: theme.spacing(3),
  },
  section: {
    marginBottom: theme.spacing(3),
    '& .MuiTypography-root': {
      color: COLORS.text.primary,
    }
  },
  sectionTitle: {
    color: COLORS.text.primary,
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    '& .MuiFormControlLabel-label': {
      color: COLORS.text.primary,
    }
  },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: COLORS.primary,
      '&:hover': {
        backgroundColor: alpha(COLORS.primary, 0.04),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: COLORS.primary,
    },
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  divider: {
    margin: theme.spacing(3, 0),
    backgroundColor: alpha(theme.palette.divider, 0.5),
  },
}));

export default function NotificationSettings() {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Notification Settings
      </Typography>
      
      <Paper className={classes.paper}>
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Email Notifications
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Recovery Progress Updates"
            />
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Support Group Meeting Reminders"
            />
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Academic Performance Alerts"
            />
          </FormControl>
        </Box>
        
        <Divider className={classes.divider} />
        
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Mobile Notifications
          </Typography>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Push Notifications"
            />
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Emergency Alerts"
            />
            <FormControlLabel
              control={<Switch className={classes.switch} />}
              label="Counseling Session Reminders"
            />
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
} 