import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    padding: "20px 40px",
    color: "white",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "20px",
    fontWeight: 800,
    textTransform: "none",
    fontStyle: "normal",
    lineHeight: "28px",
    letterSpacing: 0,
    textShadow: "0px 0px 10px rgb(0 0 0 / 30%)",
    backgroundColor: "#990000",
    boxShadow: "1px 9px 6px 0px rgb(186 115 115 / 50%)",
    "@media (max-width: 900px)": {
      width: "100%"
    },
    "&:hover": {
      backgroundColor: "#c73131"
    }
  },
}))