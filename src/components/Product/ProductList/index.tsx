/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../store';
import {addToCart} from '../../../store/basket';
import {ProductsParams} from '../type';
import style from '../../../screens/ProductScreen/style';
import {window} from './../../../constants/index';

const base = 'https://smarket.nonoco.dev/';
export const baseUrl = base + 'apps/';
export const baseProductImageUrl = base + 'storage/products/';

const ProductList = ({route}: {route: any}) => {
  const products = useAppSelector(state => state.product.products);
  const dispatch = useDispatch();
  const {subCategoryId} = route.params;

  const filteredProducts = React.useMemo(
    () => products.filter(product => product.category_guid === subCategoryId),
    [subCategoryId, products],
    // ilki memoization uygulamak istediğimiz işlemi tutan bir işlevdir. Diğeri o işlemin girdilerini tutan bir deps dizisidir.
  );

  const handleAddToCart = (productId: string) => {
    const productToAdd = products.find(p => p.product_guid === productId);

    dispatch(addToCart(productToAdd));
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{flex: 1, width: window.width}}>
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
                      <ImageBackground
                        source={{uri: `${baseProductImageUrl}${item.image}`}}
                        style={style.imageSize}
                        resizeMode={'center'}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handleAddToCart(item.product_guid)}>
                          <Image
                            style={style.plusSize}
                            source={require('../../../../assets/icons/plus.png')}
                          />
                        </TouchableOpacity>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={{width: 100}}>
                    <Text numberOfLines={1} style={style.text}>
                      {item.title}
                    </Text>
                    <Text style={style.text}>₺{item.price}</Text>
                  </View>
                </View>
              </>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default ProductList;
