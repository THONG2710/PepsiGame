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
import {Colors} from '../../resource/value/colors';
import {
  CURTAIN_BOTTOM_LEFT_SMALL_LIGHT_IMG,
  CURTAIN_BOTTOM_RIGHT_SMALL__LIGHT_IMG,
  GOLDEN_IMG,
  RED_NET_IMG,
  getImageUrl,
} from '../../resource/assets/images';

interface WhiteButtonProps {
    label?: string;
}

const WhiteButton:React.FC<WhiteButtonProps> = (props) => {
    const { label } = props;
  return (
    <Pressable style={[styles.container]}>
      <ImageBackground
        style={styles.imageBackGround}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
          <ImageBackground
            tintColor={Colors.WHITE}
            style={[styles.imageBackGround, {zIndex: 1}]}
            source={{uri: getImageUrl(RED_NET_IMG)}}>
            <Image
              style={styles.curtain_left}
              source={{uri: getImageUrl(CURTAIN_BOTTOM_LEFT_SMALL_LIGHT_IMG)}}
            />
            <Image
              style={styles.curtain_right}
              source={{uri: getImageUrl(CURTAIN_BOTTOM_RIGHT_SMALL__LIGHT_IMG)}}
            />
            <Text style={styles.txtButton}>{label}</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2,
    height: 44,
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageBackGround: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 1,
  },

  smallContainer: {
    width: '97%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },

  curtain_left: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    left: -20,
  },

  curtain_right: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    right: -20,
  },

  txtButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE_PRIMARY,
  },
});
