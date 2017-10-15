import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight, FlatList } from 'react-native';
import configs from './configs';
import styles from './styles';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//---------------actions-------------------//
import { getMaps, getItems } from '../../redux/actions';
/*------------------utils-----------------*/
import _ from 'lodash';
import { createPressableIcon } from '../../utils';
/*---------------components--------------*/
import { PacmanIndicator } from 'react-native-indicators';
import MapCards from '../../components/MapCards'

class Items extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
		  	mapsData: null,
		    mapSelected: '',
	    };
    }

	static navigationOptions = configs.navigationOptions;

	getProps = () => {
		const { mapsData }  = this.props.mapsData;

		this.maps = (mapsData) ? mapsData : null

		/* Button Pressed */
		this.mapSelected = this.state.mapSelected;

		/* Filter Maps */
		this.maps = this.maps ? _.filter(this.maps, (map) => {
			var mapId = map.MapId;
			return (configs.homeMaps.indexOf(mapId) !== -1)
		}) : null;

	}

	renderItem = ({item}) => {
		return (
			<MapCards 
				map={item} 
				onPress={this.onPress}	
			/>
        )
	}

	keyExtractor = (item) => item.MapId

	componentDidMount(){
		this.props.getMaps(); 
	}

    getCards = (mapSelected) => {
    	this.props.getItems(mapSelected);
    }

    onPress = (mapId, mapName) => {
   		const { navigate } = this.props.navigation;
   		navigate('MapItems', { mapID: mapId, mapName: mapName });
    }

  	render() {
  		this.getProps();

	    return (
	     	<View style={styles.container}>
	     		{	
	     			this.maps ? (
		     			<FlatList 	
		     				data={this.maps}
		     				renderItem={this.renderItem}
		     				style={{flex:1}}
		     				keyExtractor={this.keyExtractor}
		     			/>
					) : <PacmanIndicator color={'white'}/>
	     		}
	     	</View>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		mapsData: state.mapsData,
		items: state.itemsData,
	}
}

const mapDispatchToProps = (dispatch) => {
	var props = bindActionCreators({getMaps: getMaps, getItems: getItems}, dispatch);
	return {
		...props,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
