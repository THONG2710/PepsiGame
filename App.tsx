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
import HappyScreen from './src/presentation/container/authorized/Happy/HappyScreen';
import HappyBackground from './src/presentation/component/Background/HappyBackground';
import WhiteButtonPopup from './src/presentation/component/Button/WhiteButtonPopup';
import RedButtonPopup from './src/presentation/component/Button/RedButtonPopup';
import PopupLogout from './src/presentation/component/Popup/PopupLogout';
import PlayButtonPopup from './src/presentation/component/Button/PlayButtonPopup';
import PopupOptionsPlay from './src/presentation/component/Popup/PopupOptionsPlay';
import AuthorizedNavigation from './src/presentation/navigation/AuthorizedNavigation';
import RootNavigation from './src/presentation/navigation/RootNavigation';
import ScanBillScreen from './src/presentation/container/authorized/ScanBill/ScanBillScreen';
import SecondaryScreenBackground from './src/presentation/component/Background/ScanBillBackground';
import CollectionBackground from './src/presentation/component/Background/CollectionBackground';
import HeaderComponent from './src/presentation/component/Header/HeaderComponent';
import CollectionScreen from './src/presentation/container/authorized/Collection/CollectionScreen';
import InstructionScreen from './src/presentation/container/authorized/Instruction/InstructionScreen';
import InstructionBackground from './src/presentation/component/Background/InstructionBackground';
import PresentScreen from './src/presentation/container/authorized/Present/PresentScreen';
import ItemExchangeGift from './src/presentation/component/Item/ItemExchangeGift';
import ItemMyGift from './src/presentation/component/Item/ItemMyGift';
import EmtyGift from './src/presentation/container/authorized/Present/EmtyGift';
import PopupRecivedGift from './src/presentation/component/Popup/PopupRecivedGift';
import DisableButtonPopup from './src/presentation/component/Button/DisableButtonPopup';
import PopupWrongQRCode from './src/presentation/component/Popup/PopupWrongQRCode';
import PopupScanSuccessfully from './src/presentation/component/Popup/PopupScanSuccessfully';
import PopupSuccessfully from './src/presentation/component/Popup/PopupSuccessfully';
import PopupGiftClose from './src/presentation/component/Popup/PopupGiftClose';
import { Provider } from 'react-redux';
import store from './src/presentation/shared-state/redux/Store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  );
}

export default App;
