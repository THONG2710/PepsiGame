import { StackNavigationProp } from "@react-navigation/stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type HomeScreenNavigationProp = StackNavigationProp<AuthorizedStackSParamlist, 'HomeScreen'>;

export type HomeScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'HomeScreen'>;

export type HomeScreenProp = {
    navigation: HomeScreenNavigationProp,
    route: HomeScreenRouteProp,
}