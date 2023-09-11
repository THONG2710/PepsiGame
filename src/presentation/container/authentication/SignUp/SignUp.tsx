import {Alert, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrimaryBackground from '../../../component/Background/PrimaryBackground';
import {CHECKBOX_IMG, getImageUrl} from '../../../resource/assets/images';
import TextInputField from '../../../component/Input/TextInputField';
import {Colors} from '../../../resource/value/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RedButton from '../../../component/Button/RedButton';
import WhiteButton from '../../../component/Button/WhiteButton';
import {Fonts} from '../../../resource';
import {SignUpProp} from './type';

const SignUp: React.FC<SignUpProp> = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [isAnable, setIsAnable] = useState(false);
  const {navigation} = props;

  const onMoveToLoginScreen = () => {
    navigation.navigate('SignIn');
  };

  const onMoveToOTPScreen = () => {
    navigation.navigate('OTP');
  }

  useEffect(() => {
    if (phoneNumber == '') {
      setIsAnable(false);
    } else if (userName == '') {
      setIsAnable(false);
    } else if (isAgree == false) {
      setIsAnable(false);
    } else {
      setIsAnable(true);
    }
  }, [phoneNumber, userName, isAgree]);

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
          <Text style={styles.body_title}>ĐĂNG KÝ</Text>
          <TextInputField
            inputProp={{
              onChangeText(value) {
                setPhoneNumber(value);
              },
            }}
            placeholder="Số điện thoại"
          />
          <TextInputField
            inputProp={{
              onChangeText(value) {
                setUserName(value);
              },
            }}
            placeholder="Tên người dùng"
          />
          <View style={styles.body_rules}>
            <BouncyCheckbox
              size={20}
              fillColor={Colors.WHITE}
              iconStyle={{borderRadius: 7}}
              innerIconStyle={{borderRadius: 7}}
              onPress={() => setIsAgree(!isAgree)}
              checkIconImageSource={require('../../../resource/assets/Checkbox.png')}
              iconImageStyle={{width: 15, height: 15, resizeMode: 'contain'}}
            />
            <Text style={styles.body_rulesCap}>
              Tôi đã đọc và đồng ý với{' '}
              <Text style={styles.body_capHighlight}>thể lệ chương trình</Text>{' '}
              Pepsi Tết.
            </Text>
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <RedButton label="Lấy mã OTP" isAnable={isAnable} onPress={onMoveToOTPScreen}/>
          <Text style={styles.footer_cap}>Hoặc</Text>
          <WhiteButton label="Đăng nhập" onPress={onMoveToLoginScreen} />
        </View>
      </View>
    </PrimaryBackground>
  );
};

export default SignUp;

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
    height: Dimensions.get('screen').height / 4 + 20,
    justifyContent: 'space-around',
  },

  body_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  body_rules: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 40,
    marginLeft: 20,
    marginTop: -15,
    alignItems: 'center',
  },

  body_rulesCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 10.3,
    color: Colors.WHITE,
    marginLeft: -10,
  },

  body_capHighlight: {
    color: Colors.BEIGE_YELLOW,
    fontWeight: 'bold',
  },

  // ================ footer =================
  footer: {
    width: '100%',
    height: Dimensions.get('screen').height / 5.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },

  footer_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
