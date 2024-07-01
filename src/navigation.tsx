import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import GenderPredictionScreen from './screens/GenderPredictionScreen';
import AgePredictionScreen from './screens/AgePredictionScreen';
import UniversitySearchScreen from './screens/UniversitySearchScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';
import AboutScreen from './screens/AboutScreen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gender Prediction" component={GenderPredictionScreen} />
        <Tab.Screen name="Age Prediction" component={AgePredictionScreen} />
        <Tab.Screen name="University Search" component={UniversitySearchScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
