import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Welcome to My Hunting Pal</Text>
      <Text style={styles.text}>Elevate your hunting experience</Text>
      <Image
        style={styles.image}
        source={require('../assets/pictures/unsplash/hunter-brumels-JvfpHgIHmCQ-unsplash.jpg')}
      />
      {/* <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      /> */}
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
  }
});