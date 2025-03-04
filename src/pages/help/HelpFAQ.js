import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Link as MuiLink,
  Snackbar,
  Alert
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  QuestionAnswer as QuestionAnswerIcon,
  YouTube as YouTubeIcon,
  Article as ArticleIcon,
  Link as LinkIcon,
  Call as CallIcon,
  Email as EmailIcon,
  Feedback as FeedbackIcon,
  SupportAgent as SupportAgentIcon
} from "@mui/icons-material";

// Components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

// Styles
import useStyles from "./styles";

// Language context
import { useLanguage } from '../../context/LanguageContext';

// Tab panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`help-tabpanel-${index}`}
      aria-labelledby={`help-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

// Main component
export default function HelpFAQ() {
  const classes = useStyles();
  const { t, language } = useLanguage();
  
  // State
  const [tabValue, setValue] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [contactForm, setContactForm] = useState({
    issue: "",
    description: "",
    contactMethod: "email",
    urgency: "normal"
  });

  // Translations
  const translations = {
    en: {
      pageTitle: "Help & FAQ at CoCIS at Makerere University",
      pageDescription: "Find answers to common questions and get help with the addiction recovery system",
      faqTab: "Frequently Asked Questions",
      resourcesTab: "Help Resources",
      contactTab: "Contact Support",
      feedbackTab: "Provide Feedback",
      
      // FAQ Categories
      generalCategory: "General Questions",
      accountCategory: "Account & Privacy",
      recoveryCategory: "Recovery Process",
      technicalCategory: "Technical Issues",
      
      // General FAQs
      faq1Question: "How do I report a crisis?",
      faq1Answer: "To report a crisis, navigate to the Emergency SOS section in the sidebar. You can submit a crisis report or call the 24/7 helpline at 0800-624-456.",
      
      faq2Question: "What is the relapse prevention strategy at CoCIS?",
      faq2Answer: "The relapse prevention strategy at CoCIS combines academic support, counseling, peer groups, and digital tracking tools. Your dashboard shows personalized strategies based on your recovery journey.",
      
      faq3Question: "How can I access academic support?",
      faq3Answer: "Academic support is integrated into your recovery dashboard. You can view study plans, access tutoring resources, and request accommodations through the Community Support section.",
      
      // Account FAQs
      faq4Question: "How is my data kept confidential?",
      faq4Answer: "Your data is encrypted and access is restricted to authorized personnel only. You can manage your privacy settings in the Profile section and choose what information to share.",
      
      faq5Question: "Can counselors see all my information?",
      faq5Answer: "Counselors can only see information you've explicitly authorized in your privacy settings. Emergency information is accessible to emergency responders.",
      
      // Resources
      resourcesTitle: "Resources For Recovery",
      resourcesDescription: "Access guides, articles, and videos to support your recovery journey",
      
      article1Title: "Understanding Addiction at Makerere",
      article1Description: "An in-depth guide to addiction challenges specific to university students",
      
      article2Title: "Recovery Tips for Students",
      article2Description: "Practical strategies for balancing recovery with academic responsibilities",
      
      video1Title: "Stress Management Techniques",
      video1Description: "Video guide for managing stress during exam periods",
      
      video2Title: "Peer Support Introduction",
      video2Description: "How to get the most from CoCIS peer support groups",
      
      link1Title: "Makerere University Counseling Services",
      link1Description: "Official university mental health and addiction services",
      
      link2Title: "CoCIS Recovery Guides",
      link2Description: "Comprehensive recovery materials for CoCIS students",
      
      // Contact
      contactTitle: "Contact Support Team",
      contactDescription: "Get help with any questions or technical issues",
      contactPhone: "0800-624-456",
      contactEmail: "help@mak.ac.ug",
      contactAvailability: "24/7 Student Support",
      contactButtonLabel: "Contact Now",
      
      issueLabel: "Issue Type",
      issueGeneral: "General Question",
      issueTechnical: "Technical Problem",
      issueAccount: "Account Issue",
      issueRecovery: "Recovery Support",
      
      descriptionLabel: "Issue Description",
      descriptionPlaceholder: "Please describe your issue or question",
      
      contactMethodLabel: "Preferred Contact Method",
      contactMethodEmail: "Email",
      contactMethodPhone: "Phone Call",
      contactMethodText: "Text Message",
      
      urgencyLabel: "Urgency Level",
      urgencyLow: "Low - General Question",
      urgencyNormal: "Normal - Need Help Soon",
      urgencyHigh: "High - Urgent Issue",
      urgencyEmergency: "Emergency - Immediate Help",
      
      submitButton: "Submit Help Request",
      submittedMessage: "Your help request has been submitted. We'll contact you shortly.",
      
      // Feedback
      feedbackTitle: "Provide Feedback",
      feedbackDescription: "Help us improve the recovery system with your feedback",
      feedbackPlaceholder: "Your feedback about the system...",
      feedbackRating: "Overall Rating",
      feedbackButton: "Submit Feedback",
      feedbackSubmitted: "Thank you for your feedback! It helps us improve the system.",
    },
    lg: {
      pageTitle: "Obuyambi n'Ebibuuzo ku CoCIS ku Yunivasite ya Makerere",
      pageDescription: "Zula okuddamu kw'ebibuuzo ebya bulijjo era ofune obuyambi ku nkola y'okuwona okuva ku biragalalagala",
      faqTab: "Ebibuuzo Ebibuzibwa Ennyo",
      resourcesTab: "Ensibuko z'Obuyambi",
      contactTab: "Tuukirira Obuyambi",
      feedbackTab: "Wa Endowooza",
      
      // FAQ Categories
      generalCategory: "Ebibuuzo Ebyawamu",
      accountCategory: "Akawunti n'Obukuumi",
      recoveryCategory: "Enkola y'Okuwona",
      technicalCategory: "Ebizibu bya Tekinologiya",
      
      // General FAQs
      faq1Question: "Ntegeeza ntya embeera embi?",
      faq1Answer: "Okutegeeza embeera embi, genda mu kitundu ky'Obuyambi Obwangu mu kadirisa k'oku mabbali. Oyinza okuweereza alipoota y'embeera embi oba okukuba essimu ku lunyiriri lw'obuyambi olw'essaawa 24 ku 0800-624-456.",
      
      faq2Question: "Kakodyo ki akalina CoCIS ak'okuziyiza okudda mu kunywa?",
      faq2Answer: "Kakodyo ka CoCIS akalina okuziyiza okudda mu kunywa kegatta obuyambi bw'okusoma, okubuulirirwa, ebibinja bya banno, n'ebikozesebwa eby'oku kompyuta. Dashboard yo eraga enkola ezikoledwa okusinziira ku lugendo lwo olw'okuwona.",

      // Resources
      resourcesTitle: "Ebikozesebwa By'Okuwona",
      resourcesDescription: "Kuba ku biyamba, ebiwandiiko, ne vidiyo okuyamba mu lugendo lwo olw'okuwona",
      
      // Contact
      contactTitle: "Tuukirira Ekibinja ky'Obuyambi",
      contactDescription: "Funa obuyambi ku bibuuzo byonna oba ebizibu by'ebyatekinologiya",
      contactPhone: "0800-624-456",
      contactEmail: "help@mak.ac.ug",
      contactAvailability: "Obuyambi bw'Abayizi Essaawa 24",
      contactButtonLabel: "Tuukirira Kati",
    },
    sw: {
      pageTitle: "Msaada na Maswali ya Mara kwa Mara katika CoCIS katika Chuo Kikuu cha Makerere",
      pageDescription: "Pata majibu ya maswali ya kawaida na msaada na mfumo wa ahueni ya uraibu",
      faqTab: "Maswali Yanayoulizwa Mara kwa Mara",
      resourcesTab: "Rasilimali za Msaada",
      contactTab: "Wasiliana na Msaada",
      feedbackTab: "Toa Maoni",
      
      // FAQ Categories
      generalCategory: "Maswali ya Jumla",
      accountCategory: "Akaunti na Faragha",
      recoveryCategory: "Mchakato wa Ahueni",
      technicalCategory: "Masuala ya Kiufundi",
      
      // General FAQs
      faq1Question: "Ni vipi ninaripoti dharura?",
      faq1Answer: "Kuripoti dharura, nenda kwenye sehemu ya Dharura SOS katika upau wa pembeni. Unaweza kuwasilisha ripoti ya dharura au piga simu kwa laini ya msaada ya saa 24 kwenye 0800-624-456.",

      // Resources
      resourcesTitle: "Rasilimali za Ahueni",
      resourcesDescription: "Fikia miongozo, makala, na video za kuunga mkono safari yako ya ahueni",
      
      // Contact
      contactTitle: "Wasiliana na Timu ya Msaada",
      contactDescription: "Pata msaada kwa maswali yoyote au masuala ya kiufundi",
      contactPhone: "0800-624-456",
      contactEmail: "help@mak.ac.ug",
      contactAvailability: "Msaada wa Wanafunzi wa Saa 24",
      contactButtonLabel: "Wasiliana Sasa",
    }
  };
  
  // Get current translation
  const tr = translations[language] || translations.en;
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // Track in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'help_tab_change',
        tab_selected: newValue === 0 ? 'faq' : newValue === 1 ? 'resources' : newValue === 2 ? 'contact' : 'feedback'
      });
    }
  };
  
  // Handle contact form change
  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle contact form submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // Log for development
    console.log("Contact form submitted:", contactForm);
    
    // Track in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'help_contact_submit',
        issue_type: contactForm.issue,
        contact_method: contactForm.contactMethod,
        urgency: contactForm.urgency
      });
    }
    
    // Show success message
    setSnackbar({
      open: true,
      message: tr.submittedMessage || "Your help request has been submitted. We'll contact you shortly.",
      severity: "success"
    });
    
    // Reset form
    setContactForm({
      issue: "",
      description: "",
      contactMethod: "email",
      urgency: "normal"
    });
  };
  
  // Handle feedback submit
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: tr.feedbackSubmitted || "Thank you for your feedback! It helps us improve the system.",
      severity: "success"
    });
  };
  
  // Close snackbar
  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <div className={classes.pageContainer}>
      <PageTitle title={tr.pageTitle} subtitle={tr.pageDescription} />
      
      {/* Tabs for different help sections */}
      <Paper className={classes.paper}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          className={classes.tabs}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Help and FAQ tabs"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab 
            icon={<QuestionAnswerIcon />} 
            label={tr.faqTab} 
            id="help-tab-0"
            aria-controls="help-tabpanel-0"
          />
          <Tab 
            icon={<ArticleIcon />} 
            label={tr.resourcesTab} 
            id="help-tab-1"
            aria-controls="help-tabpanel-1"
          />
          <Tab 
            icon={<SupportAgentIcon />} 
            label={tr.contactTab} 
            id="help-tab-2"
            aria-controls="help-tabpanel-2"
          />
          <Tab 
            icon={<FeedbackIcon />} 
            label={tr.feedbackTab} 
            id="help-tab-3"
            aria-controls="help-tabpanel-3"
          />
        </Tabs>
        
        {/* FAQ Section */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {tr.faqTab}
          </Typography>
          
          {/* General Questions */}
          <div className={classes.faqCategory}>
            <Typography variant="h6" gutterBottom>
              {tr.generalCategory}
            </Typography>
            
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq1-content"
                id="faq1-header"
                className={classes.accordionSummary}
              >
                <Typography>{tr.faq1Question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{tr.faq1Answer}</Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq2-content"
                id="faq2-header"
                className={classes.accordionSummary}
              >
                <Typography>{tr.faq2Question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{tr.faq2Answer}</Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq3-content"
                id="faq3-header"
                className={classes.accordionSummary}
              >
                <Typography>{tr.faq3Question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{tr.faq3Answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          
          {/* Account & Privacy */}
          <div className={classes.faqCategory}>
            <Typography variant="h6" gutterBottom>
              {tr.accountCategory}
            </Typography>
            
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq4-content"
                id="faq4-header"
                className={classes.accordionSummary}
              >
                <Typography>{tr.faq4Question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{tr.faq4Answer}</Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq5-content"
                id="faq5-header"
                className={classes.accordionSummary}
              >
                <Typography>{tr.faq5Question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{tr.faq5Answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </TabPanel>
        
        {/* Resources Section */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {tr.resourcesTitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {tr.resourcesDescription}
          </Typography>
          
          <Grid container spacing={3}>
            {/* Articles */}
            <Grid item xs={12} md={6}>
              <Widget title="Articles" disableWidgetMenu>
                <div className={classes.resourceItem}>
                  <ArticleIcon className={`${classes.boxIcon} ${classes.articleIcon}`} />
                  <div className={classes.resourceContent}>
                    <Typography variant="h6" className={classes.resourceTitle}>
                      {tr.article1Title}
                    </Typography>
                    <Typography className={classes.resourceDescription}>
                      {tr.article1Description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className={classes.resourceLink}
                      onClick={() => {
                        if (window.dataLayer) {
                          window.dataLayer.push({
                            event: 'resource_access',
                            resource_type: 'article',
                            resource_title: tr.article1Title
                          });
                        }
                      }}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
                
                <div className={classes.resourceItem}>
                  <ArticleIcon className={`${classes.boxIcon} ${classes.articleIcon}`} />
                  <div className={classes.resourceContent}>
                    <Typography variant="h6" className={classes.resourceTitle}>
                      {tr.article2Title}
                    </Typography>
                    <Typography className={classes.resourceDescription}>
                      {tr.article2Description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className={classes.resourceLink}
                      onClick={() => {
                        if (window.dataLayer) {
                          window.dataLayer.push({
                            event: 'resource_access',
                            resource_type: 'article',
                            resource_title: tr.article2Title
                          });
                        }
                      }}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              </Widget>
            </Grid>
            
            {/* Videos */}
            <Grid item xs={12} md={6}>
              <Widget title="Videos" disableWidgetMenu>
                <div className={classes.resourceItem}>
                  <YouTubeIcon className={`${classes.boxIcon} ${classes.videoIcon}`} />
                  <div className={classes.resourceContent}>
                    <Typography variant="h6" className={classes.resourceTitle}>
                      {tr.video1Title}
                    </Typography>
                    <Typography className={classes.resourceDescription}>
                      {tr.video1Description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className={classes.resourceLink}
                      onClick={() => {
                        if (window.dataLayer) {
                          window.dataLayer.push({
                            event: 'resource_access',
                            resource_type: 'video',
                            resource_title: tr.video1Title
                          });
                        }
                      }}
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
                
                <div className={classes.resourceItem}>
                  <YouTubeIcon className={`${classes.boxIcon} ${classes.videoIcon}`} />
                  <div className={classes.resourceContent}>
                    <Typography variant="h6" className={classes.resourceTitle}>
                      {tr.video2Title}
                    </Typography>
                    <Typography className={classes.resourceDescription}>
                      {tr.video2Description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className={classes.resourceLink}
                      onClick={() => {
                        if (window.dataLayer) {
                          window.dataLayer.push({
                            event: 'resource_access',
                            resource_type: 'video',
                            resource_title: tr.video2Title
                          });
                        }
                      }}
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Widget>
            </Grid>
            
            {/* Links */}
            <Grid item xs={12}>
              <Widget title="External Resources" disableWidgetMenu>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <div className={classes.resourceItem}>
                      <LinkIcon className={`${classes.boxIcon} ${classes.linkIcon}`} />
                      <div className={classes.resourceContent}>
                        <Typography variant="h6" className={classes.resourceTitle}>
                          {tr.link1Title}
                        </Typography>
                        <Typography className={classes.resourceDescription}>
                          {tr.link1Description}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          className={classes.resourceLink}
                          onClick={() => {
                            if (window.dataLayer) {
                              window.dataLayer.push({
                                event: 'resource_access',
                                resource_type: 'external_link',
                                resource_title: tr.link1Title
                              });
                            }
                          }}
                        >
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.resourceItem}>
                      <LinkIcon className={`${classes.boxIcon} ${classes.linkIcon}`} />
                      <div className={classes.resourceContent}>
                        <Typography variant="h6" className={classes.resourceTitle}>
                          {tr.link2Title}
                        </Typography>
                        <Typography className={classes.resourceDescription}>
                          {tr.link2Description}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          className={classes.resourceLink}
                          onClick={() => {
                            if (window.dataLayer) {
                              window.dataLayer.push({
                                event: 'resource_access',
                                resource_type: 'external_link',
                                resource_title: tr.link2Title
                              });
                            }
                          }}
                        >
                          Access Guides
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Contact Section */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {tr.contactTitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {tr.contactDescription}
          </Typography>
          
          <Grid container spacing={3}>
            {/* Contact Cards */}
            <Grid item xs={12} md={6}>
              <div className={classes.contactCard}>
                <CallIcon className={classes.contactIcon} />
                <div>
                  <Typography variant="h6">
                    {tr.contactPhone}
                  </Typography>
                  <Typography variant="body2">
                    {tr.contactAvailability}
                  </Typography>
                </div>
              </div>
              
              <div className={classes.contactCard}>
                <EmailIcon className={classes.contactIcon} />
                <div>
                  <Typography variant="h6">
                    {tr.contactEmail}
                  </Typography>
                  <Typography variant="body2">
                    {tr.contactAvailability}
                  </Typography>
                </div>
              </div>
              
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<CallIcon />}
                  className={classes.contactButton}
                  onClick={() => {
                    if (window.dataLayer) {
                      window.dataLayer.push({
                        event: 'contact_initiate',
                        contact_method: 'phone'
                      });
                    }
                  }}
                >
                  {tr.contactButtonLabel}
                </Button>
              </Box>
            </Grid>
            
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Widget title="Submit Help Request" disableWidgetMenu>
                <form onSubmit={handleContactSubmit} className={classes.contactForm}>
                  <FormControl fullWidth variant="outlined" className={classes.formField}>
                    <InputLabel id="issue-label">{tr.issueLabel}</InputLabel>
                    <Select
                      labelId="issue-label"
                      id="issue"
                      name="issue"
                      value={contactForm.issue}
                      onChange={handleContactFormChange}
                      label={tr.issueLabel}
                      required
                    >
                      <MenuItem value="general">{tr.issueGeneral || "General Question"}</MenuItem>
                      <MenuItem value="technical">{tr.issueTechnical || "Technical Problem"}</MenuItem>
                      <MenuItem value="account">{tr.issueAccount || "Account Issue"}</MenuItem>
                      <MenuItem value="recovery">{tr.issueRecovery || "Recovery Support"}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={tr.descriptionLabel}
                    placeholder={tr.descriptionPlaceholder}
                    multiline
                    rows={4}
                    className={classes.formField}
                    name="description"
                    value={contactForm.description}
                    onChange={handleContactFormChange}
                    required
                  />
                  
                  <FormControl fullWidth variant="outlined" className={classes.formField}>
                    <InputLabel id="contact-method-label">{tr.contactMethodLabel}</InputLabel>
                    <Select
                      labelId="contact-method-label"
                      id="contactMethod"
                      name="contactMethod"
                      value={contactForm.contactMethod}
                      onChange={handleContactFormChange}
                      label={tr.contactMethodLabel}
                    >
                      <MenuItem value="email">{tr.contactMethodEmail || "Email"}</MenuItem>
                      <MenuItem value="phone">{tr.contactMethodPhone || "Phone Call"}</MenuItem>
                      <MenuItem value="text">{tr.contactMethodText || "Text Message"}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl fullWidth variant="outlined" className={classes.formField}>
                    <InputLabel id="urgency-label">{tr.urgencyLabel}</InputLabel>
                    <Select
                      labelId="urgency-label"
                      id="urgency"
                      name="urgency"
                      value={contactForm.urgency}
                      onChange={handleContactFormChange}
                      label={tr.urgencyLabel}
                    >
                      <MenuItem value="low">{tr.urgencyLow || "Low - General Question"}</MenuItem>
                      <MenuItem value="normal">{tr.urgencyNormal || "Normal - Need Help Soon"}</MenuItem>
                      <MenuItem value="high">{tr.urgencyHigh || "High - Urgent Issue"}</MenuItem>
                      <MenuItem value="emergency">{tr.urgencyEmergency || "Emergency - Immediate Help"}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    className={classes.submitButton}
                  >
                    {tr.submitButton}
                  </Button>
                </form>
              </Widget>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Feedback Section */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {tr.feedbackTitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {tr.feedbackDescription}
          </Typography>
          
          <Widget title="System Feedback" disableWidgetMenu>
            <form onSubmit={handleFeedbackSubmit} className={classes.feedbackContainer}>
              <TextField
                fullWidth
                variant="outlined"
                label={tr.feedbackTitle}
                placeholder={tr.feedbackPlaceholder}
                multiline
                rows={6}
                className={classes.formField}
                required
              />
              
              <FormControl fullWidth variant="outlined" className={classes.formField}>
                <InputLabel id="rating-label">{tr.feedbackRating}</InputLabel>
                <Select
                  labelId="rating-label"
                  id="rating"
                  label={tr.feedbackRating}
                  defaultValue="5"
                >
                  <MenuItem value="1">1 - Poor</MenuItem>
                  <MenuItem value="2">2 - Fair</MenuItem>
                  <MenuItem value="3">3 - Good</MenuItem>
                  <MenuItem value="4">4 - Very Good</MenuItem>
                  <MenuItem value="5">5 - Excellent</MenuItem>
                </Select>
              </FormControl>
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className={classes.submitButton}
              >
                {tr.feedbackButton}
              </Button>
            </form>
          </Widget>
        </TabPanel>
      </Paper>
      
      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
} 