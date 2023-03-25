/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import style from '../../../screens/ProductScreen/style';
import {useAppSelector} from '../../../store';
import {window} from './../../../constants/index';

const AltCategory = ({route}: {route: any}) => {
  const {
    categoryId,
    title,
    onSubcategoryPress,
    setSubCategoryId,
    subCategoryId,
  } = route.params;
  const categories = useAppSelector(state => state.category.categories);

  const filteredCategories = React.useMemo(
    () =>
      categories.find(item => {
        return item.category_guid === categoryId;
      }),
    [categories, categoryId],
  );

  useEffect(() => {
    if (subCategoryId === undefined && filteredCategories !== undefined) {
      setSubCategoryId(filteredCategories.subcats[0].category_guid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCategories]);
  return (
    <View style={style.categoryContainer}>
      <View style={{flex: 1, width: window.width}}>
        <Text style={style.title}>{title}</Text>

        <FlashList
          data={filteredCategories?.subcats}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          estimatedItemSize={200}
          horizontal={true}
          extraData={style}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onSubcategoryPress(item.category_guid)}>
                <View style={style.innerCategory}>
                  <Text style={style.altCategory}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default AltCategory;
