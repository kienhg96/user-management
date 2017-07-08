import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
	focus() {
		this.input.focus();
	}

	render() {
		return (
			<TextInput {...this.props}
				ref={input => this.input = input}
				style={style.input}
				underlineColorAndroid="transparent"
			/>
		);
	}
}

const style = StyleSheet.create({
	input: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 3
	}
});

export default Input;
