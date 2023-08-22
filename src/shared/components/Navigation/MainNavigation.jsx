
import React, { useState } from "react"
import "./Css/MainNavgation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIEelement/Backdrop";
const MainNavigation = () => {
  const [drawerIsOpen , setdrawerIsOpen] = useState(false);

  
  
  const openDrawerHandler = () => {
    setdrawerIsOpen(true);
  }

  const closeDrawerHandler = () => {
    const setdrawerIsClose = setdrawerIsOpen(false);
    return setdrawerIsClose;
  }
  

  
  return (
    // 
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}  {/* <---- i didnknow this fking logic */}
      {/* {drawerIsOpen && <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer> } */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer> 

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
