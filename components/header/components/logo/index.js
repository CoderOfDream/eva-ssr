import Image from "next/image";
import React from "react";

export default function HeaderLogo({width, height}) {
  return (
    <div className="p-10">
      <Image src="/header/logo.png" width={width} height={height} alt="logo" priority loading="eager"/>
    </div>
  )
}