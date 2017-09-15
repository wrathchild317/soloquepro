import React from 'react';
//------icon------
import Icon from 'react-native-vector-icons/FontAwesome';


export default {
	navigationOptions : {
  		tabBarIcon: ({ tintColor }) => { return <Icon name={'search'} size={20} color={tintColor}  /> },
  	},
}