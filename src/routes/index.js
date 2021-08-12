import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Settings } from '../screens/Settings';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
}
