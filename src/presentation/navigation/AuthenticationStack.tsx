import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationStoryBoardParamlist} from '../storyboard/AuthenticationStackStoryBoard';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../container/authentication/SignIn/SignIn';
import SignUp from '../container/authentication/SignUp/SignUp';
import OTP from '../container/authentication/OTP/OTP';
import ProgramRules from '../container/authentication/ProgramRules/ProgramRules';
import AuthorizedNavigation from './AuthorizedNavigation';

const Stack = createNativeStackNavigator<AuthenticationStoryBoardParamlist>();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ProgramRules" component={ProgramRules} />
      <Stack.Screen name='AuthorizedNavigation' component={AuthorizedNavigation}/>
    </Stack.Navigator>
  );
};

export default AuthenticationStack;

const styles = StyleSheet.create({});
