import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon
} from "@mui/icons-material";
import useStyles from "./styles";

const SupportContacts = ({contacts}) => {
  const classes = useStyles();

  return (
    <Box p={2}>
      {contacts.map(contact => (
        <Box 
          key={contact.id} 
          mb={3} 
          p={3} 
          bgcolor={contact.priority === "emergency" ? "rgba(244, 67, 54, 0.08)" : "background.paper"} 
          borderRadius={2}
          border={contact.priority === "emergency" ? "1px solid #f44336" : "1px solid rgba(0, 0, 0, 0.08)"}
          className={classes.contactCard}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{contact.name}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{contact.role}</Typography>
          
          <Divider sx={{ mb: 2 }} />
          
          <Box display="flex" alignItems="center" mb={1.5}>
            <PhoneIcon fontSize="small" sx={{ mr: 1.5, color: contact.priority === "emergency" ? "#f44336" : "text.secondary" }} />
            <Typography variant="body2" sx={{ 
              fontWeight: contact.priority === "emergency" ? 'bold' : 'normal',
              fontSize: contact.priority === "emergency" ? '1rem' : '0.875rem' 
            }}>
              {contact.phone}
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon fontSize="small" sx={{ mr: 1.5, color: "text.secondary" }} />
            <Typography variant="body2">{contact.email}</Typography>
          </Box>
          
          <Button 
            variant="contained" 
            color={contact.priority === "emergency" ? "error" : "primary"} 
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{ 
              mt: 1,
              minHeight: '48px',
              fontWeight: contact.priority === "emergency" ? 'bold' : 'medium',
              fontSize: contact.priority === "emergency" ? '1rem' : '0.9rem',
              boxShadow: contact.priority === "emergency" ? '0 4px 10px rgba(244, 67, 54, 0.3)' : '',
            }}
          >
            {contact.priority === "emergency" ? "CALL NOW - EMERGENCY" : "Call Now"}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default SupportContacts;
