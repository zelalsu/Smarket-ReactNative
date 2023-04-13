import {StyleSheet} from 'react-native';
import {window} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F1F2',
    height: 269,
    width: window.width - 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    padding: 20,
  },
  text: {
    backgroundColor: 'black',
    fontSize: 30,
    color: 'black',
  },
  msgText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  closeLine: {
    width: 59,
    height: 5,
    backgroundColor: '#DFDFDF',
    borderRadius: 4,
    bottom: 36,
  },
});

export default styles;
