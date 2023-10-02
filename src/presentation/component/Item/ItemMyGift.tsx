import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, HAT_IMG, MARKER_IMG, getImageUrl} from '../../resource';
import WhiteButton from '../Button/WhiteButton';

interface ItemMyGiftProp {
  item: {id: number; name: string; score: number; quantity: number; image: any, isRecived: boolean};
}

const ItemMyGift: React.FC<ItemMyGiftProp> = prop => {
  const {item} = prop;
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
        <Text style={styles.txtCap}>Trạng thái: <Text style={item.isRecived?styles.txtReceived:styles.txtNotRecieved}>{item.isRecived?'đã nhận':'chưa nhận'}</Text></Text>
      </View>
    </View>
  );
};

export default ItemMyGift;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 20,
    height: Dimensions.get('screen').height / 3 - 20,
    borderRadius: 12,
    margin: 10,
  },

  smallContainerTop: {
    width: '100%',
    height: '70%',
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
    backgroundColor: Colors.BROWN_SOIL,
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 12,
    borderBottomEndRadius: 12,
    alignItems: 'center',
  },

  txtName: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.DARK_BLUE2,
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },

  txtCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.DARK_BLUE2,
  },

  txtReceived: {
    fontWeight: 'bold',
    color: Colors.GREEN,
  },

  txtNotRecieved: {
    fontWeight: 'bold',
    color: Colors.RED,
  },
});
