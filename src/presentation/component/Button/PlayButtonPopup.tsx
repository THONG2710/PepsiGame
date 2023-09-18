import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  Colors,
  Fonts,
  GOLDEN_IMG,
  RED_NET_IMG,
  getImageUrl,
} from '../../resource';

interface PlayButtonPopupProp {
  label?: string;
}

const PlayButtonPopup: React.FC<PlayButtonPopupProp> = props => {
  const {label} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
          <Image
            tintColor={Colors.LIGHT_RED}
            style={styles.imgRednet}
            source={{uri: getImageUrl(RED_NET_IMG)}}
          />
          <View style={styles.imgRhombus}></View>
          <View>
            <Text style={styles.txtLabel}>{label}</Text>
            <Text style={styles.txtContent}>
              Bạn còn <Text style={styles.txtHighlight}>3</Text> lượt chơi
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlayButtonPopup;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: 70,
    borderRadius: 12,
    overflow: 'hidden',
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
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.RED,
    overflow: 'hidden',
  },

  imgRhombus: {
    width: 70,
    height: 70,
    backgroundColor: Colors.DARK_RED,
    position: 'absolute',
    transform: [{rotate: '45deg'}],
  },

  imgRednet: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  txtLabel: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.WHITE,
    textAlign: 'center',
  },

  txtContent: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 10,
    color: Colors.WHITE,
    textAlign: 'center',
  },

  txtHighlight: {
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
    fontSize: 12,
  },
});
