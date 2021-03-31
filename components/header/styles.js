import { makeStyles } from "@material-ui/core";
import React from "react";

export const useStyles = makeStyles(() => ({
    header: {
      position: 'fixed',
      zIndex: "100",
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: "#0c0c0c",
      padding: "15px 0 15px 0",
      "@media (max-width: 900px)": {
        padding: 0,
        height: "58.8px",
        // maxWidth: "100%",
      }
    },
  }))
;