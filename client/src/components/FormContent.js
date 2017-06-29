import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormContent = (props) => (
	<View {...props} style={style.formContent} />
);

const style = StyleSheet.create({
	formContent: {
		marginVertical: 5
	}
});

export default FormContent;
