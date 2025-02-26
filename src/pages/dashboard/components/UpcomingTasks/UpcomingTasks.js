import React from "react";
import { Box, Typography, Button, Chip, Avatar } from "@mui/material";
import {
  School as SchoolIcon,
  Psychology as TherapyIcon,
  Group as GroupIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon
} from "@mui/icons-material";
import useStyles from "./styles";

const getIconByType = (type) => {
  switch(type) {
    case "Therapy": return <TherapyIcon />;
    case "Support Group": return <GroupIcon />;
    case "Academic Support": return <SchoolIcon />;
    default: return <TherapyIcon />;
  }
};

const UpcomingTasks = ({tasks}) => {
  const classes = useStyles();
  
  return (
    <Box p={2}>
      {tasks.map(task => (
        <Box 
          key={task.id} 
          mb={3} 
          p={3} 
          bgcolor="background.paper" 
          borderRadius={2}
          className={classes.taskCard}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar 
              sx={{ 
                bgcolor: task.type === "Therapy" ? "#536DFE" : 
                         task.type === "Support Group" ? "#FF5C93" : "#3CD4A0",
                width: 48,
                height: 48
              }}
            >
              {getIconByType(task.type)}
            </Avatar>
            <Box ml={2}>
              <Typography variant="h6" fontWeight="medium">{task.title}</Typography>
              <Chip 
                label={task.type} 
                size="small" 
                sx={{ 
                  mt: 0.5,
                  bgcolor: task.type === "Therapy" ? "rgba(83, 109, 254, 0.1)" : 
                           task.type === "Support Group" ? "rgba(255, 92, 147, 0.1)" : 
                           "rgba(60, 212, 160, 0.1)",
                  color: task.type === "Therapy" ? "#304FFE" : 
                         task.type === "Support Group" ? "#C2185B" : "#00875A",
                  fontWeight: "medium"
                }} 
              />
            </Box>
          </Box>
          
          <Box 
            display="flex" 
            flexDirection={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            mb={2}
          >
            <Box display="flex" alignItems="center" mb={{ xs: 1, sm: 0 }}>
              <TimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {task.day}, {task.time}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {task.location}
              </Typography>
            </Box>
          </Box>
          
          <Button 
            variant="contained" 
            color={task.day === "Today" ? "primary" : "secondary"}
            fullWidth
            sx={{ 
              mt: 1,
              minHeight: '48px',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: task.day === "Today" ? 'bold' : 'medium'
            }}
          >
            {task.day === "Today" ? "Prepare for This Task" : "View Details"}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default UpcomingTasks; 