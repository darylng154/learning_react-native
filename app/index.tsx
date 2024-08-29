import * as React from 'react';
import { Text, View, Button, StyleSheet } from "react-native";

import { Buttons, CustomComponents, Images, MultipleStyles, Pressables, ScrollViews, Texts, UseStates, Views } from '@notes/index';
import Navigators from "@notes/Navigators";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer independent = {true}>
      <Drawer.Navigator initialRouteName="Buttons">

        <Drawer.Screen name="Buttons" component={Buttons} />
        <Drawer.Screen name="CustomComponents" component={CustomComponents} />
        <Drawer.Screen name="Images" component={Images} />
        <Drawer.Screen name="MultipleStyles" component={MultipleStyles} />
        <Drawer.Screen name="Navigators" component={Navigators} />
        <Drawer.Screen name="Pressables" component={Pressables} />
        <Drawer.Screen name="ScrollViews" component={ScrollViews} />
        <Drawer.Screen name="Texts" component={Texts} />
        <Drawer.Screen name="UseStates" component={UseStates} />
        <Drawer.Screen name="Views" component={Views} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}