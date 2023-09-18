import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HappyBackground from '../../../component/Background/HappyBackground';
import {
  Colors,
  Fonts,
  GOLDEN_IMG,
  ICON_LOGOUT_IMG,
  PEPSIAN_IMG,
  getImageUrl,
} from '../../../resource';
import RedButton from '../../../component/Button/RedButton';
import {Shadow} from 'react-native-shadow-2';

const HappyScreen = () => {
  return (
    <HappyBackground>
      <View style={styles.container}>
        <Pressable style={styles.btnLogout}>
          <Image
            style={styles.imgBtnLogout}
            source={{uri: getImageUrl(ICON_LOGOUT_IMG)}}
          />
        </Pressable>
        {/* body */}
        <View style={styles.body}>
            <Shadow containerStyle={styles.body_ContainerShadow} style={styles.body_score} startColor={Colors.WHITE}>
              <ImageBackground
                style={styles.body_scoreBackground}
                source={{uri: getImageUrl(GOLDEN_IMG)}}>
                <View style={styles.body_scoreContainer}>
                  <Text style={styles.body_txtScore}>100</Text>
                </View>
              </ImageBackground>
            </Shadow>
          <Image
            style={styles.body_imgProduct}
            source={{uri: getImageUrl(PEPSIAN_IMG)}}
          />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footer_txtContent}>
            Chúc mừng bạn đã nhận được{'\n'}
            <Text style={styles.footer_txtHighlight}>1 lon Pepsi AN</Text> ứng
            với <Text style={styles.footer_txtHighlight}>50 coins</Text>
          </Text>
          <RedButton label="Xác nhận" />
        </View>
      </View>
    </HappyBackground>
  );
};

export default HappyScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  btnLogout: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 70,
    left: -10,
  },

  imgBtnLogout: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: Dimensions.get('screen').width - 50,
  },

  // ============== body =============================
  body: {
    width: Dimensions.get('screen').width,
    height: (Dimensions.get('screen').height / 4) * 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  body_imgProduct: {
    width: '50%',
    height: '60%',
    resizeMode: 'contain',
  },

  body_score: {
    position: 'absolute',
    zIndex: 1,
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
  },

  body_shadow: {
    width: '100%',
    height: '100%',
  },

  body_ContainerShadow: {
    position: 'absolute',
    top: 80,
    right: Dimensions.get('screen').width/3 + 40,
    zIndex: 1,
  },

  body_scoreBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  body_scoreContainer: {
    width: '93%',
    height: '93%',
    backgroundColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  body_txtScore: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  // ================ footer =============================
  footer: {
    width: '100%',
    flex: 1,
    marginTop: -90,
    alignItems: 'center',
  },

  footer_txtContent: {
    textAlign: 'center',
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    marginBottom: 20,
  },

  footer_txtHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
  },
});
