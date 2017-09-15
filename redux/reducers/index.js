import {combineReducers} from 'redux';

/*import your reducers */
import MockReducer from './mock-reducer.js';
import AppNavigationReducer from './AppNavigation-reducer';
import HomeNavigationReducer from './HomeNavigation-reducer';
import ChampionsNavigationReducer from './ChampionsNavigation-reducer';
import ChampionReducer from './Champion-reducer';
import staticDataReducer from './StaticData-reducer';

const allReducers = combineReducers({
    mockreducer: MockReducer,
    appNavigation: AppNavigationReducer,
    homeNavigation: HomeNavigationReducer,
    championsNavigation: ChampionsNavigationReducer,
    championData: ChampionReducer,
    staticData: staticDataReducer,
});

export default allReducers