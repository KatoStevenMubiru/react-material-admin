import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  card: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
    },
  },
  progressSection: {
    marginBottom: theme.spacing(1),
  },
  progressSectionTitle: {
    marginBottom: theme.spacing(1),
  },
  progress: {
    marginBottom: theme.spacing(1),
    backgroundColor: 'rgb(236, 236, 236)',
  },
  pieChartLegendWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: theme.spacing(1),
  },
  legendItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    justifyContent: 'space-between',
    width: '100%',
  },
  fullHeightBody: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  alignStandaloneElement: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tableWidget: {
    overflowX: 'auto',
  },
  progressBar: {
    backgroundColor: theme.palette.warning.main,
  },
  progressBarPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  progressBarWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  performanceLegendWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  legendElement: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  legendElementText: {
    marginLeft: theme.spacing(1),
  },
  serverOverviewElement: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
  },
  serverOverviewElementText: {
    minWidth: 149,
    paddingRight: theme.spacing(2),
  },
  serverOverviewElementChartWrapper: {
    width: '100%',
  },
  mainChartBody: {
    overflowX: 'auto',
  },
  mainChartHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.only('xs')]: {
      flexWrap: 'wrap',
    },
  },
  mainChartHeaderLabels: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      order: 3,
      width: '100%',
      justifyContent: 'center',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  mainChartHeaderLabel: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
  },
  mainChartSelectRoot: {
    borderColor: theme.palette.text.hint + '80 !important',
  },
  mainChartSelect: {
    padding: 10,
    paddingRight: 25,
  },
  mainChartLegendElement: {
    fontSize: '14px !important',
    marginLeft: theme.spacing(1),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  fixIconRight: {
    '& .MuiSelect-icon': {
      right: 4,
    },
  },
  actionsIcon: {
    color: '#76767B',
  },
  centerContent: {
    display: 'flex', 
    justifyContent: 'center', 
    width: '100%',
    marginTop: theme.spacing(2),
  },
  sobrietyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  sobrietyCount: {
    fontSize: '4rem',
    color: theme.palette.primary.main,
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  sobrietyLabel: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  sobrietyButton: {
    padding: theme.spacing(1.5),
    borderRadius: '8px',
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(83, 109, 254, 0.2)',
    '&:hover': {
      boxShadow: '0 6px 14px rgba(83, 109, 254, 0.3)',
    },
  },
  moodContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  moodButton: {
    minWidth: '100px',
    textTransform: 'none',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  supportContactItem: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
  },
  contactName: {
    fontWeight: 600,
  },
  milestoneItem: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'flex-start',
  },
  milestoneIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    borderRadius: '50%',
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneDate: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
  },
  greeting: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    fontSize: {
      xs: '1.8rem',
      sm: '2.2rem',
      md: '2.5rem'
    }
  },
  subGreeting: {
    fontSize: '1.1rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  bigStat: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  bigStatContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  statDescription: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
    fontStyle: 'italic',
    fontSize: '0.95rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6
  },
  taskRow: {
    borderRadius: 8,
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
    }
  },
  supportContact: {
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)'
    }
  },
  emergencyContact: {
    backgroundColor: 'rgba(244, 67, 54, 0.05)',
    border: '1px solid rgba(244, 67, 54, 0.3)'
  },
  milestone: {
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
  milestoneAchieved: {
    backgroundColor: 'rgba(60, 212, 160, 0.05)',
    border: '1px solid rgba(60, 212, 160, 0.3)'
  },
  activityRow: {
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    transition: 'all 0.2s',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)'
    }
  }
}));
