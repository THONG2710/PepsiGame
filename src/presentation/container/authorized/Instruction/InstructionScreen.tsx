import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import InstructionBackground from '../../../component/Background/InstructionBackground';
import HeaderComponent from '../../../component/Header/HeaderComponent';
import {
  Colors,
  Fonts,
  STEP1_IMG,
  STEP2_IMG,
  STEP3_IMG,
  getImageUrl,
} from '../../../resource';
import {InstructionScreenProp} from './type';
import {useAppDispatch} from '../../../shared-state';
import {isLogged} from '../../../shared-state/redux/Actions/UserActions';
import ReactNativeModal from 'react-native-modal';
import PopupLogout from '../../../component/Popup/PopupLogout';

const InstructionScreen: React.FC<InstructionScreenProp> = prop => {
  const {navigation} = prop;
  const dispatch = useAppDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const onToggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };
  
  const onHandleLogout = () => {
    dispatch(isLogged(false));
    navigation.navigate('Authentication');
  };

  return (
    <View style={styles.container}>
      <InstructionBackground>
        <ReactNativeModal isVisible={isVisibleModal}>
          <PopupLogout onPress={onToggleModal} onLogout={onHandleLogout} />
        </ReactNativeModal>
        <HeaderComponent
          label="Hướng dẫn"
          onPressBack={() => navigation.goBack()}
          onPressLogout={onToggleModal}
        />
        <ScrollView>
          <View style={styles.stepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: getImageUrl(STEP1_IMG)}}
            />
            <Text style={styles.stepCap}>
              <Text style={styles.stepHighlight}>Bước 1:</Text> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Varius in pulvinar
              feugiat rutrum libero volutpat.{' '}
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: getImageUrl(STEP2_IMG)}}
            />
            <Text style={styles.stepCap}>
              <Text style={styles.stepHighlight}>Bước 2:</Text> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Varius in pulvinar
              feugiat rutrum libero volutpat.
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Image
              style={styles.stepImage}
              source={{uri: getImageUrl(STEP3_IMG)}}
            />
            <Text style={styles.stepCap}>
              <Text style={styles.stepHighlight}>Bước 3:</Text> Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Varius in pulvinar
              feugiat rutrum libero volutpat.
            </Text>
          </View>
        </ScrollView>
      </InstructionBackground>
    </View>
  );
};

export default InstructionScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  stepContainer: {
    width: Dimensions.get('screen').width - 60,
    marginLeft: 30,
    height: Dimensions.get('screen').height / 2 + 70,
    alignItems: 'center',
    marginTop: 15,
  },

  stepImage: {
    width: '100%',
    height: '75%',
    borderRadius: 12,
  },

  stepCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    width: '85%',
    textAlign: 'center',
    marginTop: 5,
  },

  stepHighlight: {
    fontWeight: 'bold',
  },
});
