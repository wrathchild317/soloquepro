import Dimensions from 'Dimensions';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const imageWidth = wp(27);
export const sqaureMargin = wp(2);

export default {
	navigationOptions : {
  		tabBarVisible: true,
  	},
  	championSqaureConfigs: {
  		style: {
  			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
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
 }