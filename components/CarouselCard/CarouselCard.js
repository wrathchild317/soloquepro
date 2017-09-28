/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, Button, ScrollView, Animated } from 'react-native';
/*--------------Styles & Configs--------*/
import styles, { slideHeight } from './styles';
import configs from './configs';
/*-------------import parallax---------*/
import { ParallaxImage } from 'react-native-snap-carousel';
/*--------------Utilities-------------*/
import Ripple from 'react-native-material-ripple';
import _ from 'lodash';

export default class CarouselCard extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        buttonPressed: false,
        infoBtnPressed: false,
        heightAnim: new Animated.Value(slideHeight * 0.47),
        opacityAnim: new Animated.Value(0.7), 
      };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (!_.isEqual(nextState, this.state)); 
    }

    getProps = () => {
        const { champion, parallaxProps} = this.props;
        const { heightAnim, opacityAnim } = this.state;
        const {champion_id: id, tags, name, title, skinUri} = champion;
        
        /*get champion info for card*/
        this.id = id;
        this.name = name.toUpperCase();
        this.title = title.toUpperCase();
        this.tag = tags[0].toUpperCase();
        
        /*set up card image info*/
        this.tagUri = configs.baseTagUrl + tags[0].toLowerCase() + '.png'; 
        this.cardUri = skinUri;

        /*set up button info*/
        this.buttonPressed = this.state.buttonPressed;
        this.infoBtnPressed = this.state.infoBtnPressed;
        var lastChar = this.name[this.name.length-1];
        var possesion = (lastChar != 'S') ? `'S` : `'`;
        this.buttonText = this.name + possesion + ' INFO';

        /*animated values*/
        this.heightAnim = heightAnim;
        this.opacityAnim = opacityAnim;
        
        /*other*/
        this.parallaxProps = parallaxProps;
    }

    handleButtonPress = () => {
        this.setState({ infoBtnPressed: !this.infoBtnPressed });

        Animated.timing(
            this.heightAnim, 
            {
                toValue: slideHeight * 0.9,
                duration: 300,
            }
        ).start();
        Animated.timing(
            this.opacityAnim, 
            {
                toValue: 0.875,
                duration: 300,
            }
        ).start();
    }
    onButtonPressIn = () => {
        this.setState({buttonPressed: true});
    } 
    onButtonPressOut = () => {
        this.setState({buttonPressed: false});
    }


    get image() {
        return(
            <ParallaxImage
                source={{ uri: this.cardUri}}
                style={[styles.image]}
                parallaxFactor={0.02}
                fadeDuration={400}
                showSpinner={true}
                spinnerColor={'rgba(255,255,255,0.7)'}
                containerStyle={styles.imageContainer}
                {...this.parallaxProps}
            />
        );
    }

    get championInfo() {
        var infoBtn = !this.infoBtnPressed ? (
                <View style={styles.buttonContainer}>
                    <Ripple
                        rippleColor='white'
                        rippleOpacity={0.5}
                        rippleCentered={true}
                        rippleDuration={600}
                        style={[styles.button, (this.buttonPressed) ? styles.buttonPressed : []]}
                        onPress={this.handleButtonPress}
                        onPressIn={this.onButtonPressIn}
                        onPressOut={this.onButtonPressOut}
                        delayPressOut={75}
                    >
                            <Text style={styles.buttonText}>{ this.buttonText }</Text>
                    </Ripple>
                </View>
            ) : null 

        return(
            <View style={styles.info}>
                <View style={ this.infoBtnPressed ? styles.tagContainerAnimated : styles.tagContainer } >
                    { !this.infoBtnPressed ? <Text style={styles.tag}>{ this.tag }</Text> : null }
                </View>
                <View style={[styles.line, this.infoBtnPressed ? styles.lineAnimated : [] ]} />
                <View style={styles.mainInfoContainer}>
                    <Image style={[styles.tagImage, this.infoBtnPressed ? styles.tagImageAnimated : [] ]} source={{uri: this.tagUri}} />
                    <View style={styles.fullNameContainer}>
                        <Text style={styles.name}>{this.name}</Text>
                        <Text numberOfLines={2} style={styles.title}>{ this.title }</Text> 
                    </View>
                </View>
                { infoBtn }
            </View>
        );
    }

    get champDescription() {
        return(
            <View style={ {flex: 1} }>
                
            </View>
            )
    }

    render () {
        this.getProps();

        return (
            <View style={styles.slideInnerContainer}>
                <View style={styles.imageContainer}>
                    { this.image }
                    <Animated.ScrollView style={[styles.radiusMask, {height: this.heightAnim, opacity: this.opacityAnim}]} >
                        { this.championInfo }
                        { this.infoBtnPressed ? this.champDescription : null }
                    </Animated.ScrollView>
                </View>
            </View>
        );
    }
}