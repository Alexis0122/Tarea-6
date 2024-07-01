import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/photo.png')} style={styles.photo} />
      <Text>Name: Your Name</Text>
      <Text>Email: your.email@example.com</Text>
      <Text>Phone: +123456789</Text>
      <Text>LinkedIn: your-linkedin-profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default AboutScreen;
