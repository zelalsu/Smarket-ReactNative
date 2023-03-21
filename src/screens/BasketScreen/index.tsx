import {View, Text, FlatList} from 'react-native';
import React from 'react';

import {useAppSelector} from '../../store';

const BasketScreen = () => {
  const cart = useAppSelector(state => state.product.cart);

  return (
    <FlatList
      data={cart}
      renderItem={({item}) => (
        <View key={item.product_guid}>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.product_guid}
    />
  );
};

export default BasketScreen;
