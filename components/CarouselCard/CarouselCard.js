/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, Button, ScrollView, Animated, TouchableOpacity } from 'react-native';
/*--------------Styles & Configs--------*/
import styles, { slideHeight, itemWidth } from './styles';
import configs from './configs';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
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
        const {champion_id: id, tags, name, title, skinUri, blurb, info, lore, color_palette, win_rate, popularity, ban_rate} = champion;
        
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

        /*description info*/
        this.blurb = blurb;
        this.lore = lore;
        this.win_rate = win_rate;
        this.popularity = popularity;
        this.ban_rate = ban_rate;
        this.color_palette = color_palette;

        /*other*/
        this.parallaxProps = parallaxProps;
    }

    handleButtonPress = () => {
        setTimeout(() => {
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
        }, 110);
    }
    onButtonPressIn = () => {
        this.setState({buttonPressed: true});
    } 
    onButtonPressOut = () => {
        this.setState({buttonPressed: false});
    }

    createPressableIcon = (icon, onPressed) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.4}
                onPress={onPressed}
            >
                <View style={styles.iconContainer}>
                    {icon}
                </View>
            </TouchableOpacity>
        );
    }

    xIconPressed = () => {
        this.setState({infoBtnPressed: !this.infoBtnPressed});
        Animated.timing(
            this.heightAnim, 
            {
                toValue: slideHeight * 0.47,
                duration: 300,
            }
        ).start();
        Animated.timing(
            this.opacityAnim, 
            {
                toValue: 0.7,
                duration: 300,
            }
        ).start();
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
                        rippleDuration={250}
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
                        <Text numberOfLines={2} style={[styles.title, this.infoBtnPressed ? {marginRight: 35} : []]}>{ this.title }</Text> 
                    </View>
                </View>
                { infoBtn }
            </View>
        );
    }

    get champDescription() {
        var roundedWinRate = Math.round( this.win_rate * 1000 ) / 10;
        var roundedPopularity = Math.round( this.popularity * 1000 ) / 10;
        var roundedBanRate = Math.round( this.ban_rate * 1000 ) / 10;
        return(
            <View style={ {flex: 1} }>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.title, {fontSize: 20, marginBottom: 5, marginLeft: 7, color: '#adadad'}]}>STATISTICS</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                     <Text style={[styles.title, {fontSize: 16, marginBottom: 2, marginLeft: 10, color: '#b78909'}]}>WIN RATE: </Text>
                     <Text style={[styles.title, {fontSize: 16, marginBottom: 2, color: '#828282'}]}>{roundedWinRate}%</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.title, {fontSize: 16, marginBottom: 2, marginLeft: 10, color: '#b78909'}]}>POPULARITY: </Text>
                    <Text style={[styles.title, {fontSize: 16, marginBottom: 2, color: '#828282'}]}>{roundedPopularity}%</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.title, {fontSize: 16, marginBottom: 2, marginLeft: 10, color: '#b78909'}]}>BAN RATE: </Text>
                    <Text style={[styles.title, {fontSize: 16, marginBottom: 2, color: '#828282'}]}>{roundedBanRate}%</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={[styles.separationLine]} />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.title, {fontSize: 20, marginBottom: 2, marginLeft: 7, color: '#adadad'}]}>DESCRIPTION</Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={[styles.title, {fontSize: 17, fontFamily: 'Nunito', marginBottom: 2, marginLeft: 10, color: '#828282' }]}>{this.blurb}</Text>
                </View>
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
                        <View style={{position: 'absolute', top: 5, right: 5}}>
                            { this.infoBtnPressed ? this.createPressableIcon(<EvilIcon name={'close'} size={34} color={'rgba(211,211,211,0.5)'} />,
                            this.xIconPressed) : null }
                        </View>
                    </Animated.ScrollView>
                </View>
            </View>
        );
    }
}