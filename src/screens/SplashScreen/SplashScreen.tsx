import {View} from 'react-native';
import {useSplashTimeout} from './hooks';

interface SplashScreenProps {}

const SplashScreen = ({}: SplashScreenProps) => {
  useSplashTimeout({
    timeoutDuration: 1500,
  });

  return <View style={{flex: 1, backgroundColor: 'blue'}} />;
};

export default SplashScreen;
