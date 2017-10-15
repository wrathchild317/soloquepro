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
import { createPressableIcon } from '../../utils';
import _ from 'lodash';
/*--------------Components-------------*/
import InfoChart from '../InfoChart/InfoChart'

export default class CarouselCard extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        buttonPressed: false,
        infoBtnPressed: false,
        heightAnim: new Animated.Value(slideHeight * 0.47),
        opacityAnim: new Animated.Value(0.7),
        moreDescriptionPressed: false, 
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
        this.moreDescriptionPressed = this.state.moreDescriptionPressed;
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
        this.info = info;

        /*other*/
        this.parallaxProps = parallaxProps;
    }

    handleButtonPress = () => {
        setTimeout(() => {
            this.setState({ infoBtnPressed: !this.infoBtnPressed });

            Animated.timing(
                this.heightAnim, 
                {
                    toValue: slideHeight * 0.85,
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

    viewMoreDescPressed = () => {
        this.setState({moreDescriptionPressed: !this.moreDescriptionPressed});
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

    get statisticsInfo(){
        var roundedWinRate = Math.round( this.win_rate * 1000 ) / 10;
        var roundedPopularity = Math.round( this.popularity * 1000 ) / 10;
        var roundedBanRate = Math.round( this.ban_rate * 1000 ) / 10;
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.descriptionTitle}>STATISTICS</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                     <Text style={styles.ratesTitle}>WIN RATE: </Text>
                     <Text style={[styles.ratesTitle, styles.rates]}>{roundedWinRate}%</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ratesTitle}>POPULARITY: </Text>
                    <Text style={[styles.ratesTitle, styles.rates ]}>{roundedPopularity}%</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.ratesTitle}>BAN RATE: </Text>
                    <Text style={[styles.ratesTitle, styles.rates ]}>{roundedBanRate}%</Text>
                </View>
            </View>
        );
    }

    get separationLine(){
        return(
            <View style={{alignItems: 'center'}}>
                <View style={[styles.separationLine]} />
            </View>
            );
    }

    get descriptionInfo(){
        var downArrow = <EvilIcon name={'chevron-down'} size={55} color={'rgba(211,211,211,0.5)'} />
        var upArrow = <EvilIcon name={'chevron-up'} size={55} color={'rgba(211,211,211,0.5)'} />
        return( 
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.descriptionTitle}>DESCRIPTION</Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={styles.descriptionText}>{this.moreDescriptionPressed ? this.lore : this.blurb}</Text>
                    {
                        !this.moreDescriptionPressed ? <View height={50} width={'100%'} style={{position: 'absolute', bottom: 0, backgroundColor: 'black', opacity: 0.5}}></View> : null

                    }                                       
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> 
                    {
                        !this.moreDescriptionPressed ? createPressableIcon(downArrow, this.viewMoreDescPressed) : createPressableIcon(upArrow, this.viewMoreDescPressed)
                    }
                </View>
            </View>
        );
    }

    get champDescription() {
        return(
            <View style={ {flex: 1} }>
                <InfoChart info={ this.info } colors={ this.color_palette } />
                { this.separationLine }
                { this.statisticsInfo }
                { this.separationLine }
                { this.descriptionInfo }
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
                    <View style={{position: 'absolute', top: 5, right: 5}}>
                        { this.infoBtnPressed ? createPressableIcon(<EvilIcon name={'close'} size={34} color={'rgba(211,211,211,0.5)'} />,
                        this.xIconPressed) : null }
                    </View>
                </View>
            </View>
        );
    }
}