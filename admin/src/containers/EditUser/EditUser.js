import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoForm from '../../components/UserInfoForm';

class EditUser extends Component {
	componentWillReceiveProps(props) {
		if (props.userId !== this.props.userId) {
			console.log('Load Async', props.userId);
		}
	}

	componentWillMount() {
		console.log('Load Async', this.props.userId);
	}

	render() {
		return (
			<div className="UserInfoFormWrapper">
				<UserInfoForm
					title="Update User Information"
					userId="123456"
					showPasswordField
				/>
			</div>
		)
	}
}

export default connect(state => ({}), {})(EditUser);
