import {View, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/icons/icon.png')}
        />
      </View>
      <View style={{backgroundColor: '#fff'}}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/splash.png')}
        />
      </View>
    </>
  );
};

export default SplashScreen;
