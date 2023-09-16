import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
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
          style={{height: 62 + bottomInset}}>
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
              marginBottom: bottomInset,
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
    // <Gradient
    //   colors={[
    //     'rgba(0, 0, 0, 0.6)',
    //     'rgba(0, 0, 0, 0.7)',
    //     'rgba(0, 0, 0, 0.8)',
    //     'rgba(0, 0, 0, 0.9)',
    //     'rgba(0, 0, 0, 1)',
    //   ]}
    //   start={{x: 0, y: 0}}
    //   end={{x: 0, y: 1.0}}
    //   useAngle
    //   angle={180}
    //   style={{
    //     height: 62 + bottomInset,
    //   }}>
    <View
      style={{
        height: 48 + bottomInset,
      }}>
      <Wrapper>{tabBarItems}</Wrapper>
    </View>
    // </Gradient>
  );
};

const Gradient = styled(LinearGradient)`
  width: 100%;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.gray.base};
`;

const TabBarLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-top: 4px;
`;

const Home = styled(HomeIcon)`
  width: 24px;
  height: 24px;
`;

const Search = styled(SearchIcon)`
  width: 24px;
  height: 24px;
`;

const Genie = styled(GenieIcon)`
  width: 24px;
  height: 24px;
`;

export default memo(BottomTabBar);
