//-----------import Main navigation --------------
import { StackNavigator }from 'react-navigation';
//--------------import screens ----------------
import HomeNav from '../../screens/HomeNav';
import MapItems from '../../scenes/MapItems';

const configs = {
	routeConfigs: {
		Home: { screen: HomeNav },
		MapItems: { screen: MapItems },
	},
	navigatorConfigs: {
		headerMode: 'none',
  		initialRouteName: 'Home',
	}
}

const { routeConfigs, navigatorConfigs } = configs;
export const AppNavigator = StackNavigator(routeConfigs, navigatorConfigs);