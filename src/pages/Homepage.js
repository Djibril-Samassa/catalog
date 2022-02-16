import React from "react";
import { Link } from "react-router-dom";
import movies from "../movies.json";

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<h1>Homepage</h1>
				<ul>
					{movies.map((movie) => {
						return (
							<li>
								<Link to={`/film/${movie.id}`} key={movie.id}>
									{movie.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Homepage;