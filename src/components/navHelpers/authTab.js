import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileCreateScreen from '../../screens/accountScreens/ProfileCreateScreen';
import WelcomeScreen from '../../screens/authScreens/WelcomeScreen';
import SigninScreen from '../../screens/authScreens/SigninScreen';
import SignupScreen from '../../screens/authScreens/SignupScreen';

export const loginFlow = createStackNavigator ({
    Signup: SignupScreen,
    Signin: SigninScreen,
    Welcome: WelcomeScreen,
    Create: ProfileCreateScreen
  })

