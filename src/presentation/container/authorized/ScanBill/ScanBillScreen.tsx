import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SecondaryScreenBackground from '../../../component/Background/ScanBillBackground';
import HeaderComponent from '../../../component/Header/HeaderComponent';
import {BILL_IMG, getImageUrl} from '../../../resource';
import RedButton from '../../../component/Button/RedButton';

const ScanBillScreen = () => {
  return (
    <View style={styles.container}>
      <SecondaryScreenBackground>
        <HeaderComponent label="Quét mã" />
        <View style={styles.imgContainer}>
          <Image style={styles.imgBill} source={{uri: getImageUrl(BILL_IMG)}} />
        </View>
        <View style={styles.buttonContainer}>
            <RedButton label='Quét mã'/>
        </View>
      </SecondaryScreenBackground>
    </View>
  );
};

export default ScanBillScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  imgContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
  },

  imgBill: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },

  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  }
});
