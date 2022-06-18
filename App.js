import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as DataProvider} from './src/context/DataContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/authScreens/ResolveAuthScreen';
import MyDrawer from './src/components/navHelpers/MyDrawer';
import { NewbProfileListFlow, CompanyListFlow, JobListFlow } from './src/components/navHelpers/readOnlyTabs';
import { loginFlow } from './src/components/navHelpers/authTab';

const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow,
  mainFlow: createBottomTabNavigator({
    Account: MyDrawer,
    JobListFlow,
    NewbProfileListFlow,
    CompanyListFlow
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <DataProvider>
        <App ref={(navigator) => {setNavigator(navigator)}} />
      </DataProvider>
    </AuthProvider>
  )
}