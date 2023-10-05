import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CollectionBackground from '../../../component/Background/CollectionBackground';
import HeaderComponent from '../../../component/Header/HeaderComponent';
import {
  BTNADD_IMG,
  CIRCLE_DECORD_IMG,
  Colors,
  Fonts,
  PEPSIAN_IMG,
  PEPSI_LOC_IMG,
  PEPSI_PHUC_IMG,
  RED_CIRCLE_IMG,
  getImageUrl,
} from '../../../resource';
import InputSpinner from 'react-native-input-spinner';
import RedButton from '../../../component/Button/RedButton';
import {CollectionScreenProp} from './type';
import {useAppDispatch} from '../../../shared-state';
import {isLogged} from '../../../shared-state/redux/Actions/UserActions';
import ReactNativeModal from 'react-native-modal';
import PopupLogout from '../../../component/Popup/PopupLogout';
import PopupGiftClose from '../../../component/Popup/PopupGiftClose';

const CollectionScreen: React.FC<CollectionScreenProp> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isShowGiftClose, setisShowGiftClose] = useState(false);

  const onToggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const onHandleLogout = () => {
    dispatch(isLogged(false));
    navigation.navigate('Authentication');
  };

  const onToggleGiftClose = () => {
    setisShowGiftClose(!isShowGiftClose);
  }

  
  return (
    <View style={styles.container}>
      <CollectionBackground>
        <ReactNativeModal isVisible={isVisibleModal}>
          <PopupLogout onPress={onToggleModal} onLogout={onHandleLogout} />
        </ReactNativeModal>
        <ReactNativeModal isVisible={isShowGiftClose}>
          <PopupGiftClose onCancle={onToggleGiftClose} isOpen={false}/>
        </ReactNativeModal>
        {/* header */}
        <HeaderComponent
          label="Bộ sưu tập"
          onPressBack={() => navigation.goBack()}
          onPressLogout={onToggleModal}
        />
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
        {/* body */}
        <View style={styles.body}>
          <View style={styles.body_smallContainer}>
            <View style={styles.body_item}>
              <Image
                style={styles.body_imgPepsi}
                source={{uri: getImageUrl(PEPSIAN_IMG)}}
              />
              <Text style={styles.body_quantity}>4</Text>
            </View>
            <View style={styles.body_item}>
              <Image
                style={styles.body_imgPepsi}
                source={{uri: getImageUrl(PEPSI_LOC_IMG)}}
              />
              <Text style={styles.body_quantity}>5</Text>
            </View>
            <View style={styles.body_item}>
              <Image
                style={styles.body_imgPepsi}
                source={{uri: getImageUrl(PEPSI_PHUC_IMG)}}
              />
              <Text style={styles.body_quantity}>2</Text>
            </View>
          </View>
          <Text style={styles.body_caption}>
            Đổi ngay bộ sưu tập{' '}
            <Text style={styles.body_txtHighlight}>AN - LỘC - PHÚC</Text> để có
            cơ hội nhận ngay{' '}
            <Text style={styles.body_txtHighlight}>300 coins</Text> hoặc một{' '}
            <Text style={styles.body_txtHighlight}>phần quà may mắn</Text>
          </Text>
          <InputSpinner
            step={1}
            color={Colors.RED}
            colorMin={Colors.DARK_BLUE2}
            editable={false}
            style={styles.body_styleInput}
            buttonStyle={{width: 30, height: 30}}
            buttonTextStyle={{
              height: 40,
              width: 35,
              position: 'absolute',
              top: -15,
            }}
            textColor={Colors.WHITE}
            fontSize={14}
            fontFamily={Fonts.primaryFonts}
          />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <RedButton label="Đổi ngay" onPress={onToggleGiftClose}/>
        </View>
      </CollectionBackground>
    </View>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // =====================  current point =====================
  CurrentPointContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    marginTop: 15,
  },

  pointContainer: {
    width: '30%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginTop: 10,
  },

  //   ============= body =============
  body: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
  },

  body_smallContainer: {
    width: '90%',
    height: '65%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  body_item: {
    width: '30%',
    height: '90%',
    alignItems: 'center',
  },

  body_imgPepsi: {
    width: '70%',
    height: '90%',
    resizeMode: 'contain',
  },

  body_quantity: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginTop: 7,
  },

  body_caption: {
    width: '80%',
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    marginTop: 5,
    textAlign: 'center',
  },

  body_txtHighlight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
  },

  body_styleInput: {
    width: '30%',
    marginTop: 10,
  },

  inputStyle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },

  // ====================== footer =================
  footer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
