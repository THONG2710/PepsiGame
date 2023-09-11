import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React, {ReactNode} from 'react';
import {
  CURTAIN_IMG,
  Colors,
  DECORATIVE_MESH_RIGHT_IMG,
  FLOWER,
  LIGHT_LEAK_IMG,
  NET,
  getImageUrl,
} from '../../resource';

interface RulesBackgroundProp {
  children: ReactNode;
}

const RulesBackground: React.FC<RulesBackgroundProp> = props => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: getImageUrl(LIGHT_LEAK_IMG)}}
        style={styles.imgBackground}>
        <Image
          style={styles.imgCurtain}
          source={{uri: getImageUrl(CURTAIN_IMG)}}
        />
        <Image style={styles.imgNet} source={{uri: getImageUrl(NET)}} />
        <Image
          style={styles.imgDecorative}
          source={{uri: getImageUrl(DECORATIVE_MESH_RIGHT_IMG)}}
        />
        <Image
          style={[styles.imgFlower, styles.flower1]}
          source={{uri: getImageUrl(FLOWER)}}
        />
        <Image
          style={[styles.imgFlower, styles.flower2]}
          source={{uri: getImageUrl(FLOWER)}}
        />
        <Image
          style={[styles.imgFlower, styles.flower3]}
          source={{uri: getImageUrl(FLOWER)}}
        />
        {children}
      </ImageBackground>
    </View>
  );
};

export default RulesBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
  },

  imgBackground: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  imgCurtain: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 4,
    resizeMode: 'contain',
    transform: [{rotateY: '180deg'}],
    position: 'absolute',
    top: -30,
    right: -120,
    zIndex: 1,
  },

  imgNet: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -200,
    right: -340,
    zIndex: 2,
  },

  imgDecorative: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 3,
    resizeMode: 'contain',
    transform: [{rotateZ: '180deg'}],
    position: 'absolute',
    top: 10,
    right: -100,
  },

  imgFlower: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
  },

  flower1: {
    top: 200,
    left: -20,
  },

  flower2: {
    top: (Dimensions.get('screen').height / 5) * 3 + 30,
    left: -15,
  },

  flower3: {
    top: 270,
    right: -30,
  },
});
