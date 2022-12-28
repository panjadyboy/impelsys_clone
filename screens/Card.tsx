import React from 'react';
import { View,Text , StyleSheet , Image, TouchableOpacity , ScrollView, FlatList} from 'react-native';

import { useNavigation  } from '@react-navigation/native';

import Descrption from '../data/Descrption';



function Card() {
    const navigation = useNavigation();

const gotoDetails = (id) => {
navigation.navigate('Details' , {id}  );
}

const datas = ({item}) => (
    <View style={styles.card}>
     <Image  source={item.image} style={styles.image}/>
     <Text style={styles.text}>{item.title1}</Text>
     <TouchableOpacity style={{marginTop:10}} onPress={ () => gotoDetails(item.id) }>
        <Text style={styles.btntext}>Details</Text>
     </TouchableOpacity> 
    </View>
)




    return (
        <View style={styles.container}>
         
          <Text style={styles.conttext}>Employee Induction</Text>
            
               <FlatList 
               horizontal
               data={Descrption}
               renderItem={datas} 
               />
                
       
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    
    
},
card:{
height:260,
width:200,
backgroundColor:'white',
borderRadius:10,
marginLeft:20,
overflow:'hidden',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0,
shadowRadius: 4.65,
elevation: 8,
marginRight:10
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
    alignSelf:'center',
    marginBottom:5
},
conttext:{
    fontSize:22,
    fontWeight:'600',
    paddingTop:30,
    marginBottom:20,
}

})
export default Card;