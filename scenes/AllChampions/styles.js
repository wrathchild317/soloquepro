import { StyleSheet, Platform } from 'react-native';
import { sqaureMargin, NAVBAR_HEIGHT } from './configs';

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
  	}
});