import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { 
	Menu as MenuIcon,
	MoreVert as MoreVertIcon
} from 'material-ui-icons';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import { connect } from 'react-redux';
import { logout } from '../../actions/admin';

const styleSheet = createStyleSheet('Navbar', {
	title: {
		flex: 1,
		color: 'inherit'
	}
});

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: undefined,
			open: false
		}
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleMenuClick(e) {
		this.setState({
			open: true,
			anchorEl: e.currentTarget
		});
	}

	handleRequestClose() {
		this.setState({
			open: false
		});
	}

	handleLogoutClick() {
		this.handleRequestClose();
		this.props.logout();
	}

	render() {
		const { classes } = this.props;
		return (
			<AppBar>
				<Toolbar>
					<IconButton color="contrast" 
						onClick={this.props.onLeftIconClick}
					>
						<MenuIcon />
					</IconButton>
				<Typography type="title" 
					className={classes.title}
				>
					Application
				</Typography>
				<IconButton color="contrast" onClick={this.handleMenuClick}>
					<MoreVertIcon />
				</IconButton>
				<Menu
					anchorEl={this.state.anchorEl}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
				>
					<MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
				</Menu>
				</Toolbar>
			</AppBar>
		)
	}
}

export default connect(state => ({}), {
	logout
})(withStyles(styleSheet)(Navbar));
