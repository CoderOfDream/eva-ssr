import Image from "next/image";
import FirstStep from "../../../public/main/first-step.gif";
import React from "react";
import { useStyles } from "./style";
import { cards } from "./cards";
import DetailsButton from "../../details-button";
import { Animated } from "react-animated-css";
import Carousel from "../../carousel";

export default function MainOrder() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className="container">
        <div className="wrapper">
          <div className="item md4">
            <div>
              <Animated animationIn="fadeInLeft" duration={1300} isVisible={true}>
                <h1 className={classes.mainTitle}>
                  Indywidualnie dopasowane dywaniki samochodowe EVA
                </h1>
              </Animated>
              <p className={classes.description}>
                Dla tych, którzy cenią sobie czystość w samochodzie, funkcjonalność i autentyczne wzornictwo
              </p>
              <div className={classes.button}>
                <Animated animationIn="fadeInUp" duration={1300} isVisible={true}>
                  <DetailsButton text="Wybierz swój komplet"/>
                </Animated>
              </div>
            </div>
          </div>
          <div className="item md6">
            <Carousel/>
          </div>
        </div>
      </div>
      <div className={classes.descriptionWrapper}>
        {
          cards.map(({ src, alt, topText, bottomText }, i) =>
            <div key={i}>
              <div className={classes.mainInfoContainer} xs={12}>
                <div className={classes.image}>
                  <Image
                    src={src}
                    width={68}
                    height={68}
                    alt={alt}
                    loading="eager"
                  />
                </div>
                <div className={classes.info}>
                  <Animated animationIn="fadeInRight" duration={1300} isVisible={true}>
                    <span>{topText}</span>
                    <p>{bottomText}</p>
                  </Animated>
                </div>
              </div>
            </div>)
        }
      </div>
    </main>
  )
}