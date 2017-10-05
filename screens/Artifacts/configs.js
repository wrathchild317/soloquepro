import React from 'react';
//---------------------Import Navigator----------------------
import { TabNavigator } from 'react-navigation';
//---------------------Import Scenes----------------------
import Items from '../../scenes/Items';
import Runes from '../../scenes/Runes';
//------icon------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const configs = {
	routeConfigs: {
		Items: { screen: Items },
		Runes: { screen: Runes },
	},
	navigatorConfigs: {
		tabBarPosition: 'top',
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		initialRouteName: 'Items',
		tabBarOptions: {
    		activeTintColor: '#FFF',
    		inactiveTintColor: 'gold',
    		style: {
			    backgroundColor: 'black',
			},
			indicatorStyle: {
				backgroundColor: 'white',
			}
  		},
	}
}

const { routeConfigs, navigatorConfigs } = configs;
export const  ArtifactsNavigation = TabNavigator(routeConfigs, navigatorConfigs);
export const navigationOptions = {
  		tabBarIcon: ({ tintColor }) => { return <Icon name={'treasure-chest'} size={23} color={tintColor}  /> },
  		tabBarLabel: 'Artifacts',
  	}