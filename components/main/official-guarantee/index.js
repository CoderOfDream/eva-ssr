import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import cards from "./cards";

export default function OfficialGuarantee() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box className={classes.mainInfo}>
              <Box>
                <Image src="/main/shield.png" width="60" height="73"/>
              </Box>
              <Typography component="h3" className={classes.mainTitle}>Oficjalna Gwarancja</Typography>
            </Box>
            <Typography component="p" className={classes.description}>
              Jeśli w ciągu <b>6 miesięcy</b> coś pójdzie nie tak (a Warunki Gwarancji są spełnione), wymienimy Twój zestaw
              dywaników.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.mainInfoContainerWrapper}>
            {
              cards.map(({ src, label }, i) =>
                <Box className={classes.mainInfoContainer} xs={12} display="flex" key={i}>
                  <Box className={classes.image}>
                    <Image
                      src={src}
                      width="46px"
                      height="63px"
                      alt=""
                    />
                  </Box>
                  <Typography component="p" className={classes.label}>{label}</Typography>
                </Box>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
