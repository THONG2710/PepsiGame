import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BAG_IMG,
  CIRCLE_DECORD_IMG,
  CUP_IMG,
  Colors,
  Fonts,
  HAT_IMG,
  RED_CIRCLE_IMG,
  SHIRT_IMG,
  getImageUrl,
} from '../../../resource';
import ItemExchangeGift from '../../../component/Item/ItemExchangeGift';
import ReactNativeModal from 'react-native-modal';
import PopupRecivedGift from '../../../component/Popup/PopupRecivedGift';

const ExchangeGiftsScreen = () => {
  const listGift = [
    {
      id: 1,
      name: 'Pepsi Bucket Hat',
      score: 80,
      quantity: 600,
      image: getImageUrl(HAT_IMG),
      isRecived: false,
    },
    {
      id: 2,
      name: 'Pepsi Jacket',
      score: 300,
      quantity: 10,
      image: getImageUrl(SHIRT_IMG),
      isRecived: false,
    },
    {
      id: 3,
      name: 'Pepsi Tote Bag',
      score: 80,
      quantity: 800,
      image: getImageUrl(BAG_IMG),
      isRecived: false,
    },
    {
      id: 4,
      name: 'Pepsi Tumbler',
      score: 80,
      quantity: 500,
      image: getImageUrl(CUP_IMG),
      isRecived: false,
    },
  ];

  const [isShowPopup, setIsShowPopup] = useState(true);
  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isShowPopup}>
        <PopupRecivedGift onPress={() => setIsShowPopup(!isShowPopup)} />
      </ReactNativeModal>
      {/* current point */}
      <View style={styles.CurrentPointContainer}>
        <View style={styles.pointContainer}>
          <Image
            style={styles.imgBackground}
            source={{uri: getImageUrl(RED_CIRCLE_IMG)}}
          />
          <Image
            style={styles.imgBackground}
            source={{uri: getImageUrl(CIRCLE_DECORD_IMG)}}
          />
          <Text style={styles.potinText}>700</Text>
        </View>
        <Text style={styles.pointCap}>Số coins hiện tại của bạn</Text>
      </View>
      {/* list gift */}
      <View style={styles.giftContainer}>
        <FlatList
          data={listGift}
          renderItem={({item}) => (
            <ItemExchangeGift
              onPress={() => setIsShowPopup(!isShowPopup)}
              item={item}
            />
          )}
          numColumns={2}
          keyExtractor={(item: any) => item.id}
          style={styles.styleFlastList}
        />
      </View>
    </View>
  );
};

export default ExchangeGiftsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // =====================  current point =====================
  CurrentPointContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    marginTop: 15,
  },

  pointContainer: {
    width: '30%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },

  potinText: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  pointCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginTop: 10,
  },

  // =============== list gift ==================
  giftContainer: {
    width: '100%',
    flex: 1,
  },

  styleFlastList: {
    width: Dimensions.get('screen').width,
  },
});
