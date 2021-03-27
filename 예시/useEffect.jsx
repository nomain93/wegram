import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import PopupButton from './components/PopupButton';
import data from './data.json';
const tempList = [
  { title: 1 },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  { title: 5 },
];

export default function App() {
  const [state, setState] = useState(tempList);

  useEffect(() => {
    setTimeout(() => {
      setState(data.diary);
    }, 2000);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contianer}>
      {state.map((content, i) => {
        return (
          <View key={i}>
            <Text>{content.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
