import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import configs from './configs';

//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//---------------actions-------------------//
import { getFreeChampions } from '../../redux/actions';
/*------------------utils-----------------*/
import _ from 'lodash';
/*---------------components--------------*/
import ChampionCarousel from '../../components/ChampionCarousel';
import { PacmanIndicator } from 'react-native-indicators';

class FreeChampions extends Component {

	static navigationOptions = configs.navigationOptions;

	getProps = () => {
		const { champions, freeChampions } = this.props.championData;
		const { realmData }= this.props.staticData;

		this.realmData = realmData;
		this.freeChampions = (champions && freeChampions) ? 
			_.map(freeChampions, function(champion){
				const { id } = champion;
				const { name, title, image, tags, info, key } = _.find(champions, {id: id});
				return {id, name, title, image, tags, info, key}
		}) : null;

	}

	componentDidMount() {
		this.props.getFreeChampions();
	}
	

  	render() {
  		this.getProps();

  		var innerComp = (this.freeChampions && this.realmData) ?
	     	<ChampionCarousel 
	     			freeChampions={this.freeChampions}
	     			realmData={this.realmData}
	     	/> :
	     	<PacmanIndicator color={'white'}/>

	    return (
	     	<View style={styles.container}>
	     		{ innerComp }
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

const mapDispatchToProps = (dispatch) => {
	var props = bindActionCreators({getFreeChampions: getFreeChampions}, dispatch);
	return {
		...props,
		dispatch: dispatch,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeChampions);