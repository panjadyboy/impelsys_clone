import React from 'react';
import { View, ScrollView , Text , Image , FlatList , StyleSheet} from 'react-native';

function AboutUs (props) {
    return (
        <ScrollView style={styles.container}>
             <View style={{width:'100%' , height:90 , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertext}>About Us</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>Our Vision</Text>
            <Text style={styles.detailedText}>Our vision is to make the world a better place by helping spread knowledge through technology</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>Our Mission</Text>
            <Text style={styles.detailedText}>Our mission is to be the leader in enabling global publishers, education providers and enterprises to deliver online content and learning.</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>About Impelsys</Text>
            <Text style={styles.detailedText}>Impelsys is a leading provider of technology solutions for digital content publishers, learning providers and enterprises – managing content and learning delivery on its flagship platform – iPublishCentral Suite, The World’s Most Comprehensive Read-to-Learn Solution</Text>
            <Text style={styles.detailedText}>With experience spanning over a decade, Impelsys provides end-to-end technology solutions across digital product development lifecycle; from content and courseware production, enrichment, transformation, monetization to delivery and mobility</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>About iPublidhCentral</Text>
            <Text style={styles.detailedText}>iPublishCentral, a Suite of flagship products from Impelsys, is a comprehensive set of solutions designed to manage and deliver digital content and learning resources to B2B and B2C consumers. This cloud hosted infrastructure enables some of the biggest publishers, learning providers and enterprises in getting their content to intended audience wherever they are.</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>iPublishCentral Scholar – One platform for all academic, professional and scholarly content</Text>
            <Text style={styles.detailedText}>Journals, eBooks, Digital Courses, Videos, Continuing Education Courses, Whitepapers and more…..One Platform for all your academic, professional and scholarly products.</Text>
            <Text style={styles.detailedText}>iPublishCentral Scholar is a cloud hosted solution that enables publishers to integrate and securely deliver all their scholarly content and online courseware to researchers, professionals and students directly through their own branded portal.</Text>
            </View>

            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>iPublishCentral Health</Text>
            <Text style={styles.detailedText}>A digital content and learning delivery solution specifically designed for hospitals in Asia, to improve healthcare outcomes by fulfilling the training, development and compliance needs of healthcare professionals.</Text>
            <Text style={styles.detailedText}>iPublishCentral Health helps reduce onboarding turn-around time for nurses, allied healthcare professionals and non-clinical staff. iPublishCentral Health will also include certification courses to satisfy continuing professional development and medical education programs. iPublishCentral Health provides an extensive and up-to-date collection of journals, books and other content assets through it content eLibrary.</Text>
            </View>
            <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center'}}>
            <Text style={styles.containertexts}>Awards & Recognitions</Text>
              <View style={{justifyContent:'center', alignItems:"center"}}>
                <Image style={styles.image}
                source={require('../assets/about/1.jpg')} />
                <Image style={styles.image}
                source={require('../assets/about/2.jpg')} />
                <Image style={styles.image}
                source={require('../assets/about/3.jpg')} />
                <Image style={styles.image}
                source={require('../assets/about/4.jpg')} />
                <Image style={styles.image}
                source={require('../assets/about/5.jpg')} />
              </View>
                </View>

                <View style={{width:'100%' , backgroundColor:'white' , justifyContent:'center' }}>
                <Text style={styles.containertexts}>Management Team</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/1.jpg')}/>
                <Text style={styles.admintext}>SAMEER SHARIFF</Text>
                <Text style={styles.adminsubtext}>Founder & CEO</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/2.jpg')}/>
                <Text style={styles.admintext}>DEEPAK KAUSHIK</Text>
                <Text style={styles.adminsubtext}>Consulting CFO</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/3.jpg')}/>
                <Text style={styles.admintext}>KOTESH GOVINDARAJU</Text>
                <Text style={styles.adminsubtext}>Sales Head Americas</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/4.jpg')}/>
                <Text style={styles.admintext}>VIPIN CHANDRAN</Text>
                <Text style={styles.adminsubtext}>AVP - Product Development</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/5.jpg')}/>
                <Text style={styles.admintext}>STEFAN KEND</Text>
                <Text style={styles.adminsubtext}>Sales Head ROW -EMEA</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/6.jpg')}/>
                <Text style={styles.admintext}>UDAY MAJITHIA</Text>
                <Text style={styles.adminsubtext}>AVP - Tech Services & ODC</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/7.jpg')}/>
                <Text style={styles.admintext}>PANDITH JANTAKAHALLI</Text>
                <Text style={styles.adminsubtext}>AVP  Product Management</Text>

                <Image style={styles.adminimage} 
                source={require('../assets/admin/8.jpg')}/>
                <Text style={styles.admintext}>SARASWATHI HERUMATH</Text>
                <Text style={styles.adminsubtext}>AVP - Quality Management</Text>

                </View>
            




        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    containertext:{
        fontSize:25,
        fontWeight:'600',
        marginTop:30,
        color:'black',
        margin:10
    },
    containertexts:{
        fontSize:25,
        fontWeight:'400',
        marginTop:30,
        color:'black',
        margin:10
    },
    detailedText:{
        margin:10,
        marginTop:10,
        color:'black',
        fontSize:18,
        fontWeight:'400'
    },
    image:{
        width:230,
        height:230,
    },
    adminimage:{
        width:300,
        height:300,
        marginTop:35,
        alignSelf:'center'
    },
    admintext:{
        fontSize:15,
        fontWeight:'400',
        marginTop:20,
        marginLeft:40
    },
    adminsubtext:{
        fontSize:15,
        fontWeight:'500',
        marginTop:10,
        alignSelf:'center',
        color:'#616f7b'
    }
})
export default AboutUs;