import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { HowItWorks } from '../pages/HowItWorks';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background,
      },
    }}
  >
    <stackRoutes.Screen name='Welcome' component={Welcome} />
    <stackRoutes.Screen
      name='HowItWorks'
      component={HowItWorks}
    />
  </stackRoutes.Navigator>
);

export default AppRoutes;
