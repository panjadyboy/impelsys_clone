import React from 'react';
import { View,Text , StyleSheet , Image, TouchableOpacity , Button} from 'react-native';
import { useNavigation  } from '@react-navigation/native';


const Explore = (props) =>  {

    const navigation = useNavigation();

    const goToCard = () => {
        navigation.navigate("On Boarding");
    };
    
const goToQa = () => {
    navigation.navigate("QA & Compliance");
}
    return (
        <View style={styles.container}>
          <View style={styles.imageCard}>
              <Image source={require('../assets/explore/explore.jpg')} style={styles.image}/>
             <Text style={styles.text}>Explore categories</Text>
          </View>
          <View style={styles.tabView}>
            <TouchableOpacity onPress={goToCard}>
         <View style={styles.tabs} >
            <Text style={styles.tabText}>On Boarding</Text>
            </View>   
            </TouchableOpacity>
            <TouchableOpacity onPress={goToQa}>
         <View style={styles.sectabs}>
         <Text style={styles.tabText}>QA & Compliance</Text>
            </View> 
            </TouchableOpacity>  
         </View>
      
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
} ,
imageCard:{
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:280,
   

} ,
image:{
    width:'90%',
    height:230,
    borderRadius:20,
    marginBottom:10
},
text:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    
    marginLeft:10,
    alignSelf:'flex-start',
    marginTop:20
},
tabs:{
    height:100,
    width:170,
    borderRadius:10,
    backgroundColor:"#013751",
    marginLeft:15,
    marginRight:30,
    justifyContent:'center',
    alignItems:'center'
},
sectabs:{
    height:100,
    width:170,
    borderRadius:10,
    backgroundColor:"#833418",
    marginLeft:5,
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
    
},
tabView:{
    flexDirection:'row',
    marginTop:30
},
tabText:{
    color:'white',
    fontSize:20,
    fontWeight:'500'
}
})
export default Explore;