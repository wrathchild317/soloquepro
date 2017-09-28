import { StyleSheet, Image, Platform } from 'react-native';
import Dimensions from 'Dimensions';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const slideHeight = viewportHeight * 0.9;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


const entryBorderRadius = 8;
export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        // needed for shadow
    },
    image: {
        ...StyleSheet.absoluteFillObject,
    },
    imageContainer: {
        height: slideHeight * 0.9,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
    },
    infoContainer: {
        flex: 1,
    },
    tagContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height: slideHeight * 0.47 * 0.20,
        paddingLeft: 25,
    },
    tagContainerAnimated:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 0,
        paddingLeft: 25,
    },
    mainInfoContainer: {
        width: itemWidth,
        height: slideHeight * 0.47 * 0.30, 
        flexDirection: 'row',
    },
    fullNameContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        height: 80,
        paddingTop: 5,
        marginRight: 5,
    },
    buttonContainer: {
        width: itemWidth,
        flexDirection: 'column',
        height: slideHeight * 0.47 * 0.28,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
    },
    tag: {
        position: 'absolute',
        color: 'rgba(255,255,255,0.65)',
        right: 25,
        fontSize: 17,
        fontFamily: 'Elianto',
    },
    tagImage: {
        width: 80,
        height: 80,
        marginLeft: 7,
        marginRight: 8,
    },
    tagImageAnimated: {
        width: 50,
        height: 50
    },
    name: {
        fontSize: 80 * 0.26,
        color: 'white',
        fontFamily: 'Elianto',
    },
    title: {
        fontFamily: 'Elianto',
        color: 'rgba(255,255,255,0.75)',
    },
    button: {
        height: 60,
        width: itemWidth * 0.8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonPressed: {
        height: 56,
        width: itemWidth * 0.76
    },
    infoButton: {
        flex: 1,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Elianto',
        fontSize: 16,
    },
    line: {
        position: 'absolute',
        top: 45,
        left: 25,
        width: itemWidth * 0.8,
        height: 1,
        backgroundColor: 'rgba(255,215,0, 0.45)',
    },
    separationLine: {
        width: itemWidth * 0.95,
        height: 1,
        marginVertical: 5,
        backgroundColor: 'rgba(255,215,0, 0.45)',
    },
    lineAnimated: {
        top: 65,
    }
})