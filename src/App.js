import React from "react";
import Films from "./Films.json";
import Movie from "./components/Movie"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class App extends React.Component{
  


  render(){
    return(
      <BrowserRouter>
        <h1>Catalogue</h1>
      
      <Switch>
        <Route exact path="/movie" component={Movie}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;