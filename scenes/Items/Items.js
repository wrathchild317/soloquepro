import React, { Component } from 'react';
import { Image, Text, View, Button, Picker } from 'react-native';
import configs from './configs';
import styles from './styles';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//---------------actions-------------------//
import { getMaps } from '../../redux/actions';
/*------------------utils-----------------*/
import _ from 'lodash';

class Items extends Component {

	static navigationOptions = configs.navigationOptions;

	getProps = () => {
		const { mapsData } = this.props.mapsData;

		this.maps = (mapsData) ? mapsData : null;
	}

	componentDidMount(){
		this.props.getMaps(); 
	}

  	render() {
  		this.getProps();

	    return (
	     	<View style={styles.container}>
	     		{	
	     			this.maps ? (
		     			_.map(this.maps, (map) => {
							return (configs.homeMaps.indexOf(map.MapId) !== -1) ? 
							<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 3}} key={map.MapId}>
								<Image source={{uri: 'https://img10.deviantart.net/0440/i/2008/137/1/8/old_paper_by_struckdumb.jpg'}} style={{position: 'absolute', resizeMode: 'cover', width:'100%', height:'100%'}} />
								<Image source={{uri: map.img_url}} style={{width: '98%', height: '98%'}} />
								<Text style={{color: 'white', fontSize: 20, fontFamily: 'Nunito', position: 'absolute', bottom: 5, left: 10}}>{map.MapName}</Text>
							</View> : null
						})
					) : null
	     		}
	     	</View>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		mapsData: state.mapsData,
	}
}

const mapDispatchToProps = (dispatch) => {
	var props = bindActionCreators({getMaps: getMaps}, dispatch);
	return {
		...props,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
