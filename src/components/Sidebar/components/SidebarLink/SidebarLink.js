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
    }
  );

  if (!children && ext)
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
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={listItemClasses}
            disableRipple
            {...props}
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
          </ListItem>
        )}
      </>
    );

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
            disableRipple
            {...props}
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

  if (children) {
    return (
      <>
        {linkWithTooltip(
          <ListItem
            button
            component={Link}
            onClick={toggleCollapse}
            className={classnames(listItemClasses, classes.nestedLink)}
            to={link}
            disableRipple
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
              className={classnames(classes.expand, {
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
            className={classes.nestedMenu}
          >
            <List component="div" disablePadding>
              {children.map(childrenLink => (
                <SidebarLink
                  key={childrenLink.label}
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
