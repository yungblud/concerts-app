import React from 'react';
import {View} from 'react-native';
import colors from '../../lib/colors';

interface SettingScreenProps {}

const SettingScreen = ({}: SettingScreenProps) => (
  <View style={{flex: 1, backgroundColor: colors.gray.light}} />
);

export default SettingScreen;
