import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import {Animated} from "react-animated-css";

export default function Warning() {
  const classes = useStyles();
  const {wrapper} = useStyles();
  return (
    <>
      <div className="container" style={{marginTop: "121px"}}>
        <Box className={wrapper} spacing={3}>
          <Box justify="flex-start"
                style={{justifyContent: "flex-start", padding: "10px 0 0 0 10px"}}
          >
            <Box style={{ padding: "36px 0 0 10px", minWidth: "454px", justifyContent: "flex-start" }}>
              <Image
                src="/main/warning.jpeg"
                width={454}
                height={340}
                alt="Quality of Materials"
                className="kk-image"
              />
            </Box>
          </Box>
          <div>
            <Box style={{padding: "23px 0 0 28px"}} display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
              <Animated animationIn="fadeInRight" duration={1300} isVisible={true}>
                <Typography component="h1" className={classes.mainTitle}>
                  Uwaga! Uważaj na podróbki!
                </Typography>
              </Animated>
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
          </div>
        </Box>
      </div>
      {/*<style jsx global>{`*/}
      {/*.kk-image {*/}
      {/*  width: 400px*/}
      {/*}*/}
      {/*`}</style>*/}
    </>
  )
}
