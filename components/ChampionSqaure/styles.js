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
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignContent: 'center',
	},
	imageMask: {
		position: 'absolute',
	 	bottom: 0,
	 	left: 0,
	 	opacity: 0.1,
	 },
});