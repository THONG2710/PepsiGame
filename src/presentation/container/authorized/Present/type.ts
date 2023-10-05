import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type PresentScreenNavigationProp = NativeStackNavigationProp<AuthorizedStackSParamlist, 'PresentScreen'>;

export type PresentScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'PresentScreen'>;

export type PresentScreenProp = {
    navigation: PresentScreenNavigationProp,
    route: PresentScreenRouteProp
}