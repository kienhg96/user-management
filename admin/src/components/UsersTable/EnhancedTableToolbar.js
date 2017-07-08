import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import { IconButton, Toolbar, Typography } from 'material-ui';
import { grey, pink } from 'material-ui/styles/colors';
import {
	FilterList as FilterListIcon,
	Delete as DeleteIcon,
	ModeEdit as ModeEditIcon,
	SelectAll as SelectAllIcon
} from 'material-ui-icons';

const toolbarStyleSheet = createStyleSheet('EnhancedTableToolbar', {
	root: {
		paddingRight: 10,
		backgroundColor: grey[300]
	},
	highlight: {
		backgroundColor: pink.A200,
	},
	spacer: {
		flex: '1 1 100%',
	},
	title: {
		flex: '0 0 auto',
	},
	white: {
		color: grey[50]
	}
});

const EnhancedTableToolbar = (props) => {
	const { numSelected, classes, onDeleteClick, onDeselectClick, onEditClick } = props;
	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			<div className={classes.title}>
				{
					numSelected > 0
					? <Typography type="subheading" className={classes.white}>
						{numSelected} user{numSelected > 1 && "s"} selected
					</Typography>
					: <Typography type="title">
						User
					</Typography>
				}
			</div>
			<div className={classes.spacer} />
			{numSelected === 0 &&
				<div>
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</div>
			}
			{numSelected > 0 &&
				<div>
					<IconButton className={classes.white} onClick={onDeselectClick}>
						<SelectAllIcon />
					</IconButton>
				</div>
			}
			{numSelected === 1 &&
				<div>
					<IconButton className={classes.white} onClick={onEditClick}>
						<ModeEditIcon />
					</IconButton>
				</div>
			}
			{numSelected > 0 &&
				<div>
					<IconButton className={classes.white} onClick={onDeleteClick}>
						<DeleteIcon />
					</IconButton>
				</div>
			}
		</Toolbar>
	);
}

export default withStyles(toolbarStyleSheet)(EnhancedTableToolbar);
