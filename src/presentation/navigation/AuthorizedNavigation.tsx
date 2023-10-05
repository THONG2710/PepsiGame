import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizedStackSParamlist} from '../storyboard/AuthorizedStackStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../container/authorized/Home/HomeScreen';
import GameScreen from '../container/authorized/Game/GameScreen';
import HappyScreen from '../container/authorized/Happy/HappyScreen';
import ScanBillScreen from '../container/authorized/ScanBill/ScanBillScreen';
import CollectionScreen from '../container/authorized/Collection/CollectionScreen';
import PresentScreen from '../container/authorized/Present/PresentScreen';
import InstructionScreen from '../container/authorized/Instruction/InstructionScreen';
import AuthenticationStack from './AuthenticationStack';

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
      <Stack.Screen name="ScanBillScreen" component={ScanBillScreen} />
      <Stack.Screen name='CollectionScreen' component={CollectionScreen}/>
      <Stack.Screen name='PresentScreen' component={PresentScreen}/>
      <Stack.Screen name='InstructionScreen' component={InstructionScreen}/>
      <Stack.Screen name='Authentication' component={AuthenticationStack}/>
    </Stack.Navigator>
  );
};

export default AuthorizedNavigation;

const styles = StyleSheet.create({});
