/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class ToolBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            hasText: false,
        };
    }

    getProps = () => {
        const { 
            contentContainerStyle,
            textInputProps,
            iconOne,
            iconTwo,
            iconThree,
            onIconOnePressed,
            onIconTwoPressed,
            onIconThreePressed,
            searchIconColor,
            xIconColor,
            iconSizes,
            onChangeText,
        } = this.props;

        this.iconSizes = iconSizes;
        this.hasText = this.state.hasText;
        this.xIconColor = xIconColor;
        this.searchIconColor = searchIconColor;
        this.textInputProps = textInputProps;

        const { style } = this.textInputProps;

        this.textInputStyle = style; 

        this.iconOne = iconOne;
        this.onIconOnePressed = onIconOnePressed;
        this.iconTwo = iconTwo;
        this.onIconTwoPressed = onIconTwoPressed;
        this.iconThree = iconThree;
        this.onIconThreePressed = onIconThreePressed;

        this.changeText = onChangeText;
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


    displayXIcon = (text) => {
        (text) ? this.setState({hasText: true}) : 
            this.setState({hasText: false});
    }

    xIconPressed = () => {
        this.textInput.clear();
        this.changeText('');

        //hack only way to fix otherwise keyboard keeps state
        this.textInput.setNativeProps({keyboardType: 'email-address'});
        this.textInput.setNativeProps({keyboardType: 'default'});
        
        this.displayXIcon();
    }

    onChangeText = (text) => {
        this.displayXIcon(text);
        this.changeText(text);
    }

    render () {
        this.getProps();

        return (
            <View style={{flex: 1, width: '100%', flexDirection: 'row',}}>
                <View style={styles.iconContainer}>
                    <Icon name={'search'} size={23} color={this.searchIconColor}  />
                </View>
                <TextInput 
                    {...this.textInputProps}
                    style={[styles.textInput, this.textInputStyle]}
                    onChangeText={this.onChangeText}
                    ref={(input) => { this.textInput = input; }}
                />
                {
                    (this.hasText) ? this.createPressableIcon(
                        <EvilIcon name={'close'} size={28} color={this.xIconColor} />,
                        this.xIconPressed)
                        : null
                }
                {(this.iconOne) ? this.createPressableIcon(this.iconOne, this.onIconOnePressed): null}
                {(this.iconTwo) ? this.createPressableIcon(this.iconTwo, this.onIconTwoPressed): null}
                {(this.iconThree) ? this.createPressableIcon(this.iconThree, this.onIconThreePressed): null}
            </View>
        );
    }

}
