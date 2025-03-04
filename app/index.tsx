import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Pages/Login'
import Cadastro from "./Pages/Cadastro";
import Home from './Pages/Home'



const Stack = createNativeStackNavigator()

export default function index(){

  return(
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
  )
}