import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import styles from './styles';
import configs from './configs';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

//----------------utils---------------------
import _ from 'lodash';
import { PacmanIndicator } from 'react-native-indicators';
import { sqaureMargin, imageWidth } from './configs';

//import champion sqaure
import ChampionSqaure from '../../components/ChampionSqaure';

class AllChampions extends Component {
	
	static navigationOptions = configs.navigationOptions;

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

	}

	getChampionRow = (champions) => {
		return (
			<View style={styles.championRow}>
				{ _.map(champions, (champion) => {
					return (
						<ChampionSqaure
							key={champion.id}
							label={champion.name}
							champion={champion}
							cdn={this.cdn}
							{...configs.championSqaureConfigs}
						/>
					);
				})}
			</View>
		);
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
		var itemHeight = sqaureMargin + imageWidth + 2;
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
				{
					(this.champions) ? 
						<FlatList
							data={this.champions}
							renderItem={this.renderItem}
							keyExtractor={this.keyExtractor}
							getItemLayout={this.getItemLayout}
							numColumns={3}
							initialNumToRender={15}
							columnWrapperStyle={{marginVertical: 15}}
							ItemSeparatorComponent={this.renderSeparator}
						/> : 
						<PacmanIndicator color={'white'}/>
				}
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