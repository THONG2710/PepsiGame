import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  BAG_IMG,
  CUP_IMG,
  HAT_IMG,
  SHIRT_IMG,
  getImageUrl,
} from '../../../resource';
import ItemMyGift from '../../../component/Item/ItemMyGift';
import {useAppSelector} from '../../../shared-state';
import EmtyGift from './EmtyGift';

const MyGiftsScreen = () => {
  const listGift = [
    {
      id: 1,
      name: 'Pepsi Bucket Hat',
      score: 80,
      quantity: 600,
      image: getImageUrl(HAT_IMG),
      isRecived: true,
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
      isRecived: true,
    },
  ];

  const gifts = useAppSelector(state => state.GiftReducer.gift);

  useEffect(() => {
    console.log(gifts);
  }, []);

  return (
    <View style={{marginTop: 20}}>
      {gifts.length == 0 ? (
        <EmtyGift />
      ) : (
        <FlatList
          data={gifts}
          renderItem={({item}) => <ItemMyGift item={item} />}
          keyExtractor={(item: any) => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default MyGiftsScreen;

const styles = StyleSheet.create({});
