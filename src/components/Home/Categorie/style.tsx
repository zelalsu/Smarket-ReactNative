import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    margin: 8,

    borderRadius: 8,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    width: 175,
    height: 70,
  },
  title: {
    color: 'black',
    marginTop: 10,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  categoryContainer: {flexDirection: 'row'},
  categoryTitle: {
    justifyContent: 'center',
    marginLeft: 10,
    width: 100,
    fontFamily: 'Montserrat-Medium',
  },
  image: {
    width: 75,
    height: 75,
    justifyContent: 'center',
  },
  itemTitle: {color: 'black', fontFamily: 'Montserrat-Medium', fontSize: 14},
  imageSize: {width: 60, height: 60},
});
export default style;
