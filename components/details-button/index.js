import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import React from "react";
import { useStyles } from "./style";

export default function DetailsButton({text}) {
  const classes = useStyles();

  return (
    <Box>
      <Button className={classes.button}>{text}</Button>
    </Box>
  )
}