import React from 'react';
//------icon------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default {
	navigationOptions : {
  		tabBarIcon: ({ tintColor }) => { return <Icon name={'sword'} size={23} color={tintColor}  /> },
  		tabBarVisible: true,
  		tabBarLabel: 'Free To Play',
  	},
 }