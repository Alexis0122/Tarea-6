import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT_FOR_WORDPRESS_NEWS`);
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'URL_OF_WORDPRESS_SITE_LOGO' }} style={styles.logo} />
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
            <Text onPress={() => Linking.openURL(item.url)} style={styles.link}>Read more</Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  newsItem: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  summary: {
    marginBottom: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default NewsScreen;
