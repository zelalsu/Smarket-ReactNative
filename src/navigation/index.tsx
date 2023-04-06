import React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import SplashScreen from '../screens/SplashScreen';
import BasketScreen from './../screens/BasketScreen/index';
import Home from '../../assets/svg/menu.svg';
import Basket from '../../assets/svg/basket.svg';
import Profile from '../../assets/svg/profile.svg';

import {SvgProps} from 'react-native-svg';
import LoginScreen from '../screens/LoginScreen';
import Main from '../components/Login/Main';
import Telephone from '../components/Login/Login';
import UserCode from '../components/Login';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Telephone} />
        <Stack.Screen name="UserCode" component={UserCode} />

        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const tabBarIcon = ({
  focused,
  route,
}: {
  focused: boolean;
  route: RouteProp<ParamListBase, string>;
}) => {
  let IconName: React.FC<SvgProps> = Home;

  if (route.name === 'Ana Sayfa') {
    IconName = Home;
  }
  if (route.name === 'Sepet') {
    IconName = Basket;
  }
  if (route.name === 'Profil') {
    IconName = Profile;
  }
  return <IconName fill={focused ? '#0052DF' : '#AAADB2'} />;
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: props => tabBarIcon({...props, route}),
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Ana Sayfa"
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Sepet"
        component={BasketScreen}
      />

      <Tab.Screen
        options={{headerShown: false}}
        name="Profil"
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
