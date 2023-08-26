import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo, useMemo} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {navigations} from '../lib/constants';
import SearchIcon from './icons/SearchIcon';
import HomeIcon from './icons/HomeIcon';

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
        ReactNativeHapticFeedback.trigger('impactLight', {});
      };
      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
        ReactNativeHapticFeedback.trigger('impactLight', {});
      };
      let label = '';
      switch (route.name) {
        case navigations.HomeStack.name:
          label = 'Home';
          break;
        case navigations.SearchStack.name:
          label = 'Search';
          break;
        default:
          break;
      }

      return (
        <TabBarItem
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          onPress={onPress}
          onLongPress={onLongPress}
          key={route.key}
          style={{height: 62 + bottomInset}}>
          {(() => {
            switch (route.name) {
              case navigations.HomeStack.name:
                return <Home fill={'#ffffff'} />;
              case navigations.SearchStack.name:
                return <Search fill={'#ffffff'} />;
              default:
                return null;
            }
          })()}
          <TabBarLabel style={{marginBottom: bottomInset}}>{label}</TabBarLabel>
        </TabBarItem>
      );
    });
  }, [bottomInset, navigation, state.index, state.routes]);

  return (
    <Gradient
      colors={[
        'rgba(0, 0, 0, 0.6)',
        'rgba(0, 0, 0, 0.7)',
        'rgba(0, 0, 0, 0.8)',
        'rgba(0, 0, 0, 0.9)',
        'rgba(0, 0, 0, 1)',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.0}}
      useAngle
      angle={180}
      style={{
        height: 62 + bottomInset,
      }}>
      <Wrapper>{tabBarItems}</Wrapper>
    </Gradient>
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
`;

const TabBarLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-top: 4px;
`;

const Home = styled(HomeIcon)`
  width: 18px;
  height: 18px;
`;

const Search = styled(SearchIcon)`
  width: 18px;
  height: 18px;
`;

export default memo(BottomTabBar);
