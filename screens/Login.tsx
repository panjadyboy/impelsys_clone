import React , {useState} from 'react';
import { View , Text , Image , StyleSheet , TextInput , TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation  } from '@react-navigation/native';

function Login(props) {

const[email , setEmail] = useState('');
const[password , setPassword] = useState('');


const navigation = useNavigation();

const gotoDashboard = () => {
navigation.navigate('Dashboard'),
console.log(email,password);
}
    return (
        <LinearGradient colors={[ '#ffffff', '#192f6a',]} style={styles.container}>
        <View >
         <Text style={styles.header}>Login</Text>
         <View style={styles.containerbox}>
         <MaterialCommunityIcons
          name="email"
          size={23}
          color="blue"
          style={{margin:10 , alignSelf:'center'}} />
          <TextInput placeholder='Enter Email Id'
         onChangeText={(text) => setEmail(text)} />
         </View>
         <View style={styles.containerbox}>
         <MaterialCommunityIcons
          name="lock"
          size={23}
          color="blue"
          style={{margin:10 , alignSelf:'center'}} />
          <TextInput placeholder='Enter Password'
          secureTextEntry
         onChangeText={(password) => setPassword(password)} />
         </View>
         
        <TouchableOpacity onPress={gotoDashboard}>
        <View style={{height:50,
        width:'90%',
        marginTop:20,
        backgroundColor:'#0457e4',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20}}>
         <Text style={{fontSize:22,color:'white'}}>Login</Text>
        </View>
        </TouchableOpacity>
        </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
           
    },
    header:{
        fontSize:30,
        fontWeight:'800',
        alignSelf:'center',
        marginTop:60,
        marginBottom:30,
        color:'#0457e4'
    },
    containerbox: {
        backgroundColor: "white",
        flexDirection: "row",
        width: "90%",
        borderRadius:10,
        borderWidth:2,
        alignSelf:'center',
        height:60,
        marginTop:20
        
      },
})
export default Login;