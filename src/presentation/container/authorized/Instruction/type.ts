import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthorizedStackSParamlist } from "../../../storyboard/AuthorizedStackStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type InstructionScreenNavigationProp = NativeStackNavigationProp<AuthorizedStackSParamlist, 'InstructionScreen'>;

export type InstructionScreenRouteProp = RouteProp<AuthorizedStackSParamlist, 'InstructionScreen'>;

export type InstructionScreenProp = {
    navigation: InstructionScreenNavigationProp,
    route: InstructionScreenRouteProp,
}