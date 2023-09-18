import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {ReactNode} from 'react';
import {
  BANG_IMG,
  CURTAIN_IMG,
  Colors,
  DECORATIVE_MESH_LEFT_IMG,
  DECORDBOTTOM_IMG,
  DRUM_IMG,
  FLOWER,
  GODEN_FLOWER_IMG,
  LIGHT_BLUE_FLOWER_IMG,
  LIGHT_LEAK_IMG,
  NET_I_IMG,
  NET_RIGHT_IMG,
  getImageUrl,
} from '../../resource';

interface HappyBackgroundProp {
  children?: ReactNode;
}

const HappyBackground: React.FC<HappyBackgroundProp> = prop => {
  const {children} = prop;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(LIGHT_LEAK_IMG)}}>
        <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
        <Image
          style={styles.imgCurtainLeft}
          source={{uri: getImageUrl(CURTAIN_IMG)}}
        />
        <Image
          style={styles.imgNetRight}
          source={{uri: getImageUrl(NET_RIGHT_IMG)}}
        />
        <Image style={styles.imgNetI} source={{uri: getImageUrl(NET_I_IMG)}} />
        <Image style={styles.imgFlower1} source={{uri: getImageUrl(FLOWER)}} />
        <Image style={styles.imgFlower2} source={{uri: getImageUrl(FLOWER)}} />
        <Image style={styles.imgFlower3} source={{uri: getImageUrl(FLOWER)}} />
        <Image
          style={styles.imgDecordRight}
          source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}
        />
        <Image style={styles.imgBang} source={{uri: getImageUrl(BANG_IMG)}} />
        <Image
          style={styles.imgGodenFlower}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower2}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower3}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower4}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower5}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower6}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        {children}
        <Image
          style={styles.imgDecordBottom}
          source={{uri: getImageUrl(DECORDBOTTOM_IMG)}}
        />
        <Image style={styles.imgDrum} source={{uri: getImageUrl(DRUM_IMG)}} />
      </ImageBackground>
    </View>
  );
};

export default HappyBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
    zIndex: -1,
  },

  imgBackground: {
    width: '100%',
    flex: 1,
    position: 'absolute',
  },

  imgCurtainLeft: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    position: 'absolute',
    left: -140,
    top: -20,
    zIndex: 1,
  },

  imgNetRight: {
    width: '30%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  imgDecordBottom: {
    width: '100%',
    height: '49%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },

  imgDrum: {
    width: '50%',
    height: '10%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: '25%',
  },

  imgNetI: {
    width: 40,
    height: 100,
    position: 'absolute',
    top: Dimensions.get('screen').height / 4,
    zIndex: 1,
  },

  imgFlower1: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    top: Dimensions.get('screen').height / 2 + 20,
    transform: [{rotate: '100deg'}],
    left: -25,
    position: 'absolute',
  },

  imgFlower2: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 5,
    right: -60,
  },

  imgFlower3: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height - 300,
    right: -60,
  },

  imgDecordRight: {
    width: 180,
    height: 140,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotateY: '180deg'}],
    right: -80,
    top: Dimensions.get('screen').height / 2 - 30,
  },

  imgBang: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotate: '20deg'}],
    top: 50,
    left: -100,
  },

  imgGodenFlower: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 3 + 30,
    left: 40,
  },

  imgGodenFlower2: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 2 + 100,
    left: 40,
  },

  imgGodenFlower3: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 6,
    left: 40,
  },

  imgGodenFlower4: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 2 + 50,
    right: 40,
  },

  imgGodenFlower5: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 4 - 20,
    right: 10,
  },

  imgGodenFlower6: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 95,
    right: 50,
  },
});
