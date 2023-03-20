/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {setCategories} from '../../../store/category';
import {setProducts} from '../../../store/product';
import {postData} from '../../../utils/helper';
import {FlashList} from '@shopify/flash-list';
import {useAppDispatch, useAppSelector} from './../../../store/index';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';

const Categorie = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.category.categories);
  const products = useAppSelector(state => state.product.products);

  //splah screen
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
          });
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text
        style={{color: 'black', marginTop: 10, marginLeft: 20, fontSize: 16}}>
        Ürünler
      </Text>
      <FlashList
        numColumns={2}
        data={categories}
        estimatedItemSize={200}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.innerContainer}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductScreen', {
                        categoryId: item.category_guid,
                        title: item.title,
                      })
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          justifyContent: 'center',

                          marginLeft: 10,
                          width: 100,
                        }}>
                        <Text style={{color: 'black'}}>{item.title}</Text>
                      </View>

                      <View
                        style={{
                          width: 75,
                          height: 75,
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={{
                            uri: `${baseCategoryImageUrl}${item.image}`,
                          }}
                          style={{width: 50, height: 50}}
                          resizeMode={'center'}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default Categorie;
