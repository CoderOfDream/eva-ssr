import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#262626",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: "1",
    marginTop: "17px",
    textAlign: "center"
  },
  description: {
    color: "rgba(2, 1, 1, 0.86)",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    margin: "44px 0 43px 0",
    lineHeight: "1.8",
    "@media (max-width: 900px)": {
      width: "100%"
    },
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // marginTop: "121px",
    backgroundAttachment: "fixed",
  },
  button: {
    padding: "15px 30px",
    marginTop: "36px",
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