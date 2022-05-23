import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

class Gallery extends React.Component {

  render() {   
          return (
          <div className="gallery">
            {this.props.location.length > 0 && this.props.location.map(logement => <Thumbnail key={logement.title} title={logement.title} cover={logement.cover} id={logement.id}/>)}
          </div>
      )
    }
  }

  export default Gallery;