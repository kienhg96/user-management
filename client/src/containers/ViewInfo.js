import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';

class ViewInfo extends Component {
	static navigationOptions = {
		title: 'View Information'
	}

	componentDidMount() {
		console.log('Mounted');
	}

	componentWillUnmount() {
		console.log('UnMounted');
	}

	render() {
		return (
			<Container>
				<ScrollView>
					<Text style={style.label}>Fullname:</Text>
					<Text style={style.value}>Hoang Van Kien</Text>
					<Text style={style.label}>Email:</Text>
					<Text style={style.value}>kienhg96@gmail.com</Text>
				</ScrollView>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	label: {
		fontWeight: 'bold'
	},
	value: {
		textAlign: 'center'
	}
});

export default connect(state => ({}), {})(ViewInfo);
