//---------------------Import Navigator----------------------
import { TabNavigator } from 'react-navigation';
//---------------------Import Scenes----------------------
import SummonerSearch from '../../scenes/SummonerSearch';
import News from '../../scenes/News';
import  ChampionsNav from '../ChampionsNav';


const configs = {
	routeConfigs: {
		News: { screen: News, },
		ChampionsNav: { screen: ChampionsNav },
		Search: { screen: SummonerSearch, },
	},
	navigatorConfigs: {
		tabBarPosition: 'bottom',
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
		initialRouteName: 'News',
		tabBarOptions: {
    		activeTintColor: '#FFF',
    		inactiveTintColor: 'gold',
    		showIcon: true,
    		indicatorStyle: {
    			opacity: 0,
    		},
    		tabStyle: {
                borderTopWidth: 1, 
                borderTopColor: 'rgba(255,255,255,0.2)',
    			padding: 0,
    			paddingTop: 2,
    		},
    		labelStyle: {
    			margin: 2,
    			fontSize: 8,
                fontFamily: 'Elianto',
    		},
    		style: {
    			backgroundColor: 'black',
    		},
  		},
	}
}

const { routeConfigs, navigatorConfigs } = configs;
export const  HomeNavigation = TabNavigator(routeConfigs, navigatorConfigs); 