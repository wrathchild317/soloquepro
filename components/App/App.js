import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
//---------------redux----------------------
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//-----------import Navigator----------------
import { AppNavigator } from './configs';
import { addNavigationHelpers,  NavigationActions } from 'react-navigation';
//-----------import styles ----------------------
import styles from './styles';
//------------actions-----------------------------//
import { getChampionData, getRealmData } from '../../redux/actions';


class App extends Component {

	onBackPress = () => {
	   const { dispatch, navigationState } = this.props;
	    
	    if (navigationState.index === 0) {
	      return false;
	    }

	    dispatch(NavigationActions.back());
	    return true;
	}

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
		this.props.getChampionData();
		this.props.getRealmData();
	}

	componentWillUnmount(){
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

  	render() {
  		const { dispatch, navigationState } = this.props;

		return(
			<View style={styles.container}>
				<AppNavigator 
					navigation={
	        			addNavigationHelpers({
	        				dispatch: dispatch,
	        				state: navigationState,
	        			})
	        		}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		navigationState: state.appNavigation,
	}
}

const mapDispatchToProps = (dispatch) => {
	var props = bindActionCreators({
		getChampionData: getChampionData,
		getRealmData: getRealmData,
	}, dispatch);

	return {
		...props,
		dispatch: dispatch,
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
