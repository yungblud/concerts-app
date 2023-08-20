import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {navigations} from '../../lib/constants';
import {HomeStackParams} from '../HomeStackNavigation/types';
import {
  RootStackParamList,
  RootStackScreenProps,
} from '../RootStackNavigation/types';

export type MainTabParamList = {
  [navigations.HomeStack.name]: HomeStackParams;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
