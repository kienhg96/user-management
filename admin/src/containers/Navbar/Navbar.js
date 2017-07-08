import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Navbar', {
	root: {
		zIndex: 1501
	},
	title: {
		flex: 1,
		color: 'inherit'
	}
});

const Navbar = withStyles(styleSheet)(({classes, onLeftIconClick}) => (
	<AppBar className={classes.root}>
		<Toolbar>
			<IconButton color="contrast" onClick={onLeftIconClick}>
				<MenuIcon />
			</IconButton>
		<Typography type="title" className={classes.title}>Title</Typography>
		<Button color="contrast">Login</Button>
		</Toolbar>
	</AppBar>
));

export default Navbar;
