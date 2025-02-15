import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import onBoarding from './src/screens/auth/onboarding/onBoarding';
import welcome from './src/screens/auth/welcome/welcome';
import login from './src/screens/auth/login/login';
import signUp from './src/screens/auth/signUp/signUp';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signUp" component={signUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
