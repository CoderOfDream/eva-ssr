import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#990000",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: "1",
    letterSpacing: 0,
  },
  description: {
    color: "rgba(2, 1, 1, 0.86)",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "1.8",
    margin: "34px 0 50px 0",
    "@media (max-width: 900px)": {
      width: "100%"
    },
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "121px"
  },
  wrapper: {
    display: "flex",
    "@media (max-width: 900px)": {
      flexDirection: "column-reverse"
    },
  }
}))