import Dimensions from 'Dimensions';
import { sliderWidth, itemWidth } from '../CarouselCard/styles';

export default {
	carouselConfigs:{
		itemWidth: itemWidth,
    	sliderWidth: sliderWidth,
    	hasParallaxImages: true,
    	inactiveSlideOpacity: 0.4,
    	enableMomentum: true,
    	activeSlideOffset: 20,
    	swipeThreshold: 283,
    	enableSnap: true,
        apparitionDelay: 0,
	}
}