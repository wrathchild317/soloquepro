/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';
import configs from './configs';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ToolBar extends Component {

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
        } = this.props;

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
                />
                {(this.iconOne) ? this.createPressableIcon(this.iconOne, this.onIconOnePressed): null}
                {(this.iconTwo) ? this.createPressableIcon(this.iconTwo, this.onIconTwoPressed): null}
                {(this.iconThree) ? this.createPressableIcon(this.iconThree, this.onIconThreePressed): null}
            </View>
        );
    }
}
