import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import {
  Star as StarIcon,
  CalendarToday as CalendarIcon,
  School as SchoolIcon
} from "@mui/icons-material";
import useStyles from "./styles";

const Milestones = ({milestones}) => {
  const classes = useStyles();
  
  return (
    <Box p={2}>
      {milestones.map(milestone => (
        <Box 
          key={milestone.id} 
          mb={3} 
          p={3} 
          bgcolor={milestone.achieved ? "rgba(60, 212, 160, 0.1)" : "background.paper"} 
          borderRadius={2}
          border={milestone.achieved ? "1px solid #3CD4A0" : "1px solid rgba(0, 0, 0, 0.08)"}
          className={classes.milestoneCard}
        >
          <Box display="flex" alignItems="center" mb={1.5}>
            {milestone.achieved && (
              <StarIcon sx={{ color: '#3CD4A0', mr: 1.5, fontSize: '1.5rem' }} />
            )}
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{milestone.title}</Typography>
          </Box>
          
          <Box display="flex" alignItems="center" mb={2}>
            <CalendarIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">{milestone.date}</Typography>
          </Box>
          
          <Typography variant="body1" sx={{ mb: 2, color: milestone.achieved ? 'text.primary' : 'text.secondary' }}>
            {milestone.description}
          </Typography>
          
          {milestone.achieved && (
            <Box mt={2} p={2} bgcolor="rgba(60, 212, 160, 0.15)" borderRadius={2} display="flex" alignItems="center">
              <SchoolIcon sx={{ color: '#00875A', mr: 1.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#00875A' }}>
                This achievement supports your academic success at Makerere University!
              </Typography>
            </Box>
          )}
          
          {!milestone.achieved && (
            <Chip 
              label="Upcoming Milestone" 
              variant="outlined" 
              color="primary" 
              sx={{ mt: 1 }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Milestones;
