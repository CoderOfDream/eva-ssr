import Container from "@material-ui/core/Container";
import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Met from "./components/mat";
import { cards } from "./cards";

export default function Difference() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Typography component="h1" className={classes.mainTitle}>
          Czym różnią się dywaniki EVA od tych, które obecnie masz w samochodzie?
        </Typography>
      </Container>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {
              cards.map(([regular, eva]) => (
                <>
                  <Met key={regular.src} text={regular.text} src={regular.src}/>
                  <Met key={eva.src} text={eva.text} src={eva.src}/>
                </>
              ))
            }
          </Grid>
        </Container>
      </div>
    </>
  )
}
