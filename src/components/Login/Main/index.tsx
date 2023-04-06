/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';

const Main = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.telephoneImage}
            source={require('../../../../assets/images/phone.jpg')}
          />
        </View>
        <ImageBackground
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: 487,
            marginTop: 210,
          }}
          source={require('../../../../assets/images/shadow.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            İstediğin tüm ürünlere ulaş al {'\n'} ve anında indirimini kazan
          </Text>
          <Text style={styles.text1}>
            Sepetinize eklediğiniz tüm ürünlere {'\n'}anında indirim sağlıyoruz.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.textButton}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Main;
