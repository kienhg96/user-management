import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Typography } from 'material-ui';

const styleSheet = createStyleSheet('Header', {
	root: {
		marginTop: 16,
		marginBottom: 20
	}
});

const Header = withStyles(styleSheet)(({classes, ...rest}) => (
	<Typography
		className={classes.root}
		{...rest}
	/>
));

export default Header;
