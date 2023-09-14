import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {
  BOTTOM_IMG,
  CURTAIN_DECORD_IMG,
  CURTAIN_IMG,
  Colors,
  FIREWORK_IMG,
  FLOWER,
  LIGHT_LEAK_IMG,
  NET_RIGHT_IMG,
  getImageUrl,
} from '../../resource';

interface GameBackgroundProp {
  children?: ReactNode;
}

const GameBackground: React.FC<GameBackgroundProp> = props => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={{uri: getImageUrl(LIGHT_LEAK_IMG)}}>
        <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
        <Image
          style={styles.curtainLeft}
          source={{uri: getImageUrl(CURTAIN_IMG)}}
        />
        <Image
          style={styles.imgNetRight}
          source={{uri: getImageUrl(NET_RIGHT_IMG)}}
        />
        <Image
          style={styles.imgFireWork}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image
          style={styles.imgFireWork2}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image
          style={styles.imgFireWork3}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image
          style={styles.imgFireWork4}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image
          style={styles.imgFireWork5}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image
          style={styles.imgFireWork6}
          source={{uri: getImageUrl(FIREWORK_IMG)}}
        />
        <Image style={styles.imgFlower} source={{uri: getImageUrl(FLOWER)}} />
        <Image style={styles.imgFlower2} source={{uri: getImageUrl(FLOWER)}} />
        <Image style={styles.imgFlower3} source={{uri: getImageUrl(FLOWER)}} />
        {children}
        <Image
          style={styles.imgBottom}
          source={{uri: getImageUrl(BOTTOM_IMG)}}
        />
      </ImageBackground>
    </View>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
  },

  curtainLeft: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    position: 'absolute',
    left: -140,
    top: -20,
  },

  imgNetRight: {
    width: '30%',
    height: '20%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  imgBottom: {
    width: '100%',
    height: '34%',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },

  imgFireWork: {
    width: 140,
    height: 200,
    resizeMode: 'contain',
    transform: [{rotate: '10deg'}],
    position: 'absolute',
    top: 120,
    left: 30,
  },

  imgFireWork2: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    top: 270,
    left: 10,
  },

  imgFireWork3: {
    width: Dimensions.get('screen').width / 2 - 50,
    height: 220,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotate: '5deg'}],
    top: 400,
    left: 10,
  },

  imgFireWork4: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotate: '50deg'}],
    top: 130,
    right: 40,
  },

  imgFireWork5: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotate: '70deg'}],
    top: 240,
    right: -40,
  },

  imgFireWork6: {
    width: Dimensions.get('screen').width / 2 - 40,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotate: '85deg'}],
    top: 400,
    right: 20,
  },

  imgFlower: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 3 - 10,
  },

  imgFlower2: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 5,
    right: -30,
  },

  imgFlower3: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 4,
    right: -30,
  },
});
