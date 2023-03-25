import {View} from 'react-native';
import React from 'react';
import Title from '../../components/Home/Title';
import Category from '../../components/Home/Category';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Title />
      <Category navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
