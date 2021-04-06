import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import {Animated} from "react-animated-css";
import Button from "@material-ui/core/Button";

export default function PayForQuality() {
    const classes = useStyles();
    const {button} = useStyles();

    return (
        <>
            <section className={classes.main}>
                <Container maxWidth="md">
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Typography component="h1" className={classes.mainTitle}>
                            Płacisz za najwyższą jakość, autentyczność i wyjątkową wydajność
                        </Typography>
                        <Typography component="p" className={classes.description}>
                            Stwórz swój własny oryginalny wygląd dywanika, odkrywając paletę kolorów materiałów
                            polimerowych
                            i lamówek
                        </Typography>
                        <Box>
                            <Image
                                src="/main/you-are-paying-us-money.png"
                                width={824}
                                height={171}
                                alt="eco package"
                            />
                        </Box>
                        <Animated animationIn="fadeInUp" duration={1300} isVisible={true}>
                            <Button className={button}>Stwórz swoje dywaniki</Button>
                        </Animated>
                    </Grid>
                </Container>
            </section>
            <style jsx global>{`
                  .qualityImage {
                    padding: 3px 25px 59px 0px !important
                  }
                   `}</style>
        </>
    )
}
