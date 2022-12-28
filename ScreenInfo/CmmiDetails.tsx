import React from 'react';

import { View , Text , StyleSheet ,Image , ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Descrption from '../data/Descrption';
import {useRoute} from '@react-navigation/native'

import Cmmi from '../data/Cmmi';

const CmmiDetails = () => {

    const route = useRoute();

    const qid = route.params?.id;
    
    const data = Cmmi.find((q) => q.id === qid)


return(
<ScrollView style={styles.container}>
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
<Text style={styles.overviewtexttwo}>{data?.title1}</Text>
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
    <Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.description}</Text>
</View>
<View >
<Text style={{marginTop:20 , fontWeight:'500',
    fontSize:20,
    marginLeft:10,
    marginBottom:10,}}>{data?.header}</Text>
<Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.body}</Text>
<Text style={{marginTop:20 , fontWeight:'500',
    fontSize:20,
    marginLeft:10,
    marginBottom:10,}}>{data?.header1}</Text>
    <Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.body1}</Text>
    <Text style={{marginTop:20 , fontWeight:'500',
    fontSize:20,
    marginLeft:10,
    marginBottom:10,}}>{data?.header2}</Text>
    <Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.body2}</Text>
    
    <Text style={{marginTop:20 , fontWeight:'500',
    fontSize:20,
    marginLeft:10,
    marginBottom:10,}}>{data?.header3}</Text>
<Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.body3}</Text>
    <Text style={{marginTop:20 , fontWeight:'500',
    fontSize:20,
    marginLeft:10,
    marginBottom:10,}}>{data?.header4}</Text>
    <Text style={{fontSize:17, fontWeight:'400',marginLeft:10 , marginRight:5}}>{data?.body4}</Text>

</View>

</ScrollView>

);
}
const styles = StyleSheet.create({
    container:{
  width:'100%',
  height:'100%',
  backgroundColor:'white',

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
    alignSelf:"center"
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
    fontWeight:'400'

},
overviewtexttwo:{
   color:'black' ,
   fontSize:15,
   fontWeight:'600'
}

});
export default CmmiDetails;