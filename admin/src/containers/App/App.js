import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Dash from '../Dash';

const App = props => (
	<div>
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route path="*" component={Dash} />
		</Switch>
	</div>
);

export default App;
