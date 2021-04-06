import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#262626",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: "40px",
    marginTop: "-10px",
    letterSpacing: 0,
  },
  description: {
    color: "rgba(2, 1, 1, 0.86)",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    margin: "22px 0 93px 0",
    lineHeight: "1.8",
    "@media (max-width: 900px)": {
      width: "100%"
    },
  },
  wrapper: {
    marginLeft: "38px"
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "121px",
    backgroundAttachment: "fixed",
  }
}))