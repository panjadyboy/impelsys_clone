import React from 'react';

import { View , Text , StyleSheet ,Image  } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Descrption from '../data/Descrption';
import {useRoute} from '@react-navigation/native'

const ItInductionInfo = () => {

    

const route = useRoute();

const gotid = route.params?.id;

console.log( gotid)

const data = Descrption.find((g) => g.id === gotid)


return(
<View style={styles.container}>
<View style={styles.containertwo}>

    <Image source={data?.image} style={styles.image}/>
    <Text style={styles.text}>{data?.title1}</Text>
</View>
<View style = {styles.lineStyle} />
<View>
    <Text style={styles.textdescription}>Course Overview</Text>
</View>
<View style={{flexDirection:'row' , marginTop:20 , marginLeft:5}}>
<Text style={styles.overviewtext}>Code :</Text>
<Text style={styles.overviewtexttwo}>it induction</Text>
</View>
<View style={{flexDirection:'row' , marginTop:20 , marginLeft:5}}>
<Text style={styles.overviewtext}>Author :</Text>
<Text style={styles.overviewtexttwo}>--</Text>
</View>
<View style={{flexDirection:'row' , marginTop:20 , marginLeft:5}}>
<Text style={styles.overviewtext}>Publisher :</Text>
<Text style={styles.overviewtexttwo}>Impelsys Inc</Text>
</View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:17, fontWeight:'500',marginLeft:10 , marginRight:5}}>{data?.description}</Text>
</View>
</View>

);
}
const styles = StyleSheet.create({
    container:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',
  marginTop:30
},
image:{
    width:100,
    height:100,
    marginTop:20,
    marginLeft:20,
    borderRadius:6
},
containertwo:{
    flexDirection:'row',
    alignItems:'center',
},
text:{
    fontWeight:'500',
    fontSize:20,
    marginLeft:20,
    marginBottom:20,
    
},
lineStyle:{
    borderWidth: 0.3,
        borderColor:'#8e8b94',
        margin:10,
    
},
textdescription:{
    fontWeight:'500',
    fontSize:20,
    marginLeft:10
},
overviewtext:{
    color:'#4f5255',
    marginLeft:5,
    marginRight:5,
    fontSize:15,
    fontWeight:'600'

},
overviewtexttwo:{
   color:'black' ,
   fontSize:15,
   fontWeight:'600'
}

});
export default ItInductionInfo