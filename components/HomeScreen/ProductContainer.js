import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Product } from "./Product"

export function ProductContainer(props) {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to E-Bookstore!</Text>
        </View>
          {props.products.map(({uri, name, price }, index) => (
          <Product src={uri} productName={name} price={price} onPress = {props.onPress} i={index}/>
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 5,
  },
  welcomeText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",

  },
});


