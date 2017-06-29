import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = (props) => (
	<View style={style.container} {...props} />
);

const style = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1
	}
});

export default Container;
