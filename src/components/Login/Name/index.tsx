import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../UserPhone/style';
import style from '../Main/style';
import MaskInput from 'react-native-mask-input';
// import {useLazyCommonExampleQuery} from '../../../store/api';
import BackButton from '../../../constants/BackButton';
import styleU from '../UserCode/style';

const Name = ({navigation, route}: {navigation: any; route: any}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const {_token} = route.params;

  const [show, setShow] = useState(false);

  const handleNameChange = (unmasked: string) => {
    setName(unmasked);
  };
  const handleSurnameChange = (unmasked: string) => {
    setSurname(unmasked);
  };

  const handleClick = () => {
    setShow(true);

    if (_token) {
    }
    navigation.navigate('MainSplashScreen');
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.telephoneText}>Adınız ne?</Text>
          <Text>Size doğru şekilde nasıl hitap edeceğimizi bize bildirin</Text>

          <MaskInput
            placeholder="Adınız"
            style={[
              styles.textInput,
              {borderColor: name ? 'black' : 'transparent'},
            ]}
            value={name}
            onChangeText={handleNameChange}
          />
          <MaskInput
            placeholder="Soyadınız"
            style={[
              styles.textInput,
              {borderColor: surname ? 'black' : 'transparent'},
            ]}
            value={surname}
            onChangeText={handleSurnameChange}
          />

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'absolute',
              right: 1,
              top: 70,
            }}>
            {name !== '' && (
              <TouchableOpacity
                onPress={() => {
                  setName('');
                }}>
                <Image
                  resizeMode="center"
                  source={require('../../../../assets/images/delete.png')}
                />
              </TouchableOpacity>
            )}
          </View>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'absolute',
              right: 1,
              top: 155,
            }}>
            {surname !== '' && (
              <TouchableOpacity
                onPress={() => {
                  setSurname('');
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

export default Name;
