import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {
  BOOM_IMG,
  BUTTON_CLOSE2_IMG,
  COIN_IMG,
  Colors,
  Fonts,
  GIFT_CLOSE_IMG,
  GIFT_OPEN_IMG,
  HAT_IMG,
  LIGHT_IMG,
  getImageUrl,
} from '../../resource';
import RedButtonPopup from '../Button/RedButtonPopup';

interface PopupGiftCloseProp {
  onCancle?: () => void;
  isOpen: boolean;
  onExchange?: () => void;
}

const PopupGiftClose: React.FC<PopupGiftCloseProp> = props => {
  const list = [
    {
      id: 1,
      url: getImageUrl(HAT_IMG),
      name: 'Pepsi Bucket Hat',
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  const {onCancle, onExchange} = props;
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        {isOpen ? (
          <View style={styles.openContainer}>
            <View style={styles.smallContainerOpen}>
              <Image
                style={styles.boomImg}
                source={{uri: getImageUrl(BOOM_IMG)}}
              />
              <Image
                style={styles.giftOpenImg}
                source={{uri: getImageUrl(GIFT_OPEN_IMG)}}
              />
              <Image 
                style={styles.coinImg}
                source={{uri: getImageUrl(COIN_IMG)}}
              />
            </View>
            <View style={styles.openCapContainer}>
              <Text style={[styles.txtCap, {width: '60%'}]}>
                Bạn nhận được <Text style={styles.txtHighLight}>300 coins</Text>
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.changeContainer}>
            <View style={styles.giftContainer}>
              <Image
                style={styles.lightImg}
                source={{uri: getImageUrl(LIGHT_IMG)}}
              />
              <Image
                style={styles.giftCloseImg}
                source={{uri: getImageUrl(GIFT_CLOSE_IMG)}}
              />
            </View>
            <Text style={styles.txtCap}>
              Bạn có chắc chắn muốn đổi{' '}
              <Text style={styles.txtHighLight}>1 combo</Text> hay không?
            </Text>
            <View style={styles.buttonContainer}>
              <RedButtonPopup label="Đổi quà" onPress={() => setisOpen(true)}/>
            </View>
          </View>
        )}

        <View style={styles.buttonCloseContainer}>
          <Pressable onPress={onCancle}>
            <Image
              style={styles.imgButtonClose}
              source={{uri: getImageUrl(BUTTON_CLOSE2_IMG)}}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PopupGiftClose;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   ============ close ==================
  smallContainer: {
    width: '50%',
    height: '50%',
  },

  changeContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },

  giftContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightImg: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
    position: 'absolute',
  },

  giftCloseImg: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },

  txtCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
    width: '90%',
    textAlign: 'center',
  },

  txtHighLight: {
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
    fontSize: 14,
  },

  buttonContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // =================== open =======================
  openContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
  },

  smallContainerOpen: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },

  boomImg: {
    width: '120%',
    height: '90%',
    position: 'absolute',
  },

  giftOpenImg: {
    width: '70%',
    height: '90%',
    resizeMode: 'contain',
  },

  openCapContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coinImg: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 30,
  },

  //  ================== button container =================
  buttonCloseContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgButtonClose: {
    width: 25,
    height: 25,
  },
});
