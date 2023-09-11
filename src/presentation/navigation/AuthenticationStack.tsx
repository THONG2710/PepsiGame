import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationStoryBoardParamlist} from '../storyboard/AuthenticationStack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../container/authentication/SignIn/SignIn';
import SignUp from '../container/authentication/SignUp/SignUp';
import OTP from '../container/authentication/OTP/OTP';

const Stack = createNativeStackNavigator<AuthenticationStoryBoardParamlist>();

const AuthenticationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticationStack;

const styles = StyleSheet.create({});
