import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  CURTAIN_BOTTOM_LEFT_SMALL_IMG,
  CURTAIN_BOTTOM_RIGHT_SMALL_IMG,
  GOLDEN_IMG,
  RED_NET_IMG,
  getImageUrl,
} from '../../resource/assets/images';
import {Colors} from '../../resource/value/colors';
import DisableButton from './DisableButton';

interface RedButtonProps {
  onPress?: () => void;
  isAnable?: boolean;
  label?: string;
}

const RedButton: React.FC<RedButtonProps> = props => {
  const {onPress, isAnable = true, label} = props;

  return isAnable ? (
    <Pressable style={[styles.container]} onPress={onPress}>
      <ImageBackground
        style={styles.imageBackGround}
        source={{uri: getImageUrl(GOLDEN_IMG)}}>
        <View style={styles.smallContainer}>
          <ImageBackground
            style={[styles.imageBackGround, {zIndex: 1}]}
            source={{uri: getImageUrl(RED_NET_IMG)}}>
            <Image
              style={styles.curtain_left}
              source={{uri: getImageUrl(CURTAIN_BOTTOM_LEFT_SMALL_IMG)}}
            />
            <Image
              style={styles.curtain_right}
              source={{uri: getImageUrl(CURTAIN_BOTTOM_RIGHT_SMALL_IMG)}}
            />
            <Text style={styles.txtButton}>{label}</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </Pressable>
  ) : (
    <DisableButton />
  );
};

export default RedButton;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2,
    height: 44,
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageBackGround: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 1,
  },

  smallContainer: {
    width: '97%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: Colors.RED,
  },

  curtain_left: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    left: -20,
  },

  curtain_right: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    right: -20,
  },

  txtButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
