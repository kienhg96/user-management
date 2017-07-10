import { Alert } from 'react-native';

export default (title, message) => {
	Alert.alert(
		title,
		message,
		[
			{ text: 'OK' },
		],
		{ cancelable: false }
	);
}
