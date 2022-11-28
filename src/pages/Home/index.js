import React, { useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Beranda from '../navPage/Beranda';
import History from '../navPage/History';
import Shop from '../navPage/Shop';
import Whislist from '../navPage/Whislist';
import Profile from '../navPage/Profile';

const Home = () => {
  const [SelectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {SelectedTab == 0 ? (
        <Beranda />
      ) : SelectedTab == 1 ? (
        <History />
      ) : SelectedTab == 2 ? (
        <Shop />
      ) : SelectedTab == 3 ? (
        <Whislist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          elevation: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{setSelectedTab(0);}}>
          <Image
            source={require('../../images/home.png')}
            style={{width: 24, height: 24,tintColor:SelectedTab==0?'#000': "#8e8e8e"}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{setSelectedTab(1)}}>
          <Image
            source={require('../../images/file.png')}
            style={{width: 24, height: 24,tintColor:SelectedTab==1?'#000':"#8e8e8e"}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            marginHorizontal: 20,
            backgroundColor: SelectedTab ==2? '#f3c10d':"#000",
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
          }} onPress={()=>{setSelectedTab(2)}}>
          <Image
            source={require('../../images/shopping-bag.png')}
            style={{width: 24, height: 24, tintColor: '#ffff'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{setSelectedTab(3)}}>
          <Image
            source={require('../../images/love.png')}
            style={{width: 30, height: 30, tintColor:SelectedTab==3?'#000': "#8e8e8e"}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={()=>{setSelectedTab(4)}}>
          <Image
            source={require('../../images/user.png')}
            style={{width: 24, height: 24, tintColor:SelectedTab==4?'#000':'#8e8e8e'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
