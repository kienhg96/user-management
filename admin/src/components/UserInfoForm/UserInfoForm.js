import React from 'react';
import FormControl from '../FormControl';
import PaperWithPadding from '../PaperWithPadding';
import TextInput from '../TextInput';
import Header from '../Header';
import { Button } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styles = createStyleSheet('MarginButton', {
	button: {
		marginLeft: 10
	}
});

const UserInfoForm = props => (
	<form onSubmit={e => {
		e.preventDefault();
		props.onSubmit();
	}}>
		<PaperWithPadding>
			{props.title && 
			<Header
				type="display1"
				align="center"
			>
				{props.title}
			</Header>
			}
			{props.userId &&
			<FormControl>
				<TextInput label="ID" 
					value={props.userId}
					disabled
				/>
			</FormControl>
			}
			<FormControl>
				<TextInput label="Email"
					value={props.email}
					onChange={props.onEmailChange}
					type="email"
					disabled={props.emailReadOnly}
				/>
			</FormControl>
			<FormControl>
				<TextInput label="Fullname"
					value={props.fullname}
					onChange={props.onFullnameChange}
				/>
			</FormControl>
			{props.showPasswordField &&
				<FormControl>
					<TextInput label="Password"
						type="password"
						value={props.password}
						onChange={props.onPasswordChange}
					/>
				</FormControl>
			}
			<FormControl>
				<Button raised color="primary" type="submit">
					{props.buttonLabel || "Submit"}
				</Button>
				<Button raised color="accent" className={props.classes.button}
					onClick={props.onCancel}
				>
					{props.buttonCancelLabel || "Cancel"}
				</Button>
			</FormControl>
		</PaperWithPadding>
	</form>
);

export default withStyles(styles)(UserInfoForm);
