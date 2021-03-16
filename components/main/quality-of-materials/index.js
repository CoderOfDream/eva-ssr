import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";

export default function QualityOfMaterials() {
  const classes = useStyles();

  return (
    <>
      <section style={{ margin: "100px 0 60px 0" }} className={classes.main}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
                <Typography component="h1" className={classes.mainTitle}>
                  Highest Quality of Materials
                </Typography>
                <Typography component="p" className={classes.description}>
                  We produce only from the highest quality materials which have successfully passed durability and
                  performance tests.
                  Therefore, you can expect a remarkable all-season performance of your mat set
                </Typography>
                <DetailsButton text="Get to know more"/>
              </Box>
            </Grid>
            <Grid container item xs={12} sm={6} display="flex" justify="center">
              <Image src="/main/quality-of-materials.png" width={327} height={327} alt="Quality of Materials"/>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={4} justify="center">
            <Box>
              <Image src="/main/car-mats.jpg" width={383} height={383} alt="Quality of Materials"
                     style={{ margin: "0 auto" }}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
              <Typography component="h1" className={classes.mainTitle}>
                Perfectly sized car mats
              </Typography>
              <Typography component="p" className={classes.description}>
                We collect all car-floor templates ourselves to ensure the best possible fitting of our mats.
                Properly sized rugs made of supreme material do not only look good;
                they utilize their functional characteristics in full what guarantees a complete floor protection from
                water,
                dirt and dust
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
