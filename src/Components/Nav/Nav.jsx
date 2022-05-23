import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/LOGO.svg"

class Nav extends React.Component {

    render() {
      return (
        <div className="nav">
          <img src={logo} alt=""/>
          <div>
              <Link to="/">Accueil</Link>
              <Link to="/apropos">A Propos</Link> 
          </div>
        </div>
      );
    }
  }

  export default Nav;