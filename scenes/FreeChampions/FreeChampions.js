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
import { createLoadingUri } from '../../utils';

class FreeChampions extends Component {

	static navigationOptions = configs.navigationOptions;

	getProps = () => {
		const { freeChampions } = this.props.championData;

		//parseOut required Information because carousel
		//causes rerender too many times and parsing should be done here
		this.freeChampions = (freeChampions) ?
			_.map(freeChampions, (champion) => {
				const { skins, key, id, tags, name, title } = champion;
				var skinUri =  createLoadingUri(key, 0);
				return {id, tags, name, title, skinUri};
			}) : null;

		//pick the skin url here

	}

	componentDidMount() {
		this.props.getFreeChampions();
	}
	

  	render() {
  		this.getProps();

  		var innerComp = (this.freeChampions) ?
	     	<ChampionCarousel 
	     			freeChampions={this.freeChampions}
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