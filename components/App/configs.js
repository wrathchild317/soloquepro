//-----------import Main navigation --------------
import { StackNavigator }from 'react-navigation';
//--------------import screens ----------------
import HomeNav from '../../screens/HomeNav';

const configs = {
	routeConfigs: {
		Home: { screen: HomeNav},
	},
	navigatorConfigs: {
		headerMode: 'none',
  		initialRouteName: 'Home',
	}
}

const { routeConfigs, navigatorConfigs } = configs;
export const AppNavigator = StackNavigator(routeConfigs, navigatorConfigs);