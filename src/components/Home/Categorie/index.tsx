/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from './../../../store/index';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';

const Categorie = ({navigation}: {navigation: any}) => {
  const categories = useAppSelector(state => state.category.categories);
  return (
    <>
      <Text style={style.title}>Ürünler</Text>
      <FlashList
        numColumns={2}
        data={categories}
        estimatedItemSize={200}
        renderItem={({item}) => (
          <View style={style.container}>
            <View style={style.innerContainer}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
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
                      <View style={style.categoryTitle}>
                        <Text style={{color: 'black'}}>{item.title}</Text>
                      </View>

                      <View style={style.image}>
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
