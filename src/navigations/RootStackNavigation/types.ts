import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {navigations} from '../../lib/constants';
import {MainTabParamList} from '../MainBottomTabNavigation/types';

export type RootStackParamList = {
  [navigations.MainBottomTab.name]: NavigatorScreenParams<MainTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
