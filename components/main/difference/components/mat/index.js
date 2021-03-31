import Image from "next/image";
import React from "react";
import { useStyles } from "../../styles";
import {useStyless} from "./style"
import "./mat.module.sass"

export default function Met({ src, text }) {
  const classes = useStyles();
  const classess = useStyless();

  return (
    <div className={classes.row}>
      <div className={`${classes.kek}`}>
        <Image
          src={src}
          width={91}
          height={91}
          alt=""
          loading="eager"
        />
      </div>
      <p className={`${classess.p} p-10`}>{text}</p>
    </div>
  )
}