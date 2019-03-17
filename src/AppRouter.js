import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Alphabet from './ch1/alphabet/Alphabet';

class AppRouter extends Component {
  render() {
    return (
		<Router>
			<div>
				<nav>
					<ul>
						<li><Link to="/greek/">Home</Link></li>
						<li>
							<Link to="/greek/alphabet/">Alphabet</Link>
						</li>
					</ul>
				</nav>

				<Route path="/greek/alphabet/" component={Alphabet} />
			</div>
		</Router>
    );
  }
}

export default AppRouter;
