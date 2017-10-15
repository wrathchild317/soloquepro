import { StyleSheet,} from 'react-native';
import Dimensions from 'Dimensions';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const itemHorizontalMargin = wp(1);
const slideWidth = wp(80);

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
	container: {
	    flex: 1,
	    flexDirection: 'column',
	    backgroundColor: '#000',
	    alignItems: 'stretch',
	    justifyContent:'flex-start',
	  },
	separationLine: {
        width: '100%',
        height: 1,
        marginVertical: 5,
        backgroundColor: 'rgba(255,215,0, 0.45)',
    },
    avatarStyle: {
    	borderRadius: 50, 
    	borderWidth: 2, 
    	borderColor: 'rgba(206, 140, 0, 0.9)',
    },
    headerStyle: {
    	height: 70, 
    	width: '100%', 
    	flexDirection: 'column', 
    	alignItems: 'center', 
    	justifyContent: 'center', 
    	backgroundColor: 'black', 
    	borderStyle: 'solid', 
    	borderBottomColor: 'rgba(255,255,255,0.2)', 
    	borderBottomWidth: 1,
    },
    headerText: {
    	fontFamily: 'Elianto', 
    	fontSize: 20, 
    	color: 'white',
    },
    subHeaderText: {
		fontFamily: 'Elianto', 
    	fontSize: 18, 
    	color: '#aaaaaa',
    },
})