import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  AQUATER_IMG,
  Colors,
  Fonts,
  GOLDEN_IMG,
  POPUP_BOTTOM_LEFT_IMG,
  POPUP_BOTTOM_RIGHT_IMG,
  RED_NET_IMG,
  getImageUrl,
} from '../../resource';
import LinearGradient from 'react-native-linear-gradient';

interface WhiteButtonPopupProp {
  label?: string;
  onPress?: () => void;
}

const WhiteButtonPopup: React.FC<WhiteButtonPopupProp> = prop => {
  const {label, onPress} = prop;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
          <Image
            tintColor={Colors.LIGHT_YELLOW}
            style={styles.imgYellowNet}
            source={{uri: getImageUrl(RED_NET_IMG)}}
          />
          <Image
            style={styles.imgBottomLeft}
            source={{uri: getImageUrl(POPUP_BOTTOM_LEFT_IMG)}}
          />
          <Image
            style={styles.imgBottomRight}
            source={{uri: getImageUrl(POPUP_BOTTOM_RIGHT_IMG)}}
          />
          <Text style={styles.txtLabel}>{label}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default WhiteButtonPopup;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 3,
    height: 35,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 10,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: '95%',
    height: '95%',
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  imgYellowNet: {
    width: 280,
    height: 60,
    position: 'absolute',
  },

  imgBottomLeft: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },

  imgBottomRight: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  txtLabel: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE,
  },
});
