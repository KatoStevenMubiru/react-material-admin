import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { 
  ArrowBack as ArrowBackIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material';
import { 
  Drawer, 
  IconButton, 
  List, 
  Box, 
  Divider, 
  Typography, 
  useMediaQuery, 
  Collapse,
  ListItemSecondaryAction,
  Tooltip
} from '@mui/material';
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

/**
 * A11y keyboard navigation helper
 * Handles keyboard navigation for sidebar items and their children
 */
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

/**
 * Sidebar component for the AI-Driven Personalized Drug Addiction Recovery System
 * Renders the sidebar navigation with accessibility features and touch support
 */
function Sidebar({ location }) {
  const classes = useStyles();
  const theme = useTheme();
  const navigationListRef = useRef(null);
  const { t } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // State for expanded menu items
  const [expandedItems, setExpandedItems] = useState({});
  
  // Get sidebar structure
  const SidebarStructure = require('./SidebarStructure').default;
  const structure = typeof SidebarStructure === 'function' ? SidebarStructure() : SidebarStructure;
  
  // Use keyboard navigation helper
  useKeyboardNavigation(navigationListRef);

  // Add a new function to handle direct actions such as phone calls
  const handleDirectAction = (directActionAttr, analyticsId, label) => {
    // Track the direct action in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'emergency_direct_action',
        action_type: analyticsId || label,
        timestamp: new Date().toISOString(),
        academic_context: window.location.pathname.includes('academic') // Track if action was taken from academic context
      });
    }
    
    // If it's a phone call (tel:) link, add a confirmation
    if (directActionAttr.startsWith('tel:')) {
      const confirmed = window.confirm('You are about to call the emergency helpline. Continue?');
      if (confirmed) {
        window.location.href = directActionAttr;
        return true;
      }
      return false;
    }
    
    // For other direct actions, follow the link directly
    window.location.href = directActionAttr;
    return true;
  };

  // Update the trackSidebarAnalytics function to handle database preparation
  const trackSidebarAnalytics = (analyticsId, linkLabel, dbPrepared, dataCollectionFields) => {
    // Basic analytics tracking
    if (window.dataLayer) {
      const analyticsData = {
        event: 'sidebar_navigation',
        sidebar_item: analyticsId || linkLabel,
        timestamp: new Date().toISOString()
      };
      
      // Add data collection fields for database preparation if available
      if (dbPrepared && dataCollectionFields) {
        analyticsData.db_prepared = true;
        analyticsData.data_fields = dataCollectionFields;
      }
      
      window.dataLayer.push(analyticsData);
    }
    
    // Handle database preparation - this would connect to your database in a real implementation
    if (dbPrepared) {
      // This is a placeholder for actual database integration
      console.log(`Preparing ${linkLabel} for database integration with fields: ${dataCollectionFields}`);
      
      // In a real implementation, you might initialize a form or connection to a database
      // For example, create a sessionStorage item to track that this emergency feature was accessed
      sessionStorage.setItem('emergency_access', JSON.stringify({
        feature: analyticsId || linkLabel,
        timestamp: new Date().toISOString(),
        fields: dataCollectionFields
      }));
    }
  };

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  // Toggle expanded/collapsed state for items with children
  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
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

  // Render child items for a parent menu item
  const renderChildItems = (children, parentId) => {
    if (!children || children.length === 0) return null;
    
    // Add special handling for accessibility section
    const isAccessibilitySection = parentId === '14'; // ID for Accessibility section
    
    return (
      <Collapse 
        in={expandedItems[parentId]} 
        timeout="auto" 
        unmountOnExit
        id={`section-collapse-${parentId}`}
        aria-labelledby={`section-heading-${parentId}`}
      >
        <List 
          component="div" 
          disablePadding 
          className={classes.nestedList}
          aria-label={isAccessibilitySection ? "Accessibility options" : undefined}
          role={isAccessibilitySection ? "group" : undefined}
        >
          {children.map((child, index) => (
            <SidebarLink
              key={`${parentId}-child-${index}`}
              location={location}
              isSidebarOpened={isSidebarOpenedWrapper}
              link={child.link}
              label={child.label}
              icon={child.icon || null} // Use child icons if available
              index={index}
              isNested={true}
              toggleDrawer={toggleDrawer(true)}
              role="menuitem"
              tabIndex={0}
              aria-label={child.description || child.label}
              aria-current={location.pathname === child.link ? 'page' : undefined}
              data-testid={`sidebar-link-${parentId}-child-${index}`}
              isTouch={isMobile}
              onClick={() => trackSidebarAnalytics(child.analyticsId, child.label, child.dbPrepared || false, child.dataCollectionFields || [])}
              className={classes.nestedItem}
            />
          ))}
        </List>
      </Collapse>
    );
  };

  // Group links by section for better organization
  const renderSidebarItems = () => {
    return structure.map(link => {
      // Convert ID to string for comparison purposes
      const linkId = String(link.id);
      
      // Special handling for accessibility section
      const isAccessibilitySection = linkId === '14'; // ID for Accessibility section
      
      // Skip title and divider types
      if (link.type === 'title' || link.type === 'divider') {
        return (
          <SidebarLink
            key={linkId}
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            {...link}
            toggleDrawer={toggleDrawer(true)}
            role={undefined}
            tabIndex={-1}
            aria-hidden={true}
            data-testid={`sidebar-section-${linkId}`}
          />
        );
      }
      
      // Handle items with children differently
      const hasChildren = link.children && link.children.length > 0;
      
      const onItemClick = (e, link) => {
        // If this is a direct action item and has a directActionAttr
        if (link.directAction && link.directActionAttr) {
          e.preventDefault();
          return handleDirectAction(link.directActionAttr, link.analyticsId, link.label);
        }
        
        // Handle items with children
        if (hasChildren && isSidebarOpenedWrapper) {
          e.preventDefault();
          toggleExpanded(linkId);
        } else {
          // Track analytics with database preparation
          trackSidebarAnalytics(
            link.analyticsId, 
            link.label, 
            link.dbPrepared || false, 
            link.dataCollectionFields || []
          );
          
          // Close sidebar on mobile
          if (!isPermanent) {
            toggleSidebar(layoutDispatch);
          }
        }
      };
      
      // If it's an emergency item, wrap it with the emergency container
      if (link.isEmergency) {
        return (
          <Box key={linkId} className={classes.emergencyContainer}>
            <SidebarLink
              location={location}
              isSidebarOpened={isSidebarOpenedWrapper}
              {...link}
              toggleDrawer={toggleDrawer(true)}
              role="menuitem"
              tabIndex={0}
              aria-label={link.description || link.label}
              aria-current={location.pathname === link.link ? 'page' : undefined}
              aria-expanded={hasChildren ? Boolean(expandedItems[linkId]) : undefined}
              aria-haspopup={hasChildren ? true : undefined}
              aria-disabled={link.disabled === true}
              data-testid={`sidebar-link-${linkId}`}
              isTouch={isMobile}
              onClick={(e) => onItemClick(e, link)}
            >
              {hasChildren && isSidebarOpenedWrapper && (
                <ListItemSecondaryAction className={classes.expandIcon}>
                  <IconButton 
                    edge="end" 
                    aria-label={expandedItems[linkId] ? "Collapse" : "Expand"}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(linkId);
                    }}
                    size="small"
                    className={classes.expandIconButton}
                  >
                    {expandedItems[linkId] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </SidebarLink>
            {hasChildren && renderChildItems(link.children, linkId)}
          </Box>
        );
      }
      
      // For regular items
      return (
        <React.Fragment key={linkId}>
          <SidebarLink
            location={location}
            isSidebarOpened={isSidebarOpenedWrapper}
            {...link}
            toggleDrawer={toggleDrawer(true)}
            role="menuitem"
            tabIndex={0}
            aria-label={link.description || link.label}
            aria-current={location.pathname === link.link ? 'page' : undefined}
            aria-expanded={hasChildren ? Boolean(expandedItems[linkId]) : undefined}
            aria-haspopup={hasChildren ? true : undefined}
            aria-disabled={link.disabled === true}
            data-testid={`sidebar-link-${linkId}`}
            isTouch={isMobile}
            onClick={(e) => onItemClick(e, link)}
          >
            {hasChildren && isSidebarOpenedWrapper && (
              <ListItemSecondaryAction className={classes.expandIcon}>
                <IconButton 
                  edge="end" 
                  aria-label={expandedItems[linkId] ? "Collapse" : "Expand"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded(linkId);
                  }}
                  size="small"
                  className={classes.expandIconButton}
                >
                  {expandedItems[linkId] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </SidebarLink>
          {hasChildren && renderChildItems(link.children, linkId)}
        </React.Fragment>
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
