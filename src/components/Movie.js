import React from "react";
import {Link} from "react-router-dom";

class Movie extends React.Component{

    render(){
        return(
            <div>
                <p>Votre Film</p>
                <Link to="/">Page d'acceuil</Link>
            </div>
        );
    }
}

export default Movie;