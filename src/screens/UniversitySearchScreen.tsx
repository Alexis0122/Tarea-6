import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

const UniversitySearchScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const searchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Search Universities" onPress={searchUniversities} />
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.university}>
            <Text>Name: {item.name}</Text>
            <Text>Domain: {item.domains[0]}</Text>
            <Text onPress={() => Linking.openURL(item.web_pages[0])} style={styles.link}>Visit Website</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  university: {
    marginVertical: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UniversitySearchScreen;
