import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import PopupButton from './components/PopupButton';

export default function App() {
  const CustomAlert = () => {
    Alert.alert('팝업!');
  };
  return (
    <View style={styles.contianer}>
      <Text> SignInPage </Text>

      <PopupButton CustomAlert={CustomAlert} title={'로그인페이지 팝업'} />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
