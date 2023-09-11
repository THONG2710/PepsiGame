import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticationStoryBoardParamlist } from "../../../storyboard/AuthenticationStack";
import { RouteProp } from "@react-navigation/native";

export type SignUpNavigationProp = StackNavigationProp<AuthenticationStoryBoardParamlist, 'SignUp'>;

export type SignUpRouteProp = RouteProp<AuthenticationStoryBoardParamlist, 'SignUp'>;

export type SignUpProp = {
    navigation: SignUpNavigationProp,
    route: SignUpRouteProp,
}