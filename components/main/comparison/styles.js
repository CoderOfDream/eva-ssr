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
    textAlign: "center"
  },
  text: {
    margin: "0 auto"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      padding: "20px 0"
    }
  },
  container: {
    marginTop: "100px",
  },
  containerGrid: {
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
  }
}))