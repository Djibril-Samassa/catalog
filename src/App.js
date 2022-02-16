import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FilmPage from "./pages/FilmPage";
class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/film/:id" component={FilmPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;