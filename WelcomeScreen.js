import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Hello there</Text>
      <Text style={styles.regularText}>
        This app provides easy access to main screens of the application for a
        direct, user-friendly experience.
      </Text>
      <Text style={styles.regularText}>Feel free to explore!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 28,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
