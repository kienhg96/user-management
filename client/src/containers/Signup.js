import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, 
		Image, ScrollView } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import Input from '../components/Input';
import FormContent from '../components/FormContent';

class Signup extends Component {
	static navigationOptions() {
		return {
			title: 'Signup'
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			rePassword: '',
			fullname: ''
		}
		this.handleSignupClick = this.handleSignupClick.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
		this.handleFullnameChange = this.handleFullnameChange.bind(this);
	}

	handleSignupClick() {
		console.log('Click');
		console.log(this.state);
	}

	handleEmailChange(email) {
		this.setState({ email });
	}

	handlePasswordChange(password) {
		this.setState({ password });
	}

	handleRePasswordChange(rePassword) {
		this.setState({ rePassword });
	}

	handleFullnameChange(fullname) {
		this.setState({ fullname });
	}

	render() {
		return (
			<Container>
				<ScrollView>
					<FormContent>
						<Input
							value={this.state.email}
							onChangeText={this.handleEmailChange}
							placeholder=" Email"
						/>
					</FormContent>
					<FormContent>
						<Input
							value={this.state.password}
							placeholder=" Password"
							onChangeText={this.handlePasswordChange}
							secureTextEntry
						/>
					</FormContent>
					<FormContent>
						<Input
							value={this.state.rePassword}
							placeholder=" Re-type Password"
							onChangeText={this.handleRePasswordChange}
							secureTextEntry
						/>
					</FormContent>
					<FormContent>
						<Input
							value={this.state.fullname}
							onChangeText={this.handleFullnameChange}
							placeholder=" Fullname"
						/>
					</FormContent>
					<FormContent>
						<Button title="SIGNUP" 
							color="#841584" 
							onPress={this.handleSignupClick}
						/>
					</FormContent>
				</ScrollView>
			</Container>
		);
	}
}

const style = StyleSheet.create({

});

export default connect(state => ({}), {})(Signup);
