import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import { Slide } from "react-awesome-reveal";

export default function MadeInPoland() {
  const classes = useStyles();

  return (
    <>
      <section style={{ margin: "100px 0 60px 0" }} className={classes.main}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
                <Typography component="h1" className={classes.mainTitle}>
                  Ręcznie szyte w Polsce
                </Typography>
                <Typography component="p" className={classes.description}>
                  Dywaniki EVA są wykonywane ręcznie w naszym zakładzie produkcyjnym w samym sercu Warszawy. Produkcja
                  pełnego zestawu dywaników samochodowych od podstaw trwa do 5 dni roboczych. Aby zapewnić najwyższą
                  jakość, nasz wewnętrzny zespół kontroli produktów sprawdza każdy dywanik pod kątem ewentualnych wad i
                  przeprowadza testy funkcjonalne przed dostawą.
                </Typography>
                <Slide duration={1300} direction="up">
                  <DetailsButton text="Wybierz swój komplet"/>
                </Slide>
              </Box>
            </Grid>
            <Grid container item xs={12} sm={5} display="flex" justify="center">
              <Image src="/main/Handmade-in-Poland.png" width={428} height={407} alt="Quality of Materials"/>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}
