import {View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../../store';
import {useLazyCommonExample3Query} from '../../../store/api';
import {setCategories} from '../../../store/category';
import {setProducts} from '../../../store/product';
import DataValidation from '../../ModalScreen/DataValidation';

const LoginSplashScreen = ({navigation}: {navigation: any}) => {
  const token = useAppSelector(state => state.token.authToken);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<boolean | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState('');

  const [trigger3] = useLazyCommonExample3Query();

  const responseHandler = (res: any) => {
    if (res.isError) {
      setStatus(false);
      setErrorMsg(res.error.status);
      return false;
    }

    if (res.isSuccess) {
      setStatus(true);
      return true;
    }
  };

  useEffect(() => {
    console.log('token ile');

    trigger3({_token: token}).then(productsAndCategories => {
      if (responseHandler(productsAndCategories)) {
        dispatch(setCategories(productsAndCategories.data?.categories));
        dispatch(setProducts(productsAndCategories.data?.products));
        navigation.navigate('TabNavigator');
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Smarkete deneyimine hoşgeldiniz</Text>
          <Text style={styles.text2}>Özel deneyiminiz hazırlanıyor...</Text>
        </View>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 190}}
          resizeMode="center"
          source={require('../../../../assets/images/basket.png')}
        />
      </View>
      <DataValidation
        errorMsg={errorMsg}
        status={status}
        setStatus={setStatus}
      />
    </View>
  );
};

export default LoginSplashScreen;
