import React, {useState} from 'react';

import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {SearchBar } from "./SearchBar"
import {ProductContainer} from './ProductContainer'
import {ProductDescription} from "../ProductDescription/ProductDescription"
import { UseProductContext } from "../../App"

export function HomeScreen() {
  //products
  const products = UseProductContext()
  // products to be displayed
  const [currProducts, newCurrProducts]=useState(products)
  //handle Search Bar
  const handleChange = (text) => {
    const newProductArray = products.filter(product => {
      return (product.name.toLowerCase().includes(text.toLowerCase()))
    });
    newCurrProducts(newProductArray)
  }
  //check which screen
  const [productDescrFlag, setProductDescrFlag] = useState(false)
  //holds product to be displayed in product description when product is clicked
  const [productToBeDisplayed, setProductToBeDisplayed] = useState(currProducts[0]);
  //handle click on product
  const handleClickToDescription = (index=0) => {
    setProductToBeDisplayed(currProducts[index])
    setProductDescrFlag(true)
  }

  const handleGoBack = () => {
    setProductDescrFlag(false)
    newCurrProducts(products)
  }
  return (
    <View style={styles.layout}>
      {!productDescrFlag ? 
      <>
        <SearchBar onChangeText={handleChange}/>
        <ProductContainer products={currProducts} onPress={handleClickToDescription}/>
      </> :
      <ProductDescription onPress={handleGoBack} product={productToBeDisplayed}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
  },
});
