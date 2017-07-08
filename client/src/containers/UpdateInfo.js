import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Input from '../components/Input';
import FormContent from '../components/FormContent';
import { update, changePassword } from '../actions/user';

class UpdateInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: props.user.fullname,
			password: ''
		}
		this.handleFullnameChange = this.handleFullnameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleChangePasswordSubmit = this.handleChangePasswordSubmit.bind(this);
	}

	handleFullnameChange(fullname) {
		this.setState({ fullname });
	}

	handleSubmit() {
		this.props.update(this.state);
	}

	handleChangePasswordSubmit() {
		this.props.changePassword(this.state.password);
	}

	handlePasswordChange(password) {
		this.setState({ password });
	}

	render() {
		return (
			<Container>
				<ScrollView>
					<Text style={style.label}>Fullname:</Text>
					<FormContent>
						<Input
							value={this.state.fullname}
							onChangeText={this.handleFullnameChange}
						/>
					</FormContent>
					<FormContent>
						<Button title="UPDATE" 
							color="#841584" 
							onPress={this.handleSubmit}
						/>
					</FormContent>
					<Text style={style.title}>Change Password</Text>
					<Text style={style.label}>New password:</Text>
					<FormContent>
						<Input
							value={this.state.password}
							onChangeText={this.handlePasswordChange}
							secureTextEntry
						/>
					</FormContent>
					<FormContent>
						<Button title="CHANGE PASSWORD" 
							color="#841584" 
							onPress={this.handleChangePasswordSubmit}
						/>
					</FormContent>
				</ScrollView>
			</Container>
		);
	}
}

UpdateInfo.navigationOptions = {
	title: 'Update Information'
}

const style = StyleSheet.create({
	label: {
		fontWeight: 'bold'
	},
	title: {
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center'
	}
});

export default connect(state => ({
	user: state.user
}), {
	update,
	changePassword
})(UpdateInfo);
