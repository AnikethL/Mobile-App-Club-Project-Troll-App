import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export function Product(props) {
  return (
    <TouchableOpacity style={styles.product} onPress={() => props.onPress(props.i)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.src}} style={styles.image}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productNameText}>{props.productName}</Text>
        <Text style={{fontSize: 20}}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  product: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightgrey",
    borderRadius: "10%",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    objectFit: "fill",
    width: 140,
    height: 140,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  productNameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});


