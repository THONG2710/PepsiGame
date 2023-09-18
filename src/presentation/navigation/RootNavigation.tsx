import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import AuthorizedNavigation from './AuthorizedNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthenticationStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="AuthenticationStack"
          component={AuthenticationStack}
        />
        <Stack.Screen
          name="AuthorizedNavigation"
          component={AuthorizedNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
