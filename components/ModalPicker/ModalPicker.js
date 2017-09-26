/*---------------React------------------*/
import React, { Component } from 'react';
import {View, Text, Animated, Modal } from 'react-native';
/*--------------Styles & Configs--------*/
import styles from './styles';

export default class ModalPicker extends Component {
	
	getProps = () => {
		const { modalProps, visible, options } = this.props;
		this.modalProps = modalProps;
		this.visible = visible;
		this.options = options;
	}

	render() {
		this.getProps();
		return (
			<Modal
				{...this.modalProps}
				visible = {this.visible}
			>

			</Modal>
		);
	}
}