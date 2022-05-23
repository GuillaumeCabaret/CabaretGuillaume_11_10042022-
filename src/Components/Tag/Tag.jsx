import React from "react";

class Tag extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tag : ""};
  }

    render() {
      return (
        <div className="tag">
          <p>{this.props.tag}</p>
        </div>
      );
    }
  }

  export default Tag;