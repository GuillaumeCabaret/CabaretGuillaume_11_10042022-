import React from "react";

class Carrousel extends React.Component {

    constructor(props) {
      super(props);
      this.state = {current : 0 }
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }

    next(){
      this.setState(state => {
        if(state.current !== this.props.images.length-1){
          return{current: state.current+1}
        }

        return{current: 0}
      });
    }

    previous(){
      this.setState(state => {
        if(state.current !== 0){
          return {current: state.current-1}
        }
        else{
          return {current: this.props.images.length-1}
        }
      });
    }

    render() {
      return (
          <div className="carrousel">
            {this.props.images.length !== 1 ? <button onClick={this.previous} className="carrousel__button carrousel__button__previous"><i className="fas fa-angle-left "></i></button>: null}
            <img src={this.props.images[this.state.current]} alt="" className="carrousel__image"/>
            <p className="carrousel__text">{this.state.current+1}/{this.props.images.length} </p>
            {this.props.images.length !== 1 ? <button onClick={this.next} className="carrousel__button carrousel__button__next"><i className="fas fa-angle-right "></i></button>: null}
          </div>
      );
    }
  }

export default Carrousel;