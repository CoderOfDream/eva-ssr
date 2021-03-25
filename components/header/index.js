import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from "next/link";
import { slide as Menu } from 'react-burger-menu'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '20px',
    right: '12px',
    top: '20px'
  },
  bmBurgerBars: {
    background: 'red',
    height: "2px"
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: "flex",
    flexDirection: "column"
  },
  bmItem: {
    display: "flex",
    alignSelf: "flex-end",
    textDecoration: "none",
    padding: "13px 0 13px 20px",
    outline: "none",
    color: "#d1d1d1",
    transition: "color 0.2s",
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default function Header() {
  const { header, menuButton, toolbar, orderButton, nav, a } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const [headersData, setHeadersData] = useState([
    {
      label: "Strona główna",
      href: "/",
      isActive: true
    },
    {
      label: "Produkt",
      href: "/product",
      isActive: false
    },
    {
      label: "O nas",
      href: "/about-us",
      isActive: false
    },
    {
      label: "Kontakt",
      href: "/contact",
      isActive: false
    }
  ]);

  const { mobileView } = state;
  const router = useRouter()

  // Todo - Remove later
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

  }, []);

  const displayDesktop = () => {
    return (
      <div className={toolbar}>
        {headerLogo(127, 44)}
        <div className="wrapper">
          <button className={orderButton}>Złóż zamówienie</button>
        </div>
        <div className="wrapper">
          <nav className={nav}>{getMenuButtons()}</nav>
        </div>
      </div>
    );
  };

  const displayMobile = () => {
    return (
      <>
        <div>
          {headerLogo(95, 32)}
        </div>
        <Menu styles={styles} right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          {
            headersData.map(({ label, href }, i) =>
              <Link
                key={i}
                href={href}>
                <a className="menu-item">{label}</a>
              </Link>
            )
          }
        </Menu>
      </>
    );
  };

  const headerLogo = (width, height) => (
    <div className="p-10">
      <Image src="/header/logo.png" width={width} height={height} alt="logo" priority loading="eager"/>
    </div>
  );

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
        <a className={isActive ? `${menuButton} ${menuButton}-active` : menuButton}>{label}</a>
      </Link>
    ));
  };

  return (
    <div className={header}>
      <div className="container" id="outer-container">
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
      <style jsx>{`
      .menu-item {
      text-decoration: none
      }
      `}</style>
    </div>
  );
}