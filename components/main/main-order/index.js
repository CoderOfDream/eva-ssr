import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import FirstStep from "../../../public/main/first-step.gif";
// import FirstStepActive from "../../../public/main/first-step-active.png";
// import SecondStep from "../../../public/main/second-step.gif";
import Home from '@material-ui/icons/Home';
// import SecondStepActive from "../../../public/main/second-step-active.gif";
import { Fade, Bounce, Slide } from "react-awesome-reveal";
import React from "react";
import { useStyles } from "./style";
import { cards } from "./cards";
import DetailsButton from "../../details-button";

export default function MainOrder() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item container xs={12} sm={5} alignItems="center">
            <Grid display="flex" alignItems="between" flexDirection="column" height="100%">
              <Slide duration={1300} >
                <Typography component="h1" className={classes.mainTitle}>
                  Indywidualnie dopasowane dywaniki samochodowe EVA
                </Typography>
              </Slide>
              <Typography component="p" className={classes.description}>
                Dla tych, którzy cenią sobie czystość w samochodzie, funkcjonalność i autentyczne wzornictwo
              </Typography>
              <Slide direction="up" duration={1300}>
                <DetailsButton text="Wybierz swój komplet"/>
              </Slide>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Carousel
              autoPlay={false}
              timeout={0}
              navButtonsAlwaysInvisible={true}
              IndicatorIcon={<Image src={FirstStep} width={30} height={30}/>} // Previous Example
              activeIndicatorIcomButtonProps={{
                style: {
                  width: '300px' // 2
                }
              }}
            >
              <Image src="/main/main.png" width={600} height={435} alt="" loading="eager" priority/>
              <Image src="/main/main2.png" width={600} height={435} alt="" loading="eager" priority/>
            </Carousel>
          </Grid>
          <Grid container display="flex" width="100%" style={{ marginTop: "60px" }}>
            {
              cards.map(({ src, alt, topText, bottomText }, i) =>
                <Grid container item sm={4} display="flex" justify="center" key={i}>
                  <Box className={classes.mainInfoContainer} xs={12}>
                    <Box className={classes.image}>
                      <Image
                        src={src}
                        width={68}
                        height={68}
                        alt={alt}
                        loading="eager"
                      />
                    </Box>
                    <Slide direction="right" duration={1300}>
                      <Box className={classes.info}>
                        <span>{topText}</span>
                        <p>{bottomText}</p>
                      </Box>
                    </Slide>
                  </Box>
                </Grid>)
            }
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}