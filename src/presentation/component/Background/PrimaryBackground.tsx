import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../resource/value/colors';
import storage from '@react-native-firebase/storage';
import {ALITLE_NET_IMG, CURTAIN_BOTTOM_RIGHT_IMG, CURTAIN_IMG, DECORATIVE_MESH_LEFT_IMG, FLOWER, LIGHT_LEAK_IMG, NET, getImageUrl} from '../../resource/assets/images';

export interface PrimaryBackgroundProp {
  children: React.ReactNode;
}

const PrimaryBackground: React.FC<PrimaryBackgroundProp> = props => {
  const {children} = props;
  return (
    <ImageBackground
      source={{
        uri: getImageUrl(LIGHT_LEAK_IMG),
      }}
      style={styles.container}>
      <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
      <Image style={styles.curtainLeft} source={{uri: getImageUrl(CURTAIN_IMG)}}/>
      <Image style={styles.curtainRight} source={{uri: getImageUrl(CURTAIN_IMG)}}/>
      <Image style={styles.net} source={{uri: getImageUrl(NET)}}/>
      <Image style={styles.flower} source={{uri: getImageUrl(FLOWER)}}/>
      <Image style={[styles.flower, styles.flower2]} source={{uri: getImageUrl(FLOWER)}}/>
      <Image style={[styles.flower, styles.flower3]} source={{uri: getImageUrl(FLOWER)}}/>
      <Image style={styles.curtain_bottom_right} source={{uri: getImageUrl(CURTAIN_BOTTOM_RIGHT_IMG)}}/>
      <Image style={styles.alitle_net} source={{uri: getImageUrl(ALITLE_NET_IMG)}}/>
      <Image style={styles.decorative_mesh_left} source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}/>
      <Image style={styles.decorative_mesh_right} source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}/>
      {children}
    </ImageBackground>
  );
};

export default PrimaryBackground;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.DARK_BLUE_PRIMARY,
  },

  curtainLeft: {
    width: 248,
    height: 215,
    resizeMode: 'contain',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  
  curtainRight: {
    transform: [{rotateY: '180deg'}],
    width: 220,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: -50,
    right: -130,
    zIndex: 1,
  },

  net: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: -300,
    right: -370,
  },

  flower: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    position: 'absolute',
    top: Dimensions.get('screen').height/4,
    left: -20,
  },

  flower2: {
    top: Dimensions.get('screen').height/5*3,
    left: -10,
  },

  flower3: {
    top: Dimensions.get('screen').height/5*2.5,
    left: Dimensions.get('screen').width - 45,
  },

  curtain_bottom_right: {
    width: 400,
    height: 400,
    // backgroundColor: 'red',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -230,
    right: -100
  },

  alitle_net: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 0,
  },

  decorative_mesh_left: {
    width: 240,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    left: -70,
    top: Dimensions.get('screen').height/4*3,
  },

  decorative_mesh_right: {
    width: 180,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    transform: [{rotateY: '180deg'}],
    right: -80,
    top: 50,
  },
});
