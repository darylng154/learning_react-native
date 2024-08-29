import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Buttons, CustomComponents, Images, MultipleStyles, Pressables, ScrollViews, Texts, UseStates, Views } from '@notes/index';
import Home from '@/app/index';


/* returns object containing 2 props to configure the navigator:
  - Screeen
  - Navigator
*/
const Stack = createNativeStackNavigator(); 

const Drawer = createDrawerNavigator();


export default function Navigators() {
  return (
    
    /* component to manage the navigation tree & contains the navigation state
      - navigation state = stores navigation structure & history of the app
      - can specify same options for all screens in the navigator w/ screenOptions prop
     */
    <NavigationContainer independent = {true}>
      <Stack.Navigator
      initialRouteName="Home">

        {/* List of all routes in our navigation stack 
            - each screen can specify options w/ options prop:
                - title to render in header
            - info for passing additional props @ https://reactnavigation.org/docs/hello-react-navigation#passing-additional-props
        */}
        <Stack.Screen 
        name = "Home" 
        component = {Home}
        options = {{title: "Home Page"}}/>


        <Stack.Screen name = "Buttons" component= {Buttons}/>

      </Stack.Navigator>
    </NavigationContainer>

);
}