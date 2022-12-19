import { View, Text , StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Router from './router'

const MainContainer = () => {
    return(
    <SafeAreaView style={styles.root}>
    <Router />
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
root: {
  flex: 1,
  backgroundColor: '#F9FBFC',
},
});
export default MainContainer;