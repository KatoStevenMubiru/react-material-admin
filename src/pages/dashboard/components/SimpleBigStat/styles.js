import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bigStat: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3)
  }
})); 