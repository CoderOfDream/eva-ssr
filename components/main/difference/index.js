import Container from "@material-ui/core/Container";
import React from "react";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Met from "./components/mat";
import { cards } from "./cards";
import Box from "@material-ui/core/Box";
import { Fade } from "react-awesome-reveal";

export default function Difference() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Fade duration={1500}>
          <Typography component="h1" className={classes.mainTitle}>
            Czym różnią się dywaniki EVA od tych, które obecnie masz w samochodzie?
          </Typography>
        </Fade>
      </Container>
      <div className={classes.container}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid container xs={6} display="flex" className={classes.row}>
              <Box style={{ width: "114px" }}>
              </Box>
              <p className={classes.description}>Zwykłe dywaniki samochodowe</p>
            </Grid>
            <Grid container xs={6} display="flex" className={classes.row}>
              <Box style={{ width: "114px" }}>
              </Box>
              <p className={classes.description}>Dywaniki samochodowe EVA</p>
            </Grid>
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
