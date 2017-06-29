import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => (
	<TextInput {...props}
		style={style.input}
		underlineColorAndroid="transparent"
	/>
)

const style = StyleSheet.create({
	input: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 3
	}
});

export default Input;
