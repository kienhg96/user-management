import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import Input from '../components/Input';
import FormContent from '../components/FormContent';
import { signup } from '../actions/user';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			rePassword: '',
			fullname: '',
			status: ''
		}
		this.handleSignupClick = this.handleSignupClick.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
		this.handleFullnameChange = this.handleFullnameChange.bind(this);
	}

	handleSignupClick() {
		const { email, password, rePassword, fullname } = this.state;
		if (password !== rePassword) {
			return this.setState({
				status: 'Retype password mismatch'
			});
		} else {
			this.props.signup(this.state);
			this.setState({ status: '' });
		}
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
					<Text style={style.message}>{this.state.status}</Text>
				</FormContent>
				<FormContent>
					<Button title="SIGNUP" 
						color="#841584" 
						onPress={this.handleSignupClick}
					/>
				</FormContent>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	message: {
		color: 'red'
	}
});

Signup.navigationOptions = {
	title: 'Signup'
};

export default connect(state => ({}), {
	signup
})(Signup);
