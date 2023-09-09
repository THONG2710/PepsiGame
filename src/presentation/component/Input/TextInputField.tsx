import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
import { Colors } from '../../resource/value/colors';

interface TextInputFieldProps {
  placeholder?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = props => {
  const {placeholder} = props;
  return <TextInput style={styles.container} placeholder={placeholder} />;
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    marginLeft: 20,
    height: 44,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: 12,  
    fontFamily: 'UTM Swiss Condensed',
    color: Colors.BLACK,
  },
});
