import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BUTTON_CLOSE_IMG, Colors, Fonts, getImageUrl} from '../../resource';
import PlayButtonPopup from '../Button/PlayButtonPopup';

export type PopupOptionsPlayProp = {
  onCancle?: () => void;
  onPlayFree?: () => void;
  onPlay?: () => void;
}

const PopupOptionsPlay: React.FC<PopupOptionsPlayProp> = (props) => {
  const {onCancle, onPlay, onPlayFree} = props;
  return (
    <LinearGradient
      style={styles.container}
      colors={['#FCD54E', '#FEDA95', '#FBD239']}>
      <Pressable onPress={onCancle}>
        <Image
          style={styles.imgButtonClose}
          source={{uri: getImageUrl(BUTTON_CLOSE_IMG)}}
        />
      </Pressable>
      <View style={styles.smallContainer}>
        <Text style={styles.txtTitle}>BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?</Text>
        <View style={styles.playButtonContainer}>
          <PlayButtonPopup label="Lượt chơi miễn phí" onPress={onPlayFree}/>
          <PlayButtonPopup label="Lượt chơi quy đổi" onPress={onPlay}/>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PopupOptionsPlay;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    borderRadius: 14,
    overflow: 'hidden',
  },

  imgButtonClose: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 10,
    right: 10,
  },

  smallContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  txtTitle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DARK_RED2,
    textAlign: 'center',
    width: '70%',
  },

  playButtonContainer: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
