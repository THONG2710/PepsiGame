import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BOTTOM_DECORD_IMG,
  BUTTON_CLOSE_IMG,
  Colors,
  DECORD_IMG,
  Fonts,
  LEFT_DECORD_IMG,
  RIGHT_TOP_IMG,
  getImageUrl,
} from '../../resource';
import TextInputField from '../Input/TextInputField';
import RedButtonPopup from '../Button/RedButtonPopup';

interface PopupRecivedGiftProp {
  onPress?: () => void;
}

const PopupRecivedGift: React.FC<PopupRecivedGiftProp> = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{height: '100%', width: '100%'}}
        colors={[Colors.YELLOW3, Colors.YELLOW2]}>
        <Image
          style={styles.topRightDecord}
          source={{uri: getImageUrl(RIGHT_TOP_IMG)}}
        />
        <Image style={styles.imgDecord} source={{uri: getImageUrl(DECORD_IMG)}}/>
        <Image style={styles.imgBottomDecord} source={{uri: getImageUrl(BOTTOM_DECORD_IMG)}}/>
        <Image tintColor={Colors.BEIGE_YELLOW} style={styles.imgBottomDecord} source={{uri: getImageUrl(BOTTOM_DECORD_IMG)}}/>
        <Image style={styles.imgLeftDecord} source={{uri: getImageUrl(LEFT_DECORD_IMG)}}/>
        <Image tintColor={Colors.BEIGE_YELLOW} style={styles.imgLeftDecord} source={{uri: getImageUrl(LEFT_DECORD_IMG)}}/>
        <Pressable style={styles.btnClose} onPress={onPress}>
          <Image
            style={styles.imgButtonClose}
            source={{uri: getImageUrl(BUTTON_CLOSE_IMG)}}
          />
        </Pressable>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>THÔNG TIN NHẬN QUÀ</Text>
          <View style={styles.header_smallContainer}>
            <Text style={styles.header_cap}>
              Quà của bạn:{' '}
              <Text style={styles.header_highLight}>Pepsi Tote Bag</Text>
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.body_title}>Họ và tên</Text>
            <TextInputField
              inputStyle={styles.body_input}
              placeholder="Nhập họ và tên của bạn"
            />
          </View>
          <View>
            <Text style={styles.body_title}>Số điện thoại</Text>
            <TextInputField
              inputStyle={styles.body_input}
              placeholder="Nhập số điện thoại của bạn"
            />
          </View>
          <View>
            <Text style={styles.body_title}>Địa chỉ</Text>
            <TextInputField
              inputStyle={[styles.body_input, {height: 100}]}
              placeholder="Nhập địa chỉ của bạn"
              inputProp={{numberOfLines: 3, multiline: true, textAlignVertical: 'top'}}
            />
          </View>
          <View>
            <Text style={styles.body_title}>Ghi chú</Text>
            <TextInputField
              inputStyle={[styles.body_input, {height: 100}]}
              placeholder="Nhập ghi chú (nếu có)"
              inputProp={{numberOfLines: 3, multiline: true, textAlignVertical: 'top'}}
            />
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <RedButtonPopup label="Xác nhận" btnPopupStyle={styles.footer_btn} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default PopupRecivedGift;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'red',
  },

  btnClose: {
    marginTop: 10,
    marginLeft: '90%',
  },

  imgButtonClose: {
    width: 25,
    height: 25,
  },

  topRightDecord: {
    width: '40%',
    height: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  imgDecord: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    resizeMode: 'contain',
    top: '45%',
  },

  imgBottomDecord: {
    width: '57%',
    height: '15%',
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 0,
    right: 0,
  },

  imgLeftDecord: {
    width: '20%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: 100,
  },

  //   ================= header =================
  header: {
    width: '100%',
    height: '17%',
  },

  headerTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: Fonts.primaryFonts,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE2,
  },

  header_smallContainer: {
    marginLeft: 20,
    marginTop: 20,
  },

  header_cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE2,
  },

  header_highLight: {
    color: Colors.RED,
  },

  //   =========== body ================
  body: {
    width: '100%',
    height: (Dimensions.get('screen').height / 10) * 5.5,
    marginLeft: 20,
  },

  body_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE2,
  },

  body_input: {
    width: '90%',
    marginLeft: 0,
    marginTop: 5,
    marginBottom: 10,
  },

  //   =========== footer ==================
  footer: {
    width: '100%',
    alignItems: 'center',
  },

  footer_btn: {
    width: '40%',
    height: 40,
  },
});
