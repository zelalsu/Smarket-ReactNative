import React from 'react';
import {TouchableOpacity} from 'react-native';
import Back from '@assets/svg/back.svg';

const BackButton = ({navigation}: {navigation: any}) => (
  <TouchableOpacity
    // eslint-disable-next-line react-native/no-inline-styles
    style={{marginTop: 20, marginLeft: 22}}
    onPress={() => navigation.goBack()}>
    <Back />
  </TouchableOpacity>
);

export default BackButton;
