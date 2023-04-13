/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../../store';

import {Image} from 'react-native';
import style from './style';

const MainSplashScreen = ({navigation}: {navigation: any}) => {
  const token = useAppSelector(state => state.token.authToken);

  useEffect(() => {
    if (token !== '') {
      console.log('deneme' + token);
      navigation.navigate('TabNavigator');
    }
    if (token === '') {
      console.log('deneme' + token);
      navigation.navigate('LoginScreen');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={style.container}>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/icons/icon.png')}
        />
      </View>

      <Image
        style={{backgroundColor: '#fff'}}
        resizeMode="contain"
        source={require('../../../../assets/images/splash.png')}
      />

      {/* <ModalScreen errorMsg={errorMsg} status={status} setStatus={setStatus} /> */}
    </>
  );
};
export default MainSplashScreen;
