import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#64b6ac',
          tabBarInactiveTintColor: '#2e382e',
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} /*options={{ title: 'Overview' }}*/ />
        <Tab.Screen name='Map' component={MapScreen} /*options={{ title: 'World Map' }}*/ />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
