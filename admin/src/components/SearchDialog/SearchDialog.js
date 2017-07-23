import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';
import TextInput from '../../components/TextInput';
import './SearchDialog.css';

class SearchDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
		this.handleQueryChange = this.handleQueryChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleQueryChange(e) {
		this.setState({
			query: e.target.value
		});
	}

	handleCancel() {
		this.setState({
			query: ''
		});
		this.props.onRequestClose();
	}

	handleSubmit() {
		this.props.onSubmit(this.state.query);
		this.props.onRequestClose();
		this.setState({
			query: ''
		});
	}

	render() {
		return (
			<Dialog open={this.props.open}
				onRequestClose={this.handleCancel}
			>
				<DialogTitle>
					Search
				</DialogTitle>
				<div className="searchInputWrapper">
					<form onSubmit={e => {
						e.preventDefault();
						this.handleSubmit();
					}}>
						<TextInput
							type="text"
							label="Type anything"
							value={this.state.query}
							onChange={this.handleQueryChange}
							autoFocus
						/>
					</form>
				</div>
				<DialogActions>
					<Button color="accent" onClick={this.handleCancel}>
						Cancel
					</Button>
					<Button color="primary" onClick={this.handleSubmit}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default SearchDialog;
