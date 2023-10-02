import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Colors,
  Fonts,
  ICON_BACK,
  ICON_LOGOUT_IMG,
  getImageUrl,
} from '../../resource';

interface HeaderComponentProp {
  label?: string;
  onPressBack?: () => void;
  onPressLogout?: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProp> = props => {
  const {label, onPressBack, onPressLogout} = props;

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressBack}>
        <Image style={styles.imgBack} source={{uri: getImageUrl(ICON_BACK)}} />
      </Pressable>
      <Text style={styles.txtTitle}>{label}</Text>
      <Pressable onPress={onPressLogout}>
        <Image
          style={styles.imgLogout}
          source={{uri: getImageUrl(ICON_LOGOUT_IMG)}}
        />
      </Pressable>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    marginTop: 50,
  },

  imgBack: {
    width: 25,
    height: 40,
  },

  imgLogout: {
    width: 32,
    height: 32,
  },

  txtTitle: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
});
