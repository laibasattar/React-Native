import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30,fontWeight:'bold',bottom:200}}> Login Page 
      </Text>
      <Text style={{fontSize: 26,fontWeight:'bold',right:150}}> Username</Text>
      <TextInput
        style={{backgroundColor:'blue', width:90,right:100}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
