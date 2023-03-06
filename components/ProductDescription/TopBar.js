import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Test from "./BackArrow.png"

export function TopBar(props) {
  return (
    <LinearGradient colors={['#FF0000', '#CC0033', "#990066", "#660099", "#3300CC", "#0000FF"]} style={styles.layout} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
      <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/507/507257.png"}} style={styles.backImage}></Image>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    height: 50,
    width: 50,
    marginLeft: 15,
    marginTop: 20,
  },
  backImage: {
    objectFit: 'fill',
    height: "100%",
    width: "100%",
  }
});
