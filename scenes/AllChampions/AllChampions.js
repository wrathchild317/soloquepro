import React, { Component } from 'react';
import { Text, View, Button, FlatList, Animated } from 'react-native';
import styles from './styles';
import configs, { NAVBAR_HEIGHT } from './configs';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

//----------------utils---------------------
import _ from 'lodash';
import { PacmanIndicator } from 'react-native-indicators';
import { sqaureMargin, imageWidth } from './configs';
import CollapsableHeader from '../../components/CollapsableHeader';
//import champion sqaure
import ChampionSqaure from '../../components/ChampionSqaure';

import ToolBar from '../../components/ToolBar';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


class AllChampions extends Component {
	
	static navigationOptions = {
		...configs.navigationOptions,
	}

	constructor(props) {
		super(props);
		
		//UsedForHeaderAnimation
		const scrollAnim = new Animated.Value(0);
	    const offsetAnim = new Animated.Value(0);

		this.state = {
			scrollAnim,
			offsetAnim,
			clampedScroll: Animated.diffClamp(
				Animated.add(
					scrollAnim.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 1],
						extrapolateLeft: 'clamp',
					}),
					offsetAnim,
				),
				0,
				NAVBAR_HEIGHT ,
      		),
		};
	}

	getProps = () => {
		const { champions, keys } = this.props.championData;
		const { realmData } = this.props.staticData;

		const {n, cdn} = realmData;

		if(champions && keys && realmData) {
			var championsInfo = _.map(keys, (key) => {
				return (({name, id, key}) => ({name, id, key}))(champions[key]);
			});

			this.champions = championsInfo;
			this.cdn = cdn + '/' + n.champion;
		} else {
			this.champions = null;
		}

		const { clampedScroll } = this.state;
		this.clampedScroll = clampedScroll;

	}
	
	renderItem = ({item}) => {
		return (
			<ChampionSqaure
				label={item.name}
				champion={item}
				cdn={this.cdn}
				{...configs.championSqaureConfigs}
			/>
		);
	}

	keyExtractor = (item) => item.key

	getItemLayout = (data, index) => {
		var itemHeight = sqaureMargin + imageWidth + 4;
  		return {length: itemHeight, offset: itemHeight * index, index};
	}

	renderSeparator = () => (
      	<View
        	style={{
         	 	height: 1,
          		width: '70%',
          		backgroundColor: 'rgba(255,215,0, 0.25)',
          		marginHorizontal: '15%',
        	}}
      />
    )


	render() {
		this.getProps();

		return (
			<View style={styles.container}>
				<View>
					{
						(this.champions) ? 
							<AnimatedFlatList
								scrollEventThrottle={1}
          						onScroll={Animated.event(
            						[{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            						{ useNativeDriver: true },
         						)}
								data={this.champions}
								renderItem={this.renderItem}
								keyExtractor={this.keyExtractor}
								getItemLayout={this.getItemLayout}
								numColumns={3}
								initialNumToRender={15}
								columnWrapperStyle={{marginVertical: 15}}
								ItemSeparatorComponent={this.renderSeparator}
								contentContainerStyle={styles.contentContainer}
							/> : 
							<PacmanIndicator color={'white'}/>
					}
				</View>
				<CollapsableHeader 
					clampedScroll={this.clampedScroll} 
					{...configs.collapsableHeaderConfigs } 
				>
					<ToolBar 
						{...configs.toolBarConfigs}
					/>
				</CollapsableHeader>
	      </View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		championData: state.championData,
		staticData: state.staticData,
	}
}


export default connect(mapStateToProps)(AllChampions);