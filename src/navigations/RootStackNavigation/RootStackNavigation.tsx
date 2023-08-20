import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainBottomTabNavigation from '../MainBottomTabNavigation/MainBottomTabNavigation';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface RootStackNavigationProps {}

const RootStackNavigation = ({}: RootStackNavigationProps) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainBottomTab"
        component={MainBottomTabNavigation}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
