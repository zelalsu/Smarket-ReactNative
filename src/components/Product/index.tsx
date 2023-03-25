// /* eslint-disable react-native/no-inline-styles */
// import {
//   View,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from 'react-native';
// import React, {useState} from 'react';
// import {FlashList} from '@shopify/flash-list';
// import style from '../../screens/ProductScreen/style';
// import {useAppSelector} from '../../store';
// import {ProductsParams} from './type';
// import {addToCart} from '../../store/product';
// import {useDispatch} from 'react-redux';

// const base = 'https://smarket.nonoco.dev/';
// export const baseUrl = base + 'apps/';
// export const baseProductImageUrl = base + 'storage/products/';

// const Product = () => {
//   const products = useAppSelector(state => state.product.products);
//   const [subCategoryId, setSubCategoryId] = useState<string | undefined>();
//   const dispatch = useDispatch();

//   const filteredProducts = React.useMemo(
//     () => products.filter(product => product.category_guid === subCategoryId),
//     [subCategoryId, products],
//     // ilki memoization uygulamak istediğimiz işlemi tutan bir işlevdir. Diğeri o işlemin girdilerini tutan bir deps dizisidir.
//   );

//   const handleAddToCart = (productId: string) => {
//     const productToAdd = products.find(p => p.product_guid === productId);

//     dispatch(addToCart(productToAdd));
//   };
//   return (
//     <View style={{backgroundColor: '#fff', flex: 1}}>
//       <View style={{flex: 1, width: Dimensions.get('screen').width}}>
//         {filteredProducts.length > 0 && (
//           <FlashList<ProductsParams>
//             data={filteredProducts}
//             keyExtractor={item => `${item.title}${item.product_guid}`}
//             estimatedItemSize={200}
//             numColumns={3}
//             renderItem={({item}) => (
//               <>
//                 <View style={{alignItems: 'center'}}>
//                   <View style={style.container}>
//                     <View>
//                       <ImageBackground
//                         source={{uri: `${baseProductImageUrl}${item.image}`}}
//                         style={style.imageSize}
//                         resizeMode={'center'}>
//                         <TouchableOpacity
//                           onPress={() => handleAddToCart(item.product_guid)}>
//                           <Image
//                             style={style.plusSize}
//                             source={require('../../../assets/icons/plus.png')}
//                           />
//                         </TouchableOpacity>
//                       </ImageBackground>
//                     </View>
//                   </View>
//                   <View style={{width: 100}}>
//                     <Text numberOfLines={1} style={style.text}>
//                       {item.title}
//                     </Text>
//                     <Text style={style.text}>₺{item.price}</Text>
//                   </View>
//                 </View>
//               </>
//             )}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// export default Product;
