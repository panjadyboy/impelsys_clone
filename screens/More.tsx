import React from 'react';
import { View,Text , StyleSheet , TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation  } from '@react-navigation/native';


function More() {
const navigation = useNavigation();
const gotoAboutUS = () => {
    navigation.navigate('About US');
}
const gotoFaqs =() => {
    navigation.navigate('FAQs');
}

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={gotoAboutUS}>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> About Us</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> Contact Us</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoFaqs}>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> FAQs</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> Terms & Conditions</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> Privacy Policy</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>
             
            <TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> Support</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
             </TouchableOpacity>
            
             <TouchableOpacity>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , backgroundColor:'white'}}>
            <Text style={styles.text}> Settings</Text>
            <Entypo name="chevron-right" size={24} color="#8e8b94" />
            </View>
            <View style = {styles.lineStyle} />
            </TouchableOpacity>
        


        </View>
    );
}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        color:'white'
      },
      text:{
          fontSize:17,
          fontWeight:'400',
          margin:5,
          color:'#8e8b94'
      }   ,
      lineStyle:{
        borderWidth: 0.3,
        borderColor:'#8e8b94',
        margin:4,
   },
   
})
export default More;