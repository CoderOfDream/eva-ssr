import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#990000",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "31px",
    fontWeight: 800,
    lineHeight: "40px",
  },
  description: {
    color: "rgba(2, 1, 1, 0.86)",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    margin: "20px 0 50px 0",
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
  }
}))