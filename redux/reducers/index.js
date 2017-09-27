import {combineReducers} from 'redux';

/*import your reducers */
import AppNavigationReducer from './AppNavigation-reducer';
import HomeNavigationReducer from './HomeNavigation-reducer';
import ChampionsNavigationReducer from './ChampionsNavigation-reducer';
import ChampionReducer from './Champion-reducer';

const allReducers = combineReducers({
    appNavigation: AppNavigationReducer,
    homeNavigation: HomeNavigationReducer,
    championsNavigation: ChampionsNavigationReducer,
    championData: ChampionReducer,
});

export default allReducers 