import {View} from 'react-native';
import React from 'react';
import Title from '../../components/Home/Title';
import Categorie from '../../components/Home/Categorie';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Title />
      <Categorie navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
