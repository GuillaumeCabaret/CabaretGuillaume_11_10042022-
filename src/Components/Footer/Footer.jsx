import React from "react";
import logo from "../../Img/LOGO__WHITE.svg"

class Footer extends React.Component {
 
    render() {
      return (
        <div className="footer">
          <img src={logo} alt="" className="footer__logo"/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      );
    }
  }

  export default Footer;