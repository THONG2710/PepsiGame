import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SecondaryScreenBackground from '../../../component/Background/ScanBillBackground';
import HeaderComponent from '../../../component/Header/HeaderComponent';
import {BILL_IMG, getImageUrl} from '../../../resource';
import RedButton from '../../../component/Button/RedButton';
import {ScanBillScreenProp} from './type';
import ReactNativeModal from 'react-native-modal';
import PopupLogout from '../../../component/Popup/PopupLogout';
import {useAppDispatch} from '../../../shared-state';
import {isLogged} from '../../../shared-state/redux/Actions/UserActions';
import PopupWrongQRCode from '../../../component/Popup/PopupWrongQRCode';
import PopupScanSuccessfully from '../../../component/Popup/PopupScanSuccessfully';

const ScanBillScreen: React.FC<ScanBillScreenProp> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleWrongScan, setisVisibleWrongScan] = useState(false);
  const [isVisibleScanAgain, setisVisibleScanAgain] = useState(false);

  const onToggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const onHandleLogout = () => {
    dispatch(isLogged(false));
    navigation.navigate('Authentication');
  };

  const onHandleScan = () => {
    setisVisibleWrongScan(!isVisibleWrongScan);
  };

  const onHandleScanAgain = () => {
    setisVisibleWrongScan(!isVisibleWrongScan);
    setisVisibleScanAgain(!isVisibleScanAgain);
  };

  const onCanclePopup = () => {
    setIsVisibleModal(false);
    setisVisibleScanAgain(false);
    setisVisibleWrongScan(false);
  };

  return (
    <View style={styles.container}>
      <SecondaryScreenBackground>
        {/* Popup */}
        <ReactNativeModal isVisible={isVisibleModal}>
          <PopupLogout onPress={onToggleModal} onLogout={onHandleLogout} />
        </ReactNativeModal>

        <ReactNativeModal isVisible={isVisibleWrongScan}>
          <PopupWrongQRCode onPress={onHandleScanAgain} />
        </ReactNativeModal>

        <ReactNativeModal isVisible={isVisibleScanAgain}>
          <PopupScanSuccessfully
            onCancle={() => setisVisibleScanAgain(!isVisibleScanAgain)}
            onPlayNow={() => navigation.navigate('GameScreen')}
            onCountinute={onCanclePopup}
          />
        </ReactNativeModal>
        <HeaderComponent
          label="Quét mã"
          onPressBack={() => navigation.goBack()}
          onPressLogout={onToggleModal}
        />
        <View style={styles.imgContainer}>
          <Image style={styles.imgBill} source={{uri: getImageUrl(BILL_IMG)}} />
        </View>
        <View style={styles.buttonContainer}>
          <RedButton label="Quét mã" onPress={onHandleScan} />
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
  },
});
