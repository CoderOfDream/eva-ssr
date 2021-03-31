import { makeStyles } from "@material-ui/core"
import React from "react"

export const useStyles = makeStyles(() => ({
  // hideNavbar: {
  //   maxHeight: "0 !important",
  //   overflow: 'hidden',
  //   transition: "max-height 0.5s ease-out"
  // },
  "nav": {
    background: "#0c0c0c",
    maxWidth: "100%",
    // maxHeight: "100%",
    // transition: "max-height 0.25s ease-in",
    "& ul": {
      padding: 0,
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      "& li": {
        listStyle: "none",
        padding: "13px 20px",
        maxWidth: "100%",
        "& a": {
          padding: "13px 20px",
          textDecoration: "none",
          fontSize: "14px",
          fontFamily: "Montserrat, Sans-serif",
          fontWeight: 600,
          color: "white",

        },
      }
    }
  },
  active: {
    color: "#CE2B2B !important",
    fontWeight: "bold !important"
  }
}))