import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#fff'},
  container: {
    margin: 22,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginTop: 22,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    fontFamily: 'Montserrat-SemiBold',
  },
  telephoneText: {
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  number: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  codeContainer: {
    flexDirection: 'row',
    marginTop: 22,
  },
  codeInput: {
    borderWidth: 2,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    width: 57,
    height: 65,
    fontSize: 28,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});

export default styles;
