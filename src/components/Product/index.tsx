import {View, Text} from 'react-native';
import React from 'react';

const Product = ({route}: {route: any}) => {
  const {title} = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Product;
