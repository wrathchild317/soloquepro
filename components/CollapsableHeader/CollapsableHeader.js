/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Animated } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';


export default class CollapsableHeader extends Component {

    propTypes: {
        children: React.PropTypes.element.isRequired
    }

    getProps = () => {
        const { style, clampedScroll} = this.props;
        this.style = style;
        
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, style.height-1],
            outputRange: [0, -(style.height-1)],
            extrapolate: 'clamp',
        });

        this.transform = { transform: [{ translateY: navbarTranslate }] }
    }

    render () {
        this.getProps();

        return (
            <Animated.View style={[styles.navbar, this.style, this.transform]}>
                {this.props.children}
            </Animated.View>
        );
    }
}
