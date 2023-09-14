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
import RulesBackground from './src/presentation/component/Background/RulesBackground';
import ProgramRules from './src/presentation/container/authentication/ProgramRules/ProgramRules';
import HomeScreen from './src/presentation/container/authorized/Home/HomeScreen';
import HomeBackground from './src/presentation/component/Background/HomeBackground';
import PlayButton from './src/presentation/component/Button/PlayButton';
import GameBackground from './src/presentation/component/Background/GameBackground';
import GameScreen from './src/presentation/container/authorized/Game/GameScreen';

function App(): JSX.Element {
  return (
      // <PrimaryBackground/>
      // <SignUp/>
      // <RedButton/>
      // <DisableButton/>
      // <OTP/>
      // <SignIn/>
      // <AuthenticationStack/>
      // <RulesBackground/>
      // <ProgramRules/>
      // <HomeScreen/>
      // <HomeBackground/>
      // <PlayButton/>
      // <GameBackground/>
      <GameScreen/>
  );
}

export default App;
