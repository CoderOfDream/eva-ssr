import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  kek: {
    minWidth: "18%",
    padding: "10px",
    "@media (max-width: 900px)": {
      minWidth: "40%"
    }
  },
  mainTitle: {
    color: "#0C0C0C",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "28px",
    fontWeight: 800,
    margin: "7px auto 12px auto",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "19px",
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
  row: {
    display: "flex",
    width: "50%",
    fontSize: "14px",
    borderStyle: "solid",
    borderWidth: "0px 0px 01px 0px",
    borderColor: "rgba(198,198,198,0.36)",
    transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
    flexWrap: "nowrap",
    "& p": {
      flexDirection: "column",
    },
    "@media (max-width: 900px)": {
      flexWrap: "wrap",
    }
  },
  description: {
    color: "#0c0c0c",
    fontFamily: "Montserrat, Sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    margin: "0 0 0 95px",
    "@media (max-width: 900px)": {
      margin: 0,
      textAlign: "center"
    }
  }
}))