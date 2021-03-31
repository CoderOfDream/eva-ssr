import { makeStyles } from "@material-ui/core";
import React from "react";

export const useStyles = makeStyles(() => ({
    a: {
      padding: "13px 20px",
      whiteSpace: "nowrap",
      color: "white"
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justify: "center",
      height: "100%",
      marginLeft: "15px"
    },
    menuButton: {
      whiteSpace: "nowrap",
      color: "white",
      textDecoration: "none",
      fontFamily: "Montserrat, Sans-serif",
      fontWeight: 800,
      size: "14px",
      fontSize: "14px",
      borderRadius: "0",
      width: "100%",
      textTransform: "none",
      padding: "13px 20px",
      "&:hover": {
        color: "#CE2B2B",
        boxShadow: "0 5px 0px 0px #CE2B2B"
      },
      "&-active": {
        color: "#CE2B2B",
        boxShadow: "0 5px 0px 0px #CE2B2B",
        fontWeight: "bold"
      }, "&:nth-last-child(1)": {
        paddingRight: 0
      }
    }
    ,
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "40px"
    },
    drawerContainer: {
      padding: "20px 30px"
    },
    orderButton: {
      fontFamily: "Montserrat, Sans-serif",
      fontWeight: "bold",
      backgroundColor: "#990000",
      borderRadius: "100px 100px 100px 100px",
      color: "white",
      whiteSpace: "nowrap",
      fontSize: "15px",
      height: "44px",
      width: "192px",
      cursor: "pointer",
      outline: "none",
      border: "none",
      marginLeft: "173px",
      "&:hover": {
        background: "#990000"
      }
    }
  }))
;