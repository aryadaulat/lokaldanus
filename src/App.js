import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './router';

const App = () => {
  return (
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

export default App;
