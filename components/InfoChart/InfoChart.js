/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Animated } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import { slideHeight, itemWidth } from '../CarouselCard/styles';
import configs from './configs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class InfoChart extends Component {

    propTypes: {
        children: React.PropTypes.element.isRequired
    }

    getProps = () => {
        const { attack, defense, magic, difficulty } = this.props.info;
        const { main: mainColor, dark: darkColor } = this.props.colors; 

        this.attack = attack;
        this.defense = defense;
        this.magic = magic;
        this.difficulty = difficulty;
        this.mainColor = mainColor; 
        this.darkColor = darkColor;
    }

    obtainChart = (infoType, iconName, text) => {
        var amountOfEmptyViews = 10 - infoType;
        var filledViews = [];
        var key = 0;

        for( var i = key; i < infoType; i++, key++ ){
            filledViews.push(<View key={key} style={{ height: 7, width: '8%', marginRight: 2, opacity: 1, backgroundColor: this.mainColor, borderColor: this.darkColor, borderWidth: 2, borderStyle: 'solid' }}></View>)
        }

        for( var j = 0; j < amountOfEmptyViews; j++, key++){
            filledViews.push(<View key={key} style={{ height: 7, width: '8%', marginRight: 2, opacity: 1, borderColor: 'gray', borderWidth: 2, borderStyle: 'solid' }}></View>)
        }

        return (
            <View style={{flexDirection:'row', marginBottom: 5}}>
                <View style={{marginHorizontal: 10}}>
                    <MaterialCommunityIcons name={iconName} size={38} color={'rgba(255,255,255,0.75)'} />
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center', marginBottom: 5}}>
                    <Text style={styles.ratesTitle}>{text}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>{ filledViews }</View>
                </View>
            </View>
        );
    }

    render () {
        this.getProps();

        return (
            <View style={{flex: 1}}>
                { this.obtainChart(this.attack, 'sword-cross', 'ATTACK: ') }
                { this.obtainChart(this.defense, 'shield-half-full', 'DEFENSE: ') }
                { this.obtainChart(this.magic, 'auto-fix', 'MAGIC: ') }
                { this.obtainChart(this.difficulty, 'chart-line-variant', 'DIFFICULTY: ') }
            </View>
        );
    }
}
