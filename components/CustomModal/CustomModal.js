/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, TouchableWithoutFeedback, Modal , Button} from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';

export default class CustomModal extends Component {

	propTypes: {
        children: React.PropTypes.element.isRequired
    }
	
	getProps = () => {
		const { modalProps, onRequestClose, visible, options, contentContainerStyle, backgroundColor } = this.props;
		this.modalProps = modalProps;
		this.visible = visible;
		this.options = options;
		this.onRequestClose = onRequestClose;
		this.contentContainerStyle = contentContainerStyle;
		this.backgroundColor = backgroundColor;
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
							<View style={{flex: 1, backgroundColor: this.backgroundColor || 'rgba(255,255,255,0.4)', }}/>
						</TouchableWithoutFeedback>
					</View>
					<View style={[{zIndex: 2, height: '91%', width: '82%', backgroundColor: '#000', }, this.contentContainerStyle]}>
						{this.props.children}
					</View>
				</View>
			</Modal>
		);
	}
}