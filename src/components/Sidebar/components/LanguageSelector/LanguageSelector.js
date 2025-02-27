import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { ExpandMore, Language } from '@mui/icons-material';
import useStyles from './styles';
import { useLanguage } from '../../../../context/LanguageContext';

export default function LanguageSelector({ isOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  
  // Use the language context
  const { language, changeLanguage, availableLanguages, t } = useLanguage();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    handleClose();
  };

  // Current language details
  const currentLanguage = availableLanguages.find(lang => lang.code === language);
  
  // Flag emoji mapping
  const flagEmojis = {
    en: '🇬🇧',
    lg: '🇺🇬',
    sw: '🇹🇿'
  };

  if (!isOpen) {
    return (
      <Tooltip 
        title="Change language" 
        placement="right"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          className={classes.iconButton}
          aria-label="Select language"
          onClick={handleClick}
          aria-controls="language-menu"
          aria-haspopup="true"
          size="large"
          role="button"
          data-testid="language-selector-button"
        >
          <Language fontSize="large" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <div className={classes.root} aria-label="Language selection menu">
      <Button
        className={classes.languageButton}
        onClick={handleClick}
        endIcon={<ExpandMore />}
        startIcon={<Language />}
        aria-haspopup="true"
        aria-controls="language-menu"
        aria-expanded={Boolean(anchorEl)}
        aria-label={`Current language: ${currentLanguage?.name || 'English'}`}
        size="large"
        role="button"
        data-testid="language-selector-expanded"
      >
        <Typography className={classes.languageText}>
          {flagEmojis[language] || ''} {currentLanguage?.name || 'English'}
        </Typography>
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
        aria-label="Language selection options"
        role="menu"
      >
        {availableLanguages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === language}
            onClick={() => handleLanguageSelect(lang.code)}
            className={classes.menuItem}
            role="menuitem"
            aria-label={`Select ${lang.name} language`}
            data-testid={`language-option-${lang.code}`}
          >
            <ListItemIcon className={classes.flagIcon}>
              <span role="img" aria-label={lang.name} aria-hidden="false">
                {flagEmojis[lang.code] || ''}
              </span>
            </ListItemIcon>
            <ListItemText primary={lang.name} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
} 