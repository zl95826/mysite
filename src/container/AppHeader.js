import React, { useState } from "react";
import NavigationItems from "../components/NavigationItems";
import logo from "../logo.svg";
import Logo from "../components/Logo";
import DrawerToggle from "../components/DrawerToggle";
import { CSSTransition } from "react-transition-group";

function AppHeader() {
  const [toggle, setToggle] = useState(false);
  const clickHandle = () => {
    setToggle((pre) => !pre);
  };
  return (
    <header className="navbar">
      <div className="header container">
        <Logo />
        <DrawerToggle click={clickHandle} icon={toggle} />
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </div>

      <CSSTransition
        in={toggle}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames="mobileMenu"
      >
        {/* <nav className="MobileOnly"> {toggle && <NavigationItems />}</nav> */}

        <nav className="mobile">
          <NavigationItems />
        </nav>
      </CSSTransition>
    </header>
  );
}

export default AppHeader;
