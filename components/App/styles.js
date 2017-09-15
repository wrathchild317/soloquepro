import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  navigator: {
  	width: Dimensions.get('window').width,
  }
});