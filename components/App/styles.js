import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
  	backgroundColor: '#000',
  	height: Constants.statusBarHeight,
  }
});