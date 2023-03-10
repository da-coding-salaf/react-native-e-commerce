import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box,extendTheme  } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
import Login from './Files/Login';
import Register from './Files/Register';
import FirstPage from './Files/FirstPage';
import HomePage from './Files/HomePage';
import Colors from './Files/color';
import SingleProductPage from "./Files/SingleProductPage"
import SwiptItems from "./Files/SwiptItems"
import Cart from "./Files/Cart.js"
import ProfilePage from "./Files/ProfilePage.js"
import Delivery from "./Files/Delivery.js"
import PaymentMethod from "./Files/PaymentMethod.js"



export default function App() {
   return (
    <NativeBaseProvider >
      <StatusBar backgroundColor={Colors.main} />
   <PaymentMethod />
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
