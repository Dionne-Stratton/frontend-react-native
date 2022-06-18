import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {MaterialIcons, Ionicons, FontAwesome5} from '@expo/vector-icons'
import NewbProfileDetailScreen from '../../screens/readOnlyDataScreens/CompanyDetailScreen';
import NewbProfileListScreen from '../../screens/readOnlyDataScreens/NewbProfileListScreen';
import CompanyListScreen from '../../screens/readOnlyDataScreens/CompanyListScreen';
import CompanyDetailScreen from '../../screens/readOnlyDataScreens/CompanyDetailScreen';
import JobListScreen from '../../screens/readOnlyDataScreens/JobListScreen';
import JobDetailScreen from '../../screens/readOnlyDataScreens/JobDetailScreen';

export const NewbProfileListFlow = createStackNavigator({
    NewbProfileList: NewbProfileListScreen,
    NewbProfileDetail: NewbProfileDetailScreen,
})
  
  NewbProfileListFlow.navigationOptions = {
    title: 'Newbs',
      tabBarIcon: <Ionicons name="people-outline" size={20} />
  }

export const CompanyListFlow = createStackNavigator({
    CompanyList: CompanyListScreen,
    CompanyDetail: CompanyDetailScreen,
})
  
  CompanyListFlow.navigationOptions = {
    title: 'Companies',
    tabBarIcon: <FontAwesome5 name="building" size={20} />
  }

export const JobListFlow = createStackNavigator({
    JobList: JobListScreen,
    JobDetail: JobDetailScreen
})
  
  JobListFlow.navigationOptions = {
    title: 'Jobs',
      tabBarIcon: <MaterialIcons name="work-outline" size={20} />
  }