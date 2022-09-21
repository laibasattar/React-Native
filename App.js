import { StyleSheet, Text, View, onPress, ImageBackground, Button, Image, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={{flex:1}}>

     <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:45, fontWeight:'bold',marginTop:'10%'}}> Login </Text>
    </View>
    
    <View style={{flex:0.25,alignItems:'flex-start', justifyContent:'flex-start',marginLeft:'8%'}}>

      <Text style={{fontSize:18,fontWeight: '500'}}>Username</Text>
      <View style={{flexDirection:'row',width:'90%', height:'30%', marginBottom:'5%',borderBottomWidth:2,borderBottomColor:'lightgrey'}}>
      <Ionicons style={{marginTop:'7%', paddingRight:'4%',paddingLeft:'4%',color:'lightgrey'}} name="person" size={15} />
      <TextInput
      placeholder="Type your username"
      style={{fontSize:14 }}/>
      </View>

      <Text style={{fontSize:18,fontWeight: '500'}}>Password</Text>
      <View style={{flexDirection: 'row',width:'90%',height:60,borderBottomWidth: 2,borderBottomColor: 'lightgrey'}}>
      <FontAwesome style={{marginTop:'7%',paddingRight:'4%',paddingLeft:'4%',color:'lightgrey'}} name="lock" size={15} />
      <TextInput placeholder="Type your password" secureTextEntry={true}
      style={{fontSize:14}}/>
      </View>

      <TouchableOpacity
        style={{marginLeft:'55%'}}
        onPress={()=>Alert.alert('Yes Pressed')}
      >
        <Text style={{fontSize:14, marginTop: '3%', fontWeight:'500'}}> Forgot password? </Text>
      </TouchableOpacity>
    </View>
    
    <View style={{flex:0.27, alignItems:'center', justifyContent:'center',marginTop:'5%'}}>
    <LinearGradient colors={['#89fffd','#ef32d9']}
    start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 0 }}
    style={{width:'85%',borderRadius:20, height:'20%', backgroundColor:'yellow', marginBottom:'6%', alignItems:'center', justifyContent:'center'}}
    >
    <TouchableOpacity
        onPress={()=>Alert.alert('Yes Pressed')}
      >
        <Text style={{color: 'white',fontSize:20,fontWeight:'bold'}}> LOGIN </Text>
      </TouchableOpacity>
      </LinearGradient>

    <Text style={{marginTop:'4%',marginBottom:'5%'}}>Or Sign Up Using</Text>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity
        onPress={()=>Alert.alert('Yes Pressed')}>
      <FontAwesome style={{paddingRight:'5%',color:'darkblue'}} name="facebook" size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>Alert.alert('Yes Pressed')}>
      <FontAwesome style={{paddingRight:'5%',color:'skyblue'}} name="twitter" size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>Alert.alert('Yes Pressed')}>
      <FontAwesome style={{color:'red'}} name="google" size={33} />
      </TouchableOpacity>
      </View>

    </View>

    <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
    <Text style={{marginBottom:'5%',marginTop:'30%'}}>Or Sign Up Using</Text>
    <TouchableOpacity
    onPress={()=>Alert.alert('pressed')}>
      
      <Text style={{fontSize:16,fontWeight:"bold"}}>SIGN UP</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "83%",
    backgroundColor: "white",
  },
  
}); 