import React,{Component} from 'react';
import { Settings } from 'react-native';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
  import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase'


export default class SettingsScreen extends Component{
    constructor(){
        super();
        this.state = {
            emailId   : '',
            firstName : '',
            lastName  : '',
            address   : '',
            contact   : '',
            docId     : ''
        }
    }
    getUserDetails = ()=>{
        var user = firebase.auth().currentUser
        var email = user.email
        db.collection('users').where('email_ID','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_ID,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }

 componentDidMount(){
    this.getUserDetails()
  }    
    render(){
        return(
            <View style = {styles.container}>
                 <MyHeader title="Settings" navigation={this.props.navigation}/>
            <View style = {styles.formContainer}>
            <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.firstName}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.lastName}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.address}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.contact}
        />  
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.emailId}
        />  
        <TouchableOpacity style = {styles.button}
                onPress={()=>{}}>              
                <Text style = {styles.buttonText}>Save</Text>
              </TouchableOpacity>      
         </View>         
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })
  