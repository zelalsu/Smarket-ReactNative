/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store';
import {postData} from '../../utils/helper';
import {setCategories} from '../../store/category';
import {setProducts} from '../../store/product';
import style from './style';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const products = useAppSelector(state => state.product.products);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.category.categories);

  useEffect(() => {
    if (categories.length === 0 || products.length === 0) {
      postData({
        url: `${baseUrl}sm-login-register`,
        requestData: {phone: '5418581704'},
      }).then(res => {
        postData({
          url: `${baseUrl}sm-verify-code`,
          requestData: {phone: res.phone, code: '1111'},
        }).then(response => {
          // setUser(response.userInfo); //redux at
          postData({
            url: `${baseUrl}sm-get-categories-and-products`,
            requestData: {_token: response.userInfo.authToken},
          }).then(productsAndCategories => {
            dispatch(setCategories(productsAndCategories.categories));
            dispatch(setProducts(productsAndCategories.products));
            navigation.navigate('TabNavigator');
          });
        });
      });
    } else {
      setTimeout(() => {
        navigation.navigate('TabNavigator');
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
