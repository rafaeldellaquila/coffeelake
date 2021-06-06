import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { HowItWorks } from '../pages/HowItWorks';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { ProfileEdit } from '../pages/ProfileEdit';

import colors from '../constants/colors';

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
    <stackRoutes.Screen name='Register' component={Register} />
    <stackRoutes.Screen name='Login' component={Login} />
    <stackRoutes.Screen
      name='ProfileEdit'
      component={ProfileEdit}
    />
  </stackRoutes.Navigator>
);

export default AppRoutes;
