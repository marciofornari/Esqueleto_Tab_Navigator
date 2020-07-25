import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from '../navigators/MainTab';
import InternaScreen from '../pages/Interna/InternaScreen';

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={MainTab}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
        }}
      />
      <AppStack.Screen
        name="InternaScreen"
        component={InternaScreen}
        options={{
          title: 'Página Interna',
          headerStyle: {
            backgroundColor: '#2f97d1',
          },
          headerTintColor: '#fff',
        }}
      />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
