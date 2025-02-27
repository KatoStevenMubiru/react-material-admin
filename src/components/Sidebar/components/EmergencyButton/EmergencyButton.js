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
} from '@mui/material';
import { 
  LocalHospital, 
  Phone, 
  Message, 
  LocationOn, 
  Close as CloseIcon,
  SupportAgent,
} from '@mui/icons-material';
import useStyles from './styles';
import { useLanguage } from '../../../../context/LanguageContext';

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // If sidebar is collapsed, render icon-only button with tooltip
  if (!isOpen) {
    return (
      <>
        <Tooltip 
          title="Emergency Help" 
          placement="right"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            variant="outlined"
            color="error"
            className={classes.emergencyButtonCollapsed}
            onClick={handleClickOpen}
            aria-label="Emergency Help - Click for immediate assistance"
            size="large"
          >
            <SupportAgent fontSize="large" />
          </Button>
        </Tooltip>
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="emergency-dialog-title"
          aria-describedby="emergency-dialog-description"
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="emergency-dialog-title" className={classes.dialogTitle}>
            <Typography variant="h5" component="div" className={classes.dialogTitleText}>
              Emergency Help
            </Typography>
            <Button 
              onClick={handleClose} 
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
            
            <Typography variant="h6" className={classes.sectionTitle}>
              Available Support Contacts:
            </Typography>
            <List aria-label="Emergency contact list">
              {emergencyContacts.map((contact, index) => (
                <Paper key={index} elevation={1} className={classes.contactCard}>
                  <ListItem 
                    button 
                    component="a" 
                    href={`tel:${contact.number.replace(/\s+/g, '')}`}
                    aria-label={`Call ${contact.name} at ${contact.number}`}
                  >
                    <ListItemIcon className={classes.contactIcon}>
                      {contact.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={contact.name}
                      secondary={
                        <>
                          <Typography variant="body1" component="span" className={classes.contactNumber}>
                            {contact.number}
                          </Typography>
                          <br />
                          <Typography variant="body2" component="span" className={classes.contactLocation}>
                            {contact.location}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </Paper>
              ))}
            </List>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button 
              onClick={handleClose} 
              color="primary" 
              variant="outlined"
              className={classes.actionButton}
              aria-label="Close emergency dialog"
            >
              Close
            </Button>
            <Button 
              href="tel:999" 
              color="error" 
              variant="contained"
              className={classes.actionButton}
              size="large"
              aria-label="Call emergency services at 999"
            >
              Call Emergency Services
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  // Full sidebar view with text and icon button
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        className={classes.emergencyButton}
        onClick={handleClickOpen}
        startIcon={<SupportAgent />}
        aria-label="Emergency Help - Click for immediate assistance"
        size="large"
      >
        Emergency Help
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="emergency-dialog-title"
        aria-describedby="emergency-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="emergency-dialog-title" className={classes.dialogTitle}>
          <Typography variant="h5" component="div" className={classes.dialogTitleText}>
            Emergency Help
          </Typography>
          <Button 
            onClick={handleClose} 
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
          
          <Typography variant="h6" className={classes.sectionTitle}>
            Available Support Contacts:
          </Typography>
          <List aria-label="Emergency contact list">
            {emergencyContacts.map((contact, index) => (
              <Paper key={index} elevation={1} className={classes.contactCard}>
                <ListItem 
                  button 
                  component="a" 
                  href={`tel:${contact.number.replace(/\s+/g, '')}`}
                  aria-label={`Call ${contact.name} at ${contact.number}`}
                >
                  <ListItemIcon className={classes.contactIcon}>
                    {contact.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={contact.name}
                    secondary={
                      <>
                        <Typography variant="body1" component="span" className={classes.contactNumber}>
                          {contact.number}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="span" className={classes.contactLocation}>
                          {contact.location}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button 
            onClick={handleClose} 
            color="primary" 
            variant="outlined"
            className={classes.actionButton}
            aria-label="Close emergency dialog"
          >
            Close
          </Button>
          <Button 
            href="tel:999" 
            color="error" 
            variant="contained"
            className={classes.actionButton}
            size="large"
            aria-label="Call emergency services at 999"
          >
            Call Emergency Services
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
} 