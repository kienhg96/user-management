import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Paper } from 'material-ui';

const styleSheet = createStyleSheet('PaperWithPadding', {
	root: {
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 20,
		paddingRight: 20,
	}
});

const PaperWithPadding = withStyles(styleSheet)(({classes, children}) => (
	<Paper className={classes.root}>
		{children}
	</Paper>
));

export default PaperWithPadding;
