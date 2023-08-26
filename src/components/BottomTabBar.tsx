import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface Props extends BottomTabBarProps {}

const BottomTabBar = ({state, navigation}: Props) => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  console.log('bottom tab bar');
  return (
    <Wrapper>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true} as any);
          }
          ReactNativeHapticFeedback.trigger('impactLight', {});
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
          ReactNativeHapticFeedback.trigger('impactLight', {});
        };
        return (
          <TabBarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={{
              height: 50 + bottomInset,
            }}>
            <TabBarLabel style={{marginBottom: bottomInset}}>
              {route.name}
            </TabBarLabel>
          </TabBarItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  background-color: orange;
`;

const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TabBarLabel = styled.Text``;

export default memo(BottomTabBar);
