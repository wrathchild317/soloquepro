import React, { Component } from 'react';
import { Text, View, FlatList, Animated, TouchableOpacity, Image} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import configs, { NAVBAR_HEIGHT } from './configs';
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
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CollapsableHeader from '../../components/CollapsableHeader';
import ToolBar from '../../components/ToolBar';
/*---------------utils--------------*/
import _ from 'lodash';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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
      //UsedForHeaderAnimation
		const scrollAnim = new Animated.Value(0);
	    const offsetAnim = new Animated.Value(0);
    
      this.state = {
      	itemOpened: false,
        heightAnim: new Animated.Value(slideHeight * 0.47),
        opacityAnim: new Animated.Value(0.7),
        scrollAnim,
		offsetAnim,
		clampedScroll: Animated.diffClamp(
			Animated.add(
				scrollAnim.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolateLeft: 'clamp',
				}),
				offsetAnim,
			),
			0,
			NAVBAR_HEIGHT ,
  		),
  		searchInput: '',
  		searching: false,
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
		const { clampedScroll } = this.state;
		this.clampedScroll = clampedScroll;

		// if(this.items) {
		// 	var searchString = this.state.searchInput.toLowerCase();
		// 	//filter champions according to search input 
		// 	this.items = (this.state.searchInput) ?
		// 		_.filter(this.items, (item) => {
		// 			return item.name.toLowerCase().contains(searchString);
		// 		}) : this.items;
		// }


	}

	renderSeparator = () => {
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
					style={{ height: 60, justifyContent: 'center'}}
					titleContainerStyle={{marginLeft: 10}}
					wrapperStyle={{height: 50,}}
					label={<View style={{flexDirection: 'row', alignItems:'flex-end'}}>
								<MaterialCommunityIcon name={'coins'} color={'gold'} size={20}/>
								<Text style={{color: 'white', marginHorizontal: 5, fontFamily:'Nunito'}}>{item.gold.total}</Text>
							</View>
						   }
		            key={item.item_id}
		            title={item.name.toUpperCase()}
		            avatar={{uri:item.item_square_url}} 
		            roundAvatar={true}
		            avatarStyle={[styles.avatarStyle]}
		            avatarContainerStyle={{height: 50, width:50, justifyContent:'center', alignItems:'center',}}
		            onPress={this.itemPressed}
		            underlayColor={'black'}
	            />
			</View>
        )
	}

	get sorryIcon() {
		return (
			<View style={styles.container}>
				<Image
					source={require('../../assets/images/sorry.png')}
					style={styles.sorryImage}
				/>
				<Text 
					style={[styles.sorryText, 
						styles.sorryMainText
					]}
				>
					{'Whoops!'}
				</Text>	
				<Text 
					style={[styles.sorryText, 
						styles.sorrySecondaryText
					]}
				>
					{`We couldn't find the item you were looking for.`}
				</Text>
			</View>
		);
			
	}

	onChangeText = (text) => {
		this.setState({searchInput: text});
	}

  	render() {
  		this.getProps();
	    return (
	    	<View style={{flex:1, backgroundColor: 'black'}}>
		    	{
		    		(this.items && !this.state.searching) ? 
			    		<AnimatedFlatList
				    		scrollEventThrottle={1}
							onScroll={
								Animated.event(
									[{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
									{ useNativeDriver: true },
								)
							}
							contentContainerStyle={styles.contentContainer}
							keyboardDismissMode={'on-drag'}
							removeClippedSubviews={true}
							ItemSeparatorComponent={this.renderSeparator} 	
			 				data={this.items}
			 				style={{flex:1}}
			 				renderItem={this.renderItem}
			 				keyExtractor={this.keyExtractor}
			 				ListEmptyComponent={this.sorryIcon}
			 				initialNumToRender={50}
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
