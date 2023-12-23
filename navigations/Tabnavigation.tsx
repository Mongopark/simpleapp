import * as React from 'react';
import { Pressable } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';
import Pet from '../Components/Pet';
import PetQualities from '../Components/PetQualities';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Body from '../Components/Body';

const Tab = createBottomTabNavigator();

const MyTab = () => {

  

  return (
      <Tab.Navigator
      //The below code hides all the headers
      // options={{
      //   headerShown: false,
      // }}
      //The below code offers automatic/ dynamic icons for all tabs, with several other tabbar properties
      screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        let redgrey;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
          redgrey = focused ? 'red' : 'grey';
        } else if(route.name ==='Body') {
          iconName = focused ? 'book-sharp' : 'book-outline';
          redgrey = focused ? 'red' : 'grey';
        } 
        return <Ionicons name={iconName} size={24} style={{color: redgrey}} />
      },
      tabBarActiveTintColor: 'red',
      })}
      >

<Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarIcon: () => <Ionicons name="home" style={{color: 'red'}} size={24} />,
            title: 'Home', headerTintColor: 'brown', headerStyle:{backgroundColor:'tan',}, tabBarLabel: 'Ish Ish', headerShown: false,}}
        />


        <Tab.Screen
          name="Body"
          component={Body}
          options={{
            // tabBarIcon: () => <Ionicons name="home" style={{color: 'red'}} size={24} />,
            title: 'Body', headerTintColor: 'brown', headerStyle:{backgroundColor:'tan',}, tabBarLabel: 'Dey Play', headerShown: false,}}
        />

      </Tab.Navigator>
  );
};

const Navigation = () => {
  return (    
          < MyTab style={{backgroundColor: 'white'}} />
  )
}


export default Navigation;