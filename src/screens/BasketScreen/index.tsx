/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './style';
import {useAppSelector} from '../../store';
import {addToCart, removeToCart} from '../../store/basket';
import {useDispatch} from 'react-redux';
import {decreaseQuantity} from '../../store/basket';
import {FlashList} from '@shopify/flash-list';
import {baseProductImageUrl, basketBottomHeight} from '../../constants';

const BasketScreen = () => {
  const cart = useAppSelector(state => state.basket.cart);
  const totalAmount = useAppSelector(state => state.basket.totalAmount);

  const dispatch = useDispatch();
  const clearAsyncStorage = async () => {
    dispatch(removeToCart());
  };

  return (
    <>
      <View style={style.back}>
        <View style={style.container}>
          <View style={style.title}>
            <Text style={style.text}>Sepetim</Text>
          </View>
          <FlashList
            estimatedItemSize={100}
            showsVerticalScrollIndicator={false}
            data={cart}
            contentContainerStyle={{paddingBottom: basketBottomHeight + 16}}
            extraData={style}
            ListEmptyComponent={<Text>Sepetiniz Boş...</Text>}
            renderItem={({item}) => (
              <View style={style.card} key={item.product_guid}>
                <View style={style.image}>
                  <Image
                    source={{
                      uri: `${baseProductImageUrl}${item.image}`,
                    }}
                    style={style.imageSize}
                    resizeMode={'center'}
                  />
                </View>

                <View style={style.productTitle}>
                  <View style={style.pTitle}>
                    <Text numberOfLines={1} style={style.pText}>
                      {item.title}
                    </Text>
                    <Text>200 mg</Text>
                    <Text style={style.amount}>₺{item.amount}</Text>
                  </View>
                </View>

                <View style={style.countContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => dispatch(addToCart(item))}
                    style={style.decrease_increase}>
                    <Text style={style.decrease_increase_size}>+</Text>
                  </TouchableOpacity>
                  <Text style={style.count}>{item.quantity}</Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => dispatch(decreaseQuantity(item))}
                    style={style.decrease_increase}>
                    <Text style={style.decrease_increase_size}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.product_guid}
          />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: basketBottomHeight,
        }}>
        <View style={style.empty}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={clearAsyncStorage}
            activeOpacity={0.8}>
            <Image source={require('../../../assets/icons/trash.png')} />
            <Text style={style.emptyText}>Tüm Ürünleri Sil</Text>
          </TouchableOpacity>
        </View>
        <View style={style.containerTotal}>
          <View style={style.totalAmount}>
            <View style={style.total}>
              <Text style={style.textAmount}>Toplam İndirim: </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={style.textAmount}>-₺</Text>
              </View>
            </View>
            <View style={style.total}>
              <Text style={style.textAmount}>Sepet Tutarı</Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={style.textAmount}>₺{totalAmount}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[style.complate]}>
                  <Text style={style.textComplate}>Siparişi Tamamla</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default BasketScreen;
