import React from 'react';
import { KeyboardAvoidingView , StyleSheet } from 'react-native';

const Container = (props) => (
	<KeyboardAvoidingView behavior="padding" style={style.container} {...props} />
);

const style = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1
	}
});

export default Container;
