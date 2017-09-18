import { StyleSheet } from 'react-native';
import { sqaureMargin } from './configs';

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
  		marginHorizontal: sqaureMargin,
  	},
});