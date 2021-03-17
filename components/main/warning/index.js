import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import { Slide } from "react-awesome-reveal";

export default function Warning() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={6} justify="center">
            <Box style={{ margin: "15px 0 0 0" }}>
              <Image
                src="/main/warning.jpeg"
                width={454}
                height={340}
                alt="Quality of Materials"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
              <Typography component="h1" className={classes.mainTitle}>
                Uwaga! Uważaj na podróbki!
              </Typography>
              <Typography component="p" className={classes.description}>
                Kilka firm i osób prywatnych na platformach e-commerce (Allegro, OLX.pl, Ebay, Amazon) pozycjonujących
                swoje produkty jako dywaniki z Octanu etylenowo-winylowego stosują tanie Chińskie materiały wykonane z
                komponentów o niskiej jakości w celu obniżenia cen. Zakup od nich może skutkować skróceniem
                oczekiwanej żywotności dywanika, a także odchyleniami pożądanych cech funkcjonalnych, a mianowicie
                wytrzymałości, odporności na ścieranie i zdolności zatrzymywania, co z kolei może prowadzić do
                gromadzenia się wody i brudu wewnątrz samochodu. W związku z tym zalecamy dokonanie zakupów tylko od
                oficjalnych zaufanych producentów, którzy działają uczciwie i oferują Certyfikaty Gwarancji.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
