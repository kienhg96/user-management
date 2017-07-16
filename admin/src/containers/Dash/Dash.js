import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Dash.css';
import UserManagement from '../UserManagement';
import EditUser from '../EditUser';
import AddUser from '../AddUser';
import getWindowWidth from '../../utils/getWindowWidth';
import { responsiveWidth } from '../../constants/values';
import { Route, Switch, Redirect } from 'react-router-dom';

class Dash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false
		}
		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	componentDidMount() {
		if (getWindowWidth() >= responsiveWidth) {
			this.setState({
				sidebarOpen: true
			});
		}
	}

	toggleSidebar() {
		this.setState({
			sidebarOpen: !this.state.sidebarOpen
		});
	}

	render() {
		return (
			<div>
				<Sidebar 
					open={this.state.sidebarOpen}
					onRequestClose={this.toggleSidebar}
				/>
				<Navbar onLeftIconClick={this.toggleSidebar}/>
				<div className={"dash-content-container" + 
					(this.state.sidebarOpen ? " toggle-left" : "")}
				>
					<Switch>
						<Route exact path="/" component={() => <Redirect to="/login" />} />
						<Route exact path="/add" component={AddUser} />
						<Route exact path="/user" component={UserManagement} />
						<Route exact path="/user/:id" component={EditUser} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default Dash;
