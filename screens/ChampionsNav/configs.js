import React from 'react';
//---------------------Import Navigator----------------------
import { TabNavigator } from 'react-navigation';
//---------------------Import Scenes----------------------
import FreeChampions from '../../scenes/FreeChampions';
//------icon------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
/*-------------------Custom Header----------------------*/
import ChampionsHeader from '../../components/ChampionsHeader';

const configs = {
	routeConfigs: {
		FreeChampions: { screen: FreeChampions },
	},
	navigatorConfigs: {
		tabBarComponent: ChampionsHeader,
		tabBarPosition: 'top',
		swipeEnabled: true,
		animationEnabled: true,
		lazy: true,
		initialRouteName: 'FreeChampions',
		tabBarOptions: {
    		activeTintColor: '#FFF',
    		inactiveTintColor: 'gold',
  		},
	}
}

const { routeConfigs, navigatorConfigs } = configs;
export const  ChampionsNavigation = TabNavigator(routeConfigs, navigatorConfigs);
export const navigationOptions = {
  		tabBarIcon: ({ tintColor }) => { return <Icon name={'sword'} size={23} color={tintColor}  /> },
  		tabBarLabel: 'Champions',
  	}