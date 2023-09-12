import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import RulesBackground from '../../../component/Background/RulesBackground';
import {
  Colors,
  Fonts,
  ICON_BACK,
  getImageUrl,
} from '../../../resource';
import { ProgramRulesProp } from './type';

const ProgramRules:React.FC<ProgramRulesProp> = (props) => {
  const {navigation} = props;

  const GoBack = () => {
    navigation.goBack();
  }

  return (
    <RulesBackground>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Pressable style={styles.header_btn} onPress={GoBack}>
            <Image
              style={styles.header_iconBack}
              source={{uri: getImageUrl(ICON_BACK)}}
            />
          </Pressable>
          <Text style={styles.header_title}>Thể lệ chương trình</Text>
        </View>
        {/* body */}
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <Text style={styles.body_txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            tortor luctus auctor quam. Aliquam eget augue fermentum eu, at
            etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien
            neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi,
            eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A
            maecenas nec enim consectetur non, donec vitae. Gravida vulputate
            quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio
            ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare
            fermentum non laoreet nec turpis sit turpis. {'\n\n'}Tellus ultrices vitae
            tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel.
            Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui
            venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien
            eu viverra amet, facilisi. Pellentesque enim id quis porta tortor
            congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque
            enim id quis porta tortor congue. {'\n\n'}Nunc, elementum leo maecenas neque
            ultrices.Pellentesque enim id quis porta tortor congue. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Scelerisque tortor
            luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id
            porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit
            mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis
            et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec
            enim consectetur non, donec vitae. Gravida vulputate quam nibh
            gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus
            elementum risus aliquam nunc in. Sapien nunc ornare fermentum non
            laoreet nec turpis sit turpis.{'\n\n'}Tellus ultrices vitae tincidunt eget
            ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla
            sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis
            habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra
            amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc,
            elementum leo maecenas neque ultrices.Pellentesque enim id quis
            porta tortor congue. Nunc, elementum leo maecenas neque ultrices.{'\n\n'}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            tortor luctus auctor quam. Aliquam eget augue fermentum eu, at
            etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien
            neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi,
            eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A
            maecenas nec enim consectetur non, donec vitae. Gravida vulputate
            quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio
            ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare
            fermentum non laoreet nec turpis sit turpis.{'\n\n'}Tellus ultrices vitae
            tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel.
            Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui
            venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien
            eu viverra amet, facilisi. Pellentesque enim id quis porta tortor
            congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque
            enim id quis porta tortor congue. Nunc, elementum leo maecenas neque
            ultrices.Pellentesque enim id quis porta tortor congue.{'\n\n'}Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Scelerisque tortor
            luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id
            porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit
            mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis
            et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec
            enim consectetur non, donec vitae. Gravida vulputate quam nibh
            gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus
            elementum risus aliquam nunc in. Sapien nunc ornare fermentum non
            laoreet nec turpis sit turpis.
          </Text>
        </ScrollView>
      </View>
    </RulesBackground>
  );
};

export default ProgramRules;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  // ======== header =================================
  header: {
    width: '100%',
    height: 50,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  header_iconBack: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  header_btn: {
    width: 35,
    position: 'absolute',
    left: 30,
  },

  header_title: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },

  //   ================= body =================================
  body: {
    width: Dimensions.get('screen').width - 60,
    marginLeft: 30,
    marginBottom: 150,
  },

  body_txt: {
    fontFamily: Fonts.primaryFonts,
    fontSize: 12,
    color: Colors.WHITE,
    textAlign: 'justify',
  }
});
