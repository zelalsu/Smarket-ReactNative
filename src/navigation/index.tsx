import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import SplashScreen from '../screens/SplashScreen';
import BasketScreen from './../screens/BasketScreen/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="BasketScreen"
        component={BasketScreen}
      />

      <Tab.Screen
        options={{headerShown: false}}
        name="Arama"
        component={HomeNavigator}
      />
    </Tab.Navigator>
  );
}
function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductScreen"
        options={{gestureDirection: 'horizontal'}}
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
