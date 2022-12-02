import React from "react";
import { Alert } from "react-native";
import {useNavigation} from '@react-navigation/native';

const SignOut = () => {

  const navigation = useNavigation();
  Alert.alert(
    "Peringatan",
    "Apakah Anda yakin akan keluar?",
    [
      {
        text: "Ya",
        onPress: () => navigation.navigate('Login'),
      },
    ],
    
  );
}

export default SignOut