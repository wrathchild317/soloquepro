/*---------------React------------------*/
import React, { PureComponent } from 'react';
import {View, Text, Image, TouchableHighlight, Button } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
/*-------------import parallax---------*/
import { ParallaxImage } from 'react-native-snap-carousel';
/*--------------Utilities-------------*/
import Ripple from 'react-native-material-ripple';

export default class CarouselCard extends PureComponent {

    constructor(props) {
      super(props);
    
      this.state = {
        buttonPressed: false,
      };
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
        this.buttonPressed = this.state.buttonPressed;

        var lastChar = this.name[this.name.length-1];
        var possesion = (lastChar != 'S') ? `'S` : `'`;
        this.buttonText = this.name + possesion + ' INFO';
    }

    handleButtonPress = () => {
        return true;
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