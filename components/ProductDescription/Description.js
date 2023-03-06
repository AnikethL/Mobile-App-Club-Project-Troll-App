import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { UseProductContext } from "../../App"
import { UseSetProductContext } from "../../App"

export function Description(props) {
  
  const [qty, setQty] = React.useState(1)
  const products = UseProductContext()
  const setProduct = UseSetProductContext()

  const handleSubtract = () => {
    if (qty > 1){
      setQty(prev => prev - 1)
    }
  }

  const setCart = () => {
    const copy = products
    const index = copy.indexOf(props.product)
    copy[index].numOf += qty
    copy[index].tPrice = "$"+(copy[index].price.slice(1)*copy[index].numOf)
    setProduct(copy)
    console.log(products)
  }

  return (
    <View style={styles.layout}>

      <Text style={styles.name}>{props.product.name}</Text>
      <Image style={styles.productImage} source={{uri: props.product.uri}}></Image>
      
      <View style={styles.row}>
        <Text style={styles.price}>{

          "$" + (parseInt(props.product.price.slice(1)) * qty)

          }</Text>

        <View style={styles.quantity}>
          <TouchableOpacity style={styles.subtract} onPress={handleSubtract}>
            <Text style={{fontWeight: "bold", color: "white"}}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{"Qty: " + qty}</Text>
          
          <TouchableOpacity style={styles.add} onPress={() => setQty(prev => prev + 1)}>
            <Text style={{fontWeight: "bold", color: "white"}}>+</Text>
          </TouchableOpacity>

        </View>

      </View>

      <TouchableOpacity style={styles.addToCart} onPress={setCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 5,
    backgroundColor: "white",
    alignItems: "center",
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
  },
  productImage: {
    marginTop: 20,
    width: 250,
    height: 250,
  },
  row: {
    marginTop: 40,
    flexDirection: "row",
  },
  price: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  quantity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  add: {
    backgroundColor: "blue",
    width: 40,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
  },
  subtract: {
    backgroundColor: "red",
    width: 40,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10%",
  },
  addToCart: {
    marginTop: 40,
    backgroundColor: "purple",
    width: "75%",
    height: 40,
    borderRadius: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  addToCartText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  }
  
});
