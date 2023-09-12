import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticationStoryBoardParamlist } from "../../../storyboard/AuthenticationStack";
import { RouteProp } from "@react-navigation/native";

export type SignInNavigationProp = StackNavigationProp<AuthenticationStoryBoardParamlist, 'SignIn'>;

export type SignInRouteProp = RouteProp<AuthenticationStoryBoardParamlist, 'SignIn'>;

export  type SignInProp = {
    navigation: SignInNavigationProp,
    route: SignInRouteProp,
} 