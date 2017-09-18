import { fetchData } from '../../utils';

export const sumButtonClick = (val) => {
	var newVal = val + 1;
    return {
        type: 'SUM_CLICK',
        payload: newVal
    };
}

export const getChampionData = () => {
	return (dispatch) => {
		fetchData('http://192.168.1.73:8080/lol/static-data/v3/champions').then((data) => {
			dispatch({
				type: 'SET_ALL_CHAMPIONS',
				payload: data.data
			});

			//swap keys with id
			var keys = [];
  			for(var id in data.keys){
    			keys.push(data.keys[id]);
  			}

  			keys.sort()

			dispatch({
				type: 'SET_CHAMPION_KEYS',
				payload: keys
			});
		});
	}
}

export const getFreeChampions = () => {
	return (dispatch) => {
		fetchData('http://192.168.1.73:8080/lol/platform/v3/champions?freeToPlay=true').then((data) => {
			dispatch({
				type: 'SET_FREE_CHAMPIONS',
				payload: data.champions,
			});
		});
	}
}

export const getRealmData = () => {
	return (dispatch) => {
		fetchData('http://192.168.1.73:8080/lol/static-data/v3/realms').then((data) => {
			dispatch({
				type: 'SET_REALM_DATA',
				payload: data,
			});
		});
	}
}