import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationStoryBoardParamlist } from "../../../storyboard/AuthenticationStack";
import { RouteProp } from "@react-navigation/native";

export type ProgramRulesNavigationProp = NativeStackNavigationProp<AuthenticationStoryBoardParamlist, 'ProgramRules'>;

export type ProgramRulesRouteProp = RouteProp<AuthenticationStoryBoardParamlist, 'ProgramRules'>;

export type ProgramRulesProp = {
    navigation: ProgramRulesNavigationProp,
    route: ProgramRulesRouteProp,
}