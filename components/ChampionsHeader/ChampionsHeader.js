import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import configs from './configs';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ChampionsHeader extends PureComponent {

	getProps = () => {
		const {
			navigation,
		    inactiveTintColor,
		    activeTintColor,
		    jumpToIndex,
		} = this.props;

		this.navigation = navigation;
		this.inactiveTintColor = inactiveTintColor;
		this.activeTintColor = activeTintColor;
		this.jumpToIndex = jumpToIndex;
	}

	allIconPressed = () => {
		const { navigate } = this.navigation;
		navigate('AllChampions');
	}
	
	backIconPressed = () => {
		const { navigate } = this.navigation;
		navigate('FreeChampions');
	}

	get viewAllIcon() {
		return (
			<TouchableOpacity 
				activeOpacity={0.4}
          		onPress={this.allIconPressed}
			>
				<View style={styles.iconContainer}>
					<MaterialIcon name={'apps'} size={23} color={this.inactiveTintColor} />
					<Text style={[styles.iconLabel, {color: this.inactiveTintColor,}]}>VIEW ALL</Text>
				</View>
			</TouchableOpacity>
		);
	}

	get backIcon() {
		return (
			<TouchableOpacity 
				activeOpacity={0.4}
          		onPress={this.backIconPressed}
			>
				<View style={styles.iconContainer}>
					<Icon name={'chevron-left'} size={50} color={this.inactiveTintColor} />
				</View>
			</TouchableOpacity>
		);
	}
	

	render() {

		this.getProps();

		const {routes , index} = this.navigation.state;

		const label = configs.headerLabels[index].toUpperCase();

		return (
			<View style={styles.header} >
				<View style={styles.iconContainer}>
					{(index !== 0) ? this.backIcon : []}
				</View>
				<View style={styles.labelContainer} >
					<Text style={[styles.label, {color: this.activeTintColor}]}>
						{label}
					</Text>
				</View>
				<View style={styles.iconContainer}>
					{(index === 0) ? this.viewAllIcon : []}
				</View>
			</View>
		);
	}
}