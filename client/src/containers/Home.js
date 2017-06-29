import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
	static navigationOptions() {
		return {
			title: 'Home'
		}
	}

	render() {
		return (
			<View>
				<Text>Home</Text>
			</View>
		);
	}
}

export default connect(state => ({}), {})(Home);
