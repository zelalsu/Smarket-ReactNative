import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import style from './style';
import {Image} from 'react-native';
import {useAppDispatch} from '../../../store';
import {userInitialState} from '../../../store/user';
const Title = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(userInitialState());

    navigation.navigate('Main');
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <View style={{marginRight: 18}}>
            <Image source={require('../../../../assets/icons/iconW.png')} />
          </View>
          <View>
            <Text style={style.text}>Teslim için</Text>
            <Text style={style.text}>Atıf bey mah Doktor saylan cad...</Text>
          </View>
          <TouchableOpacity onPress={handleClick}>
            <Text>çıkışş</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="sebze,meyve" style={style.textInput} />
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {new Array(5).fill('').map((_, index) => (
            <View key={index}>
              <View>
                <ImageBackground
                  style={[
                    style.img,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      marginRight: 16,
                      marginLeft: index === 0 ? 16 : 0,
                    },
                  ]}
                  source={require('../../../../assets/images/banner.png')}>
                  <View />
                </ImageBackground>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Title;
