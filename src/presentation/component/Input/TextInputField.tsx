import {StyleSheet, Text, TextInput, View, Dimensions, TextInputProps} from 'react-native';
import React from 'react';
import {Colors} from '../../resource/value/colors';

interface TextInputFieldProps {
  placeholder?: string;
  inputProp?: TextInputProps;
}

const TextInputField: React.FC<TextInputFieldProps> = props => {
  const {placeholder, inputProp} = props;
  return (
    <View style={styles.container}>
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
