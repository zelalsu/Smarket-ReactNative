import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';
import styles from './Login/style';
import style from './Main/style';

const UserCode = ({route, navigation}: {route: any; navigation: any}) => {
  const {setPhone} = route.params;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.telephoneText}>Telefon numaranı gir</Text>
        <MaskInput
          maxLength={15}
          keyboardType="phone-pad"
          style={styles.textInput}
          value={setPhone}
          onChangeText={(masked, unmasked) => {
            setPhone(masked); // you can use the unmasked value as well

            console.log(masked); // (99) 99999-9999
            console.log(unmasked); // 99999999999
          }}
          mask={[
            '(',
            /\d/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,

            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
          ]}
        />
      </View>
      <View style={styles.number}>
        <TouchableOpacity
          onPress={() => {
            trigger1({phone: phone}).then(res => {
              if (res.isSuccess) {
                navigation.navigate('UserCode', {setPhone: phone});
              }
            });
          }}
          style={style.button}>
          <Text style={style.textButton}>Sonraki</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserCode;
