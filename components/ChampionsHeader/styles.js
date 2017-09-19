 import { StyleSheet } from 'react-native';

 export default StyleSheet.create({
 	header: {
	    height: 49,
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    backgroundColor: 'black',
	},
	labelContainer: {
		flex: 1, 
		alignItems:'center', 
		justifyContent:'center',
	},
	iconContainer: {
		width: 49,
		height: 49,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		fontSize: 20,
		fontFamily: 'Elianto',
	},
	iconLabel: {
		fontSize: 8,
		fontFamily: 'Elianto',
	},

});
