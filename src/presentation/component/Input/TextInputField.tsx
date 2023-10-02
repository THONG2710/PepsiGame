import {StyleSheet, Text, TextInput, View, Dimensions, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../resource/value/colors';

interface TextInputFieldProps {
  placeholder?: string;
  inputProp?: TextInputProps;
  inputStyle?: StyleProp<ViewStyle>
}

const TextInputField: React.FC<TextInputFieldProps> = props => {
  const {placeholder, inputProp, inputStyle} = props;
  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput {...inputProp} style={styles.inputText} placeholder={placeholder} />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    marginLeft: 20,
    height: 44,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },

  inputText: {
    paddingHorizontal: 12,
    fontFamily: 'UTM Swiss Condensed',
    color: Colors.BLACK,
    width: '100%',
  },
});
