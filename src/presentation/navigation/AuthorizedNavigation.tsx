import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizedStackSParamlist} from '../storyboard/AuthorizedStackStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../container/authorized/Home/HomeScreen';
import GameScreen from '../container/authorized/Game/GameScreen';
import HappyScreen from '../container/authorized/Happy/HappyScreen';

const Stack = createNativeStackNavigator<AuthorizedStackSParamlist>();

const AuthorizedNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="HappyScreen" component={HappyScreen} />
    </Stack.Navigator>
  );
};

export default AuthorizedNavigation;

const styles = StyleSheet.create({});
