import { HomeNavigation } from '../../screens/HomeNav/configs';

export default (state, action) => HomeNavigation.router.getStateForAction(action, state)