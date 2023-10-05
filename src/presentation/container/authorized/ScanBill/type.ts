import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type ScanBillScreenNavigationProp = NativeStackNavigationProp<AuthorizedStackSParamlist, 'ScanBillScreen'>;

export type ScanBillScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'ScanBillScreen'>;

export type ScanBillScreenProp = {
    navigation: ScanBillScreenNavigationProp,
    route: ScanBillScreenRouteProp
}