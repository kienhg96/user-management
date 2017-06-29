import React, { Component } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ViewInfo from './ViewInfo';
import UpdateInfo from './UpdateInfo';

const Logout = ({navigation}) => (
	<View style={style.logoutWrapper}>
		<Button title="Logout" 
			color="#841584" 
			onPress={() => {
				console.log('Logout');
				navigation.navigate('DrawerClose');
			}}
		/>
	</View>
);

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
			<Logout {...props}/>
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
