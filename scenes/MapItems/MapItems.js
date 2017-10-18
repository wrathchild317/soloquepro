import React, { Component } from 'react';
import { Text, View, Button, Picker, BackHandler, FlatList, Animated, TouchableOpacity} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import configs from './configs';
import styles, { slideHeight, itemWidth } from './styles';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {  NavigationActions } from 'react-navigation';
//---------------actions-------------------//
import { getItems } from '../../redux/actions';
/*---------------components--------------*/
import { PacmanIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/EvilIcons';

class MapItems extends Component {

	static navigationOptions = ({navigation}) => ({
		headerTitle: <View style={{width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
						<Text style={{color: 'white', fontFamily: 'Elianto', fontWeight: '200', fontSize: 18}}>
							{navigation.state.params.mapName.toUpperCase()} 
						</Text>
					</View>,
		headerLeft: <TouchableOpacity 
				activeOpacity={0.4}
          		onPress={() => {navigation.dispatch(NavigationActions.back({
          			key: navigation.state.key,
          		}))}}
			>
				<View style={styles.iconContainer}>
					<Icon name={'chevron-left'} size={50} color={'gold'} />
				</View>
			</TouchableOpacity>
    });

    constructor(props) {
      super(props);
    
      this.state = {
      	itemOpened: false,
        heightAnim: new Animated.Value(slideHeight * 0.47),
        opacityAnim: new Animated.Value(0.7), 
      };
    }	

	componentDidMount = () => {
		const { mapID } = this.props.navigation.state.params;
		this.mapID = mapID;
		this.props.getItems(mapID);
	}

	getProps = () => {
		const { mapName } = this.props.navigation.state.params;
		const { items } = this.props;
		this.items = items[this.mapID] ? items[this.mapID] : null;
		this.mapName = mapName.toUpperCase();
		this.itemOpened = this.state.itemOpened;
	}

	get separationLine(){
        return(
            <View style={{alignItems: 'center'}}>
                <View style={[styles.separationLine]} />
            </View>
            );
    }

	keyExtractor = (item) => item.item_id

	itemPressed = () => {
		console.log('pressed!');
		// setTimeout(() => {
  //           this.setState({ itemOpened: !this.itemOpened });

  //           Animated.timing(
  //               this.heightAnim, 
  //               {
  //                   toValue: slideHeight * 0.85,
  //                   duration: 300,
  //               }
  //           ).start();
  //           Animated.timing(
  //               this.opacityAnim, 
  //               {
  //                   toValue: 0.875,
  //                   duration: 300,
  //               }
  //           ).start();
  //       }, 110);
	}

	renderItem = ({item}) => {
		return (
			<View style={{flex:1}}>
				<ListItem
					fontFamily={'Nunito'}
					hideChevron={true}
					titleStyle={{ color: '#e5e5e5', fontSize: 15 }}
					style={{paddingVertical: 10}}
		            key={item.item_id}
		            title={item.name.toUpperCase()}
		            avatar={{uri:item.item_square_url}} 
		            roundAvatar={true}
		            avatarStyle={[styles.avatarStyle]}
		            onPress={this.itemPressed}
		            underlayColor={'black'}
	            />
				{this.separationLine}
			</View>
        )
	}

  	render() {
  		this.getProps();

	    return (
	    	<View style={{flex:1, backgroundColor: 'black'}}>
		    	{
		    		this.items ? 
			    		<FlatList 	
			 				data={this.items}
			 				style={{flex:1}}
			 				renderItem={this.renderItem}
			 				keyExtractor={this.keyExtractor}
			 			/>  : <PacmanIndicator color={'white'}/>
		    	}
	    	</View>
	    );
	}
}


const mapStateToProps = (state) => {
	return {
		items: state.itemsData,
	}
}

const mapDispatchToProps = (dispatch) => {
	var props = bindActionCreators({getItems: getItems}, dispatch);
	return {
		...props,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapItems);
