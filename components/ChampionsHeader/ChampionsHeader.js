import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import configs from './configs';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import _ from 'lodash';

export default class ChampionsHeader extends PureComponent {
	

	render() {
		const {
			navigation,
		    renderIcon,
		    inactiveTintColor,
		    activeTintColor,
		    jumpToIndex,
		    getLabel,
		} = this.props;

		const {routes , index} = navigation.state;

		const label = configs.headerLabels[index].toUpperCase();

		return (
			<View style={styles.header} >
				<TouchableOpacity 
					activeOpacity={0.4}
              		onPress={() => { alert(`You've clicked a card`); }}
				>
					<View style={styles.iconContainer}>
						{(index !== 0) ? <Icon name={'chevron-left'} size={50} color={inactiveTintColor} /> : null}
					</View>
				</TouchableOpacity>
				<View style={styles.labelContainer} >
					<Text style={[styles.label, {color: activeTintColor}]}>
						{label}
					</Text>
				</View>
				<TouchableOpacity 
					activeOpacity={0.4}
              		onPress={() => { alert(`You've clicked a card`); }}
				>
					<View style={styles.iconContainer}>
						{(index === 0) ? <MaterialIcon name={'apps'} size={23} color={inactiveTintColor} /> : null}
						<Text style={[styles.iconLabel, {color: inactiveTintColor,}]}>VIEW ALL</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}