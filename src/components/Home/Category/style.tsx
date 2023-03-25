import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 21,
  },
  container: {
    flex: 1,
    marginTop: 8,
    marginRight: 8,
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    height: 70,
  },

  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  categoryTitle: {
    width: 100,
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    color: 'black',
    marginTop: 18,
    marginLeft: 21,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  image: {
    width: 75,
    height: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'black',
    marginTop: 24,
    marginLeft: 12,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  imageSize: {width: 50, height: 50},
});
export default style;
