import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  bottomStatsContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1) * -2,
    marginTop: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  statCell: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'center',
  },
  borderRight: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  totalValueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
  totalValue: {
    display: "flex",
    alignItems: "baseline",
  },
  profitArrow: {
    transform: "rotate(-45deg)",
    fill: theme.palette.success.main,
  },
  profitArrowDanger: {
    transform: "rotate(45deg)",
    fill: theme.palette.error.main,
  },
  selectInput: {
    padding: 10,
    paddingRight: 25,
    "&:focus": {
      backgroundColor: "white",
    },
  },
  statDescription: {
    padding: theme.spacing(0, 2, 2),
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bodyWidgetOverflow: {
    overflow: 'auto'
  }
}));
