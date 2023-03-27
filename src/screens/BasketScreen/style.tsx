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
  },
  title: {
    marginTop: 39,
    marginBottom: 20,
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
    marginTop: 14,
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
    marginTop: 4,

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
  empty: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 167,
    height: 42,
    marginLeft: 107,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    borderWidth: 1,
    borderColor: '#B9BEC5',
  },
  emptyText: {
    color: '#7C8086',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 8,
    textTransform: 'uppercase',
  },
});
export default style;
