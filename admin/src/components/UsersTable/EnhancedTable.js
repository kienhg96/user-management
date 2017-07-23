import React, { Component } from 'react';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui/Table';
import { Checkbox, Paper } from 'material-ui';
import DeleteCofirmDialog from './DeleteCofirmDialog';

class EnhancedTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			order: 'asc',
			orderBy: '',
			selected: [],
			cofirmDialog: false
		}
		this.handleSelectAll = this.handleSelectAll.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleDeleteCorfim = this.handleDeleteCorfim.bind(this);
		this.populateSelected = this.populateSelected.bind(this);
		this.handleDeselectClick = this.handleDeselectClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	isSelected(id) {
		return this.state.selected.indexOf(id) !== -1;
	}

	handleClick(id) {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}
		this.setState({ selected: newSelected });
	}

	handleRequestSort(property) {
		console.log('Handle Request sort', property);
	}

	handleSelectAll(all) {
		if (this.state.selected.length === this.props.users.length) {
			return this.setState({ selected: [] });
		}
		const selected = this.props.users.map(user => user.id);
		this.setState({ selected });
	}

	handleDeleteClick() {
		this.setState({
			cofirmDialog: true
		});
	}

	handleDeleteCorfim(cofirm) {
		this.setState({
			cofirmDialog: false
		});
		if (cofirm) {
			this.props.onRequestDeleteUsers(this.state.selected);
			this.setState({
				selected: []
			});
		}
	}

	handleDeselectClick() {
		this.setState({
			selected: []
		})
	}

	handleEditClick() {
		this.props.onRequestEditUser(this.state.selected[0]);
	}

	populateSelected() {
		const { selected } = this.state;
		const { users } = this.props;
		return selected.map(id => users.find(user => user.id === id));
	}

	render() {
		const { order, orderBy, selected, cofirmDialog } = this.state;
		const { users } = this.props;
		const cofirmUsers = cofirmDialog ? this.populateSelected() : [];
		return (
			<div>
				<DeleteCofirmDialog
					cofirmUsers={cofirmUsers}
					open={cofirmDialog}
					onRequestClose={this.handleDeleteCorfim}
				/>
				<Paper>
					<EnhancedTableToolbar
						info={this.props.info}
						numSelected={selected.length}
						onDeleteClick={this.handleDeleteClick}
						onDeselectClick={this.handleDeselectClick}
						onEditClick={this.handleEditClick}
						onNextClick={this.props.nextPage}
						onPrevClick={this.props.prevPage}
						onSearchClick={this.props.onSearchClick}
						onSearchRemoveClick={this.props.onSearchRemoveClick}
					/>
					<Table>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={this.handleRequestSort}
							onSelectAllClick={this.handleSelectAll}
							selectAll={selected.length === users.length}
						/>
						<TableBody>
							{users.map(n => {
								const isSelected = this.isSelected(n.id);
								return (
									<TableRow
										hover
										onClick={() => this.handleClick(n.id)}
										role="checkbox"
										aria-checked={isSelected}
										tabIndex="-1"
										key={n.id}
										selected={isSelected}
									>
										<TableCell checkbox>
											<Checkbox checked={isSelected} />
										</TableCell>
										<TableCell disablePadding>
											{n.fullname}
										</TableCell>
										<TableCell disablePadding>
											{n.email}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
			</div>
		);
	}
}

export default EnhancedTable;
