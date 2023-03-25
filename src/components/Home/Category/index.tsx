import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../../store/index';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseCategoryImageUrl = base + 'storage/categories/';
export const baseProductImageUrl = base + 'storage/products/';
export const baseCampaignsImageUrl = base + 'storage/campaigns/';

const Category = ({navigation}: {navigation: any}) => {
  const categories = useAppSelector(state => state.category.categories);

  return (
    <>
      <Text style={style.title}>Ürünler</Text>
      <View style={style.main}>
        <FlashList
          numColumns={2}
          data={categories}
          estimatedItemSize={200}
          extraData={style}
          renderItem={({item}) => (
            <View style={style.container}>
              <View style={style.innerContainer}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductScreen', {
                        categoryId: item.category_guid,
                        title: item.title,
                      })
                    }>
                    <View style={style.categoryContainer}>
                      <View style={style.categoryTitle}>
                        <Text numberOfLines={1} style={style.itemTitle}>
                          {item.title}
                        </Text>
                      </View>
                      <View style={style.image}>
                        <Image
                          source={{
                            uri: `${baseCategoryImageUrl}${item.image}`,
                          }}
                          style={style.imageSize}
                          resizeMode={'contain'}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Category;
