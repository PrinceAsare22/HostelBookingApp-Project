import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import SavedScreen from "./Screens/SavedScreen";
import KnustLocScreen from "./Screens/KnustLocScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import LegonLocScreen from "./Screens/LegonLocScreen";
import UCCLocScreen from "./Screens/UCCLocScreen";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import AyeduaseScreen from "./knustLocationsScreen/AyeduaseScreen";
import HostelInfo from "./Screens/HostelInfo";
import RisingSunScreen from "./ayeduasehostelScreens/RisingSunScreen";
import WagyingoHostel from "./ayeduasehostelScreens/WagyingoHostel";
import VictoryTowers from "./ayeduasehostelScreens/VictoryTowers";
import WestendHostel from "./ayeduasehostelScreens/WestendHostel";
import CanamHall from "./ayeduasehostelScreens/CanamHall";
import FrontlineApartment from "./ayeduasehostelScreens/FrontlineApartment";
import FrontlineInn from "./ayeduasehostelScreens/FrontlineInn";
import FrontlineCourt from "./ayeduasehostelScreens/FrontlineCourt";
import WhiteHouse from "./ayeduasehostelScreens/WhiteHouse";


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarActiveTintColor: '#10324d',
            headerShown: false,
            tabBarInactiveTintColor: '#10324d',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={25} color="#10324d" />
              ) : (
                <AntDesign name="home" size={25} color="#10324d" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            tabBarActiveTintColor: '#10324d',
            tabBarInactiveTintColor: '#10324d',
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={25} color="#10324d" />
              ) : (
                <AntDesign name="hearto" size={25} color="#10324d" />
              ),
          }}
        />


      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />

        {/*KNUST LOCATIONS NAVIGATION */}
        <Stack.Screen
          name="KNUST LOCATIONS"
          component={KnustLocScreen}
          options={{ headerShown: false }} />


        {/*LEGON LOCATIONS NAVIGATION */}
        <Stack.Screen
          name="LEGON LOCATIONS"
          component={LegonLocScreen}
          options={{ headerShown: false }} />


        {/*KNUST LOCATIONS NAVIGATION */}
        <Stack.Screen
          name="UCC LOCATIONS"
          component={UCCLocScreen}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen
          name="AyeduaseScreen"
          component={AyeduaseScreen}
          options={{
            headerShown: false,
          }} />

        {/*HostelScreens NAVIGATION*/}
        <Stack.Screen
          name="WagyingoHostel"
          component={WagyingoHostel}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="VictoryTowers"
          component={VictoryTowers}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="WestendHostel"
          component={WestendHostel}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="CanamHall"
          component={CanamHall}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="FrontlineApartment"
          component={FrontlineApartment}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="FrontlineInn"
          component={FrontlineInn}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="FrontlineCourt"
          component={FrontlineCourt}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="WhiteHouse"
          component={WhiteHouse}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="RisingSun"
          component={RisingSunScreen}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})