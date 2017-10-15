import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'stretch',
    justifyContent:'flex-start',
    marginTop: 5,
  },
})