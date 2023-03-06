import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToucahbleOpacity,
} from 'react-native';

export const AuthInputs = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '140%',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 6,
    marginVertical: 6,
    paddingVertical: 9,
  },
  input: {
    paddingVertical:3,
    color:'gray',
    
  },
});
