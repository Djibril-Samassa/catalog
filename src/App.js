import React from "react";
import Films from "./Films.json";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class App extends React.Component{
  


  render(){
    return(
      <BrowserRouter>
      <div>
        <h1>Catalog</h1>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;