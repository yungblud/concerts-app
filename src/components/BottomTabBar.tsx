import {View, TouchableOpacity, Text} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends BottomTabBarProps {}

const BottomTabBar = ({state}: Props) => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'orange',
      }}>
      {state.routes.map(route => {
        return (
          <TouchableOpacity
            onPress={() => ReactNativeHapticFeedback.trigger('impactLight', {})}
            key={route.key}
            style={{flex: 1, height: 20 + bottomInset}}>
            <Text>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(BottomTabBar);
