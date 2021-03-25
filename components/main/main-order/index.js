import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { cards } from "./cards";
import DetailsButton from "../../details-button";
import { Animated } from "react-animated-css";
import Carousel from "../../carousel";
import "./main-module.module.sass"

export default function MainOrder() {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

  }, []);
  return (
    <main className={classes.main}>
      <div className="container">
        <div className="wrapper main-wrapper">
          <div className="item md4">
            <Animated animationIn="fadeInLeft" duration={1300} isVisible={true}>
              <h1 className={`${classes.mainTitle} p-10`}>
                Indywidualnie dopasowane dywaniki samochodowe EVA
              </h1>
            </Animated>
            {
              isMobile &&
              <div className="item md6">
                <Carousel/>
              </div>
            }
            <p className={`${classes.description} p-10`}>
              Dla tych, którzy cenią sobie czystość w samochodzie, funkcjonalność i autentyczne wzornictwo
            </p>
            <div className={classes.button}>
              <Animated animationIn="fadeInUp" duration={1300} isVisible={true}>
                <div className="p-10">
                  <DetailsButton text="Wybierz swój komplet"/>
                </div>
              </Animated>
            </div>
          </div>
          {
            !isMobile &&
            <div className="item md6">
              <Carousel/>
            </div>
          }
        </div>
      </div>
      <div className={classes.descriptionWrapper}>
        <div className={`container ${classes.item}`} style={{ alignItems: 'baseline'}}>
          {
            cards.map(({ src, alt, topText, bottomText }, i) =>
              <div className={classes.mainInfoContainer} key={i}>
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
            )
          }
        </div>
      </div>
    </main>
  )
}