import React from 'react';
import { View,Text , StyleSheet , Image, TouchableOpacity , ScrollView, FlatList} from 'react-native';
import { useNavigation  } from '@react-navigation/native';

import Qa from '../data/Qa';
import Cmmi from '../data/Cmmi';
import Gdpr from '../data/Gdpr';



function QaScreen() {

   const navigation = useNavigation();


 const gotoQaDetails=( id)=>{
   
navigation.navigate('Q&A Details' , {id}  );

      console.log(id)
      }

    const  gotoCmmiDetails = (id) => {
      navigation.navigate('Cmmi' , {id}  );
      console.log(id)
    } 
    const  gotoGdprDetails = (id) => {
      navigation.navigate('Gdpr' , {id});
    }

const  Qmsdata = ({item}) => (

   <View style={styles.card}>
   <Image  source={item.image} style={styles.image}/>
   <Text style={styles.text}>{item.title1}</Text>
   <TouchableOpacity style={{marginTop:10}} onPress={() => gotoQaDetails(item.id) }>
      <Text style={styles.btntext}>Details</Text>
   </TouchableOpacity> 
   </View>

)

const Cmmidata = ({item}) => (
   <View style={styles.card}>
   <Image  source={item.image} style={styles.image}/>
   <Text style={styles.text}>{item.title1}</Text>
   <TouchableOpacity style={{marginTop:10}} onPress={() => gotoCmmiDetails(item.id) }>
      <Text style={styles.btntext}>Details</Text>
   </TouchableOpacity> 
   </View>
)
const Gdprdata = ({item}) => (
<View style={styles.card}>
   <Image  source={item.image} style={styles.image}/>
   <Text style={styles.text}>{item.title1}</Text>
   <TouchableOpacity style={{marginTop:10}} onPress={() => gotoGdprDetails(item.id) }>
      <Text style={styles.btntext}>Details</Text>
   </TouchableOpacity> 
   </View>

)
    return (
        <ScrollView style={styles.container} >
            
            <Text style={styles.headerText}>Quality Management System</Text>
            

                  <FlatList 
                  horizontal
                  data={Qa}
                  renderItem={Qmsdata}
                  />
            <Text style={styles.headerText}>Quality Management System</Text>

              <FlatList 
              horizontal
              data={Cmmi}
              renderItem={Cmmidata}
              />

            <Text style={styles.headerText}>GDPR</Text>

            <FlatList 
            horizontal
            data={Gdpr}
            renderItem={Gdprdata}
            />
               
        </ScrollView>
    );
}
const styles = StyleSheet.create({
container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    paddingTop:5,
    
},
card:{
height:270,
width:200,
backgroundColor:'white',
borderRadius:10,
marginLeft:20,
overflow:'hidden',
marginBottom:10,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0,
shadowRadius: 4.65,
elevation: 8,
},

image:{
    height:180,
    width:200,
    position:'absolute',
    top:0.1,
},
text:{
    fontSize:20,
    marginTop:190,
    alignSelf:'center',
    fontWeight:'600'
},
btntext:{
    color:'green',
    fontSize:20,
    fontWeight:'400',
    alignSelf:'center'
},
headerText:{
    fontSize:20,
    fontWeight:'700',
    marginLeft:10,
    marginBottom:20,
    marginTop:20
},

})
export default QaScreen;