import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {

  return (
    <nav className="nav">
        <div className="logo">
            Google explore
        </div>
      <div className="nav__menu">
            <NavLink to={"/"} className="link">Ricerca</NavLink>
            <NavLink to={"/preferiti"} className="link" >Preferiti</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;