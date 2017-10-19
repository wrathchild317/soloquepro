/*---------------React------------------*/
import React, { Component } from 'react';
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
/*------------------utils-----------------*/
import _ from 'lodash';
import Dimensions from 'Dimensions';
/*------------------components-----------------*/
import Ripple from 'react-native-material-ripple';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class MapCards extends Component {

    getProps = () => { 
        const { onPress, map, style} = this.props;
        const { MapId , MapName, img_url } = map;
        this.mapId  = MapId;
        this.mapName = MapName;
        this.mapImg = img_url;
        this.onPress = onPress;
        this.style = style;
    }

    mapPressed = () => {
        this.onPress(this.mapId, this.mapName);
    }

    render () {
        this.getProps();

        return (
            <View style={{width: '100%', height: viewportHeight*0.26}}>
                <Ripple onPress={this.mapPressed} key={this.mapId} style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 15, marginVertical: 3}}>
                        <Image source={{uri: 'https://img10.deviantart.net/0440/i/2008/137/1/8/old_paper_by_struckdumb.jpg'}} style={{position: 'absolute', resizeMode: 'cover', width:'100%', height:'100%'}} />
                        <Image source={{uri: this.mapImg}} style={{width: '98%', height: '98%'}} /> 
                        <Text style={{color: 'white', fontSize: 20, fontFamily: 'Nunito', position: 'absolute', bottom: 5, left: 10}}>{this.mapName}</Text>
                    </View>
                </Ripple>
            </View>
        );
    }
}
