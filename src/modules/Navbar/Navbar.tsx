"use client";

import { useEffect, useRef } from "react";
import cn from "@/lib/cn";
import styles from "@/modules/Navbar/navbar.module.sass";
import DownloadCurriculum from "./components/DownloadCurriculum";
import ApplyNow from "./components/ApplyNow";
import Image from "next/image";
import NavLinks from "./components/NavLinks";
import SocialIcons from "./components/SocialIcons";
import {
  NavLinksType,
  formPageNavbar,
  homeNavbar,
  thanksPageNavbar,
} from "@/lib/data/navbar";
import Link from "next/link";
import { useNavbarContext } from "@/contexts/ActiveNavbarContext";

type Props = {
  page: "home" | "form" | "thank-you";
};
const Navbar = (props: Props) => {
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let prevScrollY = 0;
    if (typeof window !== "undefined") prevScrollY = window.scrollY;

    const addClass = () => {
      if (!navRef.current) return;
      if (!navRef.current.classList.contains("navbar_scroll"))
        navRef.current.classList.add("navbar_scroll");
    };
    const removeClass = () => {
      if (!navRef.current) return;
      if (navRef.current.classList.contains("navbar_scroll"))
        navRef.current.classList.remove("navbar_scroll");
    };

    const handleScroll = () => {
      if (typeof window === "undefined") return;
      if (window.scrollY > 60) {
        if (window.scrollY > prevScrollY) addClass();
        else removeClass();
      } else if (window.scrollY < 60) removeClass();

      prevScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { activeSection } = useNavbarContext();

  let links: NavLinksType = [];
  if (props.page === "home") links = homeNavbar;
  else if (props.page === "form") links = formPageNavbar;
  else if (props.page === "thank-you") links = thanksPageNavbar;
  return (
    <nav className={cn("flex-col", styles.nav)} ref={navRef}>
      <div className={cn("flex-row items-center justify-between", styles.nav1)}>
        <Link href="/" aria-label="Special40">
          <Image
            priority
            height={35}
            width={134}
            alt="Special 40 Logo"
            src="/logos/special40-logo-white.svg"
          />
        </Link>
        <div className={cn("flex-row items-center", styles.nav1Right)}>
          <SocialIcons />
          <div className={styles.nav1Buttons}>
            <DownloadCurriculum />
            {props.page === "home" && <ApplyNow />}
          </div>
        </div>
      </div>
      <div className={styles.nav2}>
        <NavLinks links={links} activeSection={activeSection} />
      </div>
    </nav>
  );
};

export default Navbar;
