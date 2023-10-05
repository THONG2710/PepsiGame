import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BUTTON_CLOSE_IMG,
  Colors,
  Fonts,
  GIFT2_IMG,
  GIFT_IMG,
  LIGHT_IMG,
  getImageUrl,
} from '../../resource';
import RedButtonPopup from '../Button/RedButtonPopup';

interface PopupScanSuccessfullyProp {
  onCancle?: () => void;
  onCountinute?: () => void;
  onPlayNow?: () => void;
}

const PopupScanSuccessfully: React.FC<PopupScanSuccessfullyProp> = (props) => {
  const { onCancle, onCountinute, onPlayNow} = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.smallContainer}
        colors={[
          Colors.LIGHT_YELLOW3,
          Colors.LIGHT_YELLOW2,
          Colors.LIGHT_YELLOW2,
          Colors.LIGHT_YELLOW3,
        ]}>
        <Image style={styles.giftImg} source={{uri: getImageUrl(GIFT_IMG)}} />
        <Pressable onPress={onCancle}>
          <Image
            style={styles.buttonImg}
            source={{uri: getImageUrl(BUTTON_CLOSE_IMG)}}
          />
        </Pressable>
        <View style={styles.topContainer}>
          <Image
            style={styles.top_img}
            source={{uri: getImageUrl(LIGHT_IMG)}}
          />
          <Text style={styles.top_txtCap}>Bạn nhận được</Text>
          <Text style={styles.top_txtCore}>5</Text>
          <Text style={styles.top_txtCap}>Lượt chơi</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottom_txtCap}>
            Bạn đang có <Text style={styles.bottom_txtHighlight}>08</Text> lượt chơi
          </Text>
          <RedButtonPopup label="Scan tiếp" onPress={onCountinute}/>
          <RedButtonPopup label="Chơi ngay" onPress={onPlayNow}/>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PopupScanSuccessfully;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: '70%',
    height: '50%',
    borderRadius: 10,
  },

  giftImg: {
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -40,
  },

  buttonImg: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 10,
    right: 10,
  },

  topContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  top_txtCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 16,
    color: Colors.BLACK,
  },

  top_txtCore: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 42,
    color: Colors.DARK_BLUE,
    fontWeight: 'bold',
    marginVertical: -7,
  },

  top_img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  bottomContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  bottom_txtCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.BLACK,
  },

  bottom_txtHighlight: {
    fontWeight: 'bold',
    color: Colors.DARK_BLUE,
    fontSize: 16,
  },
});
