import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {
  Colors,
  Fonts,
  GOLDEN_IMG,
  RED_NET_IMG,
  YELLOW_FLOWER2_IMG,
  YELLOW_FLOWER3_IMG,
  getImageUrl,
} from '../../resource';

interface PlayButtonProp {}

const PlayButton: React.FC<PlayButtonProp> = () => {
  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
          <Image
            style={styles.imgYellowFlower2}
            source={{uri: getImageUrl(YELLOW_FLOWER2_IMG)}}
          />
          <Image
            style={styles.imgYellowFlower3}
            source={{uri: getImageUrl(YELLOW_FLOWER3_IMG)}}
          />
          <ImageBackground
            tintColor={Colors.LIGHT_RED}
            style={styles.imgRedNet}
            source={{uri: getImageUrl(RED_NET_IMG)}}>
            <View style={styles.background}></View>
          </ImageBackground>
          <View style={styles.txtContainer}>
            <Text style={styles.txtLabel}>Chơi ngay</Text>
            <Text style={styles.txtCap}>
              Bạn có tổng cộng <Text style={styles.txtHighlight}>8</Text> lượt chơi
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 + 50,
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
    width: '97%',
    height: '95%',
    backgroundColor: Colors.RED,
    borderRadius: 12,
    overflow: 'hidden',
  },

  imgRedNet: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  background: {
    width: 80,
    height: 80,
    backgroundColor: Colors.DARK_RED,
    transform: [{rotate: '45deg'}],
  },

  imgYellowFlower2: {
    width: 50,
    height: 50,
    zIndex: 1,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: -1,
  },

  imgYellowFlower3: {
    width: 40,
    height: 40,
    zIndex: 1,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  txtContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  txtLabel: {
    fontFamily: Fonts.primaryFonts,
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  txtCap: {
    fontFamily: Fonts.primaryFonts,
    color: Colors.WHITE,
    fontSize: 9,
  },

  txtHighlight: {
    color: Colors.BEIGE_YELLOW, 
    fontSize: 12,
    fontWeight: 'bold',
  },
});
