
import React, { useState } from "react"
import "./Css/MainNavgation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIEelement/Backdrop";
const MainNavigation = () => {
  const [drawerIsOpen , setdrawerIsOpen] = useState(false);

  
  
  const openDrawer = () => {
    setdrawerIsOpen(true);
  }

  const closeDrawer = () => {
    const setdrawerIsClose = setdrawerIsOpen(false);
    return setdrawerIsClose;
  }
  

  
  return (
    // 
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}  {/* <---- i didnknow this fking logic */}
      {drawerIsOpen && <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer> }
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};
export default MainNavigation;
