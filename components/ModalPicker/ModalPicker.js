/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, TouchableWithoutFeedback, Modal , Button} from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';

export default class ModalPicker extends Component {
	
	getProps = () => {
		const { modalProps, onRequestClose, visible, options } = this.props;
		this.modalProps = modalProps;
		this.visible = visible;
		this.options = options;
		this.onRequestClose = onRequestClose;
	}

	render() {
		this.getProps();
		return (
			<Modal
				{...this.modalProps}
				visible = {this.visible}
				onRequestClose={this.onRequestClose}
				transparent={true}
			>
				<View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
					<View style={{ height: '100%', width: '100%', position: 'absolute' }}>
						<TouchableWithoutFeedback 
							onPress={this.onRequestClose}
						>
							<View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.4)', }}/>
						</TouchableWithoutFeedback>
					</View>
					<View style={{zIndex: 2, height: '91%', width: '82%', backgroundColor: '#000', }}>
						<Text style={{color: 'white'}}>Modal</Text>
						<Button title={'click me'} onPress={() => {console.log('touched')}} />
					</View>
				</View>
			</Modal>
		);
	}
}