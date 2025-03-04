import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
  Card,
  CardContent,
  Divider,
  Paper,
  IconButton,
  Chip,
  Snackbar,
  Alert,
  FormHelperText,
  CircularProgress
} from "@mui/material";
import {
  Groups as CommunityIcon,
  Forum as ForumIcon,
  EmojiEvents as SuccessIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Image as ImageIcon,
  ThumbUp as LikeIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Lock as LockIcon,
  School as SchoolIcon
} from "@mui/icons-material";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";

// styles
import useStyles from "./styles";

// Language context
import { useLanguage } from '../../context/LanguageContext';

// Mock user context (replace with your actual auth context)
// In a real app, create an AuthContext with this structure
const useAuth = () => {
  // This is a mock - replace with your actual auth context
  return {
    isAuthenticated: true, // Set to true for development
    user: {
      id: 'user123',
      name: 'David Mukisa',
      age: 22,
      role: 'student',
      universityId: 'MAK-CoCIS-2023',
      token: 'mock-jwt-token',
      avatar: 'https://source.unsplash.com/random/100x100/?portrait'
    }
  };
};

// Mock data for forum posts
const mockForumPosts = [
  {
    id: 1,
    title: "Managing stress during exams while in recovery",
    author: "David M.",
    date: "2023-05-15",
    category: "Academic",
    content: "I'm finding it challenging to manage exam stress without falling back into old habits. How do you handle academic pressure during recovery?",
    replies: 7,
    likes: 12
  },
  {
    id: 2,
    title: "Found great support in the CoCIS mentorship program",
    author: "Sarah N.",
    date: "2023-05-10",
    category: "Recovery",
    content: "The mentorship program at CoCIS has been incredibly helpful for my recovery journey. My mentor understands the balance between academics and recovery.",
    replies: 5,
    likes: 18
  },
  {
    id: 3,
    title: "Resources for programming projects that don't require late nights",
    author: "James K.",
    date: "2023-05-05",
    category: "Academic",
    content: "I'm looking for programming resources that allow me to complete projects during regular hours without pulling all-nighters, which can trigger cravings.",
    replies: 3,
    likes: 9
  }
];

// Mock data for success stories
const mockSuccessStories = [
  {
    id: 1,
    title: "One year sober and graduating with honors",
    author: "Michael O.",
    date: "2023-04-20",
    content: "A year ago, I was struggling with addiction and failing my classes. With support from CoCIS and determination, I'm now sober for a full year and graduating with honors in Computer Science.",
    imageUrl: "https://source.unsplash.com/random/800x600/?graduation",
    likes: 34
  },
  {
    id: 2,
    title: "From addiction to teaching assistant",
    author: "Florence A.",
    date: "2023-03-15",
    content: "Two years into my recovery journey, I've not only improved academically but have been selected as a teaching assistant for Programming Fundamentals. Recovery has given me clarity and purpose.",
    imageUrl: "https://source.unsplash.com/random/800x600/?teaching",
    likes: 27
  }
];

// Translations for the Community Support page
const communityTranslations = {
  en: {
    pageTitle: "Community Support at CoCIS at Makerere University",
    privacyNotice: "Your participation in forums and stories is confidential under Uganda's Data Protection Act 2019",
    tabs: {
      forums: "Discussion Forums",
      stories: "Success Stories"
    },
    forums: {
      title: "Student Recovery Forums",
      subtitle: "Connect with peers for support and advice on balancing recovery with academics",
      formTitle: "Post a Message",
      formLabels: {
        title: "Topic Title",
        titlePlaceholder: "Enter a title for your discussion",
        category: "Category",
        message: "Your Message",
        messagePlaceholder: "Share your thoughts, questions or experiences (max 500 characters)",
      },
      categories: {
        academic: "Academic Support",
        recovery: "Recovery Journey",
        social: "Social Connection",
        resources: "Resources Sharing"
      },
      postButton: "Post Message",
      recentDiscussions: "Recent Discussions",
      postMetadata: "Posted by {author} on {date} in {category}",
      replies: "Replies",
      likes: "Likes",
      viewMore: "View All Discussions",
      searchPlaceholder: "Search discussions..."
    },
    stories: {
      title: "Success Stories",
      subtitle: "Read inspiring stories from students who have overcome addiction challenges",
      formTitle: "Share Your Story",
      formLabels: {
        title: "Story Title",
        titlePlaceholder: "Give your story a title",
        content: "Your Story",
        contentPlaceholder: "Share your journey and achievements (max 1000 characters)",
        photo: "Add Photo (Optional)"
      },
      shareButton: "Share Story",
      storyMetadata: "Shared by {author} on {date}",
      likes: "Likes",
      viewMore: "View All Stories",
      authRequired: "Authentication Required",
      loginMessage: "Please log in to access the Community Support features",
      loginButton: "Log In",
      youthOnly: "Youth Community Only",
      ageRestrictionMessage: "This community is exclusively for youth users (ages 16-30) at CoCIS Makerere University",
      loadingData: "Loading community data...",
      loadingSubmission: "Submitting your post...",
      youthCommunity: "Youth Community",
      safeSpace: "A safe space for CoCIS Makerere University students in recovery"
    },
    successMessage: "Your submission has been received. Thank you for contributing to our community!",
    errorMessage: "There was an error processing your request. Please try again."
  },
  lg: {
    pageTitle: "Obuyambi bwa Bumu ku CoCIS ku Yunivasite ya Makerere",
    privacyNotice: "Okwetaba kwo mu biganyo ne mu mboozi kikuumibwa nga kyama okusinziira ku Uganda's Data Protection Act 2019",
    tabs: {
      forums: "Emiganno gy'Okukubaganya Ebirowoozo",
      stories: "Emboozi z'Obuwanguzi"
    },
    forums: {
      title: "Emiganno gy'Abayizi mu Kuwona",
      subtitle: "Yungibwa ku bayizi banno olw'obuyambi n'okubuulirirwa ku kugerageranya okuwona n'okusoma",
      formTitle: "Wandiika Obubaka",
      formLabels: {
        title: "Omutwe gw'Ekiganyo",
        titlePlaceholder: "Wandiika omutwe gw'okukubaganya ebirowoozo",
        category: "Ekika",
        message: "Obubaka bwo",
        messagePlaceholder: "Gabanako ebirowoozo, ebibuuzo oba obumanyirivu bwo (ennukuta ezitasukka 500)",
      },
      categories: {
        academic: "Obuyambi mu Byokusoma",
        recovery: "Olugendo lw'Okuwona",
        social: "Enkolagana",
        resources: "Okugabana Ebikozesebwa"
      },
      postButton: "Wandiika Obubaka",
      recentDiscussions: "Okukubaganya Ebirowoozo kw'Eyakasangwa",
      postMetadata: "Kwawandiikibwa {author} ku {date} mu {category}",
      replies: "Empeerera",
      likes: "Okulondebwa",
      viewMore: "Laba Okukubaganya Ebirowoozo Kwonna",
      searchPlaceholder: "Noonya okukubaganya ebirowoozo..."
    },
    stories: {
      title: "Emboozi z'Obuwanguzi",
      subtitle: "Soma emboozi ezizzaamu amaanyi okuva mu bayizi abazze ku buzibe bw'okweyisa",
      formTitle: "Gabanako Emboozi yo",
      formLabels: {
        title: "Omutwe gw'Emboozi",
        titlePlaceholder: "Wa emboozi yo omutwe",
        content: "Emboozi yo",
        contentPlaceholder: "Gabanako olugendo lwo n'ebikolwa byo (ennukuta ezitasukka 1000)",
        photo: "Yongera Ekifaananyi (Nga oyagala)"
      },
      shareButton: "Gabanako Emboozi",
      storyMetadata: "Yagabanyizibwa {author} ku {date}",
      likes: "Okulondebwa",
      viewMore: "Laba Emboozi Zonna",
      authRequired: "Okukakasa Kwetaagisa",
      loginMessage: "Yingira okusobola okukozesa ebyuma by'Obuyambi bwa Bumu",
      loginButton: "Yingira",
      youthOnly: "Kitundu kya Bavubuka Bokka",
      ageRestrictionMessage: "Ekitundu kino kya bavubuka bokka (emyaka 16-30) ku CoCIS mu Yunivasite ya Makerere",
      loadingData: "Okufuna ebikwata ku kitundu...",
      loadingSubmission: "Okuweereza okuwandiika kwo...",
      youthCommunity: "Kitundu kya Bavubuka",
      safeSpace: "Ekifo ekyemala eri abayizi ba CoCIS mu Yunivasite ya Makerere abali mu kuwona"
    },
    successMessage: "Okuwandiika kwo kufuniddwa. Webale nnyo okuyamba mu kitundu kyaffe!",
    errorMessage: "Wabaddewo kiremya mu kukola ku kusaba kwo. Gezaako nate."
  },
  sw: {
    pageTitle: "Msaada wa Jamii katika CoCIS katika Chuo Kikuu cha Makerere",
    privacyNotice: "Ushiriki wako katika majadiliano na hadithi ni siri chini ya Sheria ya Ulinzi wa Data ya Uganda 2019",
    tabs: {
      forums: "Majukwaa ya Mjadala",
      stories: "Hadithi za Mafanikio"
    },
    forums: {
      title: "Majukwaa ya Ahueni ya Wanafunzi",
      subtitle: "Unganisha na wenzako kwa msaada na ushauri kuhusu uwiano wa ahueni na masomo",
      formTitle: "Tuma Ujumbe",
      formLabels: {
        title: "Kichwa cha Mada",
        titlePlaceholder: "Ingiza kichwa cha mjadala wako",
        category: "Kategoria",
        message: "Ujumbe Wako",
        messagePlaceholder: "Shiriki mawazo, maswali au uzoefu wako (herufi zisizozidi 500)",
      },
      categories: {
        academic: "Msaada wa Kitaaluma",
        recovery: "Safari ya Ahueni",
        social: "Uhusiano wa Kijamii",
        resources: "Kushiriki Rasilimali"
      },
      postButton: "Tuma Ujumbe",
      recentDiscussions: "Mijadala ya Hivi Karibuni",
      postMetadata: "Imetumwa na {author} tarehe {date} katika {category}",
      replies: "Majibu",
      likes: "Likes",
      viewMore: "Tazama Mijadala Yote",
      searchPlaceholder: "Tafuta mijadala..."
    },
    stories: {
      title: "Hadithi za Mafanikio",
      subtitle: "Soma hadithi zenye kutia moyo kutoka kwa wanafunzi walioshinda changamoto za uraibu",
      formTitle: "Shiriki Hadithi Yako",
      formLabels: {
        title: "Kichwa cha Hadithi",
        titlePlaceholder: "Ipe hadithi yako kichwa",
        content: "Hadithi Yako",
        contentPlaceholder: "Shiriki safari yako na mafanikio (herufi zisizozidi 1000)",
        photo: "Ongeza Picha (Hiari)"
      },
      shareButton: "Shiriki Hadithi",
      storyMetadata: "Imeshirikishwa na {author} tarehe {date}",
      likes: "Likes",
      viewMore: "Tazama Hadithi Zote",
      authRequired: "Uthibitisho Unahitajika",
      loginMessage: "Tafadhali ingia ili kufikia vipengele vya Msaada wa Jamii",
      loginButton: "Ingia",
      youthOnly: "Jamii ya Vijana Tu",
      ageRestrictionMessage: "Jamii hii ni ya vijana pekee (umri 16-30) katika CoCIS Chuo Kikuu cha Makerere",
      loadingData: "Inapakia data ya jamii...",
      loadingSubmission: "Inatuma chapisho lako...",
      youthCommunity: "Jamii ya Vijana",
      safeSpace: "Nafasi salama kwa wanafunzi wa CoCIS Chuo Kikuu cha Makerere wanaopata ahueni"
    },
    successMessage: "Uwasilishaji wako umepokelewa. Asante kwa kuchangia katika jamii yetu!",
    errorMessage: "Kulikuwa na hitilafu katika kuchakata ombi lako. Tafadhali jaribu tena."
  }
};

export default function CommunitySupport() {
  const classes = useStyles();
  const { language } = useLanguage();
  const [tab, setTab] = useState(0);
  const history = useHistory();
  
  // Authentication and user state
  const { isAuthenticated, user } = useAuth();
  const isYouth = user?.age >= 16 && user?.age <= 30;
  
  // Form states
  const [forumForm, setForumForm] = useState({
    title: '',
    category: '',
    message: ''
  });
  
  const [storyForm, setStoryForm] = useState({
    title: '',
    content: '',
    photo: null
  });
  
  // UI state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Data states
  const [forumPosts, setForumPosts] = useState(mockForumPosts);
  const [successStories, setSuccessStories] = useState(mockSuccessStories);
  
  // Get translations for current language
  const t = communityTranslations[language] || communityTranslations.en;
  
  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      // In a real app, you would redirect to login
      // history.push('/login?redirect=/app/community');
      // For now, just show a warning
      setSnackbar({
        open: true,
        message: t.authRequired + ": " + t.loginMessage,
        severity: 'warning'
      });
    } else {
      // Fetch data when component mounts
      fetchCommunityData();
    }
  }, [isAuthenticated, language]);

  // Fetch community data from backend
  const fetchCommunityData = async () => {
    // Only attempt to fetch if authenticated
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    
    try {
      // In a real app, these would be actual API calls
      // const forumResponse = await fetch('/api/forums/posts', {
      //   headers: { 'Authorization': `Bearer ${user.token}` }
      // });
      // const forumData = await forumResponse.json();
      // setForumPosts(forumData);
      
      // const storiesResponse = await fetch('/api/community/stories', {
      //   headers: { 'Authorization': `Bearer ${user.token}` }
      // });
      // const storiesData = await storiesResponse.json();
      // setSuccessStories(storiesData);
      
      // Simulate API delay
      setTimeout(() => {
        setForumPosts(mockForumPosts);
        setSuccessStories(mockSuccessStories);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching community data:', error);
      setSnackbar({
        open: true,
        message: error.message || t.errorMessage,
        severity: 'error'
      });
      setIsLoading(false);
    }
  };
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };
  
  // Handle forum form changes
  const handleForumFormChange = (e) => {
    const { name, value } = e.target;
    setForumForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle forum form submit
  const handleForumSubmit = async (e) => {
    e.preventDefault();
    
    // Validate authentication
    if (!isAuthenticated) {
      setSnackbar({
        open: true,
        message: t.authRequired + ": " + t.loginMessage,
        severity: 'error'
      });
      return;
    }
    
    // Validate youth status
    if (!isYouth) {
      setSnackbar({
        open: true,
        message: t.youthOnly + ": " + t.ageRestrictionMessage,
        severity: 'error'
      });
      return;
    }
    
    // Validate form
    if (!forumForm.title || !forumForm.category || !forumForm.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Track analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'forum_post_submitted',
          forumCategory: forumForm.category,
          formTitle: forumForm.title,
          userId: user.id
        });
      }
      
      // In a real app, this would be an API call
      // const response = await fetch('/api/forums/posts', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${user.token}`
      //   },
      //   body: JSON.stringify({
      //     ...forumForm,
      //     userId: user.id,
      //     userRole: user.role,
      //     universityId: user.universityId,
      //     username: user.name
      //   })
      // });
      
      // if (!response.ok) throw new Error('Failed to submit post');
      // const newPost = await response.json();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the new post to the list (in a real app, this would come from the API response)
      const newPost = {
        id: Date.now(),
        title: forumForm.title,
        author: user.name,
        date: new Date().toISOString().split('T')[0],
        category: forumForm.category,
        content: forumForm.message,
        replies: 0,
        likes: 0
      };
      
      setForumPosts(prev => [newPost, ...prev]);
      
      // Reset form
      setForumForm({
        title: '',
        category: '',
        message: ''
      });
      
      // Show success message
      setSnackbar({
        open: true,
        message: t.successMessage,
        severity: 'success'
      });
    } catch (error) {
      console.error('Error submitting forum post:', error);
      setSnackbar({
        open: true,
        message: error.message || t.errorMessage,
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle story form changes
  const handleStoryFormChange = (e) => {
    const { name, value } = e.target;
    setStoryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file upload for story
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSnackbar({
          open: true,
          message: 'File size should not exceed 5MB',
          severity: 'error'
        });
        return;
      }
      
      setStoryForm(prev => ({
        ...prev,
        photo: file
      }));
    }
  };
  
  // Handle story form submit
  const handleStorySubmit = async (e) => {
    e.preventDefault();
    
    // Validate authentication
    if (!isAuthenticated) {
      setSnackbar({
        open: true,
        message: t.authRequired + ": " + t.loginMessage,
        severity: 'error'
      });
      return;
    }
    
    // Validate youth status
    if (!isYouth) {
      setSnackbar({
        open: true,
        message: t.youthOnly + ": " + t.ageRestrictionMessage,
        severity: 'error'
      });
      return;
    }
    
    // Validate form
    if (!storyForm.title || !storyForm.content) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Track analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'success_story_submitted',
          storyTitle: storyForm.title,
          hasPhoto: !!storyForm.photo,
          userId: user.id
        });
      }
      
      // In a real app, this would be an API call with FormData for the file upload
      // const formData = new FormData();
      // formData.append('title', storyForm.title);
      // formData.append('content', storyForm.content);
      // formData.append('userId', user.id);
      // formData.append('username', user.name);
      // formData.append('universityId', user.universityId);
      
      // if (storyForm.photo) {
      //   formData.append('photo', storyForm.photo);
      // }
      
      // const response = await fetch('/api/community/stories', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${user.token}`
      //   },
      //   body: formData
      // });
      
      // if (!response.ok) throw new Error('Failed to submit story');
      // const newStory = await response.json();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a placeholder image URL (in real app, this would come from the API)
      let imageUrl = null;
      if (storyForm.photo) {
        imageUrl = 'https://source.unsplash.com/random/800x600/?success';
      }
      
      // Add the new story to the list
      const newStory = {
        id: Date.now(),
        title: storyForm.title,
        author: user.name,
        date: new Date().toISOString().split('T')[0],
        content: storyForm.content,
        imageUrl,
        likes: 0
      };
      
      setSuccessStories(prev => [newStory, ...prev]);
      
      // Reset form
      setStoryForm({
        title: '',
        content: '',
        photo: null
      });
      
      // Show success message
      setSnackbar({
        open: true,
        message: t.successMessage,
        severity: 'success'
      });
    } catch (error) {
      console.error('Error submitting success story:', error);
      setSnackbar({
        open: true,
        message: error.message || t.errorMessage,
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };
  
  // If not authenticated, show login message
  if (!isAuthenticated) {
    return (
      <>
        <PageTitle 
          title={t.pageTitle} 
          icon={<CommunityIcon style={{ fontSize: 48, color: '#2196f3' }}/>} 
          aria-label={t.pageTitle}
        />
        
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
          <LockIcon style={{ fontSize: 64, color: '#2196f3', marginBottom: 16 }} />
          <Typography variant="h5" gutterBottom>
            {t.authRequired}
          </Typography>
          <Typography variant="body1" paragraph>
            {t.loginMessage}
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => history.push('/login?redirect=/app/community')}
            className={classes.button}
          >
            {t.loginButton}
          </Button>
        </Box>
      </>
    );
  }
  
  // If authenticated but not youth, show restriction message
  if (!isYouth) {
    return (
      <>
        <PageTitle 
          title={t.pageTitle} 
          icon={<CommunityIcon style={{ fontSize: 48, color: '#2196f3' }}/>} 
          aria-label={t.pageTitle}
        />
        
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
          <SchoolIcon style={{ fontSize: 64, color: '#ef5350', marginBottom: 16 }} />
          <Typography variant="h5" gutterBottom>
            {t.youthOnly}
          </Typography>
          <Typography variant="body1" paragraph>
            {t.ageRestrictionMessage}
          </Typography>
        </Box>
      </>
    );
  }
  
  // Show loading indicator when fetching data
  if (isLoading) {
    return (
      <>
        <PageTitle 
          title={t.pageTitle} 
          icon={<CommunityIcon style={{ fontSize: 48, color: '#2196f3' }}/>} 
          aria-label={t.pageTitle}
        />
        
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={5}>
          <CircularProgress size={60} />
          <Typography variant="h6" style={{ marginTop: 16 }}>
            {t.loadingData}
          </Typography>
        </Box>
      </>
    );
  }
  
  return (
    <>
      <PageTitle 
        title={t.pageTitle} 
        icon={<CommunityIcon style={{ fontSize: 48, color: '#2196f3' }}/>} 
        aria-label={t.pageTitle}
      />
      
      <Box display="flex" alignItems="center" mb={2}>
        <Chip 
          label={t.youthCommunity} 
          color="primary" 
          size="small" 
          style={{ marginRight: 8 }}
        />
        <Typography variant="body2" color="textSecondary">
          {t.safeSpace}
        </Typography>
      </Box>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {t.privacyNotice}
      </Typography>
      
      <Box my={3}>
        <Tabs 
          value={tab} 
          onChange={handleTabChange} 
          className={classes.tabs}
          aria-label="Community Support Tabs"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            className: classes.tabIndicator
          }}
        >
          <Tab 
            icon={<ForumIcon />} 
            label={t.tabs.forums} 
            id="tab-forums"
            aria-controls="tabpanel-forums"
          />
          <Tab 
            icon={<SuccessIcon />} 
            label={t.tabs.stories} 
            id="tab-stories"
            aria-controls="tabpanel-stories"
          />
        </Tabs>
      </Box>
      
      {/* Discussion Forums Tab */}
      <Box 
        role="tabpanel"
        hidden={tab !== 0}
        id="tabpanel-forums"
        aria-labelledby="tab-forums"
        className={classes.tabPanel}
      >
        {tab === 0 && (
          <Grid container spacing={3}>
            {/* Post Form */}
            <Grid item xs={12} md={4}>
              <Widget
                title={t.forums.formTitle}
                upperTitle
                disableWidgetMenu
                bodyClass={classes.cardContent}
              >
                <Box mb={2} display="flex" alignItems="center">
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name}
                    className={classes.avatar}
                  />
                  <Box ml={1}>
                    <Typography variant="subtitle2">
                      {user.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {user.role} • CoCIS
                    </Typography>
                  </Box>
                </Box>
                
                <form onSubmit={handleForumSubmit}>
                  <TextField
                    label={t.forums.formLabels.title}
                    placeholder={t.forums.formLabels.titlePlaceholder}
                    fullWidth
                    margin="normal"
                    name="title"
                    value={forumForm.title}
                    onChange={handleForumFormChange}
                    className={classes.formField}
                    aria-label={t.forums.formLabels.title}
                    inputProps={{ maxLength: 100 }}
                    disabled={isSubmitting}
                  />
                  
                  <FormControl fullWidth margin="normal" className={classes.formField} disabled={isSubmitting}>
                    <InputLabel id="forum-category-label">{t.forums.formLabels.category}</InputLabel>
                    <Select
                      labelId="forum-category-label"
                      name="category"
                      value={forumForm.category}
                      onChange={handleForumFormChange}
                      aria-label={t.forums.formLabels.category}
                    >
                      <MenuItem value="academic">{t.forums.categories.academic}</MenuItem>
                      <MenuItem value="recovery">{t.forums.categories.recovery}</MenuItem>
                      <MenuItem value="social">{t.forums.categories.social}</MenuItem>
                      <MenuItem value="resources">{t.forums.categories.resources}</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <TextField
                    label={t.forums.formLabels.message}
                    placeholder={t.forums.formLabels.messagePlaceholder}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    name="message"
                    value={forumForm.message}
                    onChange={handleForumFormChange}
                    className={classes.formField}
                    aria-label={t.forums.formLabels.message}
                    inputProps={{ maxLength: 500 }}
                    disabled={isSubmitting}
                    helperText={`${forumForm.message.length}/500`}
                  />
                  
                  <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={`${classes.button} ${classes.forumButton}`}
                    startIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                    aria-label={t.forums.postButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.loadingSubmission : t.forums.postButton}
                  </Button>
                </form>
              </Widget>
            </Grid>
            
            {/* Discussion List */}
            <Grid item xs={12} md={8}>
              <Widget
                title={t.forums.recentDiscussions}
                upperTitle
                disableWidgetMenu
                bodyClass={classes.cardContent}
              >
                {forumPosts.length === 0 ? (
                  <Typography variant="body1" align="center" style={{ padding: 24 }}>
                    No discussions yet. Be the first to start a conversation!
                  </Typography>
                ) : (
                  forumPosts.map((post) => (
                    <Paper key={post.id} className={classes.forumPost} elevation={0}>
                      <Typography variant="h6" gutterBottom>
                        {post.title}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {t.forums.postMetadata
                          .replace('{author}', post.author)
                          .replace('{date}', post.date)
                          .replace('{category}', post.category)
                        }
                      </Typography>
                      
                      <Typography variant="body1" paragraph>
                        {post.content}
                      </Typography>
                      
                      <Box display="flex" alignItems="center">
                        <Chip 
                          icon={<CommentIcon />} 
                          label={`${post.replies} ${t.forums.replies}`} 
                          variant="outlined"
                          size="small"
                          className={classes.mobileFullWidth}
                          style={{ marginRight: 8 }}
                        />
                        <Chip 
                          icon={<LikeIcon />} 
                          label={`${post.likes} ${t.forums.likes}`} 
                          variant="outlined"
                          size="small"
                          className={classes.mobileFullWidth}
                        />
                      </Box>
                    </Paper>
                  ))
                )}
                
                {forumPosts.length > 0 && (
                  <Box display="flex" justifyContent="center" mt={3}>
                    <Button 
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      aria-label={t.forums.viewMore}
                    >
                      {t.forums.viewMore}
                    </Button>
                  </Box>
                )}
              </Widget>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Success Stories Tab */}
      <Box 
        role="tabpanel"
        hidden={tab !== 1}
        id="tabpanel-stories"
        aria-labelledby="tab-stories"
        className={classes.tabPanel}
      >
        {tab === 1 && (
          <Grid container spacing={3}>
            {/* Story Form */}
            <Grid item xs={12} md={4}>
              <Widget
                title={t.stories.formTitle}
                upperTitle
                disableWidgetMenu
                bodyClass={classes.cardContent}
              >
                <Box mb={2} display="flex" alignItems="center">
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name}
                    className={classes.avatar}
                  />
                  <Box ml={1}>
                    <Typography variant="subtitle2">
                      {user.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {user.role} • CoCIS
                    </Typography>
                  </Box>
                </Box>
                
                <form onSubmit={handleStorySubmit}>
                  <TextField
                    label={t.stories.formLabels.title}
                    placeholder={t.stories.formLabels.titlePlaceholder}
                    fullWidth
                    margin="normal"
                    name="title"
                    value={storyForm.title}
                    onChange={handleStoryFormChange}
                    className={classes.formField}
                    aria-label={t.stories.formLabels.title}
                    inputProps={{ maxLength: 100 }}
                    disabled={isSubmitting}
                  />
                  
                  <TextField
                    label={t.stories.formLabels.content}
                    placeholder={t.stories.formLabels.contentPlaceholder}
                    fullWidth
                    multiline
                    rows={6}
                    margin="normal"
                    name="content"
                    value={storyForm.content}
                    onChange={handleStoryFormChange}
                    className={classes.formField}
                    aria-label={t.stories.formLabels.content}
                    inputProps={{ maxLength: 1000 }}
                    disabled={isSubmitting}
                    helperText={`${storyForm.content.length}/1000`}
                  />
                  
                  <input
                    accept="image/*"
                    className={classes.visuallyHidden}
                    id="photo-upload"
                    type="file"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="photo-upload">
                    <Button
                      variant="outlined"
                      component="span"
                      className={classes.button}
                      startIcon={<ImageIcon />}
                      fullWidth
                      style={{ marginBottom: 16 }}
                      disabled={isSubmitting}
                    >
                      {t.stories.formLabels.photo}
                    </Button>
                  </label>
                  {storyForm.photo && (
                    <Typography variant="body2" gutterBottom>
                      {storyForm.photo.name}
                    </Typography>
                  )}
                  
                  <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={`${classes.button} ${classes.storyButton}`}
                    startIcon={isSubmitting ? <CircularProgress size={20} /> : <SuccessIcon />}
                    aria-label={t.stories.shareButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.loadingSubmission : t.stories.shareButton}
                  </Button>
                </form>
              </Widget>
            </Grid>
            
            {/* Stories List */}
            <Grid item xs={12} md={8}>
              <Widget
                title={t.stories.title}
                upperTitle
                disableWidgetMenu
                bodyClass={classes.cardContent}
              >
                <Typography variant="subtitle1" gutterBottom>
                  {t.stories.subtitle}
                </Typography>
                
                {successStories.length === 0 ? (
                  <Typography variant="body1" align="center" style={{ padding: 24 }}>
                    No success stories yet. Be the first to share your journey!
                  </Typography>
                ) : (
                  successStories.map((story) => (
                    <Card key={story.id} className={classes.storyCard} elevation={0}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {story.title}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          {t.stories.storyMetadata
                            .replace('{author}', story.author)
                            .replace('{date}', story.date)
                          }
                        </Typography>
                        
                        {story.imageUrl && (
                          <Box 
                            component="img"
                            src={story.imageUrl}
                            alt=""
                            className={classes.storyImage}
                            loading="lazy"
                          />
                        )}
                        
                        <Typography variant="body1" paragraph>
                          {story.content}
                        </Typography>
                        
                        <Box display="flex" alignItems="center">
                          <Chip 
                            icon={<LikeIcon />} 
                            label={`${story.likes} ${t.stories.likes}`} 
                            variant="outlined"
                            size="small"
                          />
                          <Box ml={1}>
                            <IconButton size="small" aria-label="Like story">
                              <LikeIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" aria-label="Share story">
                              <ShareIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))
                )}
                
                {successStories.length > 0 && (
                  <Box display="flex" justifyContent="center" mt={3}>
                    <Button 
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      aria-label={t.stories.viewMore}
                    >
                      {t.stories.viewMore}
                    </Button>
                  </Box>
                )}
              </Widget>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className={classes.snackbar}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          elevation={6} 
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
} 