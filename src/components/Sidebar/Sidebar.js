import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Drawer, IconButton, List, Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// styles
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';
import LanguageSelector from './components/LanguageSelector';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';
import { useLanguage } from '../../context/LanguageContext';

// A11y keyboard navigation helper
const useKeyboardNavigation = (navigationListRef) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!navigationListRef.current) return;
      
      const navItems = navigationListRef.current.querySelectorAll('a[role="menuitem"]');
      if (!navItems.length) return;
      
      const currentIndex = Array.from(navItems).findIndex(item => document.activeElement === item);
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < navItems.length - 1) {
            navItems[currentIndex + 1].focus();
          } else {
            navItems[0].focus(); // Cycle to first item
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            navItems[currentIndex - 1].focus();
          } else {
            navItems[navItems.length - 1].focus(); // Cycle to last item
          }
          break;
        case 'Home':
          e.preventDefault();
          navItems[0].focus();
          break;
        case 'End':
          e.preventDefault();
          navItems[navItems.length - 1].focus();
          break;
        default:
          break;
      }
    };

    const navList = navigationListRef.current;
    if (navList) {
      navList.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (navList) {
        navList.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [navigationListRef]);
};

function Sidebar({ location }) {
  const classes = useStyles();
  const theme = useTheme();
  const navigationListRef = useRef(null);
  const { t } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Get sidebar structure
  const SidebarStructure = require('./SidebarStructure').default;
  const structure = typeof SidebarStructure === 'function' ? SidebarStructure() : SidebarStructure;
  
  // Use keyboard navigation helper
  useKeyboardNavigation(navigationListRef);

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  // global
  let { isSidebarOpened } = useLayoutState();
  let layoutDispatch = useLayoutDispatch();

  // local
  let [isPermanent, setPermanent] = useState(true);

  const isSidebarOpenedWrapper = useMemo(
    () => (!isPermanent ? !isSidebarOpened : isSidebarOpened),
    [isPermanent, isSidebarOpened],
  );

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  // Group links by section for better organization
  const renderSidebarItems = () => {
    return structure.map(link => {
      // If it's an emergency item, wrap it with the emergency container
      if (link.isEmergency) {
        return (
          <Box key={link.id} className={classes.emergencyContainer}>
            <SidebarLink
              location={location}
              isSidebarOpened={isSidebarOpenedWrapper}
              {...link}
              toggleDrawer={toggleDrawer(true)}
              role={link.type !== 'title' && link.type !== 'divider' ? 'menuitem' : undefined}
              tabIndex={link.type !== 'title' && link.type !== 'divider' ? 0 : -1}
              aria-label={link.description || link.label}
              aria-current={location.pathname === link.link ? 'page' : undefined}
              aria-disabled={link.disabled === true}
              data-testid={`sidebar-link-${link.id}`}
              isTouch={isMobile}
            />
          </Box>
        );
      }
      
      // For regular items
      return (
        <SidebarLink
          key={link.id}
          location={location}
          isSidebarOpened={isSidebarOpenedWrapper}
          {...link}
          toggleDrawer={toggleDrawer(true)}
          role={link.type !== 'title' && link.type !== 'divider' ? 'menuitem' : undefined}
          tabIndex={link.type !== 'title' && link.type !== 'divider' ? 0 : -1}
          aria-label={link.description || link.label}
          aria-current={location.pathname === link.link ? 'page' : undefined}
          aria-disabled={link.disabled === true}
          data-testid={`sidebar-link-${link.id}`}
          isTouch={isMobile}
        />
      );
    });
  };

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpenedWrapper,
        [classes.drawerClose]: !isSidebarOpenedWrapper,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpenedWrapper,
          [classes.drawerClose]: !isSidebarOpenedWrapper,
        }),
      }}
      open={isSidebarOpenedWrapper}
      onClose={toggleDrawer(true)}
      aria-label="Recovery System Navigation"
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton 
          onClick={() => toggleSidebar(layoutDispatch)}
          aria-label="Close sidebar"
          size="large"
          className={classes.touchFriendly}
          edge="start"
        >
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <Box 
        display="flex" 
        flexDirection="column" 
        height="100%" 
        role="navigation"
        aria-label="Recovery system main navigation"
      >
        {!isSidebarOpenedWrapper && (
          <Typography 
            variant="h6" 
            className={classes.mobileTitle}
            aria-hidden="true"
          >
            Recovery
          </Typography>
        )}
        
        {/* Main navigation */}
        <nav 
          aria-label="Main Navigation Menu" 
          className={classes.navContainer}
          id="main-navigation"
        >
          <List
            className={classes.sidebarList}
            classes={{ padding: classes.padding }}
            aria-label="Recovery navigation menu"
            ref={navigationListRef}
            role="menu"
            aria-orientation="vertical"
          >
            {renderSidebarItems()}
          </List>
        </nav>
        
        {/* Language selector - no spacer needed due to padding in navContainer */}
        <Box 
          className={classes.languageSelectorContainer}
          aria-label="Language selection"
          data-testid="language-selector"
        >
          <LanguageSelector isOpen={isSidebarOpenedWrapper} />
        </Box>
      </Box>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
