import {StyleSheet} from 'react-native';
import {window} from './../../constants';

const style = StyleSheet.create({
  back: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: window.width - 32,
    marginBottom: 10,
  },
  title: {
    marginTop: 39,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 103,
    padding: 8,
  },
  image: {
    width: 88,
    borderRadius: 8,
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#eeee',
  },
  imageSize: {
    width: 68,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  productTitle: {
    marginLeft: 12,
    fontSize: 14,
  },
  pTitle: {
    width: 145,
  },
  pText: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  count: {
    fontSize: 14,
    height: '100%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 30,
    color: 'black',
  },
  countContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    height: 35,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 87,
    borderColor: 'black',
    borderWidth: 1,
  },
  decrease_increase: {
    backgroundColor: '#eeee',
    height: '100%',
    width: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrease_increase_size: {
    fontSize: 25,
    color: 'black',
  },
  amount: {
    marginTop: 26,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  containerTotal: {
    backgroundColor: '#fff',
  },
  totalAmount: {
    height: 189,
    margin: 10,

    backgroundColor: '#fff',
  },
  total: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textAmount: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  complate: {
    height: 57,
    borderRadius: 8,
    backgroundColor: '#0052DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  textComplate: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
export default style;
