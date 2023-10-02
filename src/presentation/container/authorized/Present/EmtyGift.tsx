import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BOTTOM_IMG, BOX_IMG, Colors, Fonts, getImageUrl} from '../../../resource';

const EmtyGift = () => {
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Image style={styles.img} source={{uri: getImageUrl(BOX_IMG)}} />
        <Text style={styles.txt}>Kho quà còn trống!{'\n'}Hãy dùng coins của bạn để đổi quà</Text>
      </View>
    </View>
  );
};

export default EmtyGift;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },

  img: {
    width: Dimensions.get('screen').width/2.5,
    height: Dimensions.get('screen').height/5,
    resizeMode: 'contain',
  },

  txt: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    width: '75%',
    textAlign: 'center',
  }
});
