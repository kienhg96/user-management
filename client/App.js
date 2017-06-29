import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import store from './src/configs/store';
import { Provider } from 'react-redux';
import Navigator from './src/configs/navigator';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<Navigator 
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
				})}
			/>
		);
	}
}

const AppWithNavigationState = connect(state => ({
	nav: state.nav
}), dispatch => ({
	dispatch
}))(App);

export default () => (
	<Provider store={store}>
		<AppWithNavigationState />
	</Provider>
);
