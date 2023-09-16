import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import {AuthStackParamList} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: () => null,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
