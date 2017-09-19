import _ from 'lodash';

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up


export default function (state = null, action) {
	var newState = _.cloneDeep(state);
    switch (action.type) {
    	case 'SUM_CLICK':
    		return {...newState, sum_clicks: action.payload};
    		break;
        default:
        	console.log(action.type);
        	break;
    }
    return state;
}