import {Alert, Dimensions, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GameBackground from '../../../component/Background/GameBackground';
import {
  ALITLE_NET_IMG,
  ARROW_UP_IMG,
  Colors,
  Fonts,
  HEAD_IMG,
  ICON_BACK,
  ICON_LOGOUT_IMG,
  getImageUrl,
} from '../../../resource';
import Draggable from 'react-native-draggable';

const GameScreen = () => {
  return (
    <GameBackground>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Pressable>
            <Image
              style={styles.header_iconBack}
              source={{uri: getImageUrl(ICON_BACK)}}
            />
          </Pressable>
          <Text style={styles.header_title}>VUỐT LÊN ĐỂ CHƠI</Text>
          <Pressable>
            <Image
              style={styles.header_iconLogout}
              source={{uri: getImageUrl(ICON_LOGOUT_IMG)}}
            />
          </Pressable>
        </View>
        {/* cap */}
        <Text style={styles.cap}>
          Bạn còn <Text style={styles.cap_highlight}>3</Text> lượt chơi miễn phí
        </Text>
        {/* play */}
        <View style={styles.playFrame}>
          <Image style={styles.playFrame_img} source={{uri: getImageUrl(ARROW_UP_IMG)}}/>
          <Draggable
            x={Dimensions.get('screen').width/4}
            y={Dimensions.get('screen').height-250}
            minX={Dimensions.get('screen').width/4}
            maxX={Dimensions.get('screen').width/4}
            minY={Dimensions.get('screen').height-420}
            children={<Image style={{width: Dimensions.get('screen').width/2, height:  Dimensions.get('screen').width/2, resizeMode: 'contain'}} source={{uri: getImageUrl(HEAD_IMG)}}/>}
            shouldReverse
            onDragRelease={() => Alert.alert('ok')}
          />
        </View>
      </View>
    </GameBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  // ============== header =============
  header: {
    width: '100%',
    height: 50,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  header_iconBack: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  header_iconLogout: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  header_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  // ========= cap =========
  cap: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 14,
    color: Colors.WHITE,
    width: '100%',
    textAlign: 'center',
    marginTop: -10,
  },

  cap_highlight: {
    fontWeight: 'bold',
    color: Colors.BEIGE_YELLOW,
    fontSize: 20,
  },

  // ============= play =============
  playFrame: {
    width: '100%',
    alignItems: 'center',
  },

  playFrame_img: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginTop: Dimensions.get('screen').height/2 + 50,
  }
});
