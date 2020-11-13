import React, { useState } from "react";
import NavigationItems from "../components/NavigationItems";
import Logo from "../components/Logo";
import DrawerToggle from "../components/DrawerToggle";
import { CSSTransition } from "react-transition-group";
import Modal from "../components/Modal";

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
        <Modal show={toggle} click={clickHandle}>
          <nav className="mobile">
            <NavigationItems />
          </nav>
        </Modal>
      </CSSTransition>
    </header>
  );
}

export default AppHeader;
