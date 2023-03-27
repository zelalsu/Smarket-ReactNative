/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../store/index';
import style from './style';
import {ProductsParams} from '../../components/Product/type';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/basket';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseProductImageUrl = base + 'storage/products/';

const ProductScreen = ({route}: {route: any; navigation: any}) => {
  const [subCategoryId, setSubCategoryId] = useState<string | undefined>();
  const {categoryId, title} = route.params;
  const dispatch = useDispatch();
  const categories = useAppSelector(state => state.category.categories);
  const products = useAppSelector(state => state.product.products);
  const filteredCategories = React.useMemo(
    () =>
      categories.find(item => {
        return item.category_guid === categoryId;
      }),
    [categories, categoryId],
  );

  const filteredProducts = React.useMemo(
    () => products.filter(product => product.category_guid === subCategoryId),
    [subCategoryId, products],
    // ilki memoization uygulamak istediğimiz işlemi tutan bir işlevdir. Diğeri o işlemin girdilerini tutan bir deps dizisidir.
  );

  useEffect(() => {
    if (subCategoryId === undefined && filteredCategories !== undefined) {
      setSubCategoryId(filteredCategories.subcats[0].category_guid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCategories]);

  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={style.categoryContainer}>
          <View>
            <Text style={style.title}>{title}</Text>
            <FlashList
              contentContainerStyle={{paddingLeft: 20}}
              data={filteredCategories?.subcats}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              estimatedItemSize={200}
              horizontal={true}
              extraData={[style, subCategoryId]}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setSubCategoryId(item.category_guid)}>
                    <View
                      style={[
                        style.innerCategory,
                        {
                          backgroundColor:
                            subCategoryId === item.category_guid
                              ? 'white'
                              : '#296EE4',
                          borderColor:
                            subCategoryId === item.category_guid
                              ? 'transparent'
                              : 'white',
                        },
                      ]}>
                      <Text
                        style={[
                          style.altCategory,
                          {
                            color:
                              subCategoryId === item.category_guid
                                ? '#296EE4'
                                : 'white',
                          },
                        ]}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
          {filteredProducts.length > 0 && (
            <FlashList<ProductsParams>
              data={filteredProducts}
              keyExtractor={item => `${item.title}${item.product_guid}`}
              estimatedItemSize={200}
              numColumns={3}
              renderItem={({item}) => (
                <>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 8,
                      marginTop: 19,
                      marginBottom: 22,
                    }}>
                    <View style={style.container}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={{uri: `${baseProductImageUrl}${item.image}`}}
                          style={style.imageSize}
                          resizeMode={'center'}
                        />
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={style.plusSize}
                        onPress={() => dispatch(addToCart(item))}>
                        <Text style={style.plusText}>+</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={{width: 100, justifyContent: 'center'}}>
                      <Text numberOfLines={1} style={style.text}>
                        {item.title}
                      </Text>
                      <Text style={{fontSize: 10}}>Adet</Text>
                      <Text style={style.price}>₺{item.price} </Text>
                    </View>
                  </View>
                </>
              )}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ProductScreen;
