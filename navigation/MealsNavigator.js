import React from 'react';
import { Platform , View } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreens from '../screens/FiltersScreens';
import Color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import DrawerContent from '../components/DrawerContent';
//Drawer Navigation

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="Categories"
        >
        <Drawer.Screen 
            name="Categories" 
            component={MealsNavigator}
             />
        <Drawer.Screen
            name="Filters" 
            component={FiltersStackNav} />
    </Drawer.Navigator>
  );
};

//Stack navigation

function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ 
          gestureEnabled: false,
          titleStyle : { fontFamily : 'open-sans-bold'},
          headerTintColor: Platform.OS === 'android' ? Color.White : Color.PrimaryColor,
          headerStyle: { 
            backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : '' } 
          }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
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

function FavStackNav(){
  return (
    <Stack.Navigator
        screenOptions={{ 
        gestureEnabled: false,
        titleStyle : { fontFamily : 'open-sans-bold'},
        headerTintColor: Platform.OS === 'android' ? Color.White : Color.PrimaryColor,
        headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : '' } }}
    >
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: 'Your Favorites' }}
          />
        
    </Stack.Navigator>
  );
}


function FiltersStackNav(){
  return (
    <Stack.Navigator
        screenOptions={{   
        gestureEnabled: false,
        titleStyle : { fontFamily : 'open-sans-bold'},
        headerTintColor: Platform.OS === 'android' ? Color.White : Color.PrimaryColor,
        headerStyle: { backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : '' } }}
    >
        <Stack.Screen
        name="Filter"
        component={FilterScreens}
        options={{ title: 'Filter' }}
        />
        
    </Stack.Navigator>
  );
}
// export default MealsNavigator;

// Tab Navigation

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
          activeTintColor: Platform.OS === 'android' ? Color.White : 'tomato',
          inactiveTintColor: Platform.OS === 'android' ? Color.White : 'gray',
          labelStyle: {
            fontSize: 15,
          },
          titleStyle : { fontFamily : 'open-sans-bold'},
          tabStyle: {
            width: 100,    
          },
          style: {
            backgroundColor: Platform.OS === 'android' ? Color.PrimaryColor : Color.White,
          }}
        }
    >

      <Tab.Screen 
          name="Home" 
          component={DrawerNavigator}
      />
      <Tab.Screen 
          name="Favorites" 
          component={FavStackNav}
      />
    </Tab.Navigator>
  );
}

export default MyTabNavigator;