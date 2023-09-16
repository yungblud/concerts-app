import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import colors from '../../lib/colors';
import {useSettingScreenNavigation} from './hooks';

interface SettingScreenProps {}

const SettingScreen = ({}: SettingScreenProps) => {
  const {top: topInset} = useSafeAreaInsets();
  const navigation = useSettingScreenNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.gray.light}}>
      <LoginTop
        onPress={() => {
          navigation.navigate('AuthStack', {
            screen: 'LoginScreen',
            params: {},
          });
        }}
        topInset={topInset}>
        <LoginText>Login</LoginText>
      </LoginTop>
      <SettingWrapper />
    </View>
  );
};

const LoginTop = styled.Pressable<{topInset: number}>`
  height: ${p => `${130 + p.topInset}px`};
  width: 100%;
  background-color: ${colors.gray.base};
  padding-top: ${p => `${p.topInset}px`};
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.gray.light};
`;

const SettingWrapper = styled.View`
  flex: 1;
  background-color: ${colors.gray.light};
`;

const LoginText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-left: 48px;
  color: ${colors.white.base};
`;

export default SettingScreen;
