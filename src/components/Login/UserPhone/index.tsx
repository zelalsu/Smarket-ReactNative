import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import style from '../Main/style';
import MaskInput from 'react-native-mask-input';
import {useLazyCommonExampleQuery} from '../../../store/api';
import BackButton from '../../../constants/BackButton';
import styleU from '../UserCode/style';

const UserPhone = ({navigation}: {navigation: any}) => {
  const [phone, setPhone] = useState('');
  const [trigger] = useLazyCommonExampleQuery();
  const [show, setShow] = useState(false);

  const handlePhoneChange = (masked: string, unmasked: string) => {
    setPhone(unmasked);
  };

  const handleClick = () => {
    Keyboard.dismiss();

    if (phone.length < 10 || phone.trim() === '') {
      setShow(false);
      Alert.alert('Hata', 'Lütfen geçerli bir telefon numarası girin.');
      return;
    }
    setShow(true);
    trigger({phone: phone}).then(res => {
      if (res.isSuccess) {
        setShow(false);
        console.log('telephone girdi');

        navigation.navigate('UserCode', {
          setPhone: phone,
        });
      }
    });
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.telephoneText}>Telefon numaranı gir</Text>

          <MaskInput
            maxLength={15}
            keyboardType="phone-pad"
            style={[
              styles.textInput,
              // eslint-disable-next-line react-native/no-inline-styles
              {borderColor: phone ? 'black' : 'transparent'},
            ]}
            value={phone}
            onChangeText={handlePhoneChange}
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

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'absolute',
              right: 1,
              top: 50,
            }}>
            {phone !== '' && (
              <TouchableOpacity
                onPress={() => {
                  setPhone('');
                }}>
                <Image
                  resizeMode="center"
                  source={require('../../../../assets/images/delete.png')}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {show && (
          <View style={styleU.indicator}>
            <ActivityIndicator color={'white'} size={'large'} />
          </View>
        )}
        <View style={styles.number}>
          <TouchableOpacity onPress={handleClick} style={style.button}>
            <Text style={style.textButton}>Sonraki</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UserPhone;
