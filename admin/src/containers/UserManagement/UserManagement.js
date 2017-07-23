import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersTable from '../../components/UsersTable';
import './UserManagement.css';
import { push } from 'react-router-redux';
import AddIcon from 'material-ui-icons/Add';
import { Button } from 'material-ui';
import {
	loadUsers, deleteUsers,
	nextPage, prevPage
} from '../../actions/users';

class UserManagement extends Component {
	constructor(props) {
		super(props);
		this.handleRequestEditUser = this.handleRequestEditUser.bind(this);
		this.handleDeleteUsers = this.handleDeleteUsers.bind(this);
	}

	componentDidMount() {
		this.props.loadUsers();
	}

	handleRequestEditUser(id) {
		this.props.push(`/user/${id}`);
	}

	handleDeleteUsers(ids) {
		this.props.deleteUsers(ids);
	}

	render() {
		return (
			<div className="UsersTableWrapper">
				<UsersTable
					users={this.props.users.data}
					page={this.props.users.info}
					onRequestEditUser={this.handleRequestEditUser}
					onRequestDeleteUsers={this.handleDeleteUsers}
					nextPage={this.props.nextPage}
					prevPage={this.props.prevPage}
				/>
				<div className="AddButtonWrapper">
					<Button fab color="accent"
						onClick={() => this.props.push('/add')}
					>
						<AddIcon />
					</Button>
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	users: state.users
}), {
	push,
	loadUsers,
	deleteUsers,
	nextPage,
	prevPage
})(UserManagement);
