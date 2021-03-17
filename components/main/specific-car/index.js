import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";

export default function SpecificCar() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box display="flex" justify="center" flexDirection="column" alignItems="center">
          <Typography component="h2" className={classes.mainTitle}>
            Wyprodukowane wyłącznie pod konkretne auto
          </Typography>
          <Typography component="h5" className={classes.description}>
            Każdy komplet jest wyprodukowany indywidualnie na naszej fabryce w Warszawie na podstawie ręcznie zebranych
            szablonów podłogowych biorąc pod uwagę wszystkie specyficzne cechy podłogi (m.in. tunele środkowe,
            mocowania,
            wielopoziomowość 3D), szczegóły każdego auta (typ nadwozia, markę, model, rocznik, skrzynię biegów, model
            nadwozia itd)
            oraz życzenia klienta. Oto dlatego nasze dywaniki EVA chronią do 98% podłogi w porównaniu do 60-70%
            chronionych przez oryginalne dywaniki od producenta samochodu.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {
            ["/main/specific-car1.jpg", "/main/specific-car2.jpg", "/main/specific-car3.jpg"].map((src, i) =>
              <Grid container item xs={12} sm={4} display="flex" justify="center" key={i}>
                <Box className={classes.mainInfoContainer} xs={12} display="flex">
                  <Box className={classes.image}>
                    <Image
                      src={src}
                      width="326px"
                      height="326px"
                      alt=""
                    />
                  </Box>
                </Box>
              </Grid>
            )
          }
        </Grid>
      </Container>
    </section>
  )
}
