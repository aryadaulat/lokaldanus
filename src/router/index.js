/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Splash,
  Login,
  SignUp,
  SplashAdmin,
  LoginAdmin,
  ProfileAdmin,
  SignOut,
} from '../pages';
import SignUp2 from '../pages/SignUp/SignUp2';
import Keranjang from '../pages/navPage/Keranjang';
import CheckOut from '../pages/navPage/CheckOut';
import Payment from '../pages/navPage/Payment';
import Detail from '../pages/navPage/Detail';
import EditProfil from '../pages/navPage/EditProfil';
import UbahKataSandi from '../pages/navPage/UbahKataSandi';
import CekPesanan from '../pages/ProfileAdmin/CekPesanan';
import TambahProduk from '../pages/ProfileAdmin/TambahProduk';
import HapusProduk from '../pages/ProfileAdmin/HapusProduk';
import EditProduk from '../pages/ProfileAdmin/EditProduk';
import TambahProduk2 from '../pages/ProfileAdmin/TambahProduk2';
import EditProduk2 from '../pages/ProfileAdmin/EditProduk2';
import EditProduk3 from '../pages/ProfileAdmin/EditProduk3';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SplashAdmin"
          component={SplashAdmin}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="LoginAdmin"
          component={LoginAdmin}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="ProfileAdmin"
          component={ProfileAdmin}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Keranjang"
          component={Keranjang}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="EditProfil"
          component={EditProfil}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="UbahKataSandi"
          component={UbahKataSandi}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="CekPesanan"
          component={CekPesanan}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="TambahProduk"
          component={TambahProduk}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="TambahProduk2"
          component={TambahProduk2}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="HapusProduk"
          component={HapusProduk}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="EditProduk"
          component={EditProduk}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="EditProduk2"
          component={EditProduk2}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="EditProduk3"
          component={EditProduk3}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SignOut"
          component={SignOut}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
