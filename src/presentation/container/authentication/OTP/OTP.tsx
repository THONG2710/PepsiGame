import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../resource';
import RedButton from '../../../component/Button/RedButton';
import WhiteButton from '../../../component/Button/WhiteButton';
import PrimaryBackground from '../../../component/Background/PrimaryBackground';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import TextInputField from '../../../component/Input/TextInputField';
import OTPTextView from 'react-native-otp-textinput';
import { OTPProp } from './type';

const OTP:React.FC<OTPProp> = (props) => {
  const {navigation} = props;
  const onMoveToHomeScreen = () => {
    navigation.navigate('AuthorizedNavigation');
  }

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
          <Text style={styles.body_title}>Xác minh OTP</Text>
          <Text style={styles.body_cap}>
            Nhập mã OTP vừa được gửi về điện thoại của bạn
          </Text>
          <OTPTextView
            containerStyle={styles.body_containerOTP}
            inputCount={4}
            textInputStyle={styles.body_txtOTP}
            offTintColor={Colors.WHITE}
            tintColor={Colors.WHITE}
          />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <RedButton label="Xác nhận" onPress={onMoveToHomeScreen}/>
          <View style={styles.footer_smallContainer}>
            <Text style={styles.footer_cap}>Bạn chưa nhận được mã?</Text>
            <Pressable>
              <Text style={styles.footer_txtButton}> Gửi lại mã</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </PrimaryBackground>
  );
};

export default OTP;

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
    height: Dimensions.get('screen').height / 4,
    alignItems: 'center',
  },

  body_txtOTP: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderBottomWidth: 2,
    borderWidth: 2,
    color: Colors.BLACK_TEXT,
  },

  body_containerOTP: {
    width: '75%',
    marginVertical: 30,
  },

  body_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },

  body_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 11,
    color: Colors.WHITE,
    marginTop: 10,
  },

  // ================ footer =================
  footer: {
    width: '100%',
    height: Dimensions.get('screen').height / 5.5,
    alignItems: 'center',
  },

  footer_smallContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },

  footer_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
    alignItems: 'center',
  },

  footer_txtButton: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.BEIGE_YELLOW,
  },
});
