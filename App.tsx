import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import PrimaryBackground from './src/presentation/component/Background/PrimaryBackground';
import SignUp from './src/presentation/container/authentication/SignUp/SignUp';
import RedButton from './src/presentation/component/Button/RedButton';
import DisableButton from './src/presentation/component/Button/DisableButton';
import OTP from './src/presentation/container/authentication/OTP/OTP';
import SignIn from './src/presentation/container/authentication/SignIn/SignIn';
import AuthenticationStack from './src/presentation/navigation/AuthenticationStack';

function App(): JSX.Element {
  return (
      // <PrimaryBackground/>
      // <SignUp/>
      // <RedButton/>
      // <DisableButton/>
      // <OTP/>
      // <SignIn/>
      <AuthenticationStack/>
  );
}

export default App;
