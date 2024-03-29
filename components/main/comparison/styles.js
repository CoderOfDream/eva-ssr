import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    marginTop: "100px",
    color: "#0c0c0c",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "28px",
    fontWeight: "800",
    textShadow: "0px 0px 0px rgb(0 0 0 / 30%)",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "0",
    "@media (max-width: 900px)": {
      marginTop: 0
    }
  },
  text: {
    margin: "0 auto"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "33%",
    "& p": {
      padding: "8px 0"
    }
  },
  container: {
    marginTop: "100px",
  },
  containerGrid: {
    display: "flex",
    maxWidth: "1140px",
    margin: "120px auto 0 auto",
    "@media (max-width: 900px)": {
      display: "block"
    }
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
  hideCompare: {
    width: "33%",
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  wrapper: {
    width: "33%"
  }
}))