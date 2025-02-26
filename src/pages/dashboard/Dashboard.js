import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Typography as MuiTypography,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  EmojiEmotions as EmojiIcon,
  LocalHospital as MedicationIcon,
  Group as GroupIcon,
  Star as StarIcon,
} from "@mui/icons-material";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import SimpleBigStat from "./components/SimpleBigStat/SimpleBigStat";
import UpcomingTasks from "./components/UpcomingTasks/UpcomingTasks";
import SupportContacts from "./components/SupportContacts/SupportContacts";
import Milestones from "./components/Milestones/Milestones";
import RecoveryTable from "./components/RecoveryTable/RecoveryTable";

// mock data
import { mockData } from "./mock";

// styles
import useStyles from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  
  return (
    <>
      <PageTitle title="Recovery Dashboard" />
      
      {/* Welcome Message and Sobriety Counter */}
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className={classes.card} sx={{ 
            boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
            transition: 'all 0.3s',
            '&:hover': {
              boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
            }
          }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h3" className={classes.greeting}>
                Welcome to Your Recovery Journey
              </Typography>
              <Typography variant="h6" className={classes.subGreeting}>
                Today is a new opportunity for growth at Makerere University
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  marginTop: 3,
                  padding: '12px 24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  minHeight: '56px',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                  }
                }}
              >
                <AccessTimeIcon sx={{ marginRight: 2, fontSize: '1.5rem' }} />
                Check In Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className={classes.card} sx={{ 
            boxShadow: '0 6px 10px rgba(0,0,0,0.08)',
            transition: 'all 0.3s',
            '&:hover': {
              boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
            }
          }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" fontWeight="medium" mb={2}>
                Daily Inspiration
              </Typography>
              <Box p={2} bgcolor="rgba(83, 109, 254, 0.05)" borderRadius={2} mb={2}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                  "Recovery isn't just about healing the body, but also nurturing the mind and spirit. Each day at Makerere is a new opportunity to grow stronger."
                </Typography>
              </Box>
              
              <Box mt={3} p={2} bgcolor="rgba(83, 109, 254, 0.05)" borderRadius={2}>
                <Typography variant="h6" gutterBottom>
                  How are you feeling today?
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                  {['Great', 'Good', 'Okay', 'Struggling', 'Need Help'].map((mood) => (
                    <Button
                      key={mood}
                      variant={mood === 'Need Help' ? "contained" : "outlined"}
                      color={mood === 'Need Help' ? "error" : "primary"}
                      sx={{
                        minWidth: '100px', 
                        minHeight: '48px',
                        margin: '4px',
                        flex: {xs: '1 0 40%', sm: '0 1 auto'},
                        fontWeight: mood === 'Need Help' ? 'bold' : 'normal'
                      }}
                    >
                      {mood}
                    </Button>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2, minHeight: '48px' }}
                >
                  Journal Today's Thoughts
                </Button>
              </Box>
              
              <Box display="flex" flexDirection="column" mt={2}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    Language / Lugha
                  </Typography>
                  <Button 
                    size="small" 
                    variant="text" 
                    sx={{ minWidth: 'auto', padding: '2px 8px' }}
                  >
                    English / Luganda
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                  Your data is protected under Uganda's Data Protection Act
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Big Stats */}
      <Grid container spacing={4} style={{ marginTop: 32 }}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <SimpleBigStat 
            product="Therapy Sessions"
            total={{
              weekly: 2,
              monthly: 8,
              daily: 0
            }}
            color="primary"
            icon={<GroupIcon />}
            description="Regular therapy sessions at Makerere Counseling Center support your recovery and academic success"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <SimpleBigStat 
            product="Medication Adherence"
            total={{
              weekly: 100,
              monthly: 98,
              daily: 100
            }}
            color="warning"
            icon={<MedicationIcon />}
            description="Taking medication as prescribed helps maintain stability during your university studies"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <SimpleBigStat 
            product="Wellness Activities"
            total={{
              weekly: 5,
              monthly: 22,
              daily: 1
            }}
            color="secondary"
            icon={<StarIcon />}
            description="Campus wellness activities improve your overall recovery and academic performance"
          />
        </Grid>
      </Grid>
      
      {/* Upcoming Tasks and Support Resources */}
      <Grid container spacing={4} style={{ marginTop: 32 }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Widget
            title="Upcoming Recovery Activities"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
            className={classes.card}
            disableWidgetMenu
          >
            <UpcomingTasks tasks={mockData.recoveryTasks} />
          </Widget>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Widget
            title="Hot Support Contacts"
            upperTitle
            className={classes.card}
            disableWidgetMenu
          >
            <SupportContacts contacts={mockData.supportContacts} />
          </Widget>
        </Grid>
      </Grid>
      
      {/* Milestones and Recent Activities */}
      <Grid container spacing={4} style={{ marginTop: 32 }}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Widget
            title="Recovery Milestones"
            upperTitle
            className={classes.card}
            disableWidgetMenu
          >
            <Milestones milestones={mockData.milestones} />
          </Widget>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Widget
            title="Recent Recovery Activities"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
            className={classes.card}
            disableWidgetMenu
          >
            <RecoveryTable data={mockData.recoveryActivities} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}