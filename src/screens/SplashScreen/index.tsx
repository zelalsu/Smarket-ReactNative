/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store';

import {setCategories} from '../../store/category';
import {setProducts} from '../../store/product';

import {
  useLazyCommonExample2Query,
  useLazyCommonExample3Query,
  useLazyCommonExampleQuery,
} from '../../store/api';

import ModalScreen from '../ModalScreen';
import {Image} from 'react-native';
import style from './style';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const product = useAppSelector(state => state.product.products);
  const category = useAppSelector(state => state.category.categories);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<boolean | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState('');

  const [trigger] = useLazyCommonExampleQuery();
  const [trigger2] = useLazyCommonExample2Query();
  const [trigger3] = useLazyCommonExample3Query();
  // a?.() //undefined düşerse hata vermiyor.

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
    if (category.length === 0 || product.length === 0) {
      trigger({phone: 'phone'}).then(res => {
        if (responseHandler(res)) {
          trigger2({phone: res.data?.phone ?? '', code: '1111'}).then(
            response => {
              if (responseHandler(response)) {
                trigger3({
                  _token: response?.data?.userInfo?.authToken ?? '',
                }).then(productsAndCategories => {
                  if (responseHandler(productsAndCategories)) {
                    dispatch(
                      setCategories(productsAndCategories.data?.categories),
                    );
                    dispatch(setProducts(productsAndCategories.data?.products));
                    navigation.navigate('LoginScreen');
                  }
                });
              }
            },
          );
        }
      });
    } else {
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={style.container}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/icons/icon.png')}
        />
      </View>

      <Image
        style={{backgroundColor: '#fff'}}
        resizeMode="contain"
        source={require('../../../assets/images/splash.png')}
      />

      <ModalScreen errorMsg={errorMsg} status={status} setStatus={setStatus} />
    </>
  );
};
export default SplashScreen;
