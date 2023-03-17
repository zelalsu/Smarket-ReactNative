import {View, Text, TextInput, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
const Title = () => {
  return (
    <>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <View style={{marginRight: 20}}>
            <Text>İcon</Text>
          </View>
          <View>
            <Text style={{color: '#fff'}}>Teslim için</Text>
            <Text style={{color: '#fff'}}>
              Atıf bey mah Doktor saylan cad...
            </Text>
          </View>
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
