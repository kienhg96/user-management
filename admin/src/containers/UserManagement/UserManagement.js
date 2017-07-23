import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersTable from '../../components/UsersTable';
import './UserManagement.css';
import { push } from 'react-router-redux';
import AddIcon from 'material-ui-icons/Add';
import { Button } from 'material-ui';
import {
	loadUsers, deleteUsers,
	nextPage, prevPage,
	search, removeSearch
} from '../../actions/users';
import SearchDialog from '../../components/SearchDialog';

class UserManagement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openSearchDialog: false
		}
		this.handleRequestEditUser = this.handleRequestEditUser.bind(this);
		this.handleDeleteUsers = this.handleDeleteUsers.bind(this);
		this.handleCloseSearchDialog = this.handleCloseSearchDialog.bind(this);
		this.handleOpenSearchDialog = this.handleOpenSearchDialog.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearchRemove = this.handleSearchRemove.bind(this);
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

	handleCloseSearchDialog() {
		this.setState({
			openSearchDialog: false
		});
	}

	handleOpenSearchDialog() {
		this.setState({
			openSearchDialog: true
		});
	}

	handleSearch(query) {
		this.props.search(query);
	}

	handleSearchRemove() {
		this.props.removeSearch();
	}

	render() {
		return (
			<div className="UsersTableWrapper">
				<SearchDialog
					open={this.state.openSearchDialog}
					onRequestClose={this.handleCloseSearchDialog}
					onSubmit={this.handleSearch}
				/>
				<UsersTable
					users={this.props.users.data}
					info={this.props.users.info}
					onRequestEditUser={this.handleRequestEditUser}
					onRequestDeleteUsers={this.handleDeleteUsers}
					nextPage={this.props.nextPage}
					prevPage={this.props.prevPage}
					onSearchClick={this.handleOpenSearchDialog}
					onSearchRemoveClick={this.handleSearchRemove}
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
	prevPage,
	search,
	removeSearch
})(UserManagement);
