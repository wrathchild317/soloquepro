import React, { PureComponent } from 'react';
import { Image, Text, View, Button, TouchableHighlight } from 'react-native';
import styles from './styles';
import configs from './configs';

import Ripple from 'react-native-material-ripple';

function wp (value, percentage) {
    const newValue = (percentage * value);
    return Math.round(newValue);
}

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
		const {imageContainerStyle, style, imageStyle, label, labelStyle, champion,} = this.props 

		const { width, height } = style;

		this.style = style;

		//figure out image size when pressed
		var imageHeight = wp(height, 0.87);
		this.imageStyle = {width: imageHeight, height: imageHeight};
		this.imagePressedStyle = { width: imageHeight *0.97, height: imageHeight * 0.97};
		this.labelContainer = {width: imageHeight, height: imageHeight * 0.2};

		this.backgroundImageStyle = {width: width, height: height}
		this.backgroundImagePressedStyle = { width: width * 0.97, height: height * 0.97};
		this.container = {justifyContent: 'center', alignItems: 'center', width: width, height: height};

		this.labelStyle = labelStyle;
		const {fontSize} = this.labelStyle;
		this.labelPressedStyle = {fontSize: wp(fontSize, 0.87)}

		this.label = label; //if null no label
		this.source = {uri: champion.champion_square_url};
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
	                    style={[styles.imageContainerStyle, this.backgroundImageStyle]}
        			>	
        				<View style={[this.container, (this.sqaurePressed) ? this.imagePressedStyle : []]}>
	        				<Image source={require('../../assets/images/background_scroll.png')} 
	        					style={[styles.backgroundImageStyle, 
	        						this.backgroundImageStyle, 
	        						(this.sqaurePressed) ? this.backgroundImagePressedStyle : [],
	        					]}
	        				/>
	        				<View>
	        					<Image source={this.source} 
		        					style={[styles.imageStyle, 
		        						this.imageStyle, 
		        						(this.sqaurePressed) ? this.imagePressedStyle : [],
		        					]}
	        					/>	
        					
								{(this.label) ? 
									<View style={[styles.labelContainer, this.labelContainer]}>
										<Text 
											style={[
												styles.labelStyle, 
												this.labelStyle,
												this.labelPressedStyle
											]}
										> 
											{this.label.toUpperCase()}
										</Text>
									</View>
								 : null}
							</View>
						</View>
					</Ripple>
			</View>
		);
	}
}