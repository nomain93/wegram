import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function PlusButton({ Plus }) {
  return (
    <TouchableOpacity onPress={Plus} style={styles.container}>
      <Text> 플러스 </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width: 50,
    height: 50,
  },
});
