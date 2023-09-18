import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PopupOptionsPlay = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#FCD54E', '#FEDA95', '#FBD239']}></LinearGradient>
  );
};

export default PopupOptionsPlay;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
