import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';
import {CartMap} from './CartMap';
import {SubtotalMap} from './SubtotalMap';
import {styles} from './styles'
import {UseProductContext} from "../../App"
import {UseSetProductContext} from "../../App"
import { useIsFocused } from '@react-navigation/native';
 
export function Cart(props) {
  const products = UseProductContext()
  const newProducts = UseSetProductContext()
  const isFocused = useIsFocused()

  const clear = () => {
    let stuff = [...products];
    for(let i=0; i<stuff.length; i++){
      let stuffThing = stuff[i];
      stuffThing.numOf=0;
      stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
      stuff[i]=stuffThing;
      console.log(stuff[i])
      newProducts(stuff);
      stuff = [...products];
    }
  }

  const createTwoButtonAlert = () =>{
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to empty your cart",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => clear()}
      ]
      
    );
  }

  const createTwoButtonAlertMk2 = () =>{
    Alert.alert(
      "Paypal",
      "Yeah this aint real buddy lbozo ratio",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => clear()}
      ]
      
    );
  }
  return (
     <View style = {styles.layout, styles.textContainer}>
      <ScrollView nestedScrollEnabled={true}>
        
        <CartMap productList = {products} setter = {newProducts}/>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>createTwoButtonAlert()}>
          <Text style={styles.buttonText}>
            Clear Cart
          </Text>
        </TouchableOpacity> 
        
        <SubtotalMap productList = {products} setter = {newProducts}/>    

        <TouchableOpacity style={styles.buttonContainer} onPress={()=>createTwoButtonAlertMk2()}>
          <Text style={styles.buttonText}>
            Buy
          </Text>
        </TouchableOpacity> 
 
      </ScrollView>
    </View>
  )
}
 
 
//<Image source={{uri: "https://m.media-amazon.com/images/I/51IwaYzGLCL._AC_SX679_.jpg"}}/>
 
// Extra junk we got rid of and will probably break the code lol 
//        1.
//        <FlatList
//          // pass in a props object like data and put it here, then render it
//          data={props.cart}
//          renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
//        />
//        2.
//          <FlatList
//            // pass in a props object like data and put it here, then render it
//            data={{key:'ball         $$'}}
//            renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
//          />
//
 
//                  <Text style={styles.listText}>${(product.price.slice(1))*(num)}</Text>
 
 
 
 
 
 
 

