import React from "react";
import Host from "../Host/Host";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";

 class Details extends React.Component {

     render() {
      let equipementContent = this.props.equipments.map( (item, index) => <li key={index}>{item}</li>);
       return (
      <>
          <div className="details">
            <div>
              <h1 className="details__title">{this.props.title}</h1>
              <p className="details__location">{this.props.location}</p>
            </div>
            <Host name = {this.props.host.name} picture= {this.props.host.picture}/>
            <div className="tag__container">
            {this.props.tags.map(tag => <Tag key={tag} tag={tag}/>)}
            </div>
            <Rating rating={this.props.rating}/>
          </div>
          <div className="collapse__wrapper">
            <Collapse title={"Description"}>
            {this.props.description}
            </Collapse>
            <Collapse title={"Equipements"}>
            {equipementContent}
            </Collapse> 
          </div>
      </>
    );
  }
}
export default Details;