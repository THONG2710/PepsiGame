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

function App(): JSX.Element {
  return (
      // <PrimaryBackground/>
      <SignUp/>
      // <RedButton/>
      // <DisableButton/>
  );
}

export default App;
