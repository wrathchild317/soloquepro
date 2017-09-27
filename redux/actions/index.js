import { fetchData } from '../../utils';

export const getChampionData = (sort) => {
	return (dispatch) => {
		fetchData('http://169.231.36.147:8080/lol/static-data/champions?fields=champion_id,name,tags,champion_square_url&sort=' + sort).then((data) => {
			dispatch({
				type: 'SET_ALL_CHAMPIONS',
				payload: data,
			});

		});
	}
} 

export const getFreeChampions = () => {
	return (dispatch) => {
		fetchData('http://169.231.36.147:8080/lol/static-data/champions?fields=champion_id,name,tags,title,skins,key,info&in_rotation=true&sort=name').then((data) => {
			dispatch({
				type: 'SET_FREE_CHAMPIONS',
				payload: data,
			});
		});
	}
}
