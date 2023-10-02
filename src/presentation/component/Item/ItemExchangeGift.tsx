import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, HAT_IMG, MARKER_IMG, SHIRT_IMG, getImageUrl} from '../../resource';
import WhiteButton from '../Button/WhiteButton';

interface ItemExchangeGiftProp {
  item: {id: number, name: string, score: number, quantity: number, image: any}
  onPress?: () => void;
}

const ItemExchangeGift: React.FC<ItemExchangeGiftProp> = (props) => {
  const {item, onPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.smallContainerTop}>
        <Image style={styles.imgProduct} source={{uri: item.image}} />
        <ImageBackground
          style={styles.imgMarker}
          source={{uri: getImageUrl(MARKER_IMG)}}>
          <Text style={styles.txtScore}>{item.score}</Text>
        </ImageBackground>
      </View>
      <View style={styles.smallContainerBottom}>
        <Text style={styles.txtName}>{item.name}</Text>
        <Text style={styles.txtQuantity}>Còn lại: {item.quantity}</Text>
        <WhiteButton buttonStyle={styles.btnStyle} label="Đổi quà" onPress={onPress}/>
      </View>
    </View>
  );
};

export default ItemExchangeGift;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 20,
    height: Dimensions.get('screen').height / 3,
    borderRadius: 12,
    margin: 10,
  },

  smallContainerTop: {
    width: '100%',
    height: '60%',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
  },

  imgProduct: {
    width: '95%',
    height: '95%',
    resizeMode: 'contain',
  },

  imgMarker: {
    width: 60,
    height: 38,
    position: 'absolute',
    top: 7,
    right: -2,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtScore: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginLeft: 10,
    marginTop: 5,
  },

  smallContainerBottom: {
    backgroundColor: Colors.RED,
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 12,
    borderBottomEndRadius: 12,
    alignItems: 'center',
  },

  txtName: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },

  txtQuantity: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
    width: '100%',
    textAlign: 'center',
  },

  btnStyle: {
    width: Dimensions.get('screen').width / 2 - 50,
    height: 40,
    marginTop: 5,
  }
});
