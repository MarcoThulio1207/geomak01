import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Index from '../app/index';
import Cadastro from "../screens/cadastro";
import Home from '../screens/home';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen  name = "Index" component={Index}/>
                <Stack.Screen  name = "Home" component={Home}/>
                <Stack.Screen  name="Cadastro" component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}