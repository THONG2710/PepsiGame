import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, LEFT_IMG, RIGHT_IMG, TOP_IMG, getImageUrl } from '../../resource';
import RedButtonPopup from '../Button/RedButtonPopup';

interface PopupWrongQRCodeProp {
  onPress?: () => void;
}

const PopupWrongQRCode: React.FC<PopupWrongQRCodeProp> = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.smallContainer} colors={[Colors.LIGHT_YELLOW3, Colors.LIGHT_YELLOW2, Colors.LIGHT_YELLOW3]}>
        <Image style={styles.topImg} source={{uri: getImageUrl(TOP_IMG)}}/>
        <Image tintColor={Colors.BEIGE_YELLOW} style={styles.topImg} source={{uri: getImageUrl(TOP_IMG)}}/>
        <Image style={styles.leftImg} source={{uri: getImageUrl(LEFT_IMG)}}/>
        <Image style={styles.rightImg} source={{uri: getImageUrl(RIGHT_IMG)}}/>
        <Image tintColor={Colors.BEIGE_YELLOW} style={styles.rightImg} source={{uri: getImageUrl(RIGHT_IMG)}}/>
        <Text style={styles.txtTitle}>Hệ thống không nhận diện được hình ảnh!</Text>
        <View style={styles.buttonContainer}>
            <RedButtonPopup label='Scan lại' onPress={onPress}/>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PopupWrongQRCode;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: '60%',
    height: '20%',
    borderRadius: 10,
  },

  txtTitle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.RED,
    textAlign: 'center',
    marginVertical: 25,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },

  topImg: {
    width: '50%',
    height: '29%',
    position: 'absolute',
    resizeMode: 'contain',
    left: '30%',
  },

  leftImg: {
    width: '70%',
    height: '70%',
    position: 'absolute',
    resizeMode: 'contain',
    right: 0,
    bottom: 0,
  },

  rightImg: {
    width: '15%',
    height: '50%',
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 0,
    left: 0,
  },

});
