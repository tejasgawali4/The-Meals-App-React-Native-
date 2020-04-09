import React from 'react';
import { Platform } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import Color from '../constants/Colors';
 
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
    </Stack.Navigator>
  );
}

export default MealsNavigator;

// const Tab = createBottomTabNavigator();

// function MyTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={CategoriesScreen} />
//       <Tab.Screen name="Favorites" component={FavoritesScreen} />
//     </Tab.Navigator>
//   );
// }

// export default MyTabNavigator;