import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';
import {styles} from './styles'
 
export function CartMap(props){
  const removeItem = (index) => {
    let stuff = [...props.productList];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf-1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    props.setter(stuff);
  }
  
  const removeAll = (index) => {
    let stuff = [...props.productList];
    let stuffThing = stuff[index];
    stuffThing.numOf=0;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    props.setter(stuff);
  }
  
  const addItem = (index) => {
    let stuff = [...props.productList];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf+1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    props.setter(stuff);
  }
 
  return(
    <View>
      <Text style={styles.cartText}>
          Your Cart
      </Text>

      {props.productList.map((product) => {
        return (
          <>
          {
            product.numOf > 0 ? 
          <View style={{flexDirection:"row"}}> 
            <Image source={{uri: product.uri}} style={{width:150, height:140}}/>
            <View >
              <Text style={styles.listTextBold}>{product.name} </Text>
              <Text style={styles.listText}>{product.tPrice}</Text>
              
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={styles.add} onPress={()=>addItem(props.productList.indexOf(product))}>
                  <Text style={styles.buttonText}>
                    +
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.subtract} onPress={()=>removeItem(props.productList.indexOf(product))}>
                  <Text style={styles.buttonText}>
                    -
                  </Text>
                </TouchableOpacity> 
              </View>

              <TouchableOpacity style={styles.deleteButton} onPress={()=>removeAll(props.productList.indexOf(product))}>
                <Text style={styles.buttonText}>
                  Delete
                </Text>
              </TouchableOpacity>

            </View>
            <TextInput value={product.numOf.toString()} style={{borderWidth:1, width:30, height:30}} editable={false}/>
          </View> 
          : <></>}
</>
        );
      })}
    </View>
  );
}
 
 
