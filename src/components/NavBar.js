import React, { useState, useEffect, useCallback } from "react";
import { NavBarButton } from "./common";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <nav
      className={`invisible sm:visible px-12 xl:px-80 lg:px-48 md:px-28 flex h-24 flex-grow fixed left-0 right-0 transition-all duration-150 delay-100 backdrop-filter backdrop-blur shadow-lg z-50 ${
        visible ? "ease-out top-0" : "ease-in -top-24"
      }`}
    >
      <div className="flex flex-row flex-grow items-center gap-8">
        <NavBarButton title="About" linkTo="#about" />
        <NavBarButton title="Experience" linkTo="#experience" />
        <NavBarButton title="Projects" linkTo="#projects" />
        <NavBarButton title="Contact" linkTo="#contact" />
        <NavBarButton
          className="ml-auto mr-8"
          border={true}
          title="Resume"
          linkTo="/Kuan,Joshua-Resume.pdf"
        />
      </div>
    </nav>
  );
};

export default NavBar;
