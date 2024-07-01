import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const AgePredictionScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      setAge(response.data.age);
    } catch (error) {
      console.error(error);
    }
  };

  const getAgeCategory = (age: number) => {
    if (age < 18) return 'Young';
    if (age < 60) return 'Adult';
    return 'Elderly';
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Age" onPress={predictAge} />
      {age !== null && (
        <View style={styles.result}>
          <Text>Age: {age}</Text>
          <Text>Category: {getAgeCategory(age)}</Text>
          {getAgeCategory(age) === 'Young' && <Image source={require('../../assets/young.png')} style={styles.image} />}
          {getAgeCategory(age) === 'Adult' && <Image source={require('../../assets/adult.png')} style={styles.image} />}
          {getAgeCategory(age) === 'Elderly' && <Image source={require('../../assets/elderly.png')} style={styles.image} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  result: {
    marginTop: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
});

export default AgePredictionScreen;
