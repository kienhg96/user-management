import Login from '../containers/Login';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

const Navigator = StackNavigator({
	Login: {
		screen: Login
	},
	Home: {
		screen: Home
	},
	Signup: {
		screen: Signup
	}
}, {
	cardStyle: {
		paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	},
	initialRouteName: 'Login'
});

export default Navigator;
