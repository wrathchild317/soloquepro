import React from 'react';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const imageWidth = wp(25);
export const sqaureMargin = wp(3);

export const NAVBAR_HEIGHT = 49;

export default {
	navigationOptions : {
  		tabBarVisible: true,
  	},
  	championSqaureConfigs: {
  		style: {
  			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
            width: imageWidth + 2,
            height: imageWidth + 2,
            marginHorizontal: sqaureMargin,
  		},
  		imageContainerStyle: {
  			borderRadius: 5,
			borderColor: 'rgba(158, 133, 0, 0.7)',
			borderWidth: 1,
  		},
  		labelStyle: {
  			color: 'white',
  			fontFamily: 'Elianto',
  			textAlign: 'center',
  			fontSize: 10,
  		},
  		imageStyle: {
  			resizeMode: 'contain',
  			width: imageWidth,
  			height: imageWidth,
  		}
  	},
    collapsableHeaderConfigs: {
      style: {
        height: NAVBAR_HEIGHT,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.2)',
      }
    },
    toolBarConfigs: {
        searchIconColor: 'white',
        xIconColor: 'rgba(211,211,211,0.5)',
        iconSizes: 23,
         textInputProps: {
            autoCapitalize: 'words',
            autoCorrect: false,
            placeholder: 'SEARCH CHAMPION',
            placeholderTextColor: 'rgba(211,211,211,0.5)',
            underlineColorAndroid: 'transparent',
            style: {
                color: 'white',
                fontSize: 18,
            },
            selectionColor: '#d3d3d3',
         },
         iconOne: <Icon name={'filter'} size={23} color={'white'}  />,
         iconTwo: <Icon name={'sliders'} size={23} color={'white'}  />,
    }
 }