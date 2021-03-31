import ReactCompareImage from 'react-compare-image';
import { useStyles } from "./styles";
import { Fade } from "react-awesome-reveal";
import React from "react";

export default function Comparison() {
  const classes = useStyles();

  return (
    <div className={classes.containerGrid}>
      <div className={`${classes.hideCompare}`}>
        <ReactCompareImage
          leftImage="/main/compare/1.jpg"
          rightImage="/main/compare/2.jpg"
        />
      </div>
      <div className={`${classes.mainContainer} p-10`}>
        <Fade duration={1500}>
          <h2 className={classes.mainTitle}>
            Porównaj swój dywanik samochodowy z dywanikiem EVA
          </h2>
        </Fade>
        <p>Przesuń guzik w prawo/lewo</p>
      </div>
      <div className={classes.wrapper}>
        <ReactCompareImage
          leftImage="/main/compare/3.jpg"
          rightImage="/main/compare/4.jpg"
        />
      </div>
    </div>
  )
}
