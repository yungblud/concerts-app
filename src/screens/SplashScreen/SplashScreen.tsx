import {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {useSplashScreenNavigation} from './hooks';

interface SplashScreenProps {}

const SplashScreen = ({}: SplashScreenProps) => {
  const navigation = useSplashScreenNavigation();

  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainBottomTab', {
        screen: 'HomeStack',
        params: {},
      });
    }, 1500);
  }, [navigation]);

  return <View style={{flex: 1, backgroundColor: 'blue'}} />;
};

export default SplashScreen;
