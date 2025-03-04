import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  headerPaper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    backgroundColor: '#2196f3',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
    '@media (prefers-reduced-data: reduce)': {
      boxShadow: 'none',
    },
  },
  headerIcon: {
    fontSize: 48,
    marginRight: theme.spacing(2),
    color: 'white',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 600,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
    '@media (prefers-reduced-data: reduce)': {
      fontSize: 24,
    },
  },
  pageDescription: {
    fontSize: 16,
    marginTop: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.9)',
  },
  tabsContainer: {
    marginBottom: theme.spacing(3),
  },
  tabs: {
    minHeight: 48,
    '& .MuiTabs-indicator': {
      height: 3,
      backgroundColor: theme.palette.primary.main,
    },
  },
  tab: {
    minHeight: 48,
    padding: theme.spacing(1.5),
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
    '@media (prefers-reduced-data: reduce)': {
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
    },
  },
  sectionIcon: {
    fontSize: 32,
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  formControl: {
    margin: theme.spacing(1, 0),
    '& .MuiFormLabel-root': {
      fontSize: 16,
    },
  },
  select: {
    minHeight: 48,
    '& .MuiSelect-select': {
      padding: theme.spacing(1.5),
      fontSize: 16,
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
  },
  switch: {
    '& .MuiSwitch-switchBase': {
      padding: 12,
    },
    '& .MuiSwitch-thumb': {
      width: 24,
      height: 24,
    },
    '& .MuiSwitch-track': {
      borderRadius: 16,
      opacity: 0.8,
    },
  },
  formControlLabel: {
    display: 'flex',
    marginBottom: theme.spacing(1.5),
    '&:focus-within': {
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
      borderRadius: 4,
    },
    minHeight: 48,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      borderRadius: 4,
    },
  },
  optionIcon: {
    fontSize: 24,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  previewBox: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    borderRadius: 4,
  },
  previewPaper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  // Visual settings classes
  highContrast: {
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #fff',
  },
  lowContrast: {
    backgroundColor: '#f9f9f9',
    color: '#666',
  },
  largeFont: {
    fontSize: 20,
  },
  smallFont: {
    fontSize: 14,
  },
  // Reading preferences classes
  wideSpacing: {
    lineHeight: 1.8,
  },
  tightSpacing: {
    lineHeight: 1.2,
  },
  // Input methods classes
  largeButton: {
    padding: theme.spacing(1.5, 3),
    fontSize: 18,
    minHeight: 48,
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  actionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.spacing(2),
    margin: theme.spacing(3, 0),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
  actionButton: {
    minHeight: 48,
    fontSize: 16,
    padding: theme.spacing(1, 3),
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
  },
  successMessage: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
    },
  },
  academicNote: {
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.info.light, 0.1),
    borderLeft: `4px solid ${theme.palette.info.main}`,
    marginBottom: theme.spacing(2),
  },
  noteIcon: {
    fontSize: 24,
    marginRight: theme.spacing(1),
    color: theme.palette.info.main,
  },
  // Utility classes for a11y enhancement
  visuallyHidden: {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)',
    whiteSpace: 'nowrap',
  },
  focusHighlight: {
    '&:focus-visible': {
      outline: `3px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    },
  },
  touchTarget: {
    minHeight: 48,
    minWidth: 48,
  },
})); 