import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeBackground from '../../../component/Background/HomeBackground';
import {
  Colors,
  Fonts,
  HEAD_IMG,
  ICON_LOGOUT_IMG,
  getImageUrl,
} from '../../../resource';
import WhiteButton from '../../../component/Button/WhiteButton';
import PlayButton from '../../../component/Button/PlayButton';
import ReactNativeModal from 'react-native-modal';
import {HomeScreenProp} from './type';
import storage from '@react-native-firebase/storage';
import PopupLogout from '../../../component/Popup/PopupLogout';
import {useAppDispatch, useAppSelector} from '../../../shared-state';
import PopupOptionsPlay from '../../../component/Popup/PopupOptionsPlay';
import { isLogged } from '../../../shared-state/redux/Actions/UserActions';

const HomeScreen: React.FC<HomeScreenProp> = props => {
  const {navigation} = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleOption, setIsVisibleOption] = useState(false);
  const dispatch = useAppDispatch();

  const onToggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const onToggleOptionPlay = () => {
    setIsVisibleOption(!isVisibleOption);
  };

  const onLogout = () => {
    navigation.navigate('Authentication');
    dispatch(isLogged(false));
  }

  const onPlayFree = () => {
    navigation.navigate('GameScreen');
  }

  const onPlay = () => {
    navigation.navigate('GameScreen');
  }

  useEffect(() => {
    // console.log(isVisibleModal);
  }, [isVisibleModal]);

  return (
    <HomeBackground>
      <View style={styles.container}>
        <ReactNativeModal isVisible={isVisibleModal}>
          <PopupLogout onPress={onToggleModal} onLogout={onLogout}/>
        </ReactNativeModal>
        <ReactNativeModal isVisible={isVisibleOption}>
          <PopupOptionsPlay onCancle={onToggleOptionPlay} onPlayFree={onPlayFree} onPlay={onPlay}/>
        </ReactNativeModal>
        <Pressable style={styles.btnLogout} onPress={onToggleModal}>
          <Image
            style={styles.imgBtnLogout}
            source={{uri: getImageUrl(ICON_LOGOUT_IMG)}}
          />
        </Pressable>
        {/* header */}
        <View style={styles.header}>
          <Image
            style={styles.header_img}
            source={{uri: getImageUrl(HEAD_IMG)}}
          />
        </View>
        {/* body */}
        <View>
          <Pressable onPress={() => navigation.navigate('InstructionScreen')}>
            <Text style={styles.txtCaption}>Hướng dẫn</Text>
          </Pressable>
        </View>
        <View style={styles.body}>
          <PlayButton onPress={onToggleOptionPlay} />
          <WhiteButton
            label="Quét mã"
            buttonStyle={styles.body_button}
            onPress={() => navigation.navigate('ScanBillScreen')}
          />
          <WhiteButton
            label="Bộ sưu tập"
            buttonStyle={styles.body_button}
            onPress={() => navigation.navigate('CollectionScreen')}
          />
          <WhiteButton
            label="Chi tiết quà tặng"
            buttonStyle={styles.body_button}
            onPress={() => navigation.navigate('PresentScreen')}
          />
        </View>
      </View>
    </HomeBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  btnLogout: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  imgBtnLogout: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 60,
    left: Dimensions.get('screen').width - 50,
  },

  // =================== header =================
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  header_img: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },

  // ============ caption =================
  txtCaption: {
    width: '100%',
    textAlign: 'center',
    fontFamily: Fonts.primaryFonts,
    color: Colors.BEIGE_YELLOW,
    fontSize: 16,
    marginTop: 10,
    marginBottom: -10,
    fontWeight: 'bold',
  },

  // ============== body =================
  body: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    height: '35%',
    justifyContent: 'space-evenly',
  },

  body_button: {
    width: Dimensions.get('screen').width / 2 + 50,
    height: 50,
  },
});
