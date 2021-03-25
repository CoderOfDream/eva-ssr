import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
  },
  nav: {
    marginLeft: "234px",
    "@media (max-width: 900px)": {
      margin: "0 auto",
    },
  }
}))