import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const customAlert = (title = '기본값') => {
    console.log(title);
    if (title) {
      Alert.alert(title);
    } else {
      Alert.alert('TouchableOpacity에도 onPress 속성이 있습니다');
    }
  };

  const customAlert2 = () => {
    Alert.alert(
      '함수이름을 onPress에 바로 사용할땐 아무것도 넘겨도 함수에서 받는 파라미터에도 아무것도 있으면 안되요!'
    );
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => {
          customAlert('값을 함수로 넘겨줄 수도 있습니다.');
        }}
      >
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => customAlert()}
      >
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert2}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert2}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert2}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert2}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert2}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height: 80,
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});
