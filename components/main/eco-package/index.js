import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { Animated } from "react-animated-css";

export default function EcoPackage() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={6} justify="center">
            <Box style={{ margin: "15px 0 0 0" }}>
              <Image
                src="/main/EVAISECO.png"
                width={239}
                height={343}
                alt="eco package"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
              <Animated animationIn="fadeInRight" duration={1300} isVisible={true}>
                <Typography component="h1" className={classes.mainTitle}>
                  Używamy tylko Ekologicznego Opakowania
                </Typography>
              </Animated>
              <Typography component="p" className={classes.description}>
                Firma EVA Dywaniki chce zmniejszyć wpływ swoich opakowań na środowisko i pomóc klientom w dokonywaniu
                bardziej zrównoważonych wyborów. Opakowanie, które używamy do pakowania każdego zamówienia, a także
                większość materiałów eksploatacyjnych wykorzystywanych podczas procesu produkcyjnego są recyklingowane
                lub ekologiczne. Odzwierciedla to nasze wartości i wizję dotyczącą przyszłości, ponieważ dążenie do
                bycia przyjaznymi środowisku jest najmniejsze co możemy zrobić dla naszej Planety.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
