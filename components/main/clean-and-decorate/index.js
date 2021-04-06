import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import DetailsButton from "../../details-button";
import {Animated} from "react-animated-css";

export default function CleanAndDecorate() {
    const classes = useStyles();

    return (
        <>
            <section style={{margin: "100px 0 60px 0"}} className={classes.main}>
                <Container maxWidth="md" style={{marginTop: "128px"}}>
                    <Box className={classes.wrapper} spacing={3}>
                        <Box item className={classes.leftBlock}>
                            <Image
                                src="/main/steps/1.png"
                                width={624}
                                height={330}
                                alt="Quality of Materials"
                            />
                        </Box>
                        <Box className={classes.rightBlock}>
                            <Box display="flex" alignItems="between" justify="space-around" flexDirection="column"
                                 height="100%">
                                <Typography component="h1" className={classes.mainTitle}>
                                    Stwórz idealną czystość i wzbogać wnętrze swojego samochodu
                                </Typography>
                                <Animated animationIn="fadeInUp" duration={1300} isVisible={true}>
                                    <DetailsButton style={{
                                        marginLeft: "12px",
                                        marginTop: "56px"
                                    }} text="Skonfiguruj swój komplet"/>
                                </Animated>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section>
        </>
    )
}
