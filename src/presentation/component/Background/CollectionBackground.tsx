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
  CURTAIN_IMG,
  Colors,
  DECORATIVE_MESH_LEFT_IMG,
  DECORDBOTTOM_RIGHT,
  FLOWER,
  LIGHT_BLUE_FLOWER_IMG,
  LIGHT_LEAK_IMG,
  NET_RIGHT_IMG,
  getImageUrl,
} from '../../resource';

interface CollectionBackgroundProp {
  children?: ReactNode;
}

const CollectionBackground: React.FC<CollectionBackgroundProp> = props => {
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
          style={styles.imgBlueFlower}
          source={{uri: getImageUrl(FLOWER)}}
        />
        <Image
          style={styles.imgBlueFlower2}
          source={{uri: getImageUrl(FLOWER)}}
        />
        <Image
          style={styles.imgBlueFlower3}
          source={{uri: getImageUrl(FLOWER)}}
        />
        <Image
          style={styles.imgDecordLeft}
          source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}
        />
        <Image
          style={styles.imgDecordRight}
          source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}
        />
        <Image
          style={styles.imgDecordLeft2}
          source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}
        />
        <Image
          style={styles.imgDecordBottomRight}
          source={{uri: getImageUrl(DECORDBOTTOM_RIGHT)}}
        />
        {children}
      </ImageBackground>
    </View>
  );
};

export default CollectionBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
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

  imgBlueFlower: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 5,
    left: -25,
    transform: [{rotate: '50deg'}],
  },

  imgBlueFlower2: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 3,
    left: -5,
    transform: [{rotate: '60deg'}],
  },

  imgBlueFlower3: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height / 4,
    right: -25,
    transform: [{rotate: '40deg'}],
  },

  imgDecordLeft: {
    width: '65%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    left: -40,
    top: Dimensions.get('screen').height / 4 - 20,
  },

  imgDecordRight: {
    width: '65%',
    height: '50%',
    resizeMode: 'contain',
    transform: [{rotateY: '180deg'}],
    position: 'absolute',
    right: -40,
    top: Dimensions.get('screen').height / 4 - 20,
  },

  imgDecordLeft2: {
    width: '65%',
    height: '25%',
    resizeMode: 'contain',
    position: 'absolute',
    left: -60,
    bottom: 0,
  },

  imgDecordBottomRight: {
    width: '60%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
