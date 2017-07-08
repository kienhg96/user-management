import React, { Component } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ViewInfo from './ViewInfo';
import UpdateInfo from './UpdateInfo';
import { logout } from '../actions/user';

const Logout = ({navigation, logout}) => (
	<View style={style.logoutWrapper}>
		<Button title="Logout" 
			color="#841584" 
			onPress={() => logout()}
		/>
	</View>
);

const LogoutContainer = connect(s => ({}), { logout })(Logout);

const Home = DrawerNavigator({
	ViewInfo: {
		screen: ViewInfo
	},
	UpdateInfo: {
		screen: UpdateInfo
	}
}, {
	drawerWidth: 200,
	contentComponent: props => (
		<ScrollView>
			<DrawerItems {...props} />
			<LogoutContainer {...props}/>
		</ScrollView>
	),
	initialRouteName: 'ViewInfo'
});

const style = StyleSheet.create({
	logoutWrapper: {
		margin: 5
	}
});

export default Home;
