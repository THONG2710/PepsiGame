import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, PEPSI_IMG, getImageUrl} from '../../../resource';
import PrimaryBackground from '../../../component/Background/PrimaryBackground';
import WhiteButton from '../../../component/Button/WhiteButton';
import RedButton from '../../../component/Button/RedButton';
import TextInputField from '../../../component/Input/TextInputField';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {SignInProp} from './type';

const SignIn: React.FC<SignInProp> = props => {
  const {navigation} = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAnable, setIsAnable] = useState(false);

  const onMoveToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const onMoveToOTPScreen = () => {
    navigation.navigate('OTP');
  };

  const handleChangeTextPhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    if (phoneNumber == '') {
      setIsAnable(false);
    } else {
      setIsAnable(true);
    }
  }, [phoneNumber])
  

  return (
    <PrimaryBackground>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.header_cap}>Hey, mừng bạn đến với</Text>
          <Text style={styles.header_title}>Pepsi Tết</Text>
        </View>
        {/* body */}
        <View style={styles.body}>
          <Text style={styles.body_title}>ĐĂNG NHẬP</Text>
          <Text style={styles.body_cap}>Số điện thoại</Text>
          <TextInputField
            placeholder="Số điện thoại"
            inputProp={{
              onChangeText(value) {
                handleChangeTextPhoneNumber(value);
              },
              keyboardType: 'number-pad',
            }}
          /> 
          <View style={styles.body_imagContainer}>
            <Image
              style={styles.body_img}
              source={{uri: getImageUrl(PEPSI_IMG)}}
            />
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <RedButton label="Lấy mã OTP" isAnable={isAnable} onPress={onMoveToOTPScreen}/>
          <Text style={styles.footer_cap}>Hoặc</Text>
          <WhiteButton label="Đăng ký" onPress={onMoveToSignUpScreen} />
        </View>
      </View>
    </PrimaryBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  // ================= header =================
  header: {
    width: '100%',
    height: Dimensions.get('screen').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    marginTop: 40,
  },

  header_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 24,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },

  // ================ body =================
  body: {
    width: '100%',
    height: Dimensions.get('screen').height / 3,
  },

  body_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  body_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },

  body_imagContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },

  body_img: {
    width: '60%',
    height: '80%',
    resizeMode: 'contain',
  },

  // ================ footer =================
  footer: {
    width: '100%',
    height: Dimensions.get('screen').height / 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  footer_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
