import React , {useState} from 'react';
import { View , Text , StyleSheet  , Image, _ScrollView, TouchableOpacity, ScrollView} from 'react-native';

function Faqs(props) {
const[show1 , setShow1] = useState(false);
const[show2 , setShow2] = useState(false);
const[show3 , setShow3] = useState(false);
const[show4 , setShow4] = useState(false);
const[show5 , setShow5] = useState(false);
const[show6 , setShow6] = useState(false);
const[show7 , setShow7] = useState(false);
const[show8 , setShow8] = useState(false);
const[show9 , setShow9] = useState(false);
const[show10 , setShow10] = useState(false);
const[show11 , setShow11] = useState(false);
const[show12 , setShow12] = useState(false);

    return (
    <ScrollView style={{paddingTop:20 , backgroundColor:'white'}}>
        <Text style={{fontSize:25 , fontWeight:'600' , marginLeft:10 , marginBottom:20}}>Impelsys Academy FAQs</Text>
        
        <TouchableOpacity  onPress={() => setShow1(!show1)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>1. how do i register?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show1 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>If you are an existing member of the organization, registration can be done either by using your phone number or your email ID.</Text>

        </View>
          ): null }
         
            </ScrollView>


            <TouchableOpacity  onPress={() => setShow2(!show2)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>2. Having trouble with registration ?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show2 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>During registration, if you face errors such as “The mobile no. *** is not registered for verification” OR “The email ID *** is not registered for verification” - contact your organization administrator to check whether your phone number is present in the organization database or not.</Text>
         <Text style={styles.answerText}>Registration can only be done using the phone number/email that has been submitted by you at the time of joining the organization. Any changes to the given records need to be informed to administrator</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow3(!show3)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>3. Having trouble logging in?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show3 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>If you have forgotten your password, tap on the “Forgot Password” link on the login screen.</Text>
        <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/1.jpg')}/>
        <Text style={styles.answerText}>You will be redirected to “Reset Password” page.</Text>
        <Text style={styles.answerText}>Please enter your registered phone no and tap on “Continue”.</Text>
        <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/3.jpg')}/>
        <Text style={styles.answerText}>You will get an OTP for verifying your phone number.</Text>
        <Text style={styles.answerText}>Enter the OTP to reset your password.</Text>
        <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/2.jpg')}/>
        <Text style={styles.answerText}>Once password is reset, continue to the “Login Screen” and login with your new password</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow4(!show4)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>4. Where can i get my assaignment details?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show4 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>If you go to “My Assignment” tab in dashboard, you can see the courses assigned to you grouped under the following categories:</Text>
        <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/6.jpg')}/>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow5(!show5)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>5. How can i browse through the courses available on the app ?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show5 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>Courses in the IPC app is classified into 2 main categories –</Text>
        <Text style={{fontSize:18 , fontWeight:'600'}}>Onboarding Courses</Text>
        <Text style={{fontSize:18 , fontWeight:'600'}}>QA & Compliance courses</Text>
         <Text style={styles.answerText}>The ‘Explore’ tab displays categorically, all courses available on your app.</Text>
         <Text style={styles.answerText}>Tap on the category of your choice to view the course that belongs to it.</Text>
         <Text style={styles.answerText}>If you tap on “Details” button against the course, it will show you “Course Overview” – author details, publisher details, planned start date & end date, no. of attempts. You can tap on the course cover also to get the same details.</Text>
         <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/4.jpg')}/>
         <Text style={styles.answerText}>Tap on “Results” tab to see all the attempts made so far and the result for those attempts</Text>
         <Image style={{width:'80%' , height:530 , marginTop:20 , marginBottom:20 , alignSelf:'center'}}source={require('../assets/faqs/5.jpg')}/>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow6(!show6)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>6. How can i search for a course ?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show6 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>The app lets you search for a course either by using the exact course title, or by using a specific keyword.</Text>
         <Text style={styles.answerText}>Any course which contains the keyword either in its title name or title description will be reflected in the search result</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow7(!show7)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>7. When can i start a course ?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show7 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>You can start the course on the date assigned by the instructor.</Text>
         <Text style={styles.answerText}>It will be shown under “Assigned to Me” tab in dashboard</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow8(!show8)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>8. What platforms are supported?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show8 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>iOS Device browser – version 10 and above</Text>
        <Text style={styles.answerText}>Android Device browser – version 5 and above</Text>
        <Text style={styles.answerText}>iOS app – the application can be installed on iPhone and iPad having version 9.0 and above.</Text>
         <Text style={styles.answerText}>Android App – the application can be installed on android tablets and smartphones having version 5.x and above.</Text>
         <Text style={styles.answerText}>Content available on Impelsys Academy app are not subjected to download and to be used by third party e-book readers</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow9(!show9)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>9. How can i install the impelsys Academy app?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show9 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>Open the portal in your device(android or ios) browser.</Text>
         <Text style={styles.answerText}>Scroll down to 'Download App' section on the 'EXPLORE' page.</Text>
         <Text style={styles.answerText}>tap on the download link to navigate to the App store(ios)/ Google Play store(android) to install the app</Text>
          <Text style={styles.answerText}>You can also go to Google Play store (for android) and App store (for iOS) and search for the app(Impelsys Academy) to install.</Text>
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow10(!show10)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>10. Do i need to pay for downloading the impelsys Academy app?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show10 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>The app is free to download and doesn’t need any additional payments – for both android & ios</Text>
         
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow11(!show11)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>11. Do i need to pay for the courses?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show11 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>You don’t have to pay for any of the courses or registration. If you are a member of the organization, then all you need to do is register and avail the courses. But please keep in mind, you can only avail courses that has been assigned to you by the Instructor</Text>
         
        </View>
          ): null }
         
            </ScrollView>
            <TouchableOpacity  onPress={() => setShow12(!show12)}>
       <View style={styles.questionbar}>
        
    <Text style={styles.questiontext}>12. Can my account expire?</Text>
       
    </View>
        </TouchableOpacity>
        <ScrollView >
        {show12 ? (<View style={styles.answertab}>
        <Text style={styles.answerText}>Once registered, your account will never expire as long as you are part of the organization</Text>
         
        </View>
          ): null }
         
            </ScrollView>
            


            </ScrollView>
       
    
    
    );
}
const styles = StyleSheet.create({
    questionbar:{
        width:'95%' ,height:70, borderRadius:10,alignSelf:'center',
         backgroundColor:'#d1dbd6' , justifyContent:'center' , marginTop:5 , marginLeft:20 , marginRight:20
    },
    questiontext:{
        fontSize:19,fontWeight:"400" , marginLeft:10 , margin:5
    },
    answertab:{
        marginTop:30,marginLeft:20,marginRight:20 , marginBottom:20
    },
    answerText:{
        fontSize:17 , fontWeight:'400' , paddingTop:3 , marginBottom:5
    }

})
export default Faqs;