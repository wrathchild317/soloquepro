import { ChampionsNavigation } from '../../screens/ChampionsNav/configs';

export default (state, action) => ChampionsNavigation.router.getStateForAction(action, state)