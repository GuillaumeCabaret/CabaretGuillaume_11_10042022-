import React from "react";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Logement from './Pages/Logement/Logement';
import NotFound from './Pages/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded: false, 
            logements : []
          };
    }
    
    componentDidMount(){
      fetch("/Data/logements.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            logements: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
      })
    }

    render() {
      if(!this.state.isLoaded){
        return <div>...loading</div>
      }
        return(
      <Router>      
        <Switch>
          <Route path="/apropos">
            <About />
          </Route>
          <Route path="/logement/:id">       
            <Logement locations = {this.state.logements} />
          </Route>
          <Route exact path="/">
            <Home location = {this.state.logements} />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>  
  )}
}

export default App