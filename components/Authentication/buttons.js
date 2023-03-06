import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Buttons = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor:bgColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color:fgColor}: {}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '140%',
    height:35,
    padding: 9,
    marginVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 9,
  },
  container_PRIMARY: {
    backgroundColor: '#4da6ff',
  },
  container_TERETIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'orange',
  },
  text_TERETIARY: {
    color: 'gray',
  },
});
