import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';

export const styles = StyleSheet.create({
  layout:{
    flex:5,
  },
  cartText: {
    justifyContent: 'flex-start',
    marginTop: 80,
    fontWeight: 'bold',
    fontSize: 50,
    textAlign:'center',
    color: "black"
  },
  medium:{
    justifyContent: 'flex-start',
    marginTop: 15,
    fontSize: 30,
    textAlign:'center',
    color: "black",
    fontWeight: "bold"
  },
  listTextBold:{
    justifyContent: 'flex-start',
    marginTop: 25,
    alignSelf: "center",
    fontSize: 20,
    textAlign:'left',
    color: "black",
    fontWeight:"bold"
  },
  listText:{
    justifyContent: 'flex-start',
    marginTop: 25,
    alignSelf: "center",
    fontSize: 20,
    textAlign:'left',
    color: "black"
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    horizontalMargin: 20,
    height: 30, 
    backgroundColor: 'purple',
    alignItems: 'center',
    button: {position: 'absolute', bottom:0},    
    borderRadius: "10%"
  },
  deleteButton:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginTop: 5,
    horizontalMargin: 20,
    height: 30, 
    width: 80,
    backgroundColor: 'purple',
    alignItems: 'center',
    button: {position: 'absolute', bottom:0},    
    borderRadius: "10%"
  },
  buttonText:{
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
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
 
});
