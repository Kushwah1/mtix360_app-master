import React, {Component} from 'react';
import {
StyleSheet,SafeAreaView,
Text,Linking,BackHandler, 
View,
TouchableHighlight,TouchableOpacity,
Image,TextInput,
Alert,
ScrollView,
} from 'react-native';
import {loginTaskManageradmin} from './../../services/LoginS/loginServices';
import {GRADEINT_COLOR} from './../../styles/colors';
import CommonStyles  from './../../styles/CommonStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import SplashScreen from './../Spalash/SpalashScreen'
import {AsyncStorage} from 'react-native';
import Images from '../../assets/images/Images';
import {_CheckLoginStatus} from '../../services/LoginS/loginServices'
export default  class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { username: '',isLoading: true, password:''  ,ErrorStatus : true,ErrorStatususername : true,Usernameplacehlder:'',Passwordplacehlder:'',
       validusererror:false,Forgotpasswordtext:'',Logintext:'',showLoading:false}
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result')},
        2500
      )
    );
  }
  
  async  componentDidMount() {
 let checkloginresponse = await _CheckLoginStatus()
 console.log("checklogin +----------------task")
 console.log(checkloginresponse)
 let checklogin= checkloginresponse.success
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('GetToken')
    console.log(token)
    if(checklogin===1)
    {
      const {navigate} = this.props.navigation;
      navigate('DashBoardScreen', {name: 'Jane'})
    }
    else{
      const {navigate} = this.props.navigation;
      navigate('LoginScreen', {name: 'Jane'})
    }
    
        const data = await this.performTimeConsumingTask();
  

        if (data !== null) {
          this.setState({ isLoading: false });
        }


  
 //BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

  }
  static navigationOptions = {  
    headerLeft: null,
    gesturesEnabled: false,
    headerMode: 'none',
    
  }; 
  handleBackButton = () => {

    BackHandler.exitApp()
     return true;
   } 


  onEnterTextuser = (username) =>{
    this.setState({showLoading:false})
    if(username!==''&& username!==null){

      this.setState({username : username.trim(), ErrorStatususername : true,showLoading:false}) ;
     
   }else{
    this.setState({username : username, ErrorStatususername : false,validusererror:false,showLoading:false}) ;
   }
 }
 
 onEnterText = (password) =>{
  this.setState({showLoading:false})
  if(password!==''&& password!==null){

    this.setState({password : password, ErrorStatus : true,validusererror:false}) ;
   
 }else{

  this.setState({password : password, ErrorStatus : false,validusererror:false}) ;
 }
}

  
      render() {
          if (this.state.isLoading) {
            return <SplashScreen />;
          } 
        
        const {navigate} = this.props.navigation;
        return (
        
        <SafeAreaView style={styles.container}>
        {/* <EnterPriseNav
        navigation={this.props.navigation}
         /> */}
        
        <Dialog
                dialogStyle={{backgroundColor:'transparent'}}
          containerStyle={{backgroundColor:'transparent'}}
          style={{backgroundColor:'transparent'}}
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: true });
            }}
          >
            <DialogContent style={{backgroundColor:'transparent'}}>
        <View style={{backgroundColor:'transparent'}}>
        {/* <Image 
        
        source={require('./../Images/gif2.gif')} 
        style={{alignItems:'center',resizeMode:"contain",marginTop:17}}
        /> */}
        
        </View>
            </DialogContent>
          </Dialog>
        <ScrollView>
        <View style={styles.header}>
        <Image style={styles.Logoimage} source={Images.ApplogoFull}/>
        </View>
        
        
        
        
        
        
        
        
        
        <View style={styles.box2}>
        <View style={{flexDirection:'column',justifyContent:'space-between',height: hp('55%'),width:'95%',backgroundColor:'transparent'}}>
        <View style={{alignItems:'center',}}>
        {/* <Image style={{height:150,width:150,marginTop:10,padding:15}} source={require('../Images/REG4.png')}/>   */}
        {/* <View style={{alignItems:'center',marginTop:10}}>
        <Text style={styles.boldtext}>QR CODE</Text>
        
        </View> */}
        <View style={{alignItems:'center',marginTop:20}}>
        <Text style={styles.texts}>LOG IN{this.state.randomNum}</Text>
        <Text></Text>
        </View>
        
        </View>
        
        
        <LinearGradient 
     colors={GRADEINT_COLOR}
        style={styles.LoginButton}>
        <View style={{flexDirection:'column',justifyContent:'center',height:'50%',width:'90%',backgroundColor:'transparent',}}>
        
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={styles.textInputField}>
       <TextInput 
         placeholder="User Name"
         placeholderTextColor='white'
         onChangeText={username => this.onEnterTextuser(username)} 
         value={this.state.username}
         autoCapitalize="none"
         autoCorrect={false} 
         style={styles.textInput}
         underlineColorAndroid='transparent'
       />
     </View> 
     </View>
     { this.state.ErrorStatususername == false ? (
             <Text style={styles.errorMessage}>
               * Please enter the username to proceed.
             </Text>
            ) : null  }
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={styles.textInputField}>
        <TextInput 
         placeholder="Password"
         placeholderTextColor='white'
         textContentType='password'
         secureTextEntry={true}
         value={this.state.password}  
         onChangeText={password => this.onEnterText(password)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={styles.textInput}
         underlineColorAndroid='transparent'
       /> 
     </View> 
     </View>
     { this.state.ErrorStatus == false ? (
             <Text style={styles.errorMessage}>
               * Please enter the Password to proceed.
             </Text>
            ) : this.state.validusererror?(
              <Text style={styles.errorMessage}>
                * Invalide login details
              </Text>
             ) : null  }
        <TouchableOpacity  onPress={this._LoginAdmin.bind(this)} style={{flexDirection:'row',justifyContent:'flex-end',width:'95%'}}>
<Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Forgot Password ?</Text>
</TouchableOpacity>
<View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={styles.LoginButtonNEW} 
           onPress={this._LoginAdmin.bind(this)}
            >
              {this.state.showLoading ?
                  <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
         
             :
             <Text style={styles.LoginButtonTextNew}>Log In</Text>  
              }
           </TouchableOpacity>
        </View>
         
        
        
        </View>
        </LinearGradient>
        
        </View>
        
        
        </View>
        
        

        </ScrollView>
        
        </SafeAreaView>
        
        
        );
        }
        _storeData =  (token) => {
          try {
            AsyncStorage.setItem('@app:session', token);
            console.log('Taskmanangement')
            console.log(token)
            
          } catch (error) {
            // Error saving data
          }
        };
       async _LoginAdmin(){
         this.setState({showLoading:true})
    let username=this.state.username
    let password=this.state.password
    let data=  await  loginTaskManageradmin(username,password);
    console.log('Login Successfully')
    console.log(data)
          if(data.success===1)
          {
            let token=data.token
            this._storeData(token)
            console.log('newtoken')
            console.log(token)

            const {navigate} = this.props.navigation;
            navigate('DashBoardScreen', {name: 'Jane'})
            
            this.setState({showLoading:false,validusererror:false})
          }
          else{
           // alert(data.result)
            this.setState({showLoading:false,validusererror:true})
          }

        }

    _GotoForgotpassword(){
      const {navigate} = this.props.navigation;
      navigate('ForgotPasswordScreen', {name: 'Jane'})
    }



  }
  const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'white',

},
LoginButtonTextNew:{
fontFamily: "Acephimere Bold",
color: "#ee6769",
fontSize:25,
},
LoginButtonNEW:{
marginTop:25,
height:50,
width:'95%',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
borderRadius:5,
backgroundColor: "white",
borderWidth:2,
borderColor:"white",
},

textInput: {
width: '80%',
height: 45,
paddingLeft: 9,
color: 'white',
fontSize: 18,
fontFamily: "Acephimere Bold",
},
textInputField: {
marginTop:5,
flexDirection: 'row',
width: '90%',
height: 45,
marginBottom: 10,
borderColor:'white',
borderBottomWidth: 1,
borderStyle: 'solid',
//backgroundColor:'green',
},
errorMessage: {
fontSize: 14,
fontFamily: "Acephimere Bold",
color:"red",
textAlign:'left',
marginLeft:17
},

texts:{
fontFamily: "Brandon_bld",
color: "black",
fontSize:45,
textAlign:'center'
},
LoginButtonText:{
fontFamily: "Brandon_bld",
color: "white",
fontSize:25,
textAlign:'center'
},

LoginButton: {
marginTop:50,
height:'90%',
marginBottom:0,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
borderRadius:30,
backgroundColor: "white",
shadowOffset:{ width: 10, height: 10, },
shadowColor: 'black',
shadowOpacity: 1.0,
elevation: 15,
},

box2: {
marginLeft:15,
marginRight:15,
height: hp('75%'),
marginTop:25,
backgroundColor: 'transparent',
alignItems: 'center',
borderTopLeftRadius:30,
borderTopRightRadius:30,
},
box: {
marginTop:15,
marginBottom:5,
marginLeft:8,
height:60,
backgroundColor: 'transparent',
flexDirection: 'row',
justifyContent:'flex-start',
},
Logoimage:{
resizeMode:'contain',
width:"100%",
height:'80%',
padding:5,
marginTop:10,
marginBottom:2,
},
Loaderimage:{
width:150,
height:45
},
header:{
width:'100%',
height:80,
backgroundColor: "white",
flexDirection:'row',
justifyContent:'space-between',
marginTop:100
},
});