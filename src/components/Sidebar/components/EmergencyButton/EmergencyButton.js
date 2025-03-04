import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Box,
  ListItemAvatar,
  Avatar,
  Grid,
  Divider,
} from '@mui/material';
import { 
  LocalHospital, 
  Phone, 
  Message, 
  LocationOn, 
  Close as CloseIcon,
  SupportAgent,
  ReportProblem,
  Call,
  ArrowForward,
} from '@mui/icons-material';
import useStyles from './styles';
import { useLanguage } from '../../../../context/LanguageContext';
import { useHistory } from 'react-router-dom';

// Emergency contacts specific to Makerere University
const emergencyContacts = [
  {
    name: 'University Health Services',
    number: '+256 414 532 631',
    location: 'Makerere University Main Campus',
    icon: <LocalHospital />,
  },
  {
    name: 'Mental Health Helpline',
    number: '+256 800 21 21 21',
    location: '24/7 Toll-Free Support',
    icon: <Phone />,
  },
  {
    name: 'Campus Security',
    number: '+256 414 531 441',
    location: 'Main Security Office',
    icon: <LocationOn />,
  },
  {
    name: 'SMS Crisis Line',
    number: '8121',
    location: 'Text "HELP" to 8121',
    icon: <Message />,
  },
];

export default function EmergencyButton({ isOpen }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
    
    // Analytics tracking for emergency button click
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_button_click',
        timestamp: new Date().toISOString(),
        source: 'sidebar',
        user_id: sessionStorage.getItem('user_id') || 'anonymous'
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigateToEmergencyPage = () => {
    setOpen(false); // Close the dialog
    
    // Analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_navigation',
        destination: 'emergency_page',
        timestamp: new Date().toISOString()
      });
    }
    
    // Store navigation intent in session storage for database preparation
    sessionStorage.setItem('emergency_navigation', JSON.stringify({
      source: 'emergency_button',
      timestamp: new Date().toISOString(),
      action: 'full_page_view'
    }));
    
    history.push('/app/emergency'); // Navigate to the emergency page
  };

  const handleNavigateToReportCrisis = () => {
    setOpen(false); // Close the dialog
    
    // Analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_navigation',
        destination: 'crisis_report',
        timestamp: new Date().toISOString()
      });
    }
    
    // Store navigation intent in session storage for database preparation
    sessionStorage.setItem('emergency_navigation', JSON.stringify({
      source: 'emergency_button',
      timestamp: new Date().toISOString(),
      action: 'report_crisis'
    }));
    
    history.push('/app/emergency#report'); // Navigate to the report section of emergency page
  };

  const handleNavigateToEmergencyCall = () => {
    setOpen(false); // Close the dialog
    
    // Analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_navigation',
        destination: 'emergency_call',
        timestamp: new Date().toISOString()
      });
    }
    
    // Store navigation intent in session storage for database preparation
    sessionStorage.setItem('emergency_navigation', JSON.stringify({
      source: 'emergency_button',
      timestamp: new Date().toISOString(),
      action: 'call_helpline'
    }));
    
    history.push('/app/emergency#call'); // Navigate to the call section of emergency page
  };

  // Function to directly initiate a call
  const handleDirectCall = (phoneNumber, contactName) => {
    // Show confirmation
    const confirmed = window.confirm(`You are about to call ${contactName}. Continue?`);
    
    if (confirmed) {
      // Analytics tracking
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'emergency_direct_call',
          contact: contactName,
          phone_number: phoneNumber,
          timestamp: new Date().toISOString()
        });
      }
      
      // Store call data in session storage for database preparation
      sessionStorage.setItem('emergency_call', JSON.stringify({
        contact_name: contactName,
        phone_number: phoneNumber,
        timestamp: new Date().toISOString(),
        source: 'emergency_button_dialog'
      }));
      
      // Format phone number and initiate call
      const formattedNumber = phoneNumber.replace(/\s/g, '');
      window.location.href = `tel:${formattedNumber}`;
    }
  };

  // If sidebar is collapsed, render icon-only button with tooltip
  if (!isOpen) {
    return (
      <>
        <Tooltip 
          title="Emergency SOS at CoCIS" 
          placement="right"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="contained"
            color="error"
            className={classes.emergencyButtonCollapsed}
            onClick={handleClickOpen}
            aria-label="Emergency SOS - Click for immediate assistance"
            size="large"
          >
            <ReportProblem fontSize="large" />
          </Button>
        </Tooltip>
        
        <EmergencyDialog
          open={open}
          onClose={handleClose}
          onNavigateToEmergencyPage={handleNavigateToEmergencyPage}
          onNavigateToReportCrisis={handleNavigateToReportCrisis}
          onNavigateToEmergencyCall={handleNavigateToEmergencyCall}
          onDirectCall={handleDirectCall}
          contacts={emergencyContacts}
        />
      </>
    );
  }

  // Full sidebar button
  return (
    <>
      <Button
        variant="contained"
        color="error"
        fullWidth
        className={classes.emergencyButton}
        onClick={handleClickOpen}
        startIcon={<ReportProblem />}
        aria-label="Emergency SOS at CoCIS - Click for immediate assistance"
        size="large"
      >
        Emergency SOS
      </Button>
      
      <EmergencyDialog
        open={open}
        onClose={handleClose}
        onNavigateToEmergencyPage={handleNavigateToEmergencyPage}
        onNavigateToReportCrisis={handleNavigateToReportCrisis}
        onNavigateToEmergencyCall={handleNavigateToEmergencyCall}
        onDirectCall={handleDirectCall}
        contacts={emergencyContacts}
      />
    </>
  );
}

// Separate dialog component for better organization
function EmergencyDialog({ 
  open, 
  onClose,
  onNavigateToEmergencyPage,
  onNavigateToReportCrisis,
  onNavigateToEmergencyCall,
  onDirectCall,
  contacts 
}) {
  const classes = useStyles();
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="emergency-dialog-title"
      aria-describedby="emergency-dialog-description"
      maxWidth="md"
      fullWidth
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle id="emergency-dialog-title" className={classes.dialogTitle}>
        <Typography variant="h5" component="div" className={classes.dialogTitleText}>
          Emergency SOS at CoCIS at Makerere University
        </Typography>
        <Button 
          onClick={onClose} 
          className={classes.closeButton}
          aria-label="close emergency dialog"
        >
          <CloseIcon />
        </Button>
      </DialogTitle>
      
      <DialogContent>
        <DialogContentText 
          id="emergency-dialog-description"
          className={classes.dialogSubtitle}
        >
          If you are experiencing a life-threatening emergency, please call the national emergency number <strong>999</strong> or <strong>112</strong> immediately.
        </DialogContentText>
        
        <Grid container spacing={3} className={classes.actionsContainer}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.actionCard} elevation={3}>
              <Box className={classes.actionHeader}>
                <ReportProblem color="error" className={classes.actionIcon} />
                <Typography variant="h6" className={classes.actionTitle}>
                  Report a Crisis
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.actionDescription}>
                Submit details about your current situation for immediate support from CoCIS counselors.
              </Typography>
              <Button 
                variant="contained" 
                color="error" 
                className={classes.actionButton}
                onClick={onNavigateToReportCrisis}
                endIcon={<ArrowForward />}
              >
                Report Crisis Now
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper className={classes.actionCard} elevation={3}>
              <Box className={classes.actionHeader}>
                <Call color="error" className={classes.actionIcon} />
                <Typography variant="h6" className={classes.actionTitle}>
                  Call Helpline
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.actionDescription}>
                Speak directly with CoCIS emergency support counselors by phone for immediate assistance.
              </Typography>
              <Button 
                variant="contained" 
                color="error" 
                className={classes.actionButton}
                onClick={onNavigateToEmergencyCall}
                endIcon={<ArrowForward />}
              >
                Access Helpline
              </Button>
            </Paper>
          </Grid>
        </Grid>
        
        <Divider className={classes.divider} />
        
        <Typography variant="h6" className={classes.sectionTitle}>
          Emergency Contact Numbers:
        </Typography>
        
        {/* List of contacts */}
        <List className={classes.contactList}>
          {contacts.map((contact, index) => (
            <ListItem 
              key={index} 
              className={classes.contactItem}
              button
              onClick={() => onDirectCall(contact.number, contact.name)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {contact.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <Typography variant="subtitle1" className={classes.contactName}>
                    {contact.name}
                  </Typography>
                } 
                secondary={
                  <>
                    <Typography component="span" variant="body2" className={classes.contactNumber}>
                      {contact.number}
                    </Typography>
                    <Typography component="span" variant="body2" className={classes.contactLocation}>
                      {contact.location}
                    </Typography>
                  </>
                }
              />
              <CallIcon color="error" className={classes.callIcon} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      
      <DialogActions className={classes.dialogActions}>
        <Button 
          onClick={onNavigateToEmergencyPage} 
          color="primary" 
          variant="outlined"
          className={classes.fullPageButton}
        >
          Go to Emergency SOS Page
        </Button>
        <Button 
          onClick={onClose} 
          color="inherit"
          className={classes.closeTextButton}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
} 