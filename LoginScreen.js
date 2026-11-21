import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to the app</Text>
      <Text style={styles.regularText}>Login to continue</Text>

      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder="password"
        keyboardType="default"
        secureTextEntry={true}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
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
    fontSize: 26,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 30,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
    color: '#000000',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#EE9972',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
  },
});
