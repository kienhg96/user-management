import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,
		Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Input from '../components/Input';
import FormContent from '../components/FormContent';
import Container from '../components/Container';
import { login, getUser } from '../actions/user';

class Login extends Component {
	static navigationOptions() {
		return {
			title: 'Login'
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
	}

	handleUsernameChange(email) {
		this.setState({ email });
	}

	handlePasswordChange(password) {
		this.setState({ password });
	}

	handleLoginClick() {
		this.props.login(this.state);
	}

	componentDidMount() {
		this.props.getUser();
	}

	render() {
		return (
			<Container>
				<View style={style.titleWrapper}>
					<Image 
						style={style.image}
						source={require('../images/personal.png')}
					/>
				</View>
				<View>
					<FormContent>
						<Input placeholder=" Email"
							value={this.state.username}
							onChangeText={this.handleUsernameChange}
						/>
					</FormContent>
					<FormContent>
						<Input placeholder=" Password"
							value={this.state.password}
							secureTextEntry
							onChangeText={this.handlePasswordChange}
						/>
					</FormContent>
					<FormContent>
						<Button title="LOGIN" 
							color="#841584" 
							onPress={this.handleLoginClick}
						/>
					</FormContent>
					<FormContent>
						<TouchableOpacity onPress={() => {
							this.props.navigation.navigate('Signup');
						}}>
							<Text>Signup</Text>
						</TouchableOpacity>
					</FormContent>
				</View>
			</Container>
		);
	}
}

const style = StyleSheet.create({
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: Dimensions.get('window').width * 0.35,
		height: Dimensions.get('window').width * 0.35
	}
});

export default connect(state => ({}), {
	login,
	getUser
})(Login);
