import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 30,
    marginLeft: 30,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    color: 'black',
    marginBottom: 8,

    fontFamily: 'Montserrat-SemiBold',
  },
  text1: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    backgroundColor: '#0052DF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 26,
    height: 57,
    borderRadius: 8,
    marginBottom: 66,
  },
  textButton: {
    fontSize: 16,
    justifyContent: 'flex-end',
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
  telephoneImage: {
    flex: 1,
    width: 225,
    height: 487,
    marginTop: 133,
  },
});

export default styles;
