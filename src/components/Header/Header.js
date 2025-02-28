import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Tooltip, Switch } from '@mui/material';
import { useTheme } from '@mui/material';
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
  LocalHospital as EmergencyIcon,
  People as PatientsIcon,
  Logout as LogoutIcon,
  School as AcademicIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import classNames from 'classnames';

//images
import profile from '../../images/main-profile.png';
import config from '../../config';

// styles
import useStyles from './styles';

// components
import { Typography, Avatar } from '../Wrappers/Wrappers';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext';

// Theme context
import { useThemeDispatch } from '../../context/ThemeContext';
import Themes from '../../themes';

// Language context
import { useLanguage } from '../../context/LanguageContext';

import { actions } from '../../context/ManagementContext';
import { useUserDispatch, signOut } from '../../context/UserContext';

// Extended translations for the header
const headerTranslations = {
  en: {
    appTitle: 'AI-Driven Recovery System - CoCIS at Makerere',
    needHelp: 'Need Immediate Help? Contact Makerere Crisis Line',
    myProfile: 'My Profile for CoCIS Recovery at Makerere',
    patients: 'Patients at Makerere University',
    logout: 'Log out securely under Uganda\'s Data Protection Act 2019',
    welcomeMessage: 'Hi'
  },
  lg: {
    appTitle: 'Sisitemu ey\'Okulongoosa ey\'AI - CoCIS ku Makerere',
    needHelp: 'Okuuma Kuwoowe? Tuukirira Makerere Crisis Line',
    myProfile: 'Ebikwatako mu Pulogramu y\'Okuwona e CoCIS ku Makerere',
    patients: 'Abalwadde ku Setendekero lya Makerere',
    logout: 'Fuluma mu ngeri ey\'obukuumi nga Uganda\'s Data Protection Act 2019 bw\'egamba',
    welcomeMessage: 'Oli otya'
  },
  sw: {
    appTitle: 'Mfumo wa Uokoaji wa AI - CoCIS katika Makerere',
    needHelp: 'Unahitaji Msaada wa Haraka? Wasiliana na Simu ya Dharura ya Makerere',
    myProfile: 'Wasifu Wangu wa Uokoaji wa CoCIS katika Makerere',
    patients: 'Wagonjwa katika Chuo Kikuu cha Makerere',
    logout: 'Toka kwa usalama chini ya Sheria ya Ulinzi wa Data ya Uganda 2019',
    welcomeMessage: 'Habari'
  }
};

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useLanguage();
  const { language, changeLanguage, availableLanguages } = useLanguage();

  // Header-specific translations
  const headerT = headerTranslations[language] || headerTranslations.en;

  // Context
  let layoutState = useLayoutState();
  let layoutDispatch = useLayoutDispatch();
  let managementDispatch = useManagementDispatch();
  let managementValue = useManagementState();
  let userDispatch = useUserDispatch();
  let themeDispatch = useThemeDispatch();

  // Local State
  const [profileMenu, setProfileMenu] = useState(null);
  const [isSmall, setSmall] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [languageMenu, setLanguageMenu] = useState(null);
  
  // User role (would come from auth context in a real implementation)
  const userRole = sessionStorage.getItem('user_role') || 'patient';

  // Theme toggle function
  const toggleDarkTheme = () => {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'default');
        themeDispatch(Themes.default);
      } else {
        localStorage.setItem('theme', 'dark');
        themeDispatch(Themes.dark);
      }
    } catch (error) {
      console.error("Error toggling dark theme:", error);
    }
  };

  // Check if dark theme is active
  const isDarkTheme = localStorage.getItem('theme') === 'dark';

  useEffect(() => {
    actions.doFind(sessionStorage.getItem('user_id'))(managementDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (config.isBackend) {
      setCurrentUser(managementValue.currentUser);
    }
  }, [managementValue]);

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  const handleEmergencyHelp = () => {
    // Implement emergency help functionality
    // Could redirect to emergency page or open a dialog
    window.location.href = '/app/emergency';
  };

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setLanguageMenu(null);
  };
  
  // Flag emoji mapping
  const flagEmojis = {
    en: '🇬🇧',
    lg: '🇺🇬',
    sw: '🇹🇿'
  };

  return (
    <AppBar 
      position='fixed' 
      className={classes.appBar}
      aria-label="Recovery System Header"
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}
          aria-label={layoutState.isSidebarOpened ? "Close sidebar" : "Open sidebar"}
          aria-expanded={layoutState.isSidebarOpened}
        >
          {(!layoutState.isSidebarOpened && isSmall) ||
          (layoutState.isSidebarOpened && !isSmall) ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
              style={{ fontSize: 32 }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
              style={{ fontSize: 32 }}
            />
          )}
        </IconButton>
        <Typography variant='h5' weight='bold' className={classes.logotype}>
          {headerT.appTitle}
        </Typography>
        <div className={classes.grow} />
        
        {/* Emergency Help Button */}
        <Button 
          variant="contained" 
          color="error"
          className={classes.emergencyButton}
          startIcon={<EmergencyIcon style={{ fontSize: 32 }} />}
          onClick={handleEmergencyHelp}
          aria-label="Emergency Help Button"
          aria-pressed="false"
          focusRipple
          role="button"
        >
          {!isSmall && (headerT.needHelp || t?.emergencyHelp || "Need Immediate Help?")}
        </Button>

        {/* Language Selector */}
        <Tooltip title="Change language" placement="bottom">
          <Button
            className={classes.languageButton}
            onClick={(e) => setLanguageMenu(e.currentTarget)}
            aria-haspopup="true"
            aria-controls="language-menu"
            aria-expanded={Boolean(languageMenu)}
            focusRipple
          >
            {flagEmojis[language] || '🇬🇧'} {!isSmall && (availableLanguages.find(lang => lang.code === language)?.name || 'English')}
          </Button>
        </Tooltip>
        <Menu
          id="language-menu"
          anchorEl={languageMenu}
          open={Boolean(languageMenu)}
          onClose={() => setLanguageMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.languageMenu }}
          disableAutoFocusItem
          aria-label="Language selection menu"
          role="menu"
        >
          {availableLanguages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={classes.headerMenuItem}
              role="menuitem"
              aria-label={`Select ${lang.name} language`}
              selected={lang.code === language}
            >
              <span className={classes.flagIcon}>{flagEmojis[lang.code] || ''}</span> {lang.name}
            </MenuItem>
          ))}
        </Menu>

        {/* Dark Mode Toggle */}
        <Tooltip title={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"} placement="bottom">
          <Button
            className={classes.themeToggleButton}
            onClick={toggleDarkTheme}
            aria-pressed={isDarkTheme}
            aria-label="Toggle dark/light mode"
            startIcon={isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
            focusRipple
          >
            {!isSmall && (isDarkTheme ? "Light Mode" : "Dark Mode")}
          </Button>
        </Tooltip>

        {/* User Profile */}
        <IconButton
          aria-haspopup='true'
          color='inherit'
          className={classes.headerMenuButton}
          aria-controls='profile-menu'
          onClick={(e) => setProfileMenu(e.currentTarget)}
          aria-label="User profile menu"
          aria-expanded={Boolean(profileMenu)}
          focusRipple
        >
          <Avatar
            alt={currentUser?.firstName}
            src={
              (currentUser?.avatar?.length >= 1 &&
              currentUser?.avatar[currentUser.avatar.length - 1].publicUrl) || profile
            }
            classes={{ root: classes.headerIcon }}
            style={{ width: 36, height: 36 }}
          >
            {currentUser?.firstName?.[0]}
          </Avatar>
        </IconButton>
        <Typography
          block
          style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}
        >
          <div className={classes.profileLabel}>{headerT.welcomeMessage},&nbsp;</div>
          <Typography weight={'bold'} className={classes.profileLabel}>
            {currentUser?.firstName}
          </Typography>
        </Typography>
        <Menu
          id='profile-menu'
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
          aria-label="User profile options"
          role="menu"
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              {currentUser?.firstName}
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component='a'
              color='primary'
            >
              {userRole === 'counselor' ? 'Counselor' : 'Patient'}
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
            role="menuitem"
          >
            <AccountIcon className={classes.profileMenuIcon} style={{ fontSize: 48 }} />
            <Link to='/app/user/edit' style={{ textDecoration: 'none' }} aria-label={headerT.myProfile}>
              {headerT.myProfile}
            </Link>
          </MenuItem>
          
          {/* Academic Support */}
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
            role="menuitem"
          >
            <AcademicIcon className={classes.profileMenuIcon} style={{ fontSize: 48 }} />
            <Link to='/app/academic' style={{ textDecoration: 'none' }} aria-label={t?.academic || "Academic Support"}>
              {t?.academic || "Academic Support"}
            </Link>
          </MenuItem>
          
          {/* Show Patients option only for counselors */}
          {userRole === 'counselor' && (
            <MenuItem
              className={classNames(
                classes.profileMenuItem,
                classes.headerMenuItem,
              )}
              role="menuitem"
            >
              <PatientsIcon className={classes.profileMenuIcon} style={{ fontSize: 48 }} />
              <Link to='/app/patients' style={{ textDecoration: 'none' }} aria-label={headerT.patients}>
                {headerT.patients}
              </Link>
            </MenuItem>
          )}
          
          <div className={classes.profileMenuUser}>
            <button 
              className={classes.logoutButton}
              onClick={() => signOut(userDispatch, props.history)}
              aria-label={headerT.logout}
            >
              <LogoutIcon className={classes.logoutIcon} style={{ fontSize: 28 }} /> 
              {headerT.logout}
            </button>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
