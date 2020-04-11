import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import MyTabNavigator from  './navigation/MealsNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore , combineReducers} from 'redux';
import mealReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export default function App() {

  const rootReducer = combineReducers({
    meals : mealReducer
  });

  const store = createStore(rootReducer);

  let [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
      return <AppLoading/>;
  }else{
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <MyTabNavigator/>
          </NavigationContainer>
        </PaperProvider>
      </Provider>);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
