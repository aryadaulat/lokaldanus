import {View, Text} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const ComDropList = ({name}) => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <View style={{marginTop: 20}}>
      <Text style={{marginLeft: 30, marginBottom:5, fontWeight: 'bold'}}>{name}</Text>
      
        <SelectList
          style={{}}
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{marginHorizontal:22}}
        />

    </View>
  );
};

export default ComDropList;
