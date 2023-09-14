import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HomeBackground from '../../../component/Background/HomeBackground';
import {Colors, Fonts, HEAD_IMG, ICON_LOGOUT_IMG, getImageUrl} from '../../../resource';
import WhiteButton from '../../../component/Button/WhiteButton';
import PlayButton from '../../../component/Button/PlayButton';

const HomeScreen = () => {
  return (
    <HomeBackground>
      <View style={styles.container}>
        <Pressable style={styles.btnLogout}>
          <Image
            style={styles.imgBtnLogout}
            source={{uri: getImageUrl(ICON_LOGOUT_IMG)}}
          />
        </Pressable>
        {/* header */}
        <View style={styles.header}>
          <Image
            style={styles.header_img}
            source={{uri: getImageUrl(HEAD_IMG)}}
          />
        </View>
        {/* body */}
        <View>
          <Text style={styles.txtCaption}>Hướng dẫn</Text>
        </View>
        <View style={styles.body}>
          <PlayButton />
          <WhiteButton label="Quét mã" buttonStyle={styles.body_button} />
          <WhiteButton label="Bộ sưu tập" buttonStyle={styles.body_button} />
          <WhiteButton
            label="Chi tiết quà tặng"
            buttonStyle={styles.body_button}
          />
        </View>
      </View>
    </HomeBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  btnLogout: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  imgBtnLogout: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 60,
    left: Dimensions.get('screen').width - 50,
  },

  // =================== header =================
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  header_img: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },

  // ============ caption =================
  txtCaption: {
    width: '100%',
    textAlign: 'center',
    fontFamily: Fonts.primaryFonts,
    color: Colors.BEIGE_YELLOW,
    fontSize: 16,
    marginTop: 10,
    marginBottom: -10,
    fontWeight: 'bold',
  },

  // ============== body =================
  body: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    height: '35%',
    justifyContent: 'space-evenly',
  },

  body_button: {
    width: Dimensions.get('screen').width / 2 + 50,
    height: 50,
  },
});
