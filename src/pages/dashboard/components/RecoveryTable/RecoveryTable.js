import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import {
  AccessTime as TimeIcon,
  LocationOn as LocationIcon
} from "@mui/icons-material";
import useStyles from "./styles";

const RecoveryTable = ({data}) => {
  const classes = useStyles();
  
  return (
    <Box p={2}>
      {data.map(item => (
        <Box 
          key={item.id} 
          mb={3} 
          p={3} 
          bgcolor="background.paper" 
          borderRadius={2}
          borderLeft={`4px solid ${
            item.status === "Completed" ? "#3CD4A0" : 
            item.status === "Scheduled" ? "#536DFE" : "#FF5C93"
          }`}
          className={classes.activityCard}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>{item.activity}</Typography>
            <Chip 
              label={item.status} 
              sx={{ 
                fontWeight: 'bold',
                color: item.status === "Completed" ? "#00875A" : 
                       item.status === "Scheduled" ? "#304FFE" : "#C2185B",
                bgcolor: item.status === "Completed" ? "rgba(60, 212, 160, 0.2)" : 
                         item.status === "Scheduled" ? "rgba(83, 109, 254, 0.2)" : "rgba(255, 92, 147, 0.2)"
              }}
            />
          </Box>
          
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb={2}>
            <Box display="flex" alignItems="center" mr={3} mb={{ xs: 1, sm: 0 }}>
              <TimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">{item.date}</Typography>
            </Box>
            
            {item.location && (
              <Box display="flex" alignItems="center">
                <LocationIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{item.location}</Typography>
              </Box>
            )}
          </Box>
          
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Chip 
              label={item.type} 
              variant="outlined"
              size="small"
              sx={{ 
                color: 'text.secondary',
                borderColor: 'rgba(0, 0, 0, 0.12)'
              }}
            />
            
            <Button 
              variant="outlined" 
              size="medium"
              color={
                item.status === "Completed" ? "success" : 
                item.status === "Scheduled" ? "primary" : "secondary"
              }
              sx={{ 
                minHeight: '40px', 
                borderRadius: '20px',
                textTransform: 'none',
                px: 3
              }}
            >
              {item.status === "Completed" ? "View Details" : 
               item.status === "Scheduled" ? "Prepare" : "Reschedule"}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RecoveryTable;
