import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import Color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ 
          gestureEnabled: false,
          headerTintColor: Platform.OS === 'android' ? Color.White : Color.PrimaryColor,
          headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : '' } }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Categories' }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: 'Category Meals' }}
        initialParams={{ categoryId : 'CategoryMeals' }}
      />
      <Stack.Screen
        name="MealsDetails"
        component={MealsDetailScreen}
        options={{ title: 'Meals Details' }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favorites' }}
      />
    </Stack.Navigator>
  );
}

const Stack1 = createStackNavigator();

function FavStackNav(){
  return (
    <Stack1.Navigator
        screenOptions={{ 
        gestureEnabled: false,
        headerTintColor: Platform.OS === 'android' ? Color.White : Color.PrimaryColor,
        headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : '' } }}
    >
        <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Your Favorites' }}
        />
    </Stack1.Navigator>
  );
}


// export default MealsNavigator;

const Tab = createBottomTabNavigator();

function MyTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-restaurant'
                : 'ios-restaurant';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >

      <Tab.Screen 
          name="Home" 
          component={MealsNavigator}
      />
      <Tab.Screen 
          name="Favorites" 
          component={FavStackNav}
      />
    </Tab.Navigator>
  );
}

export default MyTabNavigator;