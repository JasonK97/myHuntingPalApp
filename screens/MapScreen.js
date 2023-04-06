import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});