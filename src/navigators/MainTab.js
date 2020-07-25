import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import TabHomeScreen from '../pages/Home/TabHomeScreen';
import TabAboutScreen from '../pages/About/TabAboutScreen';

const Pagina = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Pagina>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: '#000',
          showLabel: true,
          style: {
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          name="TabHome"
          component={TabHomeScreen}
          options={{
            tabBarLabel: 'Home'
          }}
        />
        <Tab.Screen
          name="TabAbout"
          component={TabAboutScreen}
          options={{
            tabBarLabel: 'Sobre'
          }}
        />
      </Tab.Navigator>
    </Pagina>
  );
};
