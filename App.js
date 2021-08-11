import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const onPressLog=()=>{(text=="Admin" && pass=="123")?alert('Successfully logged'):alert('Invalid details')}
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/a/a6/User-admin.svg'}}
      />
      <Text>ADMIN</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        onPress={onPressLog}
        title="Login"
        color="#841584"
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",justifyContent:"center",padding:60
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
