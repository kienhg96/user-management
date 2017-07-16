import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoForm from '../../components/UserInfoForm';
import { updateUser } from '../../actions/users';
import { loadCurrentUser } from '../../actions/currentUser';
import _ from 'lodash';

class EditUser extends Component {
	constructor(props) {
		super(props);
		const { fullname } = this.props.user;
		this.state = {
			fullname,
			password: ''
		};
		this.handleFullname = this.handleFullname.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(props) {
		const { id : oldId } = this.props.match.params;
		const { id : newId } = props.match.params;
		const { user : oldUser } = this.props;
		const { user : newUser } = props;
		if (oldId !== newId) {
			this.props.loadCurrentUser(newId);
		}
		if (!_.isEqual(oldUser, newUser)) {
			this.setState({ 
				fullname: newUser.fullname,
				password: ''
			});
		}
	}

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.loadCurrentUser(id);
	}

	handleFullname(e) {
		this.setState({
			fullname: e.target.value
		});
	}

	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleCancel() {
		this.props.history.goBack();
	}

	handleSubmit() {
		this.props.updateUser({
			...this.state,
			id: this.props.user.id
		});
	}

	render() {
		const { user } = this.props;
		return (
			<div className="UserInfoFormWrapper">
				<UserInfoForm
					title="Update User Information"
					emailReadOnly
					showPasswordField
					userId={user.id}
					email={user.email}
					fullname={this.state.fullname}
					password={this.state.password}
					onFullnameChange={this.handleFullname}
					onPasswordChange={this.handlePassword}
					onCancel={this.handleCancel}
					onSubmit={this.handleSubmit}
				/>
			</div>
		)
	}
}

export default connect(state => ({
	user: state.currentUser
}), {
	updateUser,
	loadCurrentUser
})(EditUser);
