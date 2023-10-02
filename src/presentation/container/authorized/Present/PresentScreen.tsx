import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import InstructionBackground from '../../../component/Background/InstructionBackground';
import HeaderComponent from '../../../component/Header/HeaderComponent';
import {Colors, Fonts} from '../../../resource';
import MyGiftsScreen from './MyGiftsScreen';
import ExchangeGiftsScreen from './ExchangeGiftsScreen';
import EmtyGift from './EmtyGift';

const PresentScreen = () => {
  const [isMyGift, setIsMyGift] = useState(false);

  return (
    <View style={styles.container}>
      <InstructionBackground>
        <HeaderComponent label="Chi tiết quà tặng" />
        {/* Tab */}
        <View style={styles.tabContainer}>
          <Pressable
            style={
              !isMyGift ? styles.tabButtonLeft : styles.tabButtonLeftActive
            }
            onPress={() => setIsMyGift(!isMyGift)}>
            <Text style={!isMyGift ? styles.tabtxtActive : styles.tabtxt}>
              Đổi quà
            </Text>
          </Pressable>
          <Pressable
            style={
              isMyGift ? styles.tabButtonRight : styles.tabButtonRightActive
            }
            onPress={() => setIsMyGift(!isMyGift)}>
            <Text style={isMyGift ? styles.tabtxtActive : styles.tabtxt}>
              Quà của tôi
            </Text>
          </Pressable>
        </View>
        {/* body */}
        <View style={styles.body}>
          {isMyGift ? <EmtyGift /> : <ExchangeGiftsScreen />}
        </View>
      </InstructionBackground>
    </View>
  );
};

export default PresentScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  //  ============= tab  ================
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 15,
  },

  tabButtonLeft: {
    width: Dimensions.get('screen').width / 3,
    height: 40,
    backgroundColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  tabButtonLeftActive: {
    width: Dimensions.get('screen').width / 3,
    height: 40,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  tabtxtActive: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  tabtxt: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.RED,
  },

  tabButtonRight: {
    width: Dimensions.get('screen').width / 3,
    height: 40,
    backgroundColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
  },

  tabButtonRightActive: {
    width: Dimensions.get('screen').width / 3,
    height: 40,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
  },

  //   ================= body =================
  body: {
    width: '100%',
    flex: 1,
  },
});
