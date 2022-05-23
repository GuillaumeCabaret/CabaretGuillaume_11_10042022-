import React from "react";

class Host extends React.Component {  
    render() {
        return (
            <div className="details__host">
                    <p className="details__host__name">{this.props.name}</p>
                    <img className="details__host__picture" alt="" src={this.props.picture}/>
            </div>
        );
    }

}

export default Host;