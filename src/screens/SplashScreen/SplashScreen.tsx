import {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {useIsSplashReady} from '../../lib/hooks/useIsSplashReady';
import {useSplashScreenNavigation} from './hooks';

interface SplashScreenProps {}

const SplashScreen = ({}: SplashScreenProps) => {
  const navigation = useSplashScreenNavigation();
  const [, setIsReady] = useIsSplashReady();

  useLayoutEffect(() => {
    const subscriber = navigation.addListener('blur', () => {
      setIsReady(true);
    });
    const timeoutId = setTimeout(() => {
      navigation.navigate('MainBottomTab', {
        screen: 'HomeStack',
        params: {},
      });
    }, 1500);

    return () => {
      subscriber();
      clearTimeout(timeoutId);
    };
  }, [navigation, setIsReady]);

  return <View style={{flex: 1, backgroundColor: 'blue'}} />;
};

export default SplashScreen;
