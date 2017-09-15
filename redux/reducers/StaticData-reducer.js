export default function (state = {}, action) {
    var payload = action.payload;
    
    switch (action.type) {
    	case 'SET_REALM_DATA':
    		    return {...state, realmData: payload};
    		break;
        default:
        	console.log(action.type);
        	break;
    }
    return state;
}