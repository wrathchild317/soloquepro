/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
/*-------------import parallax---------*/
import { ParallaxImage } from 'react-native-snap-carousel';
/*--------------Utilities-------------*/


export default class CarouselCard extends Component {
    shouldComponentUpdate(nextProps, nextState){
        /*carousel ;already mounts and unmounts several time don't need them to rerender either*/
        return false;
    }

    getProps = () => {
        const { champion, cdn, parallaxProps} = this.props;
        const {id, tags, name, title} = champion;
        this.id = id;
        this.name = name.toUpperCase();
        this.title = title.toUpperCase();
        this.tag = tags[0].toUpperCase()
        this.cardUri = cdn + '/img/champion/loading/' + champion.key + '_0.jpg';
        this.parallaxProps = parallaxProps;
        this.tagUri = configs.baseTagUrl + tags[0].toLowerCase() + '.png';
    }

    handleButtonPress = () => {
        return true;
    }

    get image() {
        return(
            <ParallaxImage
                source={{ uri: this.cardUri}}
                style={[styles.image]}
                parallaxFactor={0.07}
                fadeDuration={500}
                showSpinner={true}
                spinnerColor={'rgba(255,255,255,0.7)'}
                containerStyle={styles.imageContainer}
                {...this.parallaxProps}
            />
        );
    }

    get championInfo() {
        return(
            <View style={styles.info}>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>{this.tag}</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.mainInfoContainer}>
                    <Image style={styles.tagImage} source={{uri: this.tagUri}} />
                    <View style={styles.fullNameContainer}>
                        <Text style={styles.name}>{this.name}</Text>
                        <Text numberOfLines={2} style={styles.title}>{this.title}</Text> 
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                        activeOpacity={1}
                        style={styles.button}
                        underlayColor={'rgba(255,255,255,0.2)'}
                        onPress={this.handleButtonPress}
                    >
                            <Text style={styles.buttonText}>{this.name + `'S INFO`} </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }


    render () {
        this.getProps();

        return (
            <View style={styles.slideInnerContainer}>
                <View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} >
                        { this.championInfo }
                    </View>
                </View>
            </View>
        );
    }
}