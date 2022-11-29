import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Splash, Login, SignUp} from '../pages';
import SignUp2 from '../pages/SignUp/SignUp2';
import Keranjang from '../pages/navPage/Keranjang';
import CheckOut from '../pages/navPage/CheckOut';
import Payment from '../pages/navPage/Payment';
import Detail from '../pages/navPage/Detail';
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
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
