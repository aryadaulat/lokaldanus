/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const ComDropList = ({name, values, defaultValue}) => {

  const data = [
    {key: '1', value: 'Makanan'},
    {key: '2', value: 'Pakaian'},
    {key: '3', value: 'Buku'},
    {key: '4', value: 'Minuman'},
    {key: '5', value: 'Mercendies'},
    {key: '6', value: 'Elektronik'},
    {key: '7', value: 'Other'},
  ];
  return (
    <View style={{marginTop: 20}}>
      <Text style={{marginLeft: 30, marginBottom: 5, fontWeight: 'bold'}}>
        {name}
      </Text>

      <SelectList
        style={{}}
        setSelected={values}
        data={data}
        save="value"
        boxStyles={{marginHorizontal: 22}}
        defaultOption={{value: defaultValue}}
      />
    </View>
  );
};

export default ComDropList;
