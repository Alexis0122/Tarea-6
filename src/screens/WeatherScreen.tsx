import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: '53.1,-0.13' },
        headers: {
          'x-rapidapi-key': 'Sign Up for Key',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setWeather(response.data.current);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {weather ? (
        <View>
          <Text>Temperature: {weather.temp_c}°C</Text>
          <Text>Condition: {weather.condition.text}</Text>
        </View>
      ) : (
        <Text>Loading weather...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherScreen;
