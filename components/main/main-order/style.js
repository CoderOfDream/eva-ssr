import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  item: {
    marginTop: 12,
    "@media (max-width: 900px)": {
      marginLeft: 56,
    },
  },
  button: {
    marginTop: "59px",
    "@media (max-width: 900px)": {
      margin: 0,
      padding: "20px 30px",
      fontSize: "18px !important"
    },
    "& button": {
      "@media (max-width: 900px)": {
        margin: 0,
        padding: "20px 30px",
        fontSize: "18px !important"
      }
    }
  },
  mainTitle: {
    color: "#262626",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "38px",
    fontWeight: 800,
    marginTop: "43px",
    "@media (max-width: 900px)": {
      textAlign: "center",
      fontSize: "26px"
    }
  },
  description: {
    color: "rgba(2, 1, 1, 0.86)",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "1.8",
    margin: "40px 0",
    "@media (max-width: 900px)": {
      textAlign: "center",
      fontSize: "12px",
      margin: "5px auto",
      width: "240px"
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
    display: "flex",
    "&.img": {
      padding: "20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "center"
    },
    "&:nth-child(1)": {
      marginLeft: "67px",
      "@media (max-width: 900px)": {
        marginLeft: 1
      }
    },
    "&:nth-child(2)": {
      marginLeft: "120px",
      "@media (max-width: 900px)": {
        marginLeft: 1
      }
    },
    "&:nth-child(3)": {
      marginLeft: "68px",
      "@media (max-width: 900px)": {
        marginLeft: 1
      }
    }
  },
  image: {
    padding: "10px 12px 10px 10px"
  },
  info: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "22px",
    margin: "-6px -13px 0 0",
    "& p": {
      margin: 0,
      fontWeight: "bold",
      textAlign: "left",
      fontSize: "14px"
    },
    "& span": {
      fontSize: "14px"
    }
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "96px",
    backgroundAttachment: "fixed",
    "@media (max-width: 900px)": {
      marginTop: 40
    }
  },
  descriptionWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: "52px",
    "@media (max-width: 900px)": {
      marginTop: 0
    }
  }
}))