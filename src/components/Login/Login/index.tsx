import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import style from '../Main/style';
import MaskInput from 'react-native-mask-input';
import {useLazyCommonExampleQuery} from '../../../store/api';

const Login = ({navigation}: {navigation: any}) => {
  const [phone, setPhone] = React.useState('');
  const [trigger] = useLazyCommonExampleQuery();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.telephoneText}>Telefon numaranı gir</Text>
        <MaskInput
          maxLength={15}
          keyboardType="phone-pad"
          style={styles.textInput}
          value={phone}
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
            trigger({phone: phone}).then(res => {
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

export default Login;
