import React from "react";
import { useStyles } from "./styles";
import Image from "next/image";
import { cards } from "./cards";

export default function KeyQualities() {
  const classes = useStyles();

  return (
    <div className="container column">
      <h2 className={`${classes.mainTitle} p-10`}>Kluczowe cechy</h2>
      <div className={classes.contentContainer}>
        {
          cards.map(({ src, alt, topText, bottomText }, i) =>
              <div className={`${classes.mainInfoContainer}`} key={i}>
                <div className={classes.image}>
                  <Image
                    src={src}
                    width={230}
                    height={230}
                    alt={alt}
                    loading="eager"
                  />
                </div>
                <div className={classes.info}>
                  <h2>{topText}</h2>
                  <p>{bottomText}</p>
                </div>
              </div>
           )
        }
      </div>
      <div style={{ margin: "47px 0 70px 0" }} className="p-10">
        <div className={`${classes.wrap} row`}>
          <div className="md4 ">
            <Image
              src="/main/mesh.jpg"
              width={408}
              height={306}
              alt="mesh"
              loading="eager"
            />
          </div>
          <div className={`${classes.rombContainer} md6`}>
            <div className={classes.rombsImg}>
              <Image
                src="/main/rombs.png"
                width={70}
                height={70}
                alt="rombs"
                loading="eager"
              />
            </div>
            <h2 className={classes.meshDescriptionTitle}>Unikalny kształt komórek wewnątrz dywaników</h2>
            <p>
              Komórki o kształtach Rombu oraz Plastra Miodu umożliwiają bezpieczne utrzymywanie do 2 litrów płynów i
              brudu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
