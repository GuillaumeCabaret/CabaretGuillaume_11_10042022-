/* eslint-disable no-useless-constructor */
import React from "react";
import {Link} from "react-router-dom"

class Thumbnail extends React.Component {

    constructor(props) {
      super(props);
      this.state = {title : props.title,cover: props.cover, id: this.props.id }
    }

    render() {
      return (
        <Link to={"/logement/"+this.state.id}>
          <div className="thumbnail">
            <img src={this.state.cover} alt=""/>
            <p className="thumbnail__title">{this.state.title}</p>
          </div>
        </Link>
      );
    }
  }

  export default Thumbnail;