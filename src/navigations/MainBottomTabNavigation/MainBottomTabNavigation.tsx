import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStackNavigation from '../HomeStackNavigation/HomeStackNavigation';
import {MainTabParamList} from './types';

const MainBottomTab = createBottomTabNavigator<MainTabParamList>();

interface MainBottomTabNavigationProps {}

const MainBottomTabNavigation = ({}: MainBottomTabNavigationProps) => {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen name="HomeStack" component={HomeStackNavigation} />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomTabNavigation;
