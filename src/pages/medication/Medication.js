import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  IconButton,
  Divider
} from "@mui/material";
import {
  LocalHospital as MedicationIcon,
  Notifications as NotificationsIcon,
  CheckCircle as CheckCircleIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

// Components
import PageTitle from "../../components/PageTitle";

// Styles
import useStyles from "./styles";

// Language Context
import { useLanguage } from "../../context/LanguageContext";

// Mock data - Keep minimal for conciseness
const mockMedications = [
  { id: 1, name: "Buprenorphine", dosage: "8mg", frequency: "Daily", instructions: "Take with water in the morning", forAcademics: true },
  { id: 2, name: "Naltrexone", dosage: "50mg", frequency: "Daily", instructions: "Take after meals", forAcademics: false }
];

const mockReminders = [
  { id: 1, medicationId: 1, time: "08:00", repeat: "daily", notificationType: "SMS" },
  { id: 2, medicationId: 2, time: "20:00", repeat: "daily", notificationType: "Email" }
];

const mockAdherence = [
  { id: 1, medicationId: 1, date: "2023-05-01", taken: true },
  { id: 2, medicationId: 1, date: "2023-05-02", taken: true },
  { id: 3, medicationId: 1, date: "2023-05-03", taken: false },
  { id: 4, medicationId: 2, date: "2023-05-01", taken: true },
  { id: 5, medicationId: 2, date: "2023-05-02", taken: false }
];

// TabPanel component for tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`medication-tabpanel-${index}`}
      aria-labelledby={`medication-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function Medication() {
  const classes = useStyles();
  
  // Language context
  const { currentLang } = useLanguage();
  
  // Translations
  const translations = {
    en: {
      pageTitle: "Medication at CoCIS at Makerere University",
      pageSubtitle: "Manage your medications, set reminders, and track adherence to support your recovery and academic success",
      tabMedications: "My Medications",
      tabReminders: "Set Reminders",
      tabAdherence: "Track Adherence",
      medicationName: "Medication Name",
      dosage: "Dosage",
      frequency: "Frequency",
      instructions: "Instructions",
      academicSupport: "Supports Academic Focus",
      addMedication: "Add Medication",
      editMedication: "Edit Medication",
      deleteMedication: "Delete Medication",
      medicationTime: "Reminder Time",
      repeatOption: "Repeat",
      notificationType: "Notification Type",
      addReminder: "Add Reminder",
      adherenceRate: "Adherence Rate",
      logAdherence: "Log Today's Medication",
      taken: "Taken",
      missed: "Missed",
      date: "Date",
      status: "Status",
      adherenceLog: "Adherence Log",
      saveChanges: "Save Changes",
      cancel: "Cancel",
      successMessage: "Changes saved successfully",
      errorMessage: "Error saving changes",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      sms: "SMS",
      email: "Email",
      app: "App Notification",
      selectMedication: "Select Medication",
      addAdherence: "Add Adherence Record",
      adherenceAnalytics: "Adherence Analytics for Academic Success",
      academicImpact: "Academic Impact"
    },
    lg: {
      pageTitle: "Eddagala ku CoCIS ku Yunivasite ya Makerere",
      pageSubtitle: "Tegeka eddagala lyo, ssettinnga za kujiukiza, era goberera enkozesa y'eddagala okuyamba okuwona kwo n'okuyiga",
      tabMedications: "Eddagala Lyange",
      tabReminders: "Ssetinga Okupulika",
      tabAdherence: "Goberera Enkozesa",
      medicationName: "Erinnya ly'Eddagala",
      dosage: "Ebipimo",
      frequency: "Emirundi",
      instructions: "Ebiragiro",
      academicSupport: "Kiyamba mu Kwegera Okusoma",
      addMedication: "Yongerako Eddagala",
      editMedication: "Kyusa Eddagala",
      deleteMedication: "Gyawo Eddagala",
      medicationTime: "Obudde bw'Okujjukiza",
      repeatOption: "Ddamu",
      notificationType: "Engeri y'Okulabula",
      addReminder: "Yongerako Okujjukiza",
      adherenceRate: "Ebipimo by'Okugobelerera",
      logAdherence: "Wandiika Eddagala ly'Olwaleero",
      taken: "Liddwaako",
      missed: "Liviiridwako",
      date: "Ennaku",
      status: "Embeera",
      adherenceLog: "Olukalala lw'Okugobelerera",
      saveChanges: "Kaza Enkyukakyuka",
      cancel: "Sazaamu",
      successMessage: "Enkyukakyuka ziterekeddwa bulungi",
      errorMessage: "Waliwo kiremye mu kutereka enkyukakyuka",
      daily: "Buli Lunaku",
      weekly: "Buli Wiiki",
      monthly: "Buli Mwezi",
      sms: "SMS",
      email: "Email",
      app: "Okulabula kw'App",
      selectMedication: "Londa Eddagala",
      addAdherence: "Yongerako Okugobelerera",
      adherenceAnalytics: "Okuvumbula Okugobererera okw'Okuyamba Okusoma",
      academicImpact: "Engeri gy'Ekosa Okusoma"
    },
    sw: {
      pageTitle: "Dawa katika CoCIS katika Chuo Kikuu cha Makerere",
      pageSubtitle: "Simamia dawa zako, weka vikumbusho, na ufuatilie uzingatiaji ili kusaidia ahueni yako na mafanikio ya kitaaluma",
      tabMedications: "Dawa Zangu",
      tabReminders: "Weka Vikumbusho",
      tabAdherence: "Fuatilia Uzingatiaji",
      medicationName: "Jina la Dawa",
      dosage: "Kipimo",
      frequency: "Mzunguko",
      instructions: "Maagizo",
      academicSupport: "Inasaidia Mkazo wa Kitaaluma",
      addMedication: "Ongeza Dawa",
      editMedication: "Hariri Dawa",
      deleteMedication: "Futa Dawa",
      medicationTime: "Wakati wa Kikumbusho",
      repeatOption: "Rudia",
      notificationType: "Aina ya Arifa",
      addReminder: "Ongeza Kikumbusho",
      adherenceRate: "Kiwango cha Uzingatiaji",
      logAdherence: "Rekodi Dawa ya Leo",
      taken: "Imechukuliwa",
      missed: "Imekosekana",
      date: "Tarehe",
      status: "Hali",
      adherenceLog: "Kumbukumbu ya Uzingatiaji",
      saveChanges: "Hifadhi Mabadiliko",
      cancel: "Ghairi",
      successMessage: "Mabadiliko yamehifadhiwa kwa mafanikio",
      errorMessage: "Hitilafu katika kuhifadhi mabadiliko",
      daily: "Kila Siku",
      weekly: "Kila Wiki",
      monthly: "Kila Mwezi",
      sms: "SMS",
      email: "Barua pepe",
      app: "Arifa ya Programu",
      selectMedication: "Chagua Dawa",
      addAdherence: "Ongeza Rekodi ya Uzingatiaji",
      adherenceAnalytics: "Uchambuzi wa Uzingatiaji kwa Mafanikio ya Kitaaluma",
      academicImpact: "Athari za Kitaaluma"
    }
  };
  
  // Get correct translations based on language
  const t = translations[currentLang] || translations.en;
  
  // State management
  const [activeTab, setActiveTab] = useState(0);
  const [medications, setMedications] = useState(mockMedications);
  const [reminders, setReminders] = useState(mockReminders);
  const [adherenceLog, setAdherenceLog] = useState(mockAdherence);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  
  // Form state
  const [medicationForm, setMedicationForm] = useState({
    name: "",
    dosage: "",
    frequency: "daily",
    instructions: "",
    forAcademics: false
  });
  
  const [reminderForm, setReminderForm] = useState({
    medicationId: "",
    time: "08:00",
    repeat: "daily",
    notificationType: "SMS"
  });
  
  const [adherenceForm, setAdherenceForm] = useState({
    medicationId: "",
    date: new Date().toISOString().split("T")[0],
    taken: true
  });
  
  // Calculate adherence rate
  const calculateAdherenceRate = (medicationId) => {
    const relevantLogs = adherenceLog.filter(log => log.medicationId === medicationId);
    if (relevantLogs.length === 0) return 0;
    
    const takenCount = relevantLogs.filter(log => log.taken).length;
    return Math.round((takenCount / relevantLogs.length) * 100);
  };
  
  // Calculate overall adherence
  const overallAdherence = adherenceLog.length > 0
    ? Math.round((adherenceLog.filter(log => log.taken).length / adherenceLog.length) * 100)
    : 0;
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  // Handle medication form change
  const handleMedicationFormChange = (e) => {
    const { name, value, checked } = e.target;
    setMedicationForm(prev => ({
      ...prev,
      [name]: name === "forAcademics" ? checked : value
    }));
  };
  
  // Handle reminder form change
  const handleReminderFormChange = (e) => {
    const { name, value } = e.target;
    setReminderForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle adherence form change
  const handleAdherenceFormChange = (e) => {
    const { name, value, checked } = e.target;
    setAdherenceForm(prev => ({
      ...prev,
      [name]: name === "taken" ? checked : value
    }));
  };
  
  // Handle medication submit
  const handleMedicationSubmit = (e) => {
    e.preventDefault();
    const newMedication = {
      id: medications.length > 0 ? Math.max(...medications.map(m => m.id)) + 1 : 1,
      ...medicationForm
    };
    
    setMedications(prev => [...prev, newMedication]);
    setMedicationForm({
      name: "",
      dosage: "",
      frequency: "daily",
      instructions: "",
      forAcademics: false
    });
    
    // Add analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'medication_added',
        medication_name: newMedication.name,
        academic_support: newMedication.forAcademics
      });
    }
    
    setSnackbar({
      open: true,
      message: t.successMessage,
      severity: "success"
    });
  };
  
  // Handle reminder submit
  const handleReminderSubmit = (e) => {
    e.preventDefault();
    const newReminder = {
      id: reminders.length > 0 ? Math.max(...reminders.map(r => r.id)) + 1 : 1,
      ...reminderForm
    };
    
    setReminders(prev => [...prev, newReminder]);
    setReminderForm({
      medicationId: "",
      time: "08:00",
      repeat: "daily",
      notificationType: "SMS"
    });
    
    // Add analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'reminder_added',
        medication_id: newReminder.medicationId,
        reminder_type: newReminder.notificationType
      });
    }
    
    setSnackbar({
      open: true,
      message: t.successMessage,
      severity: "success"
    });
  };
  
  // Handle adherence submit
  const handleAdherenceSubmit = (e) => {
    e.preventDefault();
    const newAdherence = {
      id: adherenceLog.length > 0 ? Math.max(...adherenceLog.map(a => a.id)) + 1 : 1,
      ...adherenceForm
    };
    
    setAdherenceLog(prev => [...prev, newAdherence]);
    setAdherenceForm({
      medicationId: "",
      date: new Date().toISOString().split("T")[0],
      taken: true
    });
    
    // Add analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'adherence_logged',
        medication_id: newAdherence.medicationId,
        adherence_status: newAdherence.taken ? 'taken' : 'missed'
      });
    }
    
    setSnackbar({
      open: true,
      message: t.successMessage,
      severity: "success"
    });
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  return (
    <div className={classes.pageContainer}>
      <PageTitle title={t.pageTitle} />
      <Typography variant="subtitle1" className={classes.sectionSubtitle}>
        {t.pageSubtitle}
      </Typography>
      
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        className={classes.tabsRoot}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="Medication Management Tabs"
      >
        <Tab 
          icon={<MedicationIcon style={{ fontSize: 48, color: "#ef5350" }} />} 
          label={t.tabMedications} 
          id="medication-tab-0"
          aria-controls="medication-tabpanel-0"
          className={classes.tabRoot}
        />
        <Tab 
          icon={<NotificationsIcon style={{ fontSize: 48, color: "#2196f3" }} />} 
          label={t.tabReminders} 
          id="medication-tab-1"
          aria-controls="medication-tabpanel-1"
          className={classes.tabRoot}
        />
        <Tab 
          icon={<CheckCircleIcon style={{ fontSize: 48, color: "#3CD4A0" }} />} 
          label={t.tabAdherence} 
          id="medication-tab-2"
          aria-controls="medication-tabpanel-2"
          className={classes.tabRoot}
        />
      </Tabs>
      
      {/* My Medications Tab */}
      <TabPanel value={activeTab} index={0}>
        <Grid container spacing={3}>
          {/* Current Medications */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  <MedicationIcon className={classes.largeIcon} style={{ color: "#ef5350" }} />
                  {t.tabMedications}
                </Typography>
                
                <List>
                  {medications.map((medication) => (
                    <Paper key={medication.id} className={classes.medicationItem}>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h6">
                              {medication.name} - {medication.dosage}
                              {medication.forAcademics && (
                                <Box component="span" ml={1}>
                                  <SchoolIcon style={{ color: "#2196f3" }} />
                                </Box>
                              )}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography variant="body2">
                                {t.frequency}: {medication.frequency}
                              </Typography>
                              <Typography variant="body2">
                                {t.instructions}: {medication.instructions}
                              </Typography>
                            </>
                          }
                        />
                        <IconButton aria-label={t.editMedication}>
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label={t.deleteMedication}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    </Paper>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Add Medication Form */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.addMedication}
                </Typography>
                
                <form onSubmit={handleMedicationSubmit} className={classes.form}>
                  <TextField
                    label={t.medicationName}
                    name="name"
                    value={medicationForm.name}
                    onChange={handleMedicationFormChange}
                    fullWidth
                    required
                    className={classes.textField}
                    inputProps={{ minLength: 2 }}
                  />
                  
                  <TextField
                    label={t.dosage}
                    name="dosage"
                    value={medicationForm.dosage}
                    onChange={handleMedicationFormChange}
                    fullWidth
                    required
                    className={classes.textField}
                  />
                  
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="frequency-label">{t.frequency}</InputLabel>
                    <Select
                      labelId="frequency-label"
                      name="frequency"
                      value={medicationForm.frequency}
                      onChange={handleMedicationFormChange}
                      required
                    >
                      <MenuItem value="daily">{t.daily}</MenuItem>
                      <MenuItem value="weekly">{t.weekly}</MenuItem>
                      <MenuItem value="monthly">{t.monthly}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    label={t.instructions}
                    name="instructions"
                    value={medicationForm.instructions}
                    onChange={handleMedicationFormChange}
                    fullWidth
                    multiline
                    rows={2}
                    className={classes.textField}
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={medicationForm.forAcademics}
                        onChange={handleMedicationFormChange}
                        name="forAcademics"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body1">
                        {t.academicSupport} <SchoolIcon style={{ fontSize: 16, color: "#2196f3" }} />
                      </Typography>
                    }
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    style={{ backgroundColor: "#ef5350" }}
                  >
                    {t.addMedication}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Set Reminders Tab */}
      <TabPanel value={activeTab} index={1}>
        <Grid container spacing={3}>
          {/* Current Reminders */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  <NotificationsIcon className={classes.largeIcon} style={{ color: "#2196f3" }} />
                  {t.tabReminders}
                </Typography>
                
                <List>
                  {reminders.map((reminder) => {
                    const medication = medications.find(m => m.id === parseInt(reminder.medicationId));
                    
                    return (
                      <Paper key={reminder.id} className={classes.reminderItem}>
                        <ListItem>
                          <ListItemText
                            primary={
                              <Typography variant="h6">
                                {medication ? medication.name : 'Unknown'} - {reminder.time}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography variant="body2">
                                  {t.repeatOption}: {reminder.repeat}
                                </Typography>
                                <Typography variant="body2">
                                  {t.notificationType}: {reminder.notificationType}
                                </Typography>
                              </>
                            }
                          />
                          <IconButton aria-label={t.editMedication}>
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label={t.deleteMedication}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItem>
                      </Paper>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Add Reminder Form */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.addReminder}
                </Typography>
                
                <form onSubmit={handleReminderSubmit} className={classes.form}>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="medication-select-label">{t.selectMedication}</InputLabel>
                    <Select
                      labelId="medication-select-label"
                      name="medicationId"
                      value={reminderForm.medicationId}
                      onChange={handleReminderFormChange}
                      required
                    >
                      {medications.map((medication) => (
                        <MenuItem key={medication.id} value={medication.id}>
                          {medication.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <TextField
                    label={t.medicationTime}
                    name="time"
                    type="time"
                    value={reminderForm.time}
                    onChange={handleReminderFormChange}
                    fullWidth
                    required
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                  />
                  
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="repeat-label">{t.repeatOption}</InputLabel>
                    <Select
                      labelId="repeat-label"
                      name="repeat"
                      value={reminderForm.repeat}
                      onChange={handleReminderFormChange}
                      required
                    >
                      <MenuItem value="daily">{t.daily}</MenuItem>
                      <MenuItem value="weekly">{t.weekly}</MenuItem>
                      <MenuItem value="monthly">{t.monthly}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="notification-type-label">{t.notificationType}</InputLabel>
                    <Select
                      labelId="notification-type-label"
                      name="notificationType"
                      value={reminderForm.notificationType}
                      onChange={handleReminderFormChange}
                      required
                    >
                      <MenuItem value="SMS">{t.sms}</MenuItem>
                      <MenuItem value="Email">{t.email}</MenuItem>
                      <MenuItem value="App">{t.app}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    style={{ backgroundColor: "#2196f3" }}
                  >
                    {t.addReminder}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Track Adherence Tab */}
      <TabPanel value={activeTab} index={2}>
        <Grid container spacing={3}>
          {/* Adherence Overview */}
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  <CheckCircleIcon className={classes.largeIcon} style={{ color: "#3CD4A0" }} />
                  {t.adherenceRate}
                </Typography>
                
                <Box className={classes.progressContainer}>
                  <Typography variant="body1" className={classes.progressLabel}>
                    {t.adherenceRate}: {overallAdherence}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={overallAdherence}
                    className={classes.progressBar}
                    style={{ 
                      backgroundColor: "#e0e0e0",
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: overallAdherence >= 80 ? "#3CD4A0" : 
                          overallAdherence >= 50 ? "#FFC107" : "#ef5350"
                      }
                    }}
                  />
                </Box>
                
                <Divider style={{ margin: "16px 0" }} />
                
                <Typography variant="h6" className={classes.sectionSubtitle}>
                  {t.adherenceAnalytics}
                </Typography>
                
                <Grid container spacing={2}>
                  {medications.map((medication) => {
                    const adherenceRate = calculateAdherenceRate(medication.id);
                    
                    return (
                      <Grid item xs={12} sm={6} key={medication.id}>
                        <Paper className={classes.adherenceItem}>
                          <Typography variant="subtitle1">
                            {medication.name}
                            {medication.forAcademics && (
                              <Box component="span" ml={1}>
                                <SchoolIcon style={{ color: "#2196f3" }} />
                              </Box>
                            )}
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={adherenceRate}
                            className={classes.progressBar}
                            style={{ 
                              backgroundColor: "#e0e0e0",
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: adherenceRate >= 80 ? "#3CD4A0" : 
                                  adherenceRate >= 50 ? "#FFC107" : "#ef5350"
                              }
                            }}
                          />
                          <Typography variant="body2" style={{ marginTop: 8 }}>
                            {adherenceRate}% {t.adherenceRate}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Log Adherence */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.logAdherence}
                </Typography>
                
                <form onSubmit={handleAdherenceSubmit} className={classes.form}>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel id="medication-log-label">{t.selectMedication}</InputLabel>
                    <Select
                      labelId="medication-log-label"
                      name="medicationId"
                      value={adherenceForm.medicationId}
                      onChange={handleAdherenceFormChange}
                      required
                    >
                      {medications.map((medication) => (
                        <MenuItem key={medication.id} value={medication.id}>
                          {medication.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <TextField
                    label={t.date}
                    name="date"
                    type="date"
                    value={adherenceForm.date}
                    onChange={handleAdherenceFormChange}
                    fullWidth
                    required
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={adherenceForm.taken}
                        onChange={handleAdherenceFormChange}
                        name="taken"
                        color="success"
                      />
                    }
                    label={
                      <Typography variant="body1">
                        {t.taken}
                      </Typography>
                    }
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    style={{ backgroundColor: "#3CD4A0", color: "white" }}
                  >
                    {t.addAdherence}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Adherence Log */}
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  {t.adherenceLog}
                </Typography>
                
                <List>
                  {adherenceLog.slice(0, 5).map((log) => {
                    const medication = medications.find(m => m.id === parseInt(log.medicationId));
                    
                    return (
                      <Paper key={log.id} className={classes.adherenceItem}>
                        <ListItem>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle1">
                                {medication ? medication.name : 'Unknown'}
                              </Typography>
                            }
                            secondary={
                              <Typography variant="body2">
                                {log.date} - {log.taken ? t.taken : t.missed}
                              </Typography>
                            }
                          />
                          <Checkbox
                            checked={log.taken}
                            disabled
                            color="success"
                          />
                        </ListItem>
                      </Paper>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
} 