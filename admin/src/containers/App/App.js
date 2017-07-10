import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Dash from '../Dash';
import history from '../../configs/history';
import theme from '../../configs/theme';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { connect } from 'react-redux';
import { getAdmin } from '../../actions/admin';

const App = () => (
	<Switch>
		<Route exact path="/login" component={Login} />
		<Route path="*" component={Dash} />
	</Switch>
);

class Application extends Component {
	componentDidMount() {
		this.props.getAdmin();
	}

	render() {
		return (
			<ConnectedRouter history={history}>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</ConnectedRouter>
		);
	}
}


export default connect(state => ({}), {
	getAdmin
})(Application);
