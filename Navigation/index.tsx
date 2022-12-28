/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation  } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Button , Image} from 'react-native';



import Explore from '../screens/Explore';
import Card from '../screens/Card';
import QaScreen from '../screens/QaScreen';
import Dashboard from '../screens/Dashboard';
import More from '../screens/More';
import ItInductionInfo from '../ScreenInfo/ItIndctionInfo';
import QaDetails from '../ScreenInfo/QaDetails';
import Login from '../screens/Login';
import CmmiDetails from '../ScreenInfo/CmmiDetails'
import GdprDetails from '../ScreenInfo/GdprDetails';
import AboutUs from '../MoreInfo/AboutUs';
import Faqs from '../ScreenInfo/Faqs';

export default function Navigation() {
  
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="On Boarding" component={Card} options={{
          
              headerLeft:() => 
              <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
                () => {
                  navigation.navigate('Explore');
                }
              }/>
          
        }}  />

      <Stack.Screen name="QA & Compliance" component={QaScreen} options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('Explore');
          }
        }/>
      }}  />
        <Stack.Screen name="Details" component={ItInductionInfo } options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('On Boarding');
          }
        }/>
      }}/>

<Stack.Screen name="Q&A Details" component={QaDetails } options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('QA & Compliance');
          }
        }/>
      }}/>
      <Stack.Screen name="Cmmi" component={CmmiDetails} options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('QA & Compliance');
          }
        }/>
      }}/>
      <Stack.Screen name="Gdpr" component={GdprDetails} options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('QA & Compliance');
          }
        }/>
      }}/>
        <Stack.Screen name="Login here" component={Login}  />
    
        <Stack.Screen name="About US" component={AboutUs} options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('More');
          }
        }/>
      }} />
        <Stack.Screen name="FAQs" component={Faqs} options= {{
        
        headerLeft:() => 
        <Entypo name="chevron-left" size={30} color="black" style={{marginRight:50}} onPress={
          () => {
            navigation.navigate('More');
          }
        }/>
      }} />
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();


  function MyTabs() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
        
            tabBarIcon:()=>(  
              <MaterialCommunityIcons name="view-dashboard" size={30} color="black" />
          ) , 
      
          headerRight: () => (
            <Button
              title="Login"
              color="#08a069"
              onPress={() => navigation.navigate('Login here')}
            /> 
            
          ),
          headerLeft:() => (
            <Image source={require('../assets/logo.png')}  style={{width:40, height:40}}/>
          )
        }} 
        />
        <Tab.Screen name="Explore" component={Explore} options={{
          
            tabBarIcon:()=>(  
              <MaterialIcons name="explore" size={30} color="black" />
          ) 
          , 
      
          headerLeft:() => (
            <Image source={require('../assets/logo.png')}  style={{width:40, height:40}}/>
          )
          }}/>
        <Tab.Screen name="More" component={More}  options={{
        
            tabBarIcon:()=>(  
              <Feather name="more-horizontal" size={30} color="black" />
          ),
      
          headerLeft:() => (
            <Image source={require('../assets/logo.png')}  style={{width:40, height:40}}/>
          )
          
          }} />
      </Tab.Navigator>
    );
  }