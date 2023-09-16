import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {navigations} from '../lib/constants';
import SearchIcon from './icons/SearchIcon';
import HomeIcon from './icons/HomeIcon';
import GenieIcon from './icons/GenieIcon';
import {View} from 'react-native';
import colors from '../lib/colors';

interface Props extends BottomTabBarProps {}

const BottomTabBar = ({state, navigation}: Props) => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  const tabBarItems = useMemo(() => {
    return state.routes.map((route, index) => {
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
      };
      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      const focusedColor = '#ffffff';
      const unfocusedColor = 'rgb(188, 188, 188)';

      return (
        <TabBarItem
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          onPress={onPress}
          onLongPress={onLongPress}
          activeOpacity={1.0}
          key={route.key}
          style={{height: 58 + bottomInset, justifyContent: 'center'}}>
          {(() => {
            switch (route.name) {
              case navigations.HomeStack.name:
                return (
                  <Home fill={isFocused ? focusedColor : unfocusedColor} />
                );
              case navigations.SearchStack.name:
                return (
                  <Search fill={isFocused ? focusedColor : unfocusedColor} />
                );
              case navigations.SettingStack.name:
                return (
                  <Genie fill={isFocused ? focusedColor : unfocusedColor} />
                );
              default:
                return null;
            }
          })()}
          <TabBarLabel
            style={{
              // marginBottom: bottomInset,
              color: isFocused ? focusedColor : unfocusedColor,
            }}>
            {(() => {
              switch (route.name) {
                case navigations.HomeStack.name:
                  return 'Home';
                case navigations.SearchStack.name:
                  return 'Search';
                case navigations.SettingStack.name:
                  return 'My';
                default:
                  return '';
              }
            })()}
          </TabBarLabel>
        </TabBarItem>
      );
    });
  }, [bottomInset, navigation, state.index, state.routes]);

  return (
    <View
      style={
        {
          // height: 48 + bottomInset,
        }
      }>
      <Wrapper>{tabBarItems}</Wrapper>
    </View>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
`;

const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  background-color: ${colors.gray.base};
`;

const TabBarLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-top: 8px;
`;

const Home = styled(HomeIcon)`
  width: 20px;
  height: 20px;
`;

const Search = styled(SearchIcon)`
  width: 20px;
  height: 20px;
`;

const Genie = styled(GenieIcon)`
  width: 20px;
  height: 20px;
`;

export default memo(BottomTabBar);
