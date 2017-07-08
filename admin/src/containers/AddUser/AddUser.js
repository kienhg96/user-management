import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoForm from '../../components/UserInfoForm';
import { addUser } from '../../actions/users';

class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			password: ''
		}
		this.handleFullname = this.handleFullname.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleFullname(e) {
		this.setState({
			fullname: e.target.value
		});
	}

	handleEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit() {
		this.props.addUser(this.state);
		console.log('OK');
	}

	handleCancel() {
		this.props.history.goBack();
	}

	render() {
		const { fullname, email, password } = this.state;
		return (
			<div className="UserInfoFormWrapper">
				<UserInfoForm
					title="Add new user"
					showPasswordField
					buttonLabel="Add"
					onSubmit={this.handleSubmit}
					fullname={fullname}
					email={email}
					password={password}
					onFullnameChange={this.handleFullname}
					onEmailChange={this.handleEmail}
					onPasswordChange={this.handlePassword}
					onCancel={this.handleCancel}
				/>
			</div>
		)
	}
}

export default connect(state => ({}), {
	addUser
})(AddUser);
