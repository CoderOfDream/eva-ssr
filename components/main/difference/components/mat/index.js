import Image from "next/image";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../styles";
import Box from "@material-ui/core/Box";

export default function Met({ src, text }) {
  const classes = useStyles();

  return (
    <Grid container xs={6} display="flex" className={classes.row}>
      <Box style={{width: "114px"}}>
        <Image
          src={src}
          width={91}
          height={91}
          alt=""
          loading="eager"
        />
      </Box>
      <p>{text}</p>
    </Grid>
  )
}