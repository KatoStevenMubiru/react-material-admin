import React, { useState } from "react";
import { Grid, Select, MenuItem, Input, Box, Tooltip } from "@mui/material";
import { ArrowUpward as ArrowUpwardIcon } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce, icon, description } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("weekly");

  // Generate data for bar chart - simplified for better understanding
  const getChartData = React.useMemo(
    function getChartData() {
      const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      
      // For weekly view - show real-looking pattern data
      if (value === 'weekly') {
        // Create realistic pattern based on the metric name
        if (product.includes('Therapy')) {
          // Therapy usually 1-2 times a week
          return daysOfWeek.map(day => ({ 
            name: day, 
            value: day === 'Mon' || day === 'Thu' ? 1 : 0 
          }));
        } else if (product.includes('Medication')) {
          // Medication typically daily
          return daysOfWeek.map(day => ({ 
            name: day, 
            value: day === 'Sat' ? 0 : 1 
          }));
        } else {
          // Wellness activities - varied
          return daysOfWeek.map(day => ({ 
            name: day, 
            value: ['Mon', 'Wed', 'Fri', 'Sun'].includes(day) ? 1 : 0 
          }));
        }
      }
      
      // For monthly/daily, use simpler data
      return Array(7)
        .fill()
        .map((_, i) => ({ name: i.toString(), value: Math.floor(Math.random() * 2) }));
    },
    [value, product]
  );

  return (
    <Widget
      header={
        <div className={classes.title}>
          <Box display="flex" alignItems="center">
            {icon && <Box mr={1} color={theme.palette[color].main}>{icon}</Box>}
            <Typography variant="h5" color={color} colorBrightness={"main"}>
              {product}
            </Typography>
          </Box>

          <Select
            value={value}
            onChange={e => setValue(e.target.value)}
            input={
              <Input
                disableUnderline
                classes={{ input: classes.selectInput }}
              />
            }
            className={classes.select}
          >
            <MenuItem value="daily">Today</MenuItem>
            <MenuItem value="weekly">This Week</MenuItem>
            <MenuItem value="monthly">This Month</MenuItem>
          </Select>
        </div>
      }
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography
            variant={"h2"}
            weight={"medium"}
            style={{ marginRight: 8 }}
          >
            {total[value]}
          </Typography>
          <Typography color={total.percent.profit ? "success" : "error"}>
            &nbsp;{total.percent.value}%
            <ArrowUpwardIcon
              className={classnames(classes.profitArrow, {
                [classes.profitArrowDanger]: !total.percent.profit
              })}
            />
          </Typography>
        </div>
        <Tooltip title="Your activity pattern">
          <BarChart width={100} height={70} data={getChartData}>
            <Bar
              dataKey="value"
              fill={theme.palette[color].main}
              radius={4}
              barSize={10}
            />
          </BarChart>
        </Tooltip>
      </div>
      
      {description && (
        <Typography 
          variant="body2" 
          color="textSecondary" 
          className={classes.statDescription}
        >
          {description}
        </Typography>
      )}
      
      <div className={classes.bottomStatsContainer}>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
            <Typography
              color={"text"}
              weight="bold"
              colorBrightness={"secondary"}
              variant={"h6"}
            >
              {registrations[value].value}
            </Typography>
            {registrations[value].profit && (
              <ArrowUpwardIcon
                className={classnames(classes.profitArrow, {
                  [classes.profitArrowDanger]: !registrations[value].profit
                })}
              />
            )}
          </Grid>
          <Typography color="text" variant="caption" colorBrightness="hint">
            Completed
          </Typography>
        </div>
        <div className={classes.statCell}>
          <Grid container alignItems="center">
            <Typography
              color={"text"}
              weight="bold"
              colorBrightness={"secondary"}
              variant={"h6"}
            >
              {bounce[value].value}
            </Typography>
            {bounce[value].profit && (
              <ArrowUpwardIcon
                className={classnames(classes.profitArrow, {
                  [classes.profitArrowDanger]: !bounce[value].profit
                })}
              />
            )}
          </Grid>
          <Typography color="text" variant="caption" colorBrightness="hint">
            Completion Rate
          </Typography>
        </div>
      </div>
    </Widget>
  );
}
