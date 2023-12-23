import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabnavigation from './navigations/Tabnavigation';
import Home from './Components/Home';

export default function App() {
  

  
  return (
    <View style={styles.container}>
      <NavigationContainer>
      {/* < Home /> */}
      < Tabnavigation />
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
});
