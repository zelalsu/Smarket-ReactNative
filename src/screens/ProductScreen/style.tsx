import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  categoryContainer: {
    height: 193,
    backgroundColor: '#0052DF',
    borderBottomLeftRadius: 10,
    borderBottomStartRadius: 10,
  },
  innerCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 8,
    height: 34,
    paddingHorizontal: 12,
    marginTop: 20,
    borderWidth: 1,
  },
  altCategory: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    marginTop: 100,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    paddingLeft: 20,
    color: '#fff',
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  imageSize: {
    width: 100,
    height: 100,
  },
  plusSize: {
    borderWidth: 1,
    width: 30,
    borderColor: 'blue',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  plusText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-light',
    color: '#0052DF',
    backgroundColor: '#fff',
  },

  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
});
export default style;
