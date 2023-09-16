import React from 'react';
import {Text, View} from 'react-native';
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
        <LoginTopInner>
          <LoginText>Login</LoginText>
          <Text style={{marginLeft: 'auto', marginRight: 30, fontSize: 24}}>
            👉
          </Text>
        </LoginTopInner>
      </LoginTop>
      <SettingWrapper />
    </View>
  );
};

const LoginTop = styled.Pressable<{topInset: number}>`
  height: ${p => `${80 + p.topInset}px`};
  width: 100%;
  background-color: ${colors.gray.base};
  padding-top: ${p => `${p.topInset}px`};
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.gray.light};
`;

const LoginTopInner = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SettingWrapper = styled.View`
  flex: 1;
  background-color: ${colors.gray.light};
`;

const LoginText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-left: 48px;
  color: ${colors.white.base};
`;

export default SettingScreen;
