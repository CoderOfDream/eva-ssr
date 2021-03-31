import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from "next/link";
import HeaderLogo from "../logo";

export default function DesktopHeader({ headersData, setHeadersData }) {
  const { menuButton, toolbar, orderButton, nav, a } = useStyles();

  const router = useRouter()

  useEffect(() => {
    setHeadersData(headersData.map(it => it.href === router.pathname ? ({ ...it, isActive: true }) : ({
      ...it,
      isActive: false
    })));
  }, [router.pathname])

  const getMenuButtons = () => {
    const clickDesktopButton = (label, href) => {
      router.push(href);
      setHeadersData(headersData.map(it => it.label === label ? ({ ...it, isActive: true }) : ({
        ...it,
        isActive: false
      })));
    }
    return headersData.map(({ label, href, isActive }) => (
      <Link
        className={a}
        onClick={() => clickDesktopButton(label, href)}
        href={href}
        key={label}
      >
        <a key={label} className={isActive ? `${menuButton} ${menuButton}-active` : menuButton}>{label}</a>
      </Link>
    ));
  };

  return (
    <div className={toolbar}>
      <HeaderLogo width={127} height={44} />
      <div className="wrapper">
        <button className={orderButton}>Złóż zamówienie</button>
      </div>
      <div className="wrapper" style={{ marginLeft: "11px" }}>
        <nav className={nav}>{getMenuButtons()}</nav>
      </div>
    </div>
  );
}