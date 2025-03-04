import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Typography as MuiTypography,
  Tabs,
  Tab,
  Divider,
  LinearProgress,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
  MenuItem
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  EmojiEmotions as EmojiIcon,
  LocalHospital as MedicationIcon,
  Group as GroupIcon,
  Star as StarIcon,
  Timeline,
  AssignmentTurnedIn,
  EventNote,
  Settings,
  AccessibilityNew,
} from "@mui/icons-material";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define consistent colors at the top
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

export default function Dashboard() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [moodJournal, setMoodJournal] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const moodChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Mood Score',
        data: [7, 6, 8, 5, 9, 8, 7],
        fill: false,
        borderColor: '#2196f3',
        tension: 0.1
      }
    ]
  };
  
  const goalsChartData = {
    labels: ['Therapy', 'Meditation', 'Exercise', 'Journaling', 'Support Group'],
    datasets: [
      {
        label: 'Goals Achieved',
        data: [4, 3, 2, 5, 3],
        backgroundColor: '#3CD4A0',
      },
      {
        label: 'Goals Pending',
        data: [1, 2, 3, 0, 2],
        backgroundColor: '#ef5350',
      },
    ]
  };
  
  return (
    <>
      <PageTitle title="Recovery Dashboard at CoCIS at Makerere University" />
      
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
      
      {/* Add tab navigation for merged components */}
      <Box mt={4} mb={2}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Recovery Dashboard Navigation"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minHeight: '48px',
              fontSize: '1rem',
            },
            '& .Mui-selected': {
              color: '#2196f3',
              fontWeight: 'bold',
            },
          }}
        >
          <Tab 
            icon={<Timeline sx={{ fontSize: 48 }} />} 
            label="Progress Tracking" 
            id="progress-tab"
            aria-controls="progress-panel"
          />
          <Tab 
            icon={<EventNote sx={{ fontSize: 48 }} />} 
            label="Schedule Management" 
            id="schedule-tab"
            aria-controls="schedule-panel"
          />
          <Tab 
            icon={<AssignmentTurnedIn sx={{ fontSize: 48 }} />} 
            label="Milestones" 
            id="milestones-tab"
            aria-controls="milestones-panel"
          />
          <Tab 
            icon={<Settings sx={{ fontSize: 48, color: COLORS.primary }} />} 
            label="Settings" 
            id="settings-tab"
            aria-controls="settings-panel"
          />
        </Tabs>
      </Box>
      
      <Divider sx={{ mb: 3 }} />
      
      {/* Progress Tracking Section */}
      <Box 
        role="tabpanel"
        hidden={activeTab !== 0}
        id="progress-panel"
        aria-labelledby="progress-tab"
      >
        {activeTab === 0 && (
          <Grid container spacing={4}>
            {/* Mood Trends Chart */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Weekly Mood Trends for Academic Success
                  </Typography>
                  <Box height={300}>
                    <Line data={moodChartData} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Recovery Goals Chart */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Recovery Goals for Academic Performance
                  </Typography>
                  <Box height={300}>
                    <Bar data={goalsChartData} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Journal Entry */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Daily Journal for Academic Reflection
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="How did your recovery support your studies today?"
                    value={moodJournal}
                    onChange={(e) => setMoodJournal(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <FormControl component="fieldset">
                      <Typography variant="body2" gutterBottom>
                        Today's Mood:
                      </Typography>
                      <Box>
                        {['Great', 'Good', 'Okay', 'Struggling', 'Need Help'].map((mood) => (
                          <Button
                            key={mood}
                            variant={selectedMood === mood ? "contained" : "outlined"}
                            color={mood === 'Need Help' ? "error" : "primary"}
                            onClick={() => setSelectedMood(mood)}
                            sx={{
                              minWidth: '100px',
                              minHeight: '48px',
                              m: 0.5,
                            }}
                          >
                            {mood}
                          </Button>
                        ))}
                      </Box>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ minHeight: '48px' }}
                    >
                      Save Journal Entry
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Schedule Management Section */}
      <Box 
        role="tabpanel"
        hidden={activeTab !== 1}
        id="schedule-panel"
        aria-labelledby="schedule-tab"
      >
        {activeTab === 1 && (
          <Grid container spacing={4}>
            {/* Upcoming Therapy & Appointments */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Therapy Sessions Supporting Academic Success
                  </Typography>
                  <UpcomingTasks tasks={mockData.recoveryTasks} />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mt: 2, minHeight: '48px' }}
                  >
                    Schedule New Session
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Support Groups Calendar */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Support Groups for Academic Environment
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Join these campus support groups to enhance your recovery and academic performance.
                  </Typography>
                  <Box mb={2}>
                    {['Addiction Recovery', 'Mental Health', 'Academic Support', 'Stress Management'].map((group, index) => (
                      <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={1} p={2} bgcolor="rgba(83, 109, 254, 0.05)" borderRadius={2}>
                        <Typography variant="body1">{group}</Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ minWidth: '100px', minHeight: '48px' }}
                        >
                          Join
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Milestones Section */}
      <Box 
        role="tabpanel"
        hidden={activeTab !== 2}
        id="milestones-panel"
        aria-labelledby="milestones-tab"
      >
        {activeTab === 2 && (
          <Grid container spacing={4}>
            {/* Achievements Progress */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    My Achievements at Makerere University
                  </Typography>
                  <Milestones milestones={mockData.milestones} />
                </CardContent>
              </Card>
            </Grid>
            
            {/* Set New Milestone */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Set New Academic Recovery Milestone
                  </Typography>
                  <TextField
                    fullWidth
                    label="Milestone Title"
                    variant="outlined"
                    placeholder="e.g., Complete first semester sober"
                    sx={{ mb: 2, mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={2}
                    variant="outlined"
                    placeholder="Describe your milestone"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Category"
                    defaultValue="academic"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="academic">Academic</MenuItem>
                    <MenuItem value="recovery">Recovery</MenuItem>
                    <MenuItem value="personal">Personal Growth</MenuItem>
                    <MenuItem value="health">Health</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label="Target Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    sx={{ mb: 2 }}
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ minHeight: '48px' }}
                  >
                    Save Milestone
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Settings Section */}
      <Box 
        role="tabpanel"
        hidden={activeTab !== 3}
        id="settings-panel"
        aria-labelledby="settings-tab"
        sx={{ color: COLORS.text.primary }}
      >
        {activeTab === 3 && (
          <Grid container spacing={4}>
            {/* Notification Preferences */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Notification Preferences
                  </Typography>
                  <FormGroup>
                    {[
                      "Therapy appointment reminders",
                      "Daily check-in prompts",
                      "Milestone celebrations",
                      "Support group updates",
                      "Academic calendar events"
                    ].map((setting, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Switch defaultChecked color="primary" />}
                        label={setting}
                        sx={{ height: '48px' }}
                      />
                    ))}
                  </FormGroup>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Emergency Contacts */}
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Emergency Contacts for Academic Crisis
                  </Typography>
                  <Box mb={2}>
                    <SupportContacts contacts={mockData.supportContacts} />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ minHeight: '48px' }}
                  >
                    Add New Contact
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Privacy Settings */}
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Privacy & Language Settings
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="rgba(83, 109, 254, 0.05)" borderRadius={2} mb={2}>
                    <Typography variant="body1">Data Sharing with Counselors</Typography>
                    <Switch defaultChecked color="primary" />
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="rgba(83, 109, 254, 0.05)" borderRadius={2} mb={2}>
                    <Typography variant="body1">Anonymous Progress Reports</Typography>
                    <Switch defaultChecked color="primary" />
                  </Box>
                  <TextField
                    select
                    label="Language / Lugha"
                    defaultValue="english"
                    fullWidth
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="luganda">Luganda</MenuItem>
                    <MenuItem value="swahili">Swahili</MenuItem>
                  </TextField>
                  <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                    Your data is protected under Uganda's Data Protection Act
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
      
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
      
      {/* Recent Activities */}
      <Grid container spacing={4} style={{ marginTop: 32 }}>
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