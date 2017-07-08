import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import { Drawer } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import getWindowWidth from '../../utils/getWindowWidth';
import { responsiveWidth } from '../../constants/values';

const styleSheet = createStyleSheet('Sidebar', {
	paper: {
		paddingTop: 70,
	}
});

const mailFolderListItems = (
	<div>
		<Link to="/" style={{
			textDecoration: "none"
		}}>
			<ListItem button>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>
		</Link>
		<Link to="/login" style={{
			textDecoration: "none"
		}}>
			<ListItem button>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Logout" />
			</ListItem>
		</Link>
	</div>
);

const sideList = (
	<div>
		<List style={{
		    width: 250,
		    flex: 'initial',
		}} disablePadding>
			{mailFolderListItems}
		</List>
	</div>
);

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			docked: true
		}
		this.handleWindowResize = this.handleWindowResize.bind(this);
	}

	handleWindowResize() {
		const w = getWindowWidth();
		const { docked } = this.state;
		if ((w >= responsiveWidth && !docked) || (w < responsiveWidth && docked)) {
			this.setState({
				docked: !docked
			});
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowResize);
		this.handleWindowResize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowResize);
	}

	render() {
		return (
			<Drawer
				open={this.props.open}
				docked={this.state.docked}
				classes={this.props.classes}
				onRequestClose={this.props.onRequestClose}
				onClick={this.props.onRequestClose}
			>
				{sideList}
			</Drawer>
		);
	}
}

export default withStyles(styleSheet)(Sidebar);
