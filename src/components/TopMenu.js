import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
TouchableHighlight,TouchableOpacity,
Image,TextInput,
Alert,
ScrollView,
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import PropTypes from 'prop-types';
import Images from '../assets/images/Images';
import {AsyncStorage} from 'react-native';
class TopMenu extends React.Component {
constructor(props) {
super(props);
this.state={

}
}
_GotoAddTaskPage(){
    const {navigate} = this.props.navigation;
    navigate('AddTaskScreen', {name: 'Jane'}) 
}

render() {

    return (
        <View style={{position:'relative'}}>
      <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'white',height:70}}>
<TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image style={{width:20,height:20,resizeMode:'contain'}} source={Images.Menuiamge}/>
</TouchableOpacity>
{/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}
//onPress={this._OverviewsDta.bind(this)}
style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image 
        source={Images.Crosssign}
        style={{height:20,width:20}}
        />
        <Text style={{fontSize:12,color:"#015380"}}>
           Overview
        </Text>
</TouchableOpacity> */}

<TouchableOpacity onPress={this._GotoAddTaskPage.bind(this)} style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image 
        source={Images.Plussign}
        style={{height:18,width:18}}
        />
        <Text style={{fontSize:12,color:"#015380"}}>
            Add Task
        </Text>
</TouchableOpacity>
<View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image style={{width:50,height:50,resizeMode:'contain',borderRadius:50/2}} source={Images.Applogo}/>
</View>
{/* <View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image 
        source={Images.Crosssign}
        style={{height:20,width:20}}
        />
        <Text numberOfLines={1} style={{fontSize:12,color:"#015380",width:70}}>
           Close Tasks
        </Text>
</View> */}

{/* <View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:70,alignItems:'center'}}>
<Image 
        source={Images.Directionalsign}
        style={{height:20,width:20}}
        />
        <Text style={{fontSize:12,color:"#015380",fontWeight:'500'}}>
           Reviews
        </Text>
</View> */}

</View>
     </View>
   );
}
}
const styles = StyleSheet.create({
Logoimage:{
width:200,
height:58,
resizeMode:'contain'
},animatedBox: {
    flex: 1,
    backgroundColor: "white",
    position:'relative'
    //padding: 10,
    //flexDirection:'row',
    
  },
Titleright:{
    alignItems:'flex-end'
    },
Titlerightsub:{
flexDirection:'column',
justifyContent:'center',
backgroundColor:'#27becf',
height:80,
borderTopLeftRadius:40,
borderBottomLeftRadius:40,
width:45
},
Titlecentersub:{
flexDirection:'column',
justifyContent:'center',
height:80
},
header:{
    top:0,
height:80,
backgroundColor: "white",
flexDirection:'row',
justifyContent:'space-between',
},
Titleleft:{
    // backgroundColor:"red",
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'flex-start'
     },
Titlecenter:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:25,
alignItems:'center'
},
Titlecentersub:{
flexDirection:'column',
justifyContent:'flex-end',
height:80
},
}); 



export default TopMenu;