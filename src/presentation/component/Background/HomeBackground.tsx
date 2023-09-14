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
  BLUE_FLOWER_IMG,
  CAKE_IMG,
  CURTAIN_DECORD_IMG,
  CURTAIN_LEFT_BIG_IMG,
  Colors,
  DECORDBOTTOM_IMG,
  DECORDLEFT_IMG,
  DECORDRIGHT_IMG,
  DRUM_IMG,
  FLOWER,
  GODEN_FLOWER_IMG,
  LIGHT_BLUE_FLOWER_IMG,
  LIGHT_LEAK_IMG,
  NET_I_IMG,
  NET_L_IMG,
  NET_RIGHT_IMG,
  RED_FLOWER_IMG,
  getImageUrl,
} from '../../resource';

interface HomeBackgroundProp {
  children?: ReactNode;
}

const HomeBackground: React.FC<HomeBackgroundProp> = props => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(LIGHT_LEAK_IMG)}}>
        <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
        <Image
          style={styles.imgCurtainLeft}
          source={{uri: getImageUrl(CURTAIN_LEFT_BIG_IMG)}}
        />
        <Image
          style={styles.imgDecord}
          source={{uri: getImageUrl(CURTAIN_DECORD_IMG)}}
        />
        <Image
          style={styles.imgNetRight}
          source={{uri: getImageUrl(NET_RIGHT_IMG)}}
        />
        <Image
          style={styles.imgGodenFlower}
          source={{uri: getImageUrl(GODEN_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgRedFlower}
          source={{uri: getImageUrl(RED_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgBlueFlower}
          source={{uri: getImageUrl(BLUE_FLOWER_IMG)}}
        />
        <Image style={styles.imgCake} source={{uri: getImageUrl(CAKE_IMG)}} />
        <Image style={styles.imgNetI} source={{uri: getImageUrl(NET_I_IMG)}} />
        <Image style={styles.imgNetL} source={{uri: getImageUrl(NET_L_IMG)}} />
        <Image
          style={styles.imgDecordLeft}
          source={{uri: getImageUrl(DECORDLEFT_IMG)}}
        />
        <Image
          tintColor={Colors.LIGHT_BLUE_PRIMARY}
          style={[styles.imgDecordRight, {zIndex: 1}]}
          source={{uri: getImageUrl(DECORDRIGHT_IMG)}}
        />
        <Image
          style={[styles.imgDecordRight, {zIndex: 0}]}
          source={{uri: getImageUrl(DECORDRIGHT_IMG)}}
        />
        <Image
          style={styles.imgDecordBottom}
          source={{uri: getImageUrl(DECORDBOTTOM_IMG)}}
        />
        <Image style={styles.imgDrum} source={{uri: getImageUrl(DRUM_IMG)}} />
        <Image
          style={styles.imgFlowerUp}
          source={{uri: getImageUrl(LIGHT_BLUE_FLOWER_IMG)}}
        />
        <Image
          style={styles.imgFlowerDown}
          source={{uri: getImageUrl(LIGHT_BLUE_FLOWER_IMG)}}
        />
        {children}
      </ImageBackground>
    </View>
  );
};

export default HomeBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
    zIndex: -1,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  imgCurtainLeft: {
    width: '90%',
    height: '60%',
    position: 'absolute',
  },

  imgDecord: {
    width: '50%',
    height: '16%',
    resizeMode: 'contain',
    left: 65,
    position: 'absolute',
  },

  imgNetRight: {
    width: '30%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  imgGodenFlower: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: '9%',
    left: '20%',
  },

  imgRedFlower: {
    width: 50,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
  },

  imgBlueFlower: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    left: '45%',
  },

  imgCake: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
    right: -30,
  },

  imgNetI: {
    width: 50,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
  },

  imgNetL: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    position: 'absolute',
    top: 130,
    right: 0,
  },

  imgDecordLeft: {
    width: '60%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 3,
  },

  imgDecordRight: {
    width: '33%',
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: Dimensions.get('screen').height / 3,
  },

  imgDecordBottom: {
    width: '100%',
    height: '49%',
    position: 'absolute',
    bottom: 0,
  },

  imgDrum: {
    width: '50%',
    height: '10%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: '25%',
  },

  imgFlowerUp: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 3 + 70,
  },

  imgFlowerDown: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 2 + 70,
    left: -20,
  },
});
