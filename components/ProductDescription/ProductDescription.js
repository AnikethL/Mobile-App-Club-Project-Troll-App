import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {TopBar} from "./TopBar"
import {Description} from "./Description"

export function ProductDescription(props) {
  return (
    <View style={styles.layout}>
      <TopBar onPress={props.onPress}/>
      <Description product={props.product}/>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  }
});
