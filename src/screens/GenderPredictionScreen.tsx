import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const GenderPredictionScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Gender" onPress={predictGender} />
      {gender && (
        <View style={styles.result}>
          <Text style={{ color: gender === 'male' ? 'blue' : 'pink' }}>
            Gender: {gender}
          </Text>
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
});

export default GenderPredictionScreen;
