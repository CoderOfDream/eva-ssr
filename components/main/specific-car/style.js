import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "35px",
    "@media (max-width: 900px)": {
      marginTop: 0
    },
  },
  mainTitle: {
    color: "black",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: "40px",
    textAlign: "center",
    "@media (max-width: 900px)": {
      width: "100%",
      marginTop: 0
    },
  },
  container: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  description: {
    color: "black",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    margin: "15px 0",
    padding: "10px",
    lineHeight: "1.6",
    textAlign: "center",
    "@media (max-width: 900px)": {
      width: "100%"
    },
  },
  chooseKitButton: {
    padding: "20px 40px",
    color: "white",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "20px",
    fontWeight: 800,
    textTransform: "none",
    fontStyle: "normal",
    lineHeight: "1.4em",
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
  mainInfoContainer: {
    "&.img": {
      // padding: "20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "center"
    }
  },
  image: {
    // padding: "10px"
  },
  info: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& p": {
      margin: 0,
      fontWeight: "bold"
    }
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "121px"
  }
}))