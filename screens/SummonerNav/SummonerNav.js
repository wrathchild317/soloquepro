import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import _ from 'lodash';
import { TabNavigator } from 'react-navigation';
import Dimensions from 'Dimensions';
import SearchBar from '../../containers/SearchBar';

/*-------import scenes---------*/
import SummonerOverview from '../../scenes/SummonerOverview';
import MatchHistory from '../../scenes/MatchHistory';

const SummonerNavigation = TabNavigator({
  SummonerOverview: {
      screen: SummonerOverview,
    },
    MatchHistory: {
      screen: MatchHistory,
    },
}, {
  swipeEnabled: true,
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
}) 

export default class SummonerNav extends PureComponent {


  render() {
      return (
          <View style={styles.container}>
            <SummonerNavigation style={{width: Dimensions.get('window').width, }} />
        </View>
    );
  }
}