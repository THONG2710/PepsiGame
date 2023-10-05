import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  AQUATER_IMG,
  BALLLEFT_IMG,
  Colors,
  DECORATIVE_MESH_LEFT_IMG,
  Fonts,
  GOLDEN_IMG,
  getImageUrl,
} from '../../resource';
import LinearGradient from 'react-native-linear-gradient';
import RedButtonPopup from '../Button/RedButtonPopup';
import WhiteButtonPopup from '../Button/WhiteButtonPopup';

interface PopupLogoutProp {
  onPress?: () => void;
  onLogout?: () => void;
}

const PopupLogout: React.FC<PopupLogoutProp> = props => {
  const {onPress, onLogout} = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.smallContainer}
        colors={['#FCD54E', '#FEDA95', '#FBD239']}>
        <ImageBackground
          tintColor={'rgba(255,255,255,0.2)'}
          style={{
            width: Dimensions.get('screen').width / 2 + 20,
            height: Dimensions.get('screen').height / 5,
            alignItems: 'center',
          }}
          source={{uri: getImageUrl(GOLDEN_IMG)}}>
          <Image
            style={styles.imgDecord}
            source={{uri: getImageUrl(DECORATIVE_MESH_LEFT_IMG)}}
          />
          <Image
            tintColor={Colors.LIGHT_YELLOW}
            style={styles.imgDecordLeft}
            source={{uri: getImageUrl(AQUATER_IMG)}}
          />
          <Image
            style={[styles.imgDecordTopRight]}
            source={{uri: getImageUrl(BALLLEFT_IMG)}}
          />
          <Text style={styles.txtTitle}>
            Bạn có chắc chắn muốn{' '}
            <Text style={styles.txtTitleHighlight}>đăng xuất</Text> không?
          </Text>
          <View style={styles.buttonContainer}>
            <RedButtonPopup label="Đăng xuất" onPress={onLogout}/>
            <WhiteButtonPopup label="Hủy" onPress={onPress}/>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default PopupLogout;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height + 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallContainer: {
    width: Dimensions.get('screen').width / 2 + 20,
    height: Dimensions.get('screen').height / 5,
    marginBottom: 100,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtTitle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.DARK_BLUE,
    width: Dimensions.get('screen').width / 2 - 30,
    marginLeft: 15,
    textAlign: 'center',
    marginVertical: 10,
  },

  txtTitleHighlight: {
    fontWeight: 'bold',
    fontSize: 13,
  },

  buttonContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 10,
  },

  imgDecord: {
    width: 240,
    height: 180,
    position: 'absolute',
    top: 80,
    right: -110,
  },

  imgDecordLeft: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 0,
  },

  imgDecordTopRight: {
    width: 60,
    height: 50,
    position: 'absolute',
    right: -40,
    top: 0,
  },
});
