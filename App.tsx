import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  };

  return (
    <View style={styles.container}>
      <Text>Random Number: {randomNumber}</Text>
      <Button title="Generate Random Number" onPress={generateRandomNumber} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
