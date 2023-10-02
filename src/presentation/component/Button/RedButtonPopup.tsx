import {
  Dimensions,
  Image,
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, GOLDEN_IMG, RED_NET_IMG, getImageUrl} from '../../resource';
import LinearGradient from 'react-native-linear-gradient';

interface RedButtonPopupProp {
  label?: string;
  btnPopupStyle?: StyleProp<ViewStyle>
}

const RedButtonPopup: React.FC<RedButtonPopupProp> = prop => {
  const {label, btnPopupStyle} = prop;
  return (
    <TouchableOpacity style={[styles.container, btnPopupStyle]}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
            <Image tintColor={Colors.LIGHT_RED_POPUP} style={styles.imgRedNet} source={{uri: getImageUrl(RED_NET_IMG)}}/>
          <Text style={styles.txtLabel}>{label}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RedButtonPopup;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 3,
    height: 35,
    borderRadius: 10,
    overflow: 'hidden',
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  smallContainer: {
    width: '95%',
    height: '95%',
    backgroundColor: Colors.RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },

  txtLabel: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  imgRedNet: {
    width: 280,
    height: 60,
    position: 'absolute',
  }
});
