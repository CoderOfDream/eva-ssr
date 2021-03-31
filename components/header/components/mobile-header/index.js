import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { useRouter } from 'next/router'
import Link from "next/link";
import { Squash as Hamburger } from 'hamburger-react'
import Image from "next/image";
import { Animated } from "react-animated-css";

export default function MobileHeader({ headersData, setHeadersData }) {
  const { nav, active, hideNavbar } = useStyles();

  const [isOpen, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setHeadersData(headersData.map(it => it.href === router.pathname ? ({ ...it, isActive: true }) : ({
      ...it,
      isActive: false
    })));
  }, [router.pathname])

  function onToggle(openState) {

  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{ width: "fit-content", position: "absolute", top: "10px", left: "10px", flex: "1" }}>
          <Image src="/header/logo.png" width={92} height={32} alt="logo" priority loading="eager"/>
        </div>
        <div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={it => setOpen(it)}
            direction="right"
            color="red"
          />
        </div>
      </div>
      <Animated animationIn="fadeInLeft" animationOut="" duration={1300} isVisible={isOpen}>
      <nav role='navigation' className={nav}>
        <ul>
          {
            headersData.map(({ label, href, isActive }, i) =>
              <li className="li">
                <Link
                  key={i}
                  href={href}>
                  <a className={isActive ? `${active}` : ""} key={i}>{label}</a>
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
      </Animated>
    </>
  );
}