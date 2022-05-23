import React from "react";

class Banner extends React.Component {

    render() {
      return (
        <div className="banner__wrapper">
          <img className="banner" src={this.props.img} alt="" />
          <p className="banner__title">{this.props.title}</p>
        </div>
        
      );
    }
  }

  export default Banner;