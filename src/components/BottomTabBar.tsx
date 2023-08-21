import {View, TouchableOpacity, Text} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface Props extends BottomTabBarProps {}

const BottomTabBar = ({state}: Props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map(route => {
        return (
          <TouchableOpacity
            onPress={() => ReactNativeHapticFeedback.trigger('impactLight', {})}
            key={route.key}
            style={{backgroundColor: 'orange', flex: 1, height: 40}}>
            <Text>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(BottomTabBar);
