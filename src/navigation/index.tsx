import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './../screens/HomeScreen';
import ProductScreen from './../screens/ProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </NavigationContainer>
  );
};

export default Navigation;
