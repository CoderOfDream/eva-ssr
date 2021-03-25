import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#0C0C0C",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    margin: "81px 0 18px 0",
    textShadow: "0px 0px 0px rgb(0 0 0 / 30%)",
    "@media (max-width: 900px)": {
      textAlign: "center"
    }
  },
  rombContainer: {
    "@media (max-width: 900px)": {
      flexDirection: "column-reverse"
    },
    "& p": {
      padding: "3px 0 0 17px",
      fontSize: "14px",
      lineHeight: "1.4",
      margin: 0
    }
  },
  rombsImg: {
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  meshDescriptionTitle: {
    fontWeight: "bold",
    fontFamily: "Montserrat, Sans-serif",
    margin: 18,
    fontSize: "28px"
  },
  mainInfoContainer: {
    display: "flex",
    flexDirection: "column",
    "&.img": {
      padding: "20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "center"
    }
  },
  image: {
    margin: "10px auto 8px auto"
  },
  info: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& h2": {
      fontFamily: "Montserrat, Sans-serif",
      margin: "0 0 10px 0",
      fontWeight: "bold",
      height: "40px",
      fontSize: "20px",
      lineHeight: 1
    },
    "& p": {
      fontWeight: 400,
      fontSize: "14px",
      color: "#3F3F3F",
      lineHeight: "1.7"
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