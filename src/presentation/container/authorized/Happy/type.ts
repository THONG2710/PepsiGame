import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type HappyScreenNavigationProp = NativeStackNavigationProp<AuthorizedStackSParamlist, 'HappyScreen'>;

export type HappyScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'HappyScreen'>;

export type HappyScreenProp = {
    navigation: HappyScreenNavigationProp,
    route: HappyScreenRouteProp,
}