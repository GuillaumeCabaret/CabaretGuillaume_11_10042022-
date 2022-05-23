import React from "react";
import starGrey from "../../Img/star_grey.svg";
import starColor from "../../Img/star_color.svg";

class Rating extends React.Component {

    constructor(props) {
      super(props);
      this.state = {starRating : []}
    }

    componentDidMount() {
      let stars = [];
      let nbStar = parseInt(this.props.rating);
      let s=0
      for(s;s < nbStar; s++){
        stars.push(starColor);
      }
      for(s;s< 5;s++){
        stars.push(starGrey);
      }      
      this.setState({starRating : stars})
    }
    render() {
      return (
          <div className="rating">
               {this.state.starRating.map( (s,index) => {                
                return  <img src={s} alt ="" className="star" key={index} />
               })}
          </div>
           

      );
    }
  }

  export default Rating;