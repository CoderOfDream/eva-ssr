import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainInfo: {
    display: "flex",
    alignItems: "center",
    color: "white",
    margin: "30px 0 30px 0"
  },
  section: {
    backgroundColor: "#000000",
    backgroundImage: "url(./main/black-final-scaled.jpg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "100px",
    backgroundAttachment: "fixed",
    "@media (max-width: 900px)": {
      marginTop: 0
    }
  },
  mainTitle: {
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    color: "white",
    lineHeight: "40px",
    textAlign: "center",
    "@media (max-width: 900px)": {
      width: "100%",
      marginTop: 0
    },
    marginLeft: "10px"
  },
  container: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  description: {
    color: "#C1C1C1",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "18px",
    margin: "15px 0",
    "@media (max-width: 900px)": {
      width: "100%"
    }
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
    alignItems: "center",
    "&.img": {
      // padding: "20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "center"
    }
  },
  image: {
    padding: "10px"
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
  },
  label: {
    fontWeight: "ital",
    color: "white",
  }
}))