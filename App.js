/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
//import {createAppContainer} from 'react-navigation';




import Home from './src/scenes/Home'
import About from './src/scenes/About'
// import SplashScreen from './src/scenes/Spalash/SpalashScreen';
 import LoginScreen from './src/scenes/login/LoginScreen';
 import DashBoardScreen from './src/scenes/Dashboard/DashBoardScreen';
import OpenTaskListScreen from './src/scenes/OpenTask/OpenTaskListScreen'
import ViewOpenTask from './src/scenes/OpenTask/ViewOpenTask'

import CloasedTaskListScreen from './src/scenes/CloasedTask/CloasedTaskListScreen'
import ViewClosedtaskScreen from './src/scenes/CloasedTask/ViewClosedtaskScreen'

import OverDuetaskScreen from './src/scenes/OverDueTask/OverDuetaskScreen'
import ViewOverDueTaskscreen from './src/scenes/OverDueTask/ViewOverDueTaskscreen'


import MyOpenTask from './src/scenes/MyopenTask/MyOpenTask'
import ViewMyopenTaskScreen from './src/scenes/MyopenTask/ViewMyopenTaskScreen'

import MyOverduetaskScree from './src/scenes/MyOverDueTask/MyOverduetaskScree'
import ViewMyOverDuetaskScreen from './src/scenes/MyOverDueTask/ViewMyOverDuetaskScreen'



import AddTaskScreen from './src/scenes/AddTasks/AddTaskScreen'

import DrawerMenu from './src/components/DrawerMenu'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const DrawerNavigation = createDrawerNavigator({
  
  LoginScreen: {
    screen: LoginScreen,
      navigationOptions:{
        drawerLockMode: 'locked-open'
      }
  },

   //LoginScreen:LoginScreen,
   DashBoardScreen:DashBoardScreen,
  OpenTaskListScreen:OpenTaskListScreen,
  CloasedTaskListScreen:CloasedTaskListScreen,
  OverDuetaskScreen:OverDuetaskScreen,
  MyOpenTask:MyOpenTask,
  MyOverduetaskScree:MyOverduetaskScree,
  ViewOpenTask:ViewOpenTask,
  AddTaskScreen:AddTaskScreen,
  About:About,
  Home:Home,
ViewOverDueTaskscreen:ViewOverDueTaskscreen,
ViewMyOverDuetaskScreen:ViewMyOverDuetaskScreen,
ViewMyopenTaskScreen:ViewMyopenTaskScreen,
ViewClosedtaskScreen:ViewClosedtaskScreen

},
{
  initialRouteName: "LoginScreen",
  //drawerBackgroundColor: "lightblue",
  contentOptions: {
    activeTintColor: "red"
  },
  contentComponent: DrawerMenu
}); 


//const App = createAppContainer(MainNavigator);
const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
  })
);

const MainApp = () => <App  />;
export default function App() {
  return <Router />;
}

