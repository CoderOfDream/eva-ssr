import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#0C0C0C",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "28px",
    fontWeight: 800,
    margin: "50px 0",
    textAlign: "center"
  },
  container: {
    boxShadow: "0px 0px 12px 0px rgb(0 0 0 / 33%)"
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
  row: {
    borderStyle: "solid",
    borderWidth: "0px 0px 01px 0px",
    borderColor: "rgba(198,198,198,0.36)",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    flexWrap: "nowrap",
    "@media (max-width: 900px)": {
      flexWrap: "wrap",
    }
  }
}))