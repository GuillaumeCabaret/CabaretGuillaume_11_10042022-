import React from "react";

class Dropdown extends React.Component {

    constructor(props){
      super(props);
      this.state = {dropped : false}

      this.drop = this.drop.bind(this);
    }

    drop() {
      this.setState(state => ({
        dropped: !state.dropped
      }));
    }
    render() {
      
      return (
        <div className="dropdown">
          <button className="dropdown__button" onClick={this.drop}>{this.props.title} {this.state.children ?
           <i className="fas fa-angle-up"></i> 
           : <i className="fas fa-angle-down"></i>} 
           </button>
            {this.state.dropped ? <div className="dropdown__content"> <ul>{this.props.children}</ul></div> : null}
        </div>
      );
    }
  }

  export default Dropdown;