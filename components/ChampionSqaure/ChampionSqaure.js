import React, { PureComponent } from 'react';
import { Image, Text, View, Button, TouchableHighlight } from 'react-native';
import styles from './styles';
import configs from './configs';

import Ripple from 'react-native-material-ripple';

export default class ChampionSqaure extends PureComponent {
	
	constructor(props) {
      super(props);
    
      this.state = {
        sqaurePressed: false,
      };
    }

    handleSqaurePress = () => {
        return true;
    }
 
    onSqaurePressIn = () => {
        this.setState({sqaurePressed: true});
    } 
    onSqaurePressOut = () => {
    	this.setState({sqaurePressed: false});
    }  

	getProps = () => {
		const {imageContainerStyle, style, imageStyle, label, labelStyle, champion, cdn} = this.props 
		this.imageStyle = imageStyle;

		//figure out image size when pressed
		const { width, height } = this.imageStyle;
		this.imagePressedStyle = { width: width *0.97, height: height * 0.97};
		this.container = {width: width, height: height};
		this.labelContainer = {width: width, height: height * 0.2}

		this.label = label; //if null no label
		this.source = {uri: cdn + '/img/champion/' + champion.key + '.png'};
		this.labelStyle = labelStyle;
		this.style = style;
		this.imageContainerStyle = imageContainerStyle;
		this.sqaurePressed = this.state.sqaurePressed;
		this.key = champion.key;
	}

	render() {
		this.getProps();

		return (
			<View style={this.style}>
					<Ripple 
						rippleColor='white'
                        rippleOpacity={0.5}
                        rippleDuration={400}
	                    onPress={this.handleSqaurePress}
	                    onPressIn={this.onSqaurePressIn}
	                    onPressOut={this.onSqaurePressOut}
	                    delayPressOut={75}
	                    delayPressIn={15}
	                    style={this.imageContainerStyle}
        			>	
        				<View style={[this.container, (this.sqaurePressed) ? this.imagePressedStyle : []]}>
        					<Image source={this.source} style={[this.imageStyle, (this.sqaurePressed) ? this.imagePressedStyle : [],]}/>	
        					
							{(this.label) ? 
								<View style={[styles.labelContainer, this.labelContainer]}>
									<Text style={this.labelStyle}>{this.label.toUpperCase()}</Text>
								</View>
							 : null}
						</View>
					</Ripple>
			</View>
		);
	}
}