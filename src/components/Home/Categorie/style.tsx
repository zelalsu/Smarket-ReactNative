import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    width: 187,
    height: 70,
  },
  title: {
    color: 'black',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
  },
  categoryTitle: {
    justifyContent: 'center',
    marginLeft: 10,
    width: 100,
  },
  image: {
    width: 75,
    height: 75,
    justifyContent: 'center',
  },
});
export default style;
