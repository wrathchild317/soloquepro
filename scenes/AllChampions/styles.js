import { StyleSheet, Platform } from 'react-native';
import { sqaureMargin, NAVBAR_HEIGHT } from './configs';
import Dimensions from 'Dimensions';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const sorryImageHeight = viewportWidth * 0.75;
console.log(sorryImageHeight);

export default StyleSheet.create({
	container: {
	    flex: 1,
	    flexDirection: 'column',
	    backgroundColor: 'black',
	    alignItems: 'center',
	    justifyContent:'center',
  	},
  	championRow: {
  		flexDirection: 'row',
  		justifyContent: 'flex-start',
  	},
  	contentContainer: {
    	paddingTop: NAVBAR_HEIGHT,
    	justifyContent: 'flex-start',
    	width: '100%',
  	},
  	sorryImage: {
  		width: sorryImageHeight,
  		height: sorryImageHeight,
  		opacity: 0.6,
  		resizeMode: 'contain',
  	},
  	sorryText: {
  		color: '#d3d3d3', 
  		opacity: 0.3,
  		fontFamily: 'Nunito',
  	},
  	sorryMainText: {
  		fontSize: viewportWidth * 0.08,
  	},
  	sorrySecondaryText: {
  		fontSize: viewportWidth * 0.04,
  	},
  	flatList: {
  		width: viewportWidth,
  	},
});