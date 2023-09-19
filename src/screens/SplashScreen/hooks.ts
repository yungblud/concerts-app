import {useIsSplashReady} from '@app/lib/hooks/useIsSplashReady';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useLayoutEffect} from 'react';

import type {SplashScreenScreenProps} from './types';

export const useSplashScreenNavigation = () =>
  useNavigation<SplashScreenScreenProps['navigation']>();
export const useSplashScreenRoute = () =>
  useRoute<SplashScreenScreenProps['route']>();

export const useSplashTimeout = ({
  timeoutDuration,
}: {
  timeoutDuration: number;
}) => {
  const navigation = useSplashScreenNavigation();
  const [, setIsSplashReady] = useIsSplashReady();

  const navigateToHome = useCallback(() => {
    navigation.navigate('MainBottomTab', {
      screen: 'HomeStack',
      params: {},
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsSplashReady(true);
    });
    const timeoutId = setTimeout(navigateToHome, timeoutDuration);

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [navigateToHome, navigation, setIsSplashReady, timeoutDuration]);
};
