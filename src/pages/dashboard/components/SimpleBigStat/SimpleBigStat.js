import React from "react";
import { Box, Typography } from "@mui/material";
import Widget from "../../../../components/Widget";
import useStyles from "./styles";

const SimpleBigStat = ({ product, total, color, description, icon }) => {
  const classes = useStyles();
  
  return (
    <Widget
      title={product}
      upperTitle
      className={classes.card}
      bodyClass={classes.fullHeightBody}
    >
      <Box className={classes.bigStat} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>
            <Typography variant="h3" fontWeight="bold">{total.weekly}</Typography>
            <Typography variant="h6" color="text.secondary">
              Weekly
            </Typography>
          </Box>
          <Box 
            bgcolor={`${color}.light`} 
            p={1.5} 
            borderRadius="50%" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            {React.cloneElement(icon, { style: { fontSize: 32, color: `${color}.main` } })}
          </Box>
        </Box>
        <Box 
          bgcolor="background.paper" 
          p={2} 
          borderRadius={1} 
          border="1px solid rgba(0,0,0,0.08)"
        >
          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Widget>
  );
};

export default SimpleBigStat; 