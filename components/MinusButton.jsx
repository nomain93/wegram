import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ Minus }) {
  return (
    <TouchableOpacity onPress={Minus} style={styles.container}>
      <Text style={{ color: 'white' }}> 마이너스 </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
});
