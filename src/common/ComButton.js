import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ComButton = ({onPress, title, bgColor, textColor, disable}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor, fontWeight:'bold', fontSize:20}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ComButton;
