import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#EE9972' },
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#000000', fontSize: 20 },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#888888',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIconStyle: { display: 'none' },
        }}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
