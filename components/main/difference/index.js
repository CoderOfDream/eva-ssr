import React from "react";
import { useStyles } from "./styles";
import Met from "./components/mat";
import { cards } from "./cards";
import { Animated } from "react-animated-css";

export default function Difference() {
  const classes = useStyles();

  return (
    <section>
      <div>
        <Animated animationIn="fadeInLeft" duration={1300} isVisible={true}>
          <h1 className={`${classes.mainTitle} container column`}>
            Czym różnią się dywaniki EVA od tych, które obecnie masz w samochodzie?
          </h1>
        </Animated>
      </div>
      <div style={{ boxShadow: "0px 0px 12px 0px rgb(0 0 0 / 33%)", paddingTop: "19px" }}>
        <div className="container column">
          <div className={classes.container}>
            <div>
              <div className="row" style={{ marginBottom: "38px" }}>
                <div className="row">
                  <p className={classes.description}>Zwykłe dywaniki samochodowe</p>
                </div>
                <div className="row">
                  <p className={classes.description}>Dywaniki samochodowe EVA</p>
                </div>
              </div>
              {
                cards.map(([regular, eva], i) => (
                  <div className={`row ${classes.met}`} key={i}>
                    <Met key={regular.src} text={regular.text} src={regular.src}/>
                    <Met key={eva.src} text={eva.text} src={eva.src}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
