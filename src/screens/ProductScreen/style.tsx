import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E2E2E2',

    margin: 10,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    width: 414,
    height: 142,
    backgroundColor: '#0052DF',
    borderBottomLeftRadius: 10,
    borderBottomStartRadius: 10,
  },
  innerCategory: {
    backgroundColor: '#296EE4',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  altCategory: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 50,
    fontSize: 22,
    marginLeft: 10,
    color: '#fff',
  },
  imageSize: {width: 100, height: 100},
  plusSize: {
    width: 31,
    height: 31,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
export default style;
