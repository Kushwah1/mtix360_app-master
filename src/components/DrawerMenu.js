import React, { Component } from "react";
import {
  StyleSheet,
  Text,Clipboard,
  TouchableOpacity,
  View,Image,
  FlatList
} from "react-native";
import {AsyncStorage} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import Images from '../assets/images/Images';
//import DeviceInfo from 'react-native-device-info';
//import {_GetAllLanguage,_ChangeLnaguage,_GetAllTextLanguageWise,_GetLinkToInvite} from '../Services/LanguageServices/LanguageServices'
//import Icon from "react-native-vector-icons/FontAwesome";
import {_CheckLoginStatus} from '../services/LoginS/loginServices'
import { ScrollView } from "react-native-gesture-handler";
class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state={
      allMaintextmenu:[],Submenutaskmangment:[],SubmenuMastermangment:[],SubmenuReviewmangment:[],
      isdropdownshow:false,Isdropdownmenufirst:false,IsdropdownmenuSec:false,
      IsdropdownmenuThird:false,Isdropdownmenufourth:false,Isdropdownmenufifth:false,

      firstTextofleftmenu:'',SecTextofleftmenu:'',ThirdTextofleftmenu:'',fourthTextofleftmenu:'',fifthTextofleftmenu:''

    }
    }


 async _Gotleftmenudata(){
  let response = await _CheckLoginStatus()
  console.log("response +---------------menu+++++++++++++++")
  console.log(response)
  let menutext = response.left_menu[0].submenus
  console.log(menutext)
  let data=[];
  menutext.forEach(element => {

    let textmenu =element.menuitem_text
    let menulink =element.menuitem_link

    data.push({textmenu:textmenu,menulink:menulink,});
    console.log(textmenu+"0000000000000000000000000")
    console.log(menulink)
  });

 this.setState({allMaintextmenu:data})
  console.log(this.state.allMaintextmenu)
 }





 async _GotleftmenudataSecrow(){
  let response = await _CheckLoginStatus()
  console.log("response +---------------menu+++++++++++++++")
  console.log(response)
  let menutext = response.left_menu[1].submenus
  console.log(menutext)
  let data=[];
  menutext.forEach(element => {

    let textmenu =element.menuitem_text
    let menulink =element.menuitem_link

    data.push({textmenu:textmenu,menulink:menulink,});
    console.log(textmenu+"0000000000000000000000000")
    console.log(menulink)
  });

 this.setState({Submenutaskmangment:data})
  console.log(this.state.Submenutaskmangment)
 }

 async _Gotleftmenudatathirdrow(){
  let response = await _CheckLoginStatus()
  console.log("response +---------------menu+++++++++++++++")
  console.log(response)
  let menutext = response.left_menu[2].submenus
  console.log(menutext)
  let data=[];
  menutext.forEach(element => {

    let textmenu =element.menuitem_text
    let menulink =element.menuitem_link

    data.push({textmenu:textmenu,menulink:menulink,});
    console.log(textmenu+"0000000000000000000000000")
    console.log(menulink)
  });

 this.setState({SubmenuMastermangment:data})
  console.log(this.state.SubmenuMastermangment)
 }
 



 async _GotleftmenudataFourthrow(){
  let response = await _CheckLoginStatus()
  console.log("response +---------------menu+++++++++++++++")
  console.log(response)
  let menutext = response.left_menu[3].submenus
  console.log(menutext)
  let data=[];
  menutext.forEach(element => {

    let textmenu =element.menuitem_text
    let menulink =element.menuitem_link

    data.push({textmenu:textmenu,menulink:menulink,});
    console.log(textmenu+"0000000000000000000000000")
    console.log(menulink)
  });

 this.setState({SubmenuReviewmangment:data})
  console.log(this.state.SubmenuReviewmangment)
 }

async _mainleftmenuText(){
  let checkloginresponse = await _CheckLoginStatus()
  console.log("checklogin +---------------menu+++++++++++++++")
  console.log(checkloginresponse)
  let checklogin= checkloginresponse.success
  let token=await  AsyncStorage.getItem('@app:session')
  console.log('GetToken')
  console.log(token)
  if(checklogin===1)
  {
   let menutext = checkloginresponse.left_menu[0].menuitem_text
   let menutext2 = checkloginresponse.left_menu[1].menuitem_text
   let menutext3 = checkloginresponse.left_menu[2].menuitem_text
   let menutext4 = checkloginresponse.left_menu[3].menuitem_text
   let menutext5 = checkloginresponse.left_menu[4].menuitem_text
   //let menutext6 = checkloginresponse.left_menu[5].menuitem_text
   //let menutext1 = checkloginresponse.left_menu[1].menuitem_text

   // alert(JSON.stringify(menutext))
    
    this.setState({firstTextofleftmenu:menutext,
     SecTextofleftmenu:menutext2,ThirdTextofleftmenu:menutext3,fourthTextofleftmenu:menutext4,fifthTextofleftmenu:menutext5
   })
    //alert(this.state.firstTextofleftmenu)
  }
}



    async componentDidMount() {
    this._Gotleftmenudata()
    this._GotleftmenudataSecrow()
    this._Gotleftmenudatathirdrow()
    this._GotleftmenudataFourthrow()
    this._mainleftmenuText()
    }

    async shouldComponentUpdate(){
      let token=await  AsyncStorage.getItem('@app:session')
      console.log('Taskmanangement')
      console.log(token)
      if(token !=='' && token!==null)
      {
        this._Gotleftmenudata()
        this._GotleftmenudataSecrow()
        this._Gotleftmenudatathirdrow()
        this._GotleftmenudataFourthrow()
        this._mainleftmenuText()
      }
     
     }

    _Gotopageasperlink(id){
    // alert(link)
//this.setState({isdropdownshow:! this.state.isdropdownshow})
if(id ===1)
{
  this.setState({Isdropdownmenufirst:! this.state.Isdropdownmenufirst})
}
else if(id===2){
  this.setState({IsdropdownmenuSec:! this.state.IsdropdownmenuSec})
}
else if(id===3){
  this.setState({IsdropdownmenuThird:! this.state.IsdropdownmenuThird})
}
else if(id===4){
  this.setState({Isdropdownmenufourth:! this.state.Isdropdownmenufourth})
}
    }

  render() {
  //alert(this.state.firstTextofleftmenu+'---------------')
    return (
      <View style={styles.container}>

    <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'center',height:100}}>
               <Image style={styles.Logoimage} source={Images.ApplogoFull}/> 
               </View>
               <View style={{backgroundColor:"transparent"}}>
              
    <TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
    onPress={this._Gotopageasperlink.bind(this,1)}
   >
     <Text style={[styles.menuItemText,{marginLeft:20}]}>{this.state.firstTextofleftmenu}</Text>
   </TouchableOpacity>
   {this.state.Isdropdownmenufirst ?            <View>
             </View>
       :
   <View>
<View style={{flexDirection:'column'}}>
{this.state.allMaintextmenu.map((item, key) =>(
   <TouchableOpacity
     onPress={this._Gotopageasperlink.bind(this,1)}
     style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}>
           <Text style={[styles.menuItemText,{marginLeft:80}]}>{item.textmenu}</Text>
           </TouchableOpacity>
           ))}
</View>
   </View>
  }

   <TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
    onPress={this._Gotopageasperlink.bind(this,2)}
   >
     <Text style={[styles.menuItemText,{marginLeft:20}]}>{this.state.SecTextofleftmenu}</Text>
 
   </TouchableOpacity>
   {this.state.IsdropdownmenuSec ?            <View>
             </View>
       :
   <View>
<View style={{flexDirection:'column'}}>
{this.state.Submenutaskmangment.map((item, key) =>(
   <TouchableOpacity
     onPress={this._Gotopageasperlink.bind(this,2)}
     style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}>
    <Image 
        source={Images.Plussign}
        style={{height:18,width:18,marginLeft:80,marginTop:15}}
        />
           <Text style={[styles.menuItemText,]}>{item.textmenu}</Text>
         
           </TouchableOpacity>
           ))}
</View>
   </View>
  }




<TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
    onPress={this._Gotopageasperlink.bind(this,3)}
   >
     <Text style={[styles.menuItemText,{marginLeft:20}]}>{this.state.ThirdTextofleftmenu}</Text>
 
   </TouchableOpacity>
   {this.state.IsdropdownmenuThird ?            <View>
             </View>
       :
   <View>
<View style={{flexDirection:'column'}}>
{this.state.SubmenuMastermangment.map((item, key) =>(
   <TouchableOpacity
     onPress={this._Gotopageasperlink.bind(this,3)}
     style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}>
    <Image 
        source={Images.Plussign}
        style={{height:18,width:18,marginLeft:80,marginTop:15}}
        />
           <Text style={[styles.menuItemText,]}>{item.textmenu}</Text>
         
           </TouchableOpacity>
           ))}
</View>
   </View>
  }




<TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
    onPress={this._Gotopageasperlink.bind(this,4)}
   >
     <Text style={[styles.menuItemText,{marginLeft:20}]}>{this.state.fourthTextofleftmenu}</Text>
 
   </TouchableOpacity>
   {this.state.Isdropdownmenufourth ?            <View>
             </View>
       :
   <View>
<View style={{flexDirection:'column'}}>
{this.state.SubmenuReviewmangment.map((item, key) =>(
   <TouchableOpacity
     onPress={this._Gotopageasperlink.bind(this,4)}
     style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}>
    <Image 
        source={Images.Plussign}
        style={{height:18,width:18,marginLeft:80,marginTop:15}}
        />
           <Text style={[styles.menuItemText,]}>{item.textmenu}</Text>
         
           </TouchableOpacity>
           ))}
</View>
   </View>
  }



<TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
    onPress={this._Gotopageasperlink.bind(this,5)}
   >
     <Text style={[styles.menuItemText,{marginLeft:20}]}>{this.state.fifthTextofleftmenu}</Text>
 
   </TouchableOpacity>



  <TouchableOpacity style={[styles.menuItem,{borderBottomColor:'black',borderBottomWidth:2}]}
   onPress={() =>this._Logout() }
  >
    <Text style={styles.menuItemText}>Logout</Text>
  </TouchableOpacity>
 
        </View>
      </ScrollView>

      </View>
    );
  }


  async _Logout(){
   // navigation.toggleDrawer()
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('kk')
    console.log(token)
    let blanktoken=await  AsyncStorage.removeItem('@app:session')
     console.log('blanktoken')
     console.log(blanktoken)
     this._storeData(blanktoken)
  const {navigate} = this.props.navigation;
  navigate('LoginScreen', {name: 'Jane'})
  this.props.navigation.closeDrawer();
  }



  _storeData =  (token) => {
    try {
      AsyncStorage.setItem('@app:session', token);
      console.log('bigway=-======================s')
      console.log(token)
      
    } catch (error) {
      // Error saving data
    }
  };

}

const DrawerItem = ({ navigation, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    {/* <Icon name={icon} size={25} color="#333" style={{ margin: 15 }} /> */}
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   // paddingTop: 70
   justifyContent:'center'
  },
  Logoimage:{
    resizeMode:'contain',
     width:'60%',
     height:'80%',
     padding:5,
    marginBottom:20,
    },
  menuItem: {
    flexDirection: "row",
    
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  }
});

export default DrawerMenu;