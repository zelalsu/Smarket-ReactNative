// import {View} from 'react-native';
// import React, {useState} from 'react';
// import AltCategory from '../../components/Product/AltCategory/index';
// import ProductList from '../../components/Product/ProductList';

// const ProductScreen = ({route,categoryId}: {route: any}) => {
//   const [subCategoryId, setSubCategoryId] = useState<string | undefined>();
//   const {categoryId, title} = route.params;

//   const onSubcategoryPress = (subcategoryGuid: string) => {
//     setSubCategoryId(subcategoryGuid);
//   };
//   return (
//     <View>
//       <AltCategory
//             title={title},
//             onSubcategoryPress,
//             setSubCategoryId,
//             subCategoryId,
//         route={{
//           params: {
//             categoryId,
//             title,
//             onSubcategoryPress,
//             setSubCategoryId,
//             subCategoryId,
//           },
//         }}
//       />
//       <ProductList title={title} route={{params: {subCategoryId}}} />
//     </View>
//   );
// };

// export default ProductScreen;
