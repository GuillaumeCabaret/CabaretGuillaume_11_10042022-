import React from "react";
import Nav from "../../Components/Nav/Nav";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Details from "../../Components/Details/Details"
import Footer from "../../Components/Footer/Footer";
import { Redirect, withRouter } from "react-router-dom";

class Logement extends React.Component {
    
  render() {
    const selectedLocation = this.props.locations.find((elem) => elem.id === this.props.match.params.id );
    if (!selectedLocation) return <Redirect to="/404" />
    return (

        <div>
          <Nav />
          <Carrousel images = {selectedLocation.pictures}/>
          <Details title={selectedLocation.title} 
          location = {selectedLocation.location} 
          host = {selectedLocation.host} 
          tags = {selectedLocation.tags} 
          description = {selectedLocation.description}
          equipments = {selectedLocation.equipments}>
          </Details>
          <Footer /> 
        </div>
    );
  }
}
export default withRouter(Logement);