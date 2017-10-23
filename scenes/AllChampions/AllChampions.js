import React, { Component } from 'react';
import { Text, View, Button, FlatList, Animated, Image, Keyboard } from 'react-native';
import styles from './styles';
import configs, { NAVBAR_HEIGHT } from './configs';
//---------------redux----------------------
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//---------------actions------------------
import { getChampionData } from '../../redux/actions';

//----------------utils---------------------
import _ from 'lodash';
import { PacmanIndicator } from 'react-native-indicators';
import { sqaureMargin, imageWidth } from './configs';
import CollapsableHeader from '../../components/CollapsableHeader';
import ChampionSqaure from '../../components/ChampionSqaure';
import ToolBar from '../../components/ToolBar';
import CustomModal from '../../components/CustomModal';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


class AllChampions extends Component {
	
	static navigationOptions = {
		...configs.navigationOptions,
	}

	constructor(props) {
		super(props);
		
		//UsedForHeaderAnimation
		const scrollAnim = new Animated.Value(0);
	    const offsetAnim = new Animated.Value(0);

		this.state = {
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
      		modalPickerVisible: false,
		};
	}

	componentDidMount() {
		this.props.getChampionData(configs.initialSortValue);
	}

	getProps = () => {
		const { champions } = this.props.championData;

		if(champions) {

			this.champions = champions;

			var searchString = this.state.searchInput.toLowerCase();
			//filter champions according to search input 
			this.champions = (this.state.searchInput) ?
				_.filter(this.champions, (champion) => {
					return champion.name.toLowerCase().contains(searchString);
				}) : this.champions;

		} else {
			this.champions = null;
		}

		const { clampedScroll } = this.state;
		this.clampedScroll = clampedScroll;

		this.modalPickerVisible = this.state.modalPickerVisible;

	}
	
	renderItem = ({item}) => {
		return (
			<ChampionSqaure
				label={item.name}
				champion={item}
				{...configs.championSqaureConfigs}
			/>
		);
	}

	keyExtractor = (item) => item.champion_id

	getItemLayout = (data, index) => {
		var itemHeight = sqaureMargin + imageWidth + 4;
  		return {length: itemHeight, offset: itemHeight * index, index};
	}

	renderSeparator = () => (
      	<View
        	style={{
         	 	height: 1,
          		width: '70%',
          		backgroundColor: 'rgba(255,215,0, 0.25)',
          		marginHorizontal: '15%',
        	}}
      />
    )

    onChangeText = (text) => {
    	this.setState({searchInput: text});
    }

    onIconOnePressed = () => {
    	this.setState({modalPickerVisible: true});
    }

    onRequestClose = () => {
    	this.setState({modalPickerVisible: false});
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
					{`We couldn't find the champion you were looking for.`}
				</Text>
			</View>
		)
			
	}

    get innerComponent() {
    	var innerComponent = (this.champions) ? 
			<AnimatedFlatList
				scrollEventThrottle={1}
				onScroll={
					Animated.event(
						[{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
						{ useNativeDriver: true },
					)
				}
				keyboardDismissMode={'on-drag'}
				removeClippedSubviews={true}
				style={styles.flatList}
				data={this.champions}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				getItemLayout={this.getItemLayout}
				numColumns={3}
				initialNumToRender={15}
				columnWrapperStyle={styles.columnWrapper}
				ItemSeparatorComponent={this.renderSeparator}
				contentContainerStyle={styles.contentContainer}
				ListEmptyComponent={this.sorryIcon}
			/> : 
			<PacmanIndicator color={'white'}/>

		return innerComponent;
    }

	render() {
		this.getProps();
			
		return (
			<View style={styles.container}>
				<CustomModal 
					onRequestClose={this.onRequestClose}
					visible={this.modalPickerVisible}
					backgroundColor={'rgba(123,56,83,0.4)'}
					contentContainerStyle={{height: '50%', width: '50%', borderRadius: 5,}}
				>
					<View style={{flex:1}}>
						<Text style={{color: 'white',}}>Modal</Text>
					</View>
				</CustomModal>
				<View>
					{ this.innerComponent }
				</View>
				<CollapsableHeader 
					clampedScroll={this.clampedScroll} 
					{...configs.collapsableHeaderConfigs } 
				>
					<ToolBar 
						onChangeText={this.onChangeText}
						onIconOnePressed={this.onIconOnePressed}
						{...configs.toolBarConfigs}
					/>
				</CollapsableHeader>
	      </View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		championData: state.championData,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getChampionData: getChampionData,
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AllChampions);