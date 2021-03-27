import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import PlusButton from './components/PlusButton';
import MinusButton from './components/MinusButton';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export default function App() {
  const [state, setState] = useState(0);

  const Minus = () => {
    setState(state - 1);
  };

  const Plus = () => {
    setState(state + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>카운터 : {state} </Text>
      <View style={styles.buttonContainer}>
        <PlusButton Plus={Plus} />
        <MinusButton Minus={Minus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
  },
});
