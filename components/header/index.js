import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { useRouter } from 'next/router'
import DesktopHeader from "./components/desktop-header";
import MobileHeader from "./components/mobile-header";

export default function Header() {
  const { header } = useStyles();

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

  useEffect(() => {
    setHeadersData(headersData.map(it => it.href === router.pathname ? ({ ...it, isActive: true }) : ({
      ...it,
      isActive: false
    })));
  }, [router.pathname])

  return (
    <header className={header}>
      <div className="container">
        {mobileView ?
          <MobileHeader headersData={headersData} setHeadersData={setHeadersData}/> :
          <DesktopHeader headersData={headersData} setHeadersData={setHeadersData} />}
      </div>
      <style jsx>{`
      .menu-item {
      text-decoration: none
      }
      `}</style>
    </header>
  );
}