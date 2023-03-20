/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../store/index';
import style from './style';
import {ProductsParams} from '../../components/Product/type';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseProductImageUrl = base + 'storage/products/';

const ProductScreen = ({route}: {route: any}) => {
  const [subCategoryId, setSubCategoryId] = useState<string | undefined>();
  const {categoryId, title} = route.params;

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

  const handleSubcategoryPress = (subcategoryGuid: string) => {
    setSubCategoryId(subcategoryGuid);
  };

  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={style.categoryContainer}>
          <View style={{marginRight: 20}}>
            <Text style={style.title}>{title}</Text>
            <FlashList
              data={filteredCategories?.subcats}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              estimatedItemSize={200}
              horizontal={true}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => handleSubcategoryPress(item.category_guid)}>
                    <View style={style.innerCategory}>
                      <Text style={{color: '#fff'}}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        <View style={{flex: 1, width: Dimensions.get('screen').width}}>
          {filteredProducts.length > 0 && (
            <FlashList<ProductsParams>
              data={filteredProducts}
              keyExtractor={item => `${item.title}${item.product_guid}`}
              estimatedItemSize={200}
              numColumns={3}
              renderItem={({item}) => (
                <>
                  <View style={{alignItems: 'center'}}>
                    <View style={style.container}>
                      <View>
                        <Image
                          source={{uri: `${baseProductImageUrl}${item.image}`}}
                          style={{
                            width: 100,
                            height: 100,
                          }}
                          resizeMode={'center'}
                        />
                      </View>
                    </View>
                    <View style={{width: 100}}>
                      <Text numberOfLines={1} style={style.text}>
                        {item.title}
                      </Text>
                      <Text numberOfLines={1} style={style.text}>
                        ₺{item.price}
                      </Text>
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
