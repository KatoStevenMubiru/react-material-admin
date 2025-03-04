import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles(theme => ({
  // Page layout
  pageContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2)
    }
  },
  
  // Section styles
  sectionTitle: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  
  sectionSubtitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "500",
    color: theme.palette.text.primary
  },
  
  // Card styles
  card: {
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: theme.shadows[8]
    }
  },
  
  cardHeader: {
    background: alpha(theme.palette.primary.main, 0.05),
    padding: theme.spacing(2)
  },
  
  cardContent: {
    padding: theme.spacing(3),
    flex: "1 1 auto"
  },
  
  // Tab styles
  tabsRoot: {
    marginBottom: theme.spacing(3)
  },
  
  tabRoot: {
    minHeight: 48,
    minWidth: 120,
    fontWeight: "bold"
  },
  
  // Form styles
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  
  formControl: {
    marginBottom: theme.spacing(3),
    width: "100%"
  },
  
  textField: {
    marginBottom: theme.spacing(3),
    "& .MuiInputBase-root": {
      minHeight: 48
    }
  },
  
  // Button styles
  button: {
    minHeight: 48,
    minWidth: 120,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  
  // Color indicators for medication types
  medicationPrimary: {
    backgroundColor: "#ef5350", // High contrast red
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  
  reminderSecondary: {
    backgroundColor: "#2196f3", // High contrast blue
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  
  adherenceSuccess: {
    backgroundColor: "#3CD4A0", // High contrast green
    color: "#fff",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  
  // Progress indicators
  progressContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  
  progressBar: {
    height: 16,
    borderRadius: 8
  },
  
  progressLabel: {
    marginTop: theme.spacing(1),
    fontWeight: "bold"
  },
  
  // List items
  medicationItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.05)
    }
  },
  
  reminderItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.05)
    }
  },
  
  adherenceItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.success.main, 0.05)
    }
  },
  
  // Accessibility
  visuallyHidden: {
    position: "absolute",
    height: 1,
    width: 1,
    overflow: "hidden",
    clip: "rect(1px, 1px, 1px, 1px)"
  },
  
  highContrastMode: {
    // For high contrast mode
    "& .MuiButton-contained": {
      border: "3px solid transparent",
      "&:focus": {
        border: `3px solid ${theme.palette.common.black}`,
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white
      }
    }
  },
  
  // Touch targets
  touchTarget: {
    minHeight: 48,
    minWidth: 48
  },
  
  // Large icons
  largeIcon: {
    fontSize: 48
  },
  
  // Academic-specific styles
  academicSection: {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  
  // Analytics tracking
  analyticsElement: {
    position: "relative"
  }
})); 