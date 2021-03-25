import Image from "next/image";
import FirstStep from "../../public/main/first-step.gif";
import FirstStepActive from "../../public/main/first-step-active.png";
import SecondStep from "../../public/main/second-step.gif";
import SecondStepActive from "../../public/main/second-step-active.gif";
import React, { useState } from "react";
import { useStyles } from "./style";

export default function Carousel() {
  const classes = useStyles();

  const [step, setStep] = useState(0);
  return (
    <div className={classes.wrapper}>
      {
        step === 0 ?
          <Image src="/main/main.png" width={600} height={435} alt="" loading="eager" priority/> :
          <Image src="/main/main2.png" width={600} height={435} alt="" loading="eager" priority/>
      }
      <nav className={classes.nav}>
        {
          step === 0 ? (
            <>
              <Image src={FirstStepActive} width={30} height={30}/>
              <Image src={SecondStep} width={30} height={30} onClick={() => setStep(1)}/>
            </>
          ) : (
            <>
              <Image src={FirstStep} width={30} height={30} onClick={() => setStep(0)}/>
              <Image src={SecondStepActive} width={30} height={30}/>
            </>
          )
        }
      </nav>
    </div>
  )
}