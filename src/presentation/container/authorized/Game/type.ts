import { StackNavigationProp } from "@react-navigation/stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type GameScreenNavigationProp = StackNavigationProp<AuthorizedStackSParamlist, 'GameScreen'>;

export type GameScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'GameScreen'>;

export type GameScreenProp = {
    navigation: GameScreenNavigationProp,
    route: GameScreenRouteProp,
}