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
    marginBottom: 50,
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
    width: 240,
    height: 487,
    marginTop: 120,
  },
  shadow: {
    flex: 1,
    height: 400,
    marginTop: 210,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
