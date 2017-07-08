import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Dialog', {
	root: {
		zIndex: 1502
	}
});

const DeleteCofirmDialog = ({ open, onRequestClose, classes, cofirmUsers }) => (
	<Dialog open={open} 
		onRequestClose={() => onRequestClose(false)}
		classes={classes}
	>
		<DialogTitle>
			Cofirm Delete
		</DialogTitle>
		<DialogContent>
			<DialogContentText>
				The user(s) below will be deleted:
			</DialogContentText>
			<ul>
				{
					cofirmUsers.map(user => (
						<li key={user.id}>{user.fullname + ' - ' + user.email}</li>
					))
				}
			</ul>
		</DialogContent>
		<DialogActions>
			<Button onClick={() => onRequestClose(true)} color="primary">
				Delete
			</Button>
			<Button onClick={() => onRequestClose(false)} color="primary">
				Cancel
			</Button>
		</DialogActions>
	</Dialog>
);

export default withStyles(styleSheet)(DeleteCofirmDialog);
