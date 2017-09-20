import React, { Component } from 'react';
import Main from './components/App';
import { Font } from 'expo';
//---------------redux----------------------
import { Provider} from 'react-redux';
import { store } from './redux/store';


export default class App extends Component {

	constructor(props){
		super(props)
		this.state = {fontsLoaded: false}
	}
	async componentWillMount() {
	    await Font.loadAsync({
	     FontAwesome: require('./assets/fonts/FontAwesome.ttf'),
	     MaterialIcons: require('./assets/fonts/MaterialIcons.ttf'),
	     MaterialCommunityIcons: require('./assets/fonts/MaterialCommunityIcons.ttf'),
	     EvilIcons: require('./assets/fonts/EvilIcons.ttf'),
	     Elianto: require('./assets/fonts/Elianto-Regular.ttf'),
	     Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
	    });

	    this.setState({fontsLoaded: true})
  	}

  	render() {
	    return this.state.fontsLoaded ? 
	    	(
	    		<Provider store={ store }>
	    			<Main />
	    		</Provider>
	    	)
	    	: null
	}
}

