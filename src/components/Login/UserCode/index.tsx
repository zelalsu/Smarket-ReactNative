import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from '../UserPhone/style';
import style from '../Main/style';
import styleU from './style';
import {useLazyCommonExample2Query} from '../../../store/api';
import BackButton from './../../../constants/BackButton';
import UserValidation from '../../../screens/ModalScreen/UserValidation';
import {useAppDispatch} from '../../../store';
import {setToken} from '../../../store/user';
import {Keyboard} from 'react-native';

const UserCode = ({route, navigation}: {route: any; navigation: any}) => {
  const {setPhone} = route.params;
  const [code, setCode] = useState(['', '', '', '']);
  const [showIndicator, setShowIndicator] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //her TextInput bileşeninin bir referansını içerir.
  const textInputsRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [trigger1] = useLazyCommonExample2Query();

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    //yana kayma
    if (text && index < 3) {
      console.log('1');
      textInputsRefs[index + 1].current?.focus();
      //geri gitme
    } else if (!text && index > 0) {
      console.log('2');
      textInputsRefs[index - 1].current?.focus();
    }
    return;
    //  else if (text && index === 3) {
    //   console.log('3');
    //   textInputsRefs[index].current?.blur();
    //   handleClick(newCode.join(''));
    //   return;
    // }
  };

  const handleClick = (newCode: string) => {
    Keyboard.dismiss();
    setShowIndicator(true);
    trigger1({
      phone: setPhone,
      code: newCode ? newCode : code.join(''),
    }).then(res => {
      if (res.data?.result === 'success') {
        setShowIndicator(false);
        dispatch(setToken(res.data?.userInfo.authToken));
        navigation.navigate('LoginSplashScreen');
      }

      if (res.data?.result === 'error') {
        setShowIndicator(false);
        setIsModalOpen(true);
        setErrorMsg(res.data.msg);
        setCode(['', '', '', '']);
        return;
      }
    });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.telephoneText}>
            Size gönderilen 4 haneli kodu giriniz. -7857
          </Text>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  styles.codeInput,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {borderColor: digit ? 'black' : 'transparent'},
                ]}
                value={digit}
                maxLength={1}
                keyboardType="phone-pad"
                onChangeText={text => handleCodeChange(text, index)} //gelen texti yakalarız ve text ve indexi gönderirriz
                ref={textInputsRefs[index]}
              />
            ))}
          </View>
        </View>
        {showIndicator && (
          <View style={styleU.indicator}>
            <ActivityIndicator color={'white'} size={'large'} />
          </View>
        )}
        <View style={styles.number}>
          <TouchableOpacity
            onPress={() => handleClick(code.join(''))}
            style={style.button}>
            <Text style={style.textButton}>Sonraki</Text>
          </TouchableOpacity>
        </View>
      </View>
      <UserValidation
        setIsModal={setIsModalOpen}
        status={isModalOpen}
        msg={errorMsg}
      />
    </>
  );
};

export default UserCode;
