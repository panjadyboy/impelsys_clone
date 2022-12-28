import React from 'react';
import { View,Text ,Image , StyleSheet} from 'react-native';

function Dashboard() {
    return (
        <View style={styles.container}>
       
   <Image style={styles.image}
   
   source={require('../assets/dashboard/dashboard.jpg')}/>

        </View>
    );
}
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'white',
alignItems:'center',
justifyContent:'center'
} ,
image:{
    
}
})
export default Dashboard;