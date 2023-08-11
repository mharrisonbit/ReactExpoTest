import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import { Link } from "expo-router";
import React, {useState} from "react";
import {router} from "expo-router";

export default function Page() {
  function ButtonPressed() {
    // Alert.alert('issue','this is a warning to you.');
    // if (text === "This is a test"){
      Alert.alert('that was correct.');
      router.replace('authIndex')
    // }
    
  }

  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <TextInput placeholder="Username"/>
        <TextInput placeholder="Password" secureTextEntry={true}  onChangeText={newText => setText(newText)}/>
        <Link href="/profile">Open your profile</Link>
        <Button
            title="Press me"
            onPress={ButtonPressed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
