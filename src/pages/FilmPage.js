import React from "react";
import movies from "../movies.json";

class FilmPage extends React.Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		movie: {},
	// 	};
	// }

	// componentDidMount() {
	// 	let movie = movies[this.props.match.params.id - 1];
	// 	this.setState({ movie });
	// }

	render() {
		const movie = movies.find((movie) => {
			return (
				movie.id.toString() === this.props.match.params.id.toString()
			);
		});

		return (
			<div>
				<h1>Filmpage</h1>
				<ul>
					<li>{movie.title}</li>
					<li>
						<img src={movie.image} alt="pic" />
					</li>
				</ul>
			</div>
		);
	}
}

export default FilmPage;