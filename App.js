import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Cart } from "./components/Cart/Cart";
import {SignIn} from './components/Authentication/SignIn'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const PRODUCTS = [{ uri: "https://1001freedownloads.s3.amazonaws.com/vector/thumb/142184/dniezby_Generic_Book.png", name: "Cookbook", price: "$7", numOf: 0, tPrice: "$7"},
    { uri: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkDPkgzzdc-mVSyi_n0tK-ujhyUu7RL1rKFfcISHz8-zwv5jm5qf7ZSdhoUMQmsUPfjR8Qa6KDHLXCVAA__BQW3kAZ1wEOzIPGwH2L92Ys25eK1M8TmqiX&usqp=CAc", name: "Harry Potter Series", price: "$40", numOf: 0, tPrice: "$40"},
    { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iKLa5u_ip0gaKnD9ivM5O4zzqXnqUoRO4A&usqp=CAU", name: "Djinin Patrol", price: "$10", numOf: 0, tPrice: "$7"}
  ]


export const ProductContext = React.createContext();
export const SetProductContext = React.createContext();

export const UseProductContext = () => React.useContext(ProductContext)
export const UseSetProductContext = () => React.useContext(SetProductContext)

const ProductProvider = ( {value, children} ) => {
  const [product, setProduct] = React.useState(value)
  return (
    <ProductContext.Provider value={product}>
      <SetProductContext.Provider value={setProduct}>
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  )
}


function Home() {
  return (
    <ProductProvider value = {PRODUCTS}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </ProductProvider>
  )
}
export default function App() {
  return (
    <View style={styles.layout}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn}/>
          
          <Stack.Screen name="Main" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1, 
  }
});
