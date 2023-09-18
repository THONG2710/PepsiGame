import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticationStoryBoardParamlist } from "../../../storyboard/AuthenticationStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type OTPNavigationProp = StackNavigationProp<AuthenticationStoryBoardParamlist, 'OTP'>;

export type OTPRouteProp = RouteProp<AuthenticationStoryBoardParamlist, 'OTP'>;

export type OTPProp = {
    navigation: OTPNavigationProp,
    route: OTPRouteProp,
}