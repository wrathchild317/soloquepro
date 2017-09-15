import _ from 'lodash';

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up


export default function (state = {}, action) {
    var payload = action.payload;
    
    switch (action.type) {
    	case 'SET_FREE_CHAMPIONS':
    		    return {...state, freeChampions: payload};
    		break;
        case 'SET_ALL_CHAMPIONS':
                return {...state, champions: payload};
            break;
        case 'SET_CHAMPION_KEYS':
                return {...state, keys: payload};
            break;
        default:
        	console.log(action.type);
        	break;
    }
    return state;
}