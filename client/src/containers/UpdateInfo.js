import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Input from '../components/Input';
import FormContent from '../components/FormContent';

class UpdateInfo extends Component {
	static navigationOptions = {
		title: 'Update Information'
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
					<FormContent>
						<Input />
					</FormContent>
					<Text style={style.label}>Email:</Text>
					<FormContent>
						<Input />
					</FormContent>
					<FormContent>
						<Button title="UPDATE" 
							color="#841584" 
							onPress={() => {}}
						/>
					</FormContent>
				</ScrollView>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	label: {
		fontWeight: 'bold'
	}
});

export default connect(state => ({}), {})(UpdateInfo);
