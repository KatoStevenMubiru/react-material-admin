import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  TextField as Input,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  Inbox as InboxIcon,
  ExpandMore as ExpandIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// styles
import useStyles from './styles';
// Get main sidebar styles for the emergency button
import sidebarStyles from '../../styles';

// components
import Dot from '../Dot';
import {Button, Badge, Link as LinkMaterial} from '../../../Wrappers';

export default function SidebarLink({
  link,
  ext,
  icon,
  label,
  children,
  location,
  isSidebarOpened,
  nested,
  type,
  toggleDrawer,
  click,
  description,
  badge,
  badgeColor,
  isEmergency,
  isTouch,
  directAction,
  directActionAttr,
  dbPrepared,
  dataCollectionFields,
  ...props
}) {
  // local
  let [isOpen, setIsOpen] = useState(false);
  // Add Section Popover state
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Login page onClick
  function onLogin() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  onLogin.clickName = 'onLogin';

  // Get styles once at the component top level
  const classes = useStyles();
  const mainClasses = sidebarStyles();
  let isLinkActive =
    link && (location.pathname === link || location.pathname.includes(link));

  // Check if link has hash for direct section navigation
  const hasHashLink = link && link.includes('#');

  if (type === 'title')
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened,
        })}
        variant="overline"
        aria-hidden={!isSidebarOpened}
      >
        {label}
      </Typography>
    );

  if (type === 'divider') return <Divider className={classes.divider} role="separator" aria-orientation="horizontal" />;

  if (type === 'margin') return <section style={{ marginTop: 240 }} aria-hidden="true" />;

  // Add Section Popover
  const open = Boolean(anchorEl);
  const id = open ? 'add-section-popover' : undefined;

  function addSectionClick(event) {
    setAnchorEl(event.currentTarget);
  }

  addSectionClick.clickName = 'addSectionClick';

  const addSectionClose = () => {
    setAnchorEl(null);
  };

  // Link with description tooltip
  const linkWithTooltip = (content) => (
    description && isSidebarOpened ? (
      <Tooltip 
        title={description} 
        placement="right"
        classes={{ tooltip: mainClasses.descriptionTooltip }}
        arrow
        enterDelay={200}
        leaveDelay={0}
        aria-label={`${label} - ${description}`}
      >
        {content}
      </Tooltip>
    ) : content
  );

  // Apply touch-friendly class for mobile
  const touchClass = isTouch ? mainClasses.touchFriendly : '';
  
  // Create proper classes for list item - fixes white background issue
  const listItemClasses = classnames(
    classes.link, 
    touchClass,
    {
      [classes.linkActive]: isLinkActive,
      [mainClasses.emergencyButton]: isEmergency,
      [mainClasses.nestedLink]: nested,
      [mainClasses.directActionItem]: directAction,
    }
  );

  // Focus visible class for keyboard navigation
  const focusVisibleClass = mainClasses.focusVisible || '';

  // External link or direct action item
  if ((!children && ext) || directAction) {
    // Determine link attribute for direct action items (like tel: links)
    const linkAttr = directAction ? directActionAttr : link;
    const linkTarget = directAction ? '_self' : '_blank';
    const linkRel = directAction ? undefined : 'noopener noreferrer';
    
    return (
      <>
        {linkWithTooltip(
          <ListItem
            button
            component="a"
            onClick={(e) => {
              if (click) {
                return click(e, addSectionClick, onLogin);
              }
              return toggleDrawer(e);
            }}
            href={linkAttr}
            target={linkTarget}
            rel={linkRel}
            className={listItemClasses}
            classes={{
              focusVisible: focusVisibleClass
            }}
            disableRipple
            data-testid={`sidebar-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            data-emergency={isEmergency ? 'true' : undefined}
            data-direct-action={directAction ? 'true' : undefined}
            data-action-type={directAction ? directActionAttr.split(':')[0] : undefined}
            data-db-prepared={dbPrepared ? 'true' : undefined}
            role="menuitem"
            aria-label={description || label}
            aria-current={isLinkActive ? 'page' : undefined}
            aria-haspopup={directAction ? 'true' : undefined}
            aria-expanded={directAction ? 'false' : undefined}
            {...props}
          >
            <ListItemIcon
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive,
                [classes.emergencyIcon]: isEmergency,
              })}
              aria-hidden="true"
            >
              {icon || <InboxIcon />}
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classnames(classes.linkText, {
                  [classes.linkTextHidden]: !isSidebarOpened,
                  [classes.linkTextActive]: isLinkActive,
                  [classes.emergencyText]: isEmergency,
                }),
              }}
              primary={label}
              id={`sidebar-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            />
            {badge && (
              <Badge 
                color={badgeColor || 'secondary'} 
                variant="outlined" 
                badgeContent={badge}
                className={isEmergency ? classes.emergencyBadge : undefined}
                aria-label={`${badge} notifications`}
              />
            )}
            {directAction && (
              <Box className={classes.directActionIndicator} aria-hidden="true" />
            )}
          </ListItem>
        )}
      </>
    );
  }

  // Internal link without children
  if (!children)
    return (
      <>
        {linkWithTooltip(
          <ListItem
            button
            component={Link}
            onClick={(e) => {
              if (click) {
                return click(e, addSectionClick, onLogin);
              }
              return toggleDrawer(e);
            }}
            to={link}
            className={listItemClasses}
            classes={{
              focusVisible: focusVisibleClass
            }}
            disableRipple
            data-testid={`sidebar-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            role="menuitem"
            aria-label={description || label}
            aria-current={isLinkActive ? 'page' : undefined}
            {...props}
          >
            <ListItemIcon
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive,
              })}
              aria-hidden="true"
            >
              {icon || <InboxIcon />}
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classnames(classes.linkText, {
                  [classes.linkTextHidden]: !isSidebarOpened,
                  [classes.linkTextActive]: isLinkActive,
                }),
              }}
              primary={label}
              id={`sidebar-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            />
            {badge && (
              <Badge 
                color={badgeColor || 'secondary'} 
                variant="outlined" 
                badgeContent={badge}
                aria-label={`${badge} notifications`}
              />
            )}
          </ListItem>
        )}
      </>
    );

  function toggleCollapse(e) {
    if (isSidebarOpened) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }

  // Link with children (collapsible)
  if (children) {
    // Ensure children is an array
    const childrenArray = Array.isArray(children) ? children : [children];
    
    return (
      <>
        {linkWithTooltip(
          <ListItem
            button
            component={Link}
            onClick={toggleCollapse}
            className={classnames(listItemClasses, classes.nestedLink)}
            to={link}
            classes={{
              focusVisible: focusVisibleClass
            }}
            disableRipple
            data-testid={`sidebar-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            {...props}
            aria-expanded={isOpen}
          >
            <ListItemIcon
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive,
              })}
            >
              {icon || <InboxIcon />}
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classnames(classes.linkText, {
                  [classes.linkTextHidden]: !isSidebarOpened,
                  [classes.linkTextActive]: isLinkActive,
                }),
              }}
              primary={label}
            />
            {badge && (
              <Badge color={badgeColor || 'secondary'} variant="outlined" badgeContent={badge} />
            )}
            <ExpandIcon
              className={classnames(classes.expand, mainClasses.expandIcon, {
                [classes.expandOpen]: isOpen,
                [classes.expandActive]: isLinkActive,
              })}
              aria-hidden="true"
            />
          </ListItem>
        )}
        {children && (
          <Collapse
            in={isOpen && isSidebarOpened}
            timeout="auto"
            unmountOnExit
            className={classnames(classes.nestedMenu, mainClasses.nestedList)}
          >
            <List component="div" disablePadding>
              {childrenArray.map((childrenLink, index) => (
                <SidebarLink
                  key={childrenLink.label || `child-${index}`}
                  location={location}
                  isSidebarOpened={isSidebarOpened}
                  classes={classes}
                  toggleDrawer={toggleDrawer}
                  nested
                  isTouch={isTouch}
                  {...childrenLink}
                />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return null;
}
