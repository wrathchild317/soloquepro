import { fetchData } from '../../utils';

export const getChampionData = (sort) => {
	return (dispatch) => {
		fetchData('https://soloqueprobackend.herokuapp.com/lol/static-data/champions?fields=champion_id,name,tags,champion_square_url&sort=' + sort).then((data) => {
			dispatch({
				type: 'SET_ALL_CHAMPIONS',
				payload: data,
			});

		});
	}
} 

export const getFreeChampions = () => {
	return (dispatch) => {
		fetchData('https://soloqueprobackend.herokuapp.com/lol/static-data/champions?fields=champion_id,color_palette,skins,ban_rate,popularity,win_rate,tags,info,blurb,lore,title,name,key&in_rotation=true&sort=name').then((data) => {
			dispatch({
				type: 'SET_FREE_CHAMPIONS',
				payload: data,
			});
		});
	} 
}

export const getMaps = () => {
	return (dispatch) => {
		fetchData('https://soloqueprobackend.herokuapp.com/lol/static-data/maps?fields=MapName,MapId,img_url&sort=MapId').then((data) => {
			dispatch({
				type: 'SET_MAPS',
				payload: data,
			});
		});
	} 
}

export const getItems = (mapId) => {
	return (dispatch) => {
		fetchData('https://soloqueprobackend.herokuapp.com/lol/static-data/items?fields=item_id,tags,maps,gold,name,item_square_url,sanitized_description&sort=popularity&map=' + mapId).then((data) => {
			dispatch({
				type: 'SET_ITEMS',
				mapId: mapId,
				payload: data,
			});
		});
	} 
}
