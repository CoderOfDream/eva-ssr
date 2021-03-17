import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import { Slide } from "react-awesome-reveal";

export default function QualityOfMaterials() {
  const classes = useStyles();

  return (
    <>
      <section style={{ margin: "100px 0 60px 0" }} className={classes.main}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
                <Typography component="h1" className={classes.mainTitle}>
                  Najwyższa jakość materiałów
                </Typography>
                <Typography component="p" className={classes.description}>
                  Nasze dywaniki produkujemy wyłącznie z materiałów najwyższej jakości, które przeszły pomyślnie testy
                  wytrzymałości i wydajności. W związku z tym można się spodziewać znakomitej całorocznej wydajności
                </Typography>
                <Slide duration={1300} direction="up">
                  <DetailsButton text="Get to know more"/>
                </Slide>
              </Box>
            </Grid>
            <Grid container item xs={12} sm={5} display="flex" justify="center">
              <Image src="/main/quality-of-materials.png" width={327} height={327} alt="Quality of Materials"/>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={5} justify="center">
            <Box>
              <Image src="/main/car-mats.jpg" width={383} height={383} alt="Quality of Materials"
                     style={{ margin: "0 auto" }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
              <Typography component="h1" className={classes.mainTitle}>
                Idealnie dopasowane dywaniki
              </Typography>
              <Typography component="p" className={classes.description}>
                Wszystkie szablony podłóg samochodowych zbieramy sami, aby zapewnić jak najlepsze dopasowanie naszych
                dywaników. Odpowiednio dobrane dywaniki wykonane z najwyższej jakości materiału nie tylko dobrze
                wyglądają, ale w pełni wykorzystują swoje właściwości użytkowe, co gwarantuje pełną ochronę podłogi
                przed wodą, brudem i kurzem.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
