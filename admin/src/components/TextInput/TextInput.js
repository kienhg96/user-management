import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { TextField } from 'material-ui';

const styleSheet = createStyleSheet('TextInput', {
	root: {
		display: 'block',
		width: "100%"
	},
	input: {
		width: "100%"
	}
});

const TextInput = withStyles(styleSheet)(({classes, ...rest}) => (
	<TextField
		className={classes.root}
		InputClassName={classes.input} {...rest}
	/>
));

export default TextInput;
