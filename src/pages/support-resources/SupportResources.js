import React, { useState, useEffect } from "react";
import { 
  Grid, 
  Typography, 
  Paper, 
  Box,
  Container,
  Link as MuiLink,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { 
  PrivacyTip as PrivacyIcon,
  Psychology as TherapyIcon,
  Group as PeerGroupIcon,
  School as AcademicIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Call as CallIcon,
  CalendarToday as CalendarIcon,
  YouTube as YouTubeIcon,
  Article as ArticleIcon,
  Link as LinkIcon,
  School as UniversityIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Language as WebsiteIcon,
  Description as DescriptionIcon,
  PlayArrow as PlayIcon,
  Launch as LaunchIcon,
  ReportProblem,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import { useLanguage } from '../../context/LanguageContext';

// TabPanel component for tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`resources-tabpanel-${index}`}
      aria-labelledby={`resources-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="tabContent">
          {children}
        </Box>
      )}
    </div>
  );
}

// a11y props for tabs
function a11yProps(index) {
  return {
    id: `resources-tab-${index}`,
    'aria-controls': `resources-tabpanel-${index}`,
  };
}

// Support Resources page translations
const supportResourcesTranslations = {
  en: {
    pageTitle: "Recovery & Support Resources at CoCIS at Makerere University",
    pageDescription: "Access recovery materials, counseling, and support services to help you on your journey",
    privacyNotice: "Your data is confidential under Uganda's Data Protection Act 2019",
    viewPrivacySettings: "View Privacy Settings",
    tabCounselors: "Counselors",
    tabPeerSupport: "Peer Support",
    tabVideos: "Recovery Videos",
    tabArticles: "Educational Articles",
    tabUniversity: "Makerere Resources",
    tabAcademic: "Academic Support",
    counselorSection: "Find Qualified Counselors",
    peerSupportSection: "Join Peer Support Groups",
    videoSection: "Recovery Educational Videos",
    articleSection: "Recovery Articles and Guides",
    universitySection: "University Support Resources",
    academicSection: "Academic Success Resources",
    watchNow: "Watch Now",
    readMore: "Read More",
    visitResource: "Visit Resource",
    joinGroup: "Join Group",
    contactNow: "Contact Now",
    mentalHealthCounselor: {
      name: "Dr. Sarah Namuli",
      role: "Mental Health Counselor",
      phone: "+256-771-554422",
      email: "sarah.namuli@cocis.mak.ac.ug",
      availability: "Available Mon-Fri, 9am-5pm",
      location: "CoCIS Building, Room 302",
      specialization: "Anxiety, Depression, Substance Abuse Recovery"
    },
    substanceAbuseCounselor: {
      name: "Dr. John Mukisa",
      role: "Substance Recovery Specialist",
      phone: "+256-772-112233",
      email: "john.mukisa@cocis.mak.ac.ug",
      availability: "Available Tue & Thu, 10am-4pm",
      location: "Main Campus Health Center",
      specialization: "Drug Addiction Recovery, Rehabilitation Support"
    },
    peerGroups: {
      recovery: {
        name: "CoCIS Recovery Support Group",
        meetingTime: "Wednesdays at 5:00 PM",
        location: "CoCIS Building, Room 110",
        contact: "David Okello",
        phone: "+256-700-889977",
        description: "A safe space for students in recovery to share experiences and support each other"
      },
      academic: {
        name: "Academic Success in Recovery",
        meetingTime: "Mondays at 6:00 PM",
        location: "Main Library, Study Room 4",
        contact: "Faith Nassali",
        phone: "+256-701-223344",
        description: "Focused on balancing academic responsibilities with recovery goals"
      },
      women: {
        name: "Women in Recovery",
        meetingTime: "Fridays at 4:00 PM",
        location: "Women's Resource Center, Room 2",
        contact: "Grace Atim",
        phone: "+256-702-445566",
        description: "Support group specifically for women facing addiction recovery challenges"
      }
    },
    videos: [
      {
        title: "Understanding Addiction at University",
        description: "Learn about the science of addiction and how it affects student life",
        duration: "18:24",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Understanding+Addiction",
        url: "https://example.com/video1"
      },
      {
        title: "Recovery Skills for Students",
        description: "Practical strategies for maintaining recovery while studying",
        duration: "24:15",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Recovery+Skills",
        url: "https://example.com/video2"
      },
      {
        title: "Peer Support: How to Help a Friend",
        description: "Learn how to support peers struggling with substance use issues",
        duration: "15:42",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Peer+Support",
        url: "https://example.com/video3"
      },
      {
        title: "Stress Management without Substances",
        description: "Healthy alternatives for managing academic stress",
        duration: "22:08",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Stress+Management",
        url: "https://example.com/video4"
      }
    ],
    articles: [
      {
        title: "Navigating University Life in Recovery",
        description: "Tips and strategies for balancing recovery with academic responsibilities",
        author: "Dr. Patricia Nakazibwe",
        date: "March 15, 2023",
        thumbnail: "https://via.placeholder.com/320x180.png?text=University+Life",
        url: "https://example.com/article1"
      },
      {
        title: "Building a Support Network at CoCIS",
        description: "How to create a strong support system within the university community",
        author: "James Okot, Recovery Counselor",
        date: "January 22, 2023",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Support+Network",
        url: "https://example.com/article2"
      },
      {
        title: "Recovery and Academic Success: Finding Balance",
        description: "Strategies for excelling academically while maintaining recovery",
        author: "Prof. Michael Ssenabulya",
        date: "February 10, 2023",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Academic+Success",
        url: "https://example.com/article3"
      },
      {
        title: "Relapse Prevention for University Students",
        description: "Warning signs and prevention strategies specific to the academic environment",
        author: "Dr. Elizabeth Mwesigwa",
        date: "April 5, 2023",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Relapse+Prevention",
        url: "https://example.com/article4"
      }
    ],
    universityResources: [
      {
        name: "Makerere University Counseling Services",
        description: "Professional counseling services for all university students",
        contact: "+256-414-556677",
        website: "counseling.mak.ac.ug",
        location: "Main Campus, Block A"
      },
      {
        name: "Student Health Services",
        description: "Comprehensive health services including addiction medicine",
        contact: "+256-414-667788",
        website: "health.mak.ac.ug",
        location: "University Hospital"
      },
      {
        name: "Office of Disability Services",
        description: "Support for students with disabilities, including temporary accommodations during recovery",
        contact: "+256-414-778899",
        website: "disability.mak.ac.ug",
        location: "Administration Block, Ground Floor"
      }
    ],
    academicResources: {
      title: "Academic Support for Recovery",
      description: "Resources to help balance your recovery and academic responsibilities",
      resources: [
        {
          name: "Academic Accommodations",
          description: "Learn about academic accommodations available for students in recovery",
          link: "/app/academic/accommodations"
        },
        {
          name: "Tutoring Services",
          description: "Free tutoring support for CoCIS students",
          link: "/app/academic/tutoring"
        },
        {
          name: "Time Management Workshop",
          description: "Weekly workshops on managing academic responsibilities",
          link: "/app/academic/workshops"
        },
        {
          name: "Study Skills Resources",
          description: "Online resources for developing effective study habits",
          link: "/app/academic/study-skills"
        }
      ]
    }
  },
  // Add other languages here as needed
};

/**
 * SupportResources component - A unified page combining recovery support resources and educational materials
 * 
 * Features:
 * - Tab-based navigation for different resource categories
 * - Counselor contact information
 * - Peer support group details
 * - Educational videos and articles
 * - University and academic resources
 * - Accessibility features
 * - Database preparation
 */
export default function SupportResources() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();
  
  // Get language code from context
  const languageCode = t.languageCode || 'en';
  
  // Get translations for current language
  const translations = supportResourcesTranslations[languageCode] || supportResourcesTranslations.en;
  
  // State for tab value
  const [tabValue, setTabValue] = useState(0);
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    
    // Prepare for database integration
    prepareForDatabaseIntegration('tab_change', {
      previous_tab: tabValue,
      new_tab: newValue,
      timestamp: new Date().toISOString(),
      user_id: sessionStorage.getItem('user_id') || 'anonymous',
      source_page: 'support_resources'
    });
  };
  
  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const tabId = hash.substring(1);
      
      // Map hash to tab index
      const tabMap = {
        'counselors': 0,
        'peer-support': 1,
        'videos': 2,
        'articles': 3,
        'university': 4,
        'academic': 5
      };
      
      if (tabMap[tabId] !== undefined) {
        setTabValue(tabMap[tabId]);
      }
    }
  }, []);
  
  // Utility function to prepare data for database integration
  const prepareForDatabaseIntegration = (action, data) => {
    // This would connect to your database in a real implementation
    console.log(`Preparing ${action} for database integration with data:`, data);
    
    // In a real implementation, you might store this in sessionStorage or send to an API
    const dbData = {
      action,
      data,
      user_agent: navigator.userAgent,
      device_type: isMobile ? 'mobile' : 'desktop',
      screen_size: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString()
    };
    
    // Store in sessionStorage for now (would be replaced with API call in production)
    sessionStorage.setItem(`support_resources_${action}_${Date.now()}`, JSON.stringify(dbData));
    
    return dbData;
  };
  
  // Handle resource click (for analytics and database preparation)
  const handleResourceClick = (resourceType, resourceId, resourceName) => {
    prepareForDatabaseIntegration('resource_access', {
      resource_type: resourceType,
      resource_id: resourceId,
      resource_name: resourceName,
      timestamp: new Date().toISOString(),
      user_id: sessionStorage.getItem('user_id') || 'anonymous',
      tab_context: tabValue,
      academic_context: window.location.pathname.includes('academic')
    });
  };
  
  // Render counselors tab content
  const renderCounselorsTab = () => {
    const { mentalHealthCounselor, substanceAbuseCounselor } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <TherapyIcon className={classes.sectionIcon} />
            {translations.counselorSection}
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper className={classes.contactCard} elevation={2}>
            <Box className={classes.contactHeader}>
              <Avatar className={classes.contactAvatar}>
                <PersonIcon />
              </Avatar>
              <Box>
                <Typography variant="h6">{mentalHealthCounselor.name}</Typography>
                <Typography variant="body2" color="textSecondary">{mentalHealthCounselor.role}</Typography>
              </Box>
            </Box>
            <Divider style={{ margin: '16px 0' }} />
            <Box className={classes.contactInfo}>
              <CallIcon />
              <Typography className={classes.contactText}>{mentalHealthCounselor.phone}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <EmailIcon />
              <Typography className={classes.contactText}>{mentalHealthCounselor.email}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <AccessTimeIcon />
              <Typography className={classes.contactText}>{mentalHealthCounselor.availability}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <LocationIcon />
              <Typography className={classes.contactText}>{mentalHealthCounselor.location}</Typography>
            </Box>
            <Box className={classes.contactInfo} style={{ marginTop: 8 }}>
              <DescriptionIcon />
              <Typography className={classes.contactText}>
                <strong>Specialization:</strong> {mentalHealthCounselor.specialization}
              </Typography>
            </Box>
            <Box mt={2}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<CallIcon />}
                onClick={() => {
                  const data = prepareForDatabaseIntegration('counselor_contact', {
                    counselor_name: mentalHealthCounselor.name,
                    counselor_role: mentalHealthCounselor.role,
                    contact_method: 'phone',
                    timestamp: new Date().toISOString()
                  });
                  
                  // Store contact data before initiating call
                  sessionStorage.setItem('last_counselor_contact', JSON.stringify(data));
                  
                  // Initiate call
                  window.location.href = `tel:${mentalHealthCounselor.phone.replace(/[^0-9+]/g, '')}`;
                }}
              >
                {translations.contactNow}
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper className={classes.contactCard} elevation={2}>
            <Box className={classes.contactHeader}>
              <Avatar className={classes.contactAvatar}>
                <PersonIcon />
              </Avatar>
              <Box>
                <Typography variant="h6">{substanceAbuseCounselor.name}</Typography>
                <Typography variant="body2" color="textSecondary">{substanceAbuseCounselor.role}</Typography>
              </Box>
            </Box>
            <Divider style={{ margin: '16px 0' }} />
            <Box className={classes.contactInfo}>
              <CallIcon />
              <Typography className={classes.contactText}>{substanceAbuseCounselor.phone}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <EmailIcon />
              <Typography className={classes.contactText}>{substanceAbuseCounselor.email}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <AccessTimeIcon />
              <Typography className={classes.contactText}>{substanceAbuseCounselor.availability}</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <LocationIcon />
              <Typography className={classes.contactText}>{substanceAbuseCounselor.location}</Typography>
            </Box>
            <Box className={classes.contactInfo} style={{ marginTop: 8 }}>
              <DescriptionIcon />
              <Typography className={classes.contactText}>
                <strong>Specialization:</strong> {substanceAbuseCounselor.specialization}
              </Typography>
            </Box>
            <Box mt={2}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<CallIcon />}
                onClick={() => {
                  const data = prepareForDatabaseIntegration('counselor_contact', {
                    counselor_name: substanceAbuseCounselor.name,
                    counselor_role: substanceAbuseCounselor.role,
                    contact_method: 'phone',
                    timestamp: new Date().toISOString()
                  });
                  
                  // Store contact data before initiating call
                  sessionStorage.setItem('last_counselor_contact', JSON.stringify(data));
                  
                  // Initiate call
                  window.location.href = `tel:${substanceAbuseCounselor.phone.replace(/[^0-9+]/g, '')}`;
                }}
              >
                {translations.contactNow}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  };
  
  // Render peer support tab content
  const renderPeerSupportTab = () => {
    const { peerGroups } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <PeerGroupIcon className={classes.sectionIcon} />
            {translations.peerSupportSection}
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper className={classes.peerGroupCard} elevation={2}>
            <Typography variant="h6" className={classes.peerGroupTitle}>
              {peerGroups.recovery.name}
            </Typography>
            <Typography variant="body2" style={{ marginBottom: 16 }}>
              {peerGroups.recovery.description}
            </Typography>
            <Box className={classes.peerGroupInfo}>
              <AccessTimeIcon />
              <Typography>{peerGroups.recovery.meetingTime}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <LocationIcon />
              <Typography>{peerGroups.recovery.location}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <PersonIcon />
              <Typography>{peerGroups.recovery.contact} ({peerGroups.recovery.phone})</Typography>
            </Box>
            <Box mt={2}>
              <Button 
                variant="contained" 
                color="success" 
                startIcon={<PeerGroupIcon />}
                onClick={() => {
                  prepareForDatabaseIntegration('peer_group_join', {
                    group_name: peerGroups.recovery.name,
                    contact_person: peerGroups.recovery.contact,
                    meeting_time: peerGroups.recovery.meetingTime,
                    timestamp: new Date().toISOString()
                  });
                }}
              >
                {translations.joinGroup}
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper className={classes.peerGroupCard} elevation={2}>
            <Typography variant="h6" className={classes.peerGroupTitle}>
              {peerGroups.academic.name}
            </Typography>
            <Typography variant="body2" style={{ marginBottom: 16 }}>
              {peerGroups.academic.description}
            </Typography>
            <Box className={classes.peerGroupInfo}>
              <AccessTimeIcon />
              <Typography>{peerGroups.academic.meetingTime}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <LocationIcon />
              <Typography>{peerGroups.academic.location}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <PersonIcon />
              <Typography>{peerGroups.academic.contact} ({peerGroups.academic.phone})</Typography>
            </Box>
            <Box mt={2}>
              <Button 
                variant="contained" 
                color="success" 
                startIcon={<PeerGroupIcon />}
                onClick={() => {
                  prepareForDatabaseIntegration('peer_group_join', {
                    group_name: peerGroups.academic.name,
                    contact_person: peerGroups.academic.contact,
                    meeting_time: peerGroups.academic.meetingTime,
                    timestamp: new Date().toISOString()
                  });
                }}
              >
                {translations.joinGroup}
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper className={classes.peerGroupCard} elevation={2}>
            <Typography variant="h6" className={classes.peerGroupTitle}>
              {peerGroups.women.name}
            </Typography>
            <Typography variant="body2" style={{ marginBottom: 16 }}>
              {peerGroups.women.description}
            </Typography>
            <Box className={classes.peerGroupInfo}>
              <AccessTimeIcon />
              <Typography>{peerGroups.women.meetingTime}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <LocationIcon />
              <Typography>{peerGroups.women.location}</Typography>
            </Box>
            <Box className={classes.peerGroupInfo}>
              <PersonIcon />
              <Typography>{peerGroups.women.contact} ({peerGroups.women.phone})</Typography>
            </Box>
            <Box mt={2}>
              <Button 
                variant="contained" 
                color="success" 
                startIcon={<PeerGroupIcon />}
                onClick={() => {
                  prepareForDatabaseIntegration('peer_group_join', {
                    group_name: peerGroups.women.name,
                    contact_person: peerGroups.women.contact,
                    meeting_time: peerGroups.women.meetingTime,
                    timestamp: new Date().toISOString()
                  });
                }}
              >
                {translations.joinGroup}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  };
  
  // Render videos tab content
  const renderVideosTab = () => {
    const { videos } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <YouTubeIcon className={classes.sectionIcon} />
            {translations.videoSection}
          </Typography>
        </Grid>
        
        {videos.map((video, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card className={classes.videoCard}>
              <CardMedia
                className={classes.videoCardMedia}
                image={video.thumbnail}
                title={video.title}
              />
              <CardContent className={classes.videoCardContent}>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {video.description}
                </Typography>
                <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginTop: 8 }}>
                  Duration: {video.duration}
                </Typography>
              </CardContent>
              <CardActions className={classes.videoCardActions}>
                <Button 
                  color="primary" 
                  startIcon={<PlayIcon />}
                  onClick={() => {
                    prepareForDatabaseIntegration('video_watch', {
                      video_title: video.title,
                      video_id: index,
                      timestamp: new Date().toISOString()
                    });
                    window.open(video.url, '_blank');
                  }}
                >
                  {translations.watchNow}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  // Render articles tab content
  const renderArticlesTab = () => {
    const { articles } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <ArticleIcon className={classes.sectionIcon} />
            {translations.articleSection}
          </Typography>
        </Grid>
        
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className={classes.articleCard}>
              <CardMedia
                className={classes.articleCardMedia}
                image={article.thumbnail}
                title={article.title}
              />
              <CardContent className={classes.articleCardContent}>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
                <Box mt={1}>
                  <Typography variant="caption" color="textSecondary">
                    By {article.author} • {article.date}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions className={classes.articleCardActions}>
                <Button 
                  color="primary" 
                  startIcon={<ArticleIcon />}
                  onClick={() => {
                    prepareForDatabaseIntegration('article_read', {
                      article_title: article.title,
                      article_id: index,
                      article_author: article.author,
                      timestamp: new Date().toISOString()
                    });
                    window.open(article.url, '_blank');
                  }}
                >
                  {translations.readMore}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  // Render university resources tab content
  const renderUniversityTab = () => {
    const { universityResources } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <UniversityIcon className={classes.sectionIcon} />
            {translations.universitySection}
          </Typography>
        </Grid>
        
        {universityResources.map((resource, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper className={classes.resourceItem}>
              <Typography variant="h6" className={classes.resourceTitle}>
                <UniversityIcon />
                {resource.name}
              </Typography>
              <Typography variant="body2" className={classes.resourceDescription}>
                {resource.description}
              </Typography>
              <Divider style={{ margin: '12px 0' }} />
              <Box className={classes.contactInfo}>
                <CallIcon />
                <Typography className={classes.contactText}>{resource.contact}</Typography>
              </Box>
              <Box className={classes.contactInfo}>
                <LocationIcon />
                <Typography className={classes.contactText}>{resource.location}</Typography>
              </Box>
              <MuiLink 
                href={`https://${resource.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={classes.resourceLink}
                onClick={() => {
                  prepareForDatabaseIntegration('university_resource_access', {
                    resource_name: resource.name,
                    resource_id: index,
                    resource_website: resource.website,
                    timestamp: new Date().toISOString()
                  });
                }}
              >
                <WebsiteIcon /> {resource.website}
              </MuiLink>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  // Render academic resources tab content
  const renderAcademicTab = () => {
    const { academicResources } = translations;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.sectionTitle}>
            <AcademicIcon className={classes.sectionIcon} />
            {translations.academicSection}
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Paper className={classes.academicCard}>
            <Typography variant="h6" className={classes.academicResourceTitle}>
              <AcademicIcon />
              {academicResources.title}
            </Typography>
            <Typography variant="body2" className={classes.academicDescription}>
              {academicResources.description}
            </Typography>
            <Divider style={{ margin: '16px 0' }} />
            <List className={classes.academicLinks}>
              {academicResources.resources.map((resource, index) => (
                <ListItem 
                  key={index} 
                  component={Link} 
                  to={resource.link}
                  onClick={() => {
                    prepareForDatabaseIntegration('academic_resource_access', {
                      resource_name: resource.name,
                      resource_id: index,
                      timestamp: new Date().toISOString()
                    });
                  }}
                >
                  <ListItemIcon>
                    <AcademicIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={resource.name}
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.supportResourcesContainer}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box className={classes.pageHeader}>
          <Typography variant="h4" component="h1" className={classes.pageTitle}>
            Recovery & Support Resources at CoCIS at Makerere University
          </Typography>
          <Button
            variant="contained"
            color="error"
            className={classes.emergencyLink}
            startIcon={<ReportProblem />}
            component={Link}
            to="/app/emergency"
            size="medium"
          >
            Emergency SOS
          </Button>
          <Typography variant="body1" className={classes.pageDescription}>
            {translations.pageDescription}
          </Typography>
          <Box className={classes.privacyNotice}>
            <PrivacyIcon className={classes.privacyIcon} />
            <Typography className={classes.privacyText}>
              {translations.privacyNotice}
              <MuiLink 
                component={Link} 
                to="/app/settings#privacy" 
                className={classes.privacyLink}
              >
                {translations.viewPrivacySettings}
              </MuiLink>
            </Typography>
          </Box>
        </Box>
        
        {/* Tab Navigation */}
        <Paper className={classes.tabsContainer}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Support resources tabs"
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab 
              icon={<TherapyIcon />} 
              label={translations.tabCounselors} 
              {...a11yProps(0)} 
              id="counselors-tab"
            />
            <Tab 
              icon={<PeerGroupIcon />} 
              label={translations.tabPeerSupport} 
              {...a11yProps(1)} 
              id="peer-support-tab"
            />
            <Tab 
              icon={<YouTubeIcon />} 
              label={translations.tabVideos} 
              {...a11yProps(2)} 
              id="videos-tab"
            />
            <Tab 
              icon={<ArticleIcon />} 
              label={translations.tabArticles} 
              {...a11yProps(3)} 
              id="articles-tab"
            />
            <Tab 
              icon={<UniversityIcon />} 
              label={translations.tabUniversity} 
              {...a11yProps(4)} 
              id="university-tab"
            />
            <Tab 
              icon={<AcademicIcon />} 
              label={translations.tabAcademic} 
              {...a11yProps(5)} 
              id="academic-tab"
            />
          </Tabs>
        </Paper>
        
        {/* Tab Content */}
        <TabPanel value={tabValue} index={0}>
          {renderCounselorsTab()}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {renderPeerSupportTab()}
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {renderVideosTab()}
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          {renderArticlesTab()}
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          {renderUniversityTab()}
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          {renderAcademicTab()}
        </TabPanel>
      </Container>
    </div>
  );
} 