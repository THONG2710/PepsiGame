import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AQUATER_IMG, BUTTON_CLOSE2_IMG, Colors, Fonts, getImageUrl} from '../../resource';

interface PopupSuccessfullyProp {
  onCancle?: () => void;
}

const PopupSuccessfully: React.FC<PopupSuccessfullyProp> = (props) => {
  const { onCancle } = props;
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Image style={styles.imgDecord} source={{uri: getImageUrl(AQUATER_IMG)}}/>
        <Image style={styles.imgDecord2} source={{uri: getImageUrl(AQUATER_IMG)}}/>
        <Text style={styles.txtTitle}>THÀNH CÔNG</Text>
        <Text style={styles.txtCap}>Chúc mừng bạn nhận được quà từ</Text>
        <Text style={styles.txtName}>Pepsi Tết</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onCancle}>
          <Image
            style={styles.imgButton}
            source={{uri: getImageUrl(BUTTON_CLOSE2_IMG)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopupSuccessfully;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: '70%',
    height: '15%',
    backgroundColor: Colors.LIGHT_GREEN,
    borderRadius: 24,
    alignItems: 'center',
  },

  txtTitle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
    marginVertical: 10,
    marginTop: 20,
  },

  txtCap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
  },

  txtName: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },

  buttonContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgButton: {
    width: 25,
    height: 25,
  },

  imgDecord: {
    width: '25%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  imgDecord2: {
    width: '25%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: [{rotateY: '180deg'}]
  }
});
