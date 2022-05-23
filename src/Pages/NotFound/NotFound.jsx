import React from "react";
import logo from "../../Img/404.png"

import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

class NotFound extends React.Component {

    render() {
      return (
        <>
          <Nav />
          <div className="notfound">
            <img src={logo} alt=""/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
          </div>
          <Footer />
        </>
         
      );
    }
  }

  export default NotFound;