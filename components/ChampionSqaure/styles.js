import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	labelContainer: {
		flexDirection: 'column',
		position: 'absolute',
		bottom: 0,
		left: 0,
		justifyContent: 'flex-end',
	},
	 imageContainerStyle: {
  		justifyContent: 'center',
  		alignItems: 'center',
  		backgroundColor: 'rgba(255,255,255,0.3)',
  	},
  	backgroundImageStyle: {
  		position: 'absolute',
  		resizeMode: 'contain',
  	},
  	imageStyle: {
  		resizeMode: 'contain',
  	},
  	labelStyle: {
  		textAlign: 'center',
  	}

});