import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import { IconButton, Toolbar, Typography } from 'material-ui';
import { grey, pink } from 'material-ui/styles/colors';
import {
	ArrowForward as ArrowForwardIcon,
	ArrowBack as ArrowBackIcon,
	Delete as DeleteIcon,
	ModeEdit as ModeEditIcon,
	SelectAll as SelectAllIcon,
	Search as SearchIcon,
	Clear as ClearIcon
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
	if (numSelected === 0) {
		if (props.info.searching) {
			return (
				<Toolbar
					className={classNames(classes.root, {
						[classes.highlight]: numSelected > 0,
					})}
				>
					<div className={classes.title}>
						<Typography type="subheading">
							Result for '<b>{props.info.query}</b>'
						</Typography>
					</div>
					<div className={classes.spacer} />
					<div>
						<IconButton onClick={props.onSearchClick}>
							<SearchIcon />
						</IconButton>
					</div>
					<div>
						<IconButton onClick={props.onSearchRemoveClick}>
							<ClearIcon />
						</IconButton>
					</div>
				</Toolbar>
			)
		} else {
			return (
				<Toolbar
					className={classNames(classes.root, {
						[classes.highlight]: numSelected > 0,
					})}
				>
					<div className={classes.title}>
						<Typography type="title">User</Typography>
					</div>
					<div className={classes.spacer} />
					<div>
						<IconButton onClick={props.onPrevClick}>
							<ArrowBackIcon />
						</IconButton>
					</div>
					<div className={classes.title}>
						<Typography type="subheading">
							page {props.info.page + 1} of {props.info.total}
						</Typography>
					</div>
					<div>
						<IconButton onClick={props.onNextClick}>
							<ArrowForwardIcon />
						</IconButton>
					</div>
					<div>
						<IconButton onClick={props.onSearchClick}>
							<SearchIcon />
						</IconButton>
					</div>
				</Toolbar>
			);
		}
	} else {
		return (
			<Toolbar
				className={classNames(classes.root, {
					[classes.highlight]: numSelected > 0,
				})}
			>
				<div className={classes.title}>
					<Typography type="subheading" className={classes.white}>
						{numSelected} user{numSelected > 1 && "s"} selected
					</Typography>
				</div>
				<div className={classes.spacer} />
				<div>
					<IconButton className={classes.white} onClick={onDeselectClick}>
						<SelectAllIcon />
					</IconButton>
				</div>
				{numSelected === 1 &&
					<div>
						<IconButton className={classes.white} onClick={onEditClick}>
							<ModeEditIcon />
						</IconButton>
					</div>
				}
				<div>
					<IconButton className={classes.white} onClick={onDeleteClick}>
						<DeleteIcon />
					</IconButton>
				</div>
			</Toolbar>
		);
	}
}

export default withStyles(toolbarStyleSheet)(EnhancedTableToolbar);
