import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type CollectionScreenNavigationProp = NativeStackNavigationProp<AuthorizedStackSParamlist, 'CollectionScreen'>;

export type CollectionScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'CollectionScreen'>;

export type CollectionScreenProp = {
    navigation: CollectionScreenNavigationProp,
    route: CollectionScreenRouteProp
}