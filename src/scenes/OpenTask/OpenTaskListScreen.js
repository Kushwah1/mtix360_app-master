import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
StyleSheet,SafeAreaView,
Text,Linking,BackHandler, 
View,
TouchableHighlight,TouchableOpacity,
Image,TextInput,
Alert,
ScrollView,
} from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
 
import {_GetOpenTask,_GetAllClientOpenTask,_DeleteTaskInOpenTaskList} from './../../services/OpenTask/OpenTaskServices';
import {GRADEINT_COLOR} from './../../styles/colors';
import CommonStyles  from './../../styles/CommonStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, {
        DialogTitle,
        DialogContent,
        DialogFooter,
        DialogButton,
        SlideAnimation,
        ScaleAnimation,
        } from 'react-native-popup-dialog';
import SplashScreen from './../Spalash/SpalashScreen'
import {AsyncStorage} from 'react-native';
import Images from '../../assets/images/Images';
import {_GetCountOpenAndCloseTask} from './../../services/DashBoard/DashBoardServices'
import TopMenu from './../../components/TopMenu'
export default  class OpenTaskListScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { 
        visible: false,showLoader:false,scaleAnimationDialog: false ,showLoader:false,scaleAnimationDialogManager:false, scaleAnimationDialogDelete: false,
        scaleAnimationDialogStatus:false,scaleAnimationDialogAssigne:false, FilterOptionShow:false,
        OpenTaskFullList:[],ClintnameDDList:[],AssignenameDDList:[],ManagernameDDList:[],StatusTypeDDList:[],
        deleteRowid:''
       
       
        
    }

}
  
async GetAllOpenandClosetask(){
        this.setState({showLoader: true,})
        let fulldata= await _GetOpenTask()
        let Checkdata=fulldata.success
        //alert(fulldata.success)
        
        if(Checkdata==1){
          let ArrayListData=fulldata.data.result_set
          let data=[];
          ArrayListData.forEach(element => {
      
            let ClientName =element.client_name
            let TaskDescription =element.task_details
            let Duedate =element.due_date
            let Manager =element.manager
            let AssignedTo =element.assigned_to
            let TicketID =element.ticket_id

            data.push({
              ClientName:ClientName,
              TaskDescription:TaskDescription,
              Duedate:Duedate,
              Manager:Manager,
              AssignedTo:AssignedTo,
              TicketID:TicketID
              
            });
          });
          this.setState({OpenTaskFullList:data,})
       console.log(this.state.OpenTaskFullList)
       this.setState({showLoader: false,})
                
        }
        else{
                //alert('Something went wrong in all task!') 
                const {navigate} = this.props.navigation;
                navigate('LoginScreen', {name: 'Jane'})
                this.props.navigation.closeDrawer();
        }
}

async GetAllClientOpentask(){
        let AllClintdata= await _GetAllClientOpenTask()
        let Checkdata=AllClintdata.success
        let ArrayAllclintListData=AllClintdata.data.clients
        if(Checkdata==1){
          let data=[];
          ArrayAllclintListData.forEach(element => {
      
            let ClientNameDropD =element.channel_partner_name
            data.push({
                ClientNameDropD:ClientNameDropD,
              
            });
          });
          this.setState({ClintnameDDList:data,})
       console.log(this.state.ClintnameDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}
async GetAllAssigneOpentask(){
        let AllClintdata= await _GetAllClientOpenTask()
        let Checkdata=AllClintdata.success
        let ArrayAllAssigne_ListData=AllClintdata.data.assignes
        if(Checkdata==1){
          let data=[];
          ArrayAllAssigne_ListData.forEach(element => {
      
            let Assigne_FNameDropD =element.first_name
            let Assigne_LNameDropD =element.last_name
            data.push({
                Assigne_FNameDropD:Assigne_FNameDropD,
                Assigne_LNameDropD:Assigne_LNameDropD
              
            });
          });
          this.setState({AssignenameDDList:data,})
       console.log(this.state.AssignenameDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}
async GetAllManagerOpentask(){
        let AllClintdata= await _GetAllClientOpenTask()
        let Checkdata=AllClintdata.success
        let ArrayAllManager_ListData=AllClintdata.data.Manager
        if(Checkdata==1){
          let data=[];
          ArrayAllManager_ListData.forEach(element => {
      
            let Assigne_FNameDropD =element.first_name
            let Assigne_LNameDropD =element.last_name
            data.push({
                Assigne_FNameDropD:Assigne_FNameDropD,
                Assigne_LNameDropD:Assigne_LNameDropD
              
            });
          });
          this.setState({ManagernameDDList:data,})
       console.log(this.state.ManagernameDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}
async GetAllStatusOpentask(){
        let AllClintdata= await _GetAllClientOpenTask()
        let Checkdata=AllClintdata.success
        let ArrayStatusType_ListData=AllClintdata.data.statuses
        if(Checkdata==1){
          let data=[];
          ArrayStatusType_ListData.forEach(element => {
      
            let StatusTypeDropD =element.status_text
            data.push({
                StatusTypeDropD:StatusTypeDropD,
              
            });
          });
          this.setState({StatusTypeDDList:data,})
       console.log(this.state.StatusTypeDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}

afterdeletetask(){
        this.GetAllOpenandClosetask()
}

_handleStateChange = state => {
        //alert('Refreshed successfully!')
        this.GetAllOpenandClosetask()
      };
 componentDidMount(){
   this.GetAllOpenandClosetask()
this.afterdeletetask()


   this.GetAllClientOpentask()
   this.GetAllAssigneOpentask()
   this.GetAllManagerOpentask()
   this.GetAllStatusOpentask()
   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   this.props.navigation.addListener('willFocus',this._handleStateChange);

}
        handleBackButton = () => {
                const {navigate} = this.props.navigation;
                navigate('DashBoardScreen', {name: 'Jane'})
                return true;
        } 
    
       componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    
      onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }


  _OverviewsDta(){
      alert('hi')

  }

  _SearchSelectDropDown(){
        this.setState({ scaleAnimationDialog: true });
  }

  _AssigneSelectDropDown(){
        this.setState({ scaleAnimationDialogAssigne: true });
  }

  _ManagerSelectDropDown(){
        this.setState({ scaleAnimationDialogManager: true });
  }

  _StatusSelectDropDown(){
        this.setState({ scaleAnimationDialogStatus: true });
  }

  _FilterShowHide(){
        this.setState({ FilterOptionShow: !this.state.FilterOptionShow });  
  }

  _ClintSelected(){
        this.setState({ scaleAnimationDialog: false });
  }

  _AssigneSelected(){
        this.setState({ scaleAnimationDialogAssigne: false });
  }

  _ManagerSelected(){
        this.setState({ scaleAnimationDialogManager: false });
  }

  _StatusSelected(){
        this.setState({ scaleAnimationDialogStatus: false });
  }

async _DeleteRowApiCall(){
        let RowId=this.state.deleteRowid
      //  alert(RowId)
        let Deleteresponse= await _DeleteTaskInOpenTaskList(RowId)

        console.log(Deleteresponse)
        if(Deleteresponse.success ==1)
        {
             alert('Task Deleted Successfully.')
             this.setState({showLoading:false,scaleAnimationDialogDelete: false })
            // this.props.navigation.navigate('OpenTaskListScreen')
          //   const {navigate} = this.props.navigation;
            // navigate('OpenTaskListScreen',)  
            this.afterdeletetask()
             
        }
        else{
                alert('Something Went Wrong To Deleted Task.')
                this.setState({showLoading:false,scaleAnimationDialogDelete: false })
        }

         //   this.setState({ scaleAnimationDialogDelete: false }
}


      render() {

        
        const {navigate} = this.props.navigation;
        return (
        
        <View style={styles.container}>
                <SafeAreaView  style={{flex:1}}>
                <Dialog
onTouchOutside={() => {
this.setState({ scaleAnimationDialogDelete: false });
}}
width={0.75}
visible={this.state.scaleAnimationDialogDelete}
dialogAnimation={new ScaleAnimation()}
onHardwareBackPress={() => {
console.log('onHardwareBackPress');
this.setState({ scaleAnimationDialogDelete: false });
return true;
}}
dialogTitle={
<DialogTitle
title="Alert"
hasTitleBar={true}
textStyle={{fontSize:25,fontFamily:'Brandon_bld'}}
/>
}
actions={[
{/* <DialogButton 
hasTitleBar={true}
text="DISMISS"
onPress={() => {
this.setState({ scaleAnimationDialog: false });
}}
key="button-1"
/>, */}
]}>



<DialogContent >

<View style={{height:40,flexDirection:'column',justifyContent:'center',marginTop:5}}>
        <Text style={{fontSize:20}}>
                Are you sure you want to delete ?
        </Text>
</View>


</DialogContent>

<DialogFooter style={{backgroundColor:'#015380'}}>
        <DialogButton
          text="CANCEL"
          textStyle={{color:'white'}}
          onPress={() => {this.setState({ scaleAnimationDialogDelete: false })}}
        />
                <DialogButton
          text="Ok"
          textStyle={{color:'white'}}
          onPress={this._DeleteRowApiCall.bind(this)}
        />
</DialogFooter>
</Dialog>





                <Dialog
onTouchOutside={() => {
this.setState({ scaleAnimationDialog: false });
}}
width={0.75}
visible={this.state.scaleAnimationDialog}
dialogAnimation={new ScaleAnimation()}
onHardwareBackPress={() => {
console.log('onHardwareBackPress');
this.setState({ scaleAnimationDialog: false });
return true;
}}
// dialogTitle={
// <DialogTitle
// title="ok"
// hasTitleBar={true}
// textStyle={{fontSize:25,fontFamily:'Brandon_bld'}}
// />
// }
actions={[
{/* <DialogButton 
hasTitleBar={true}
text="DISMISS"
onPress={() => {
this.setState({ scaleAnimationDialog: false });
}}
key="button-1"
/>, */}
]}>



<DialogContent >

<TextInput 
         placeholder="Task Name"
         placeholderTextColor='#767676'
         //textContentType='password'
         //secureTextEntry={true}
        // value={this.state.password}  
        // onChangeText={password => this.onEnterText(password)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:45,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10,marginTop:10}}
         underlineColorAndroid='transparent'
       /> 
      <ScrollView showsVerticalScrollIndicator={false} style={{height:300,marginTop:20}}>
      {this.state.ClintnameDDList.map((item, key) =>(
                <TouchableOpacity onPress={this._ClintSelected.bind(this)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
                        <Text style={{fontSize:20,textAlign:'left',fontFamily:'Brandon_bld',marginTop:10}}>
                               {item.ClientNameDropD}
                        </Text>
                </TouchableOpacity>
      ))}
       </ScrollView>

</DialogContent>

<DialogFooter style={{backgroundColor:'#015380'}}>
        <DialogButton
          text="CANCEL"
          textStyle={{color:'white'}}
          onPress={() => {this.setState({ scaleAnimationDialog: false })}}
        />
</DialogFooter>
</Dialog>









<Dialog
onTouchOutside={() => {
this.setState({ scaleAnimationDialogManager: false });
}}
width={0.75}
visible={this.state.scaleAnimationDialogManager}
dialogAnimation={new ScaleAnimation()}
onHardwareBackPress={() => {
console.log('onHardwareBackPress');
this.setState({ scaleAnimationDialogManager: false });
return true;
}}
dialogTitle={
<DialogTitle
title="Select Manager"
hasTitleBar={true}
textStyle={{fontSize:25,fontFamily:'Brandon_bld'}}
/>
}
actions={[
{/* <DialogButton 
hasTitleBar={true}
text="DISMISS"
onPress={() => {
this.setState({ scaleAnimationDialog: false });
}}
key="button-1"
/>, */}
]}>



<DialogContent >

      <ScrollView showsVerticalScrollIndicator={false} style={{height:300,marginTop:20}}>
      {this.state.ManagernameDDList.map((item, key) =>(
                <TouchableOpacity onPress={this._ManagerSelected.bind(this)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
                        <Text style={{fontSize:20,textAlign:'left',fontFamily:'Brandon_bld',marginTop:10}}>
                               {item.Assigne_FNameDropD} {item.Assigne_LNameDropD}
                        </Text>
                </TouchableOpacity>
      ))}
       </ScrollView>

</DialogContent>

<DialogFooter style={{backgroundColor:'#015380'}}>
        <DialogButton
          text="CANCEL"
          textStyle={{color:'white'}}
          onPress={() => {this.setState({ scaleAnimationDialogManager: false })}}
        />
</DialogFooter>
</Dialog>




<Dialog
onTouchOutside={() => {
this.setState({ scaleAnimationDialogAssigne: false });
}}
width={0.75}
visible={this.state.scaleAnimationDialogAssigne}
dialogAnimation={new ScaleAnimation()}
onHardwareBackPress={() => {
console.log('onHardwareBackPress');
this.setState({ scaleAnimationDialogAssigne: false });
return true;
}}
dialogTitle={
<DialogTitle
title="Select Assigne"
hasTitleBar={true}
textStyle={{fontSize:25,fontFamily:'Brandon_bld'}}
/>
}
actions={[
{/* <DialogButton 
hasTitleBar={true}
text="DISMISS"
onPress={() => {
this.setState({ scaleAnimationDialog: false });
}}
key="button-1"
/>, */}
]}>



<DialogContent >

      <ScrollView showsVerticalScrollIndicator={false} style={{height:300,marginTop:20}}>
      {this.state.AssignenameDDList.map((item, key) =>(
                <TouchableOpacity onPress={this._AssigneSelected.bind(this)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
                        <Text style={{fontSize:20,textAlign:'left',fontFamily:'Brandon_bld',marginTop:10}}>
                               {item.Assigne_FNameDropD} {item.Assigne_LNameDropD}
                        </Text>
                </TouchableOpacity>
      ))}
       </ScrollView>

</DialogContent>

<DialogFooter style={{backgroundColor:'#015380'}}>
        <DialogButton
          text="CANCEL"
          textStyle={{color:'white'}}
          onPress={() => {this.setState({ scaleAnimationDialogAssigne: false })}}
        />
</DialogFooter>
</Dialog>



<Dialog
onTouchOutside={() => {
this.setState({ scaleAnimationDialogStatus: false });
}}
width={0.75}
visible={this.state.scaleAnimationDialogStatus}
dialogAnimation={new ScaleAnimation()}
onHardwareBackPress={() => {
console.log('onHardwareBackPress');
this.setState({ scaleAnimationDialogStatus: false });
return true;
}}
dialogTitle={
<DialogTitle
title="Select Status Type"
hasTitleBar={true}
textStyle={{fontSize:25,fontFamily:'Brandon_bld'}}
/>
}
actions={[
{/* <DialogButton 
hasTitleBar={true}
text="DISMISS"
onPress={() => {
this.setState({ scaleAnimationDialog: false });
}}
key="button-1"
/>, */}
]}>



<DialogContent >

      <ScrollView showsVerticalScrollIndicator={false} style={{height:300,marginTop:20}}>
      {this.state.StatusTypeDDList.map((item, key) =>(
                <TouchableOpacity onPress={this._StatusSelected.bind(this)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
                        <Text style={{fontSize:20,textAlign:'left',fontFamily:'Brandon_bld',marginTop:10}}>
                               {item.StatusTypeDropD}
                        </Text>
                </TouchableOpacity>
      ))}
       </ScrollView>

</DialogContent>

<DialogFooter style={{backgroundColor:'#015380'}}>
        <DialogButton
          text="CANCEL"
          textStyle={{color:'white'}}
          onPress={() => {this.setState({ scaleAnimationDialogStatus: false })}}
        />
</DialogFooter>
</Dialog>




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
    <Image 
        
        source={Images.LoadingGifnew}
        style={{alignItems:'center',resizeMode:"contain",marginTop:17}}
        />  
        
        </View>
            </DialogContent>
          </Dialog>

        <ScrollView>
        <TopMenu
navigation={this.props.navigation}
/>

<View style={{flexDirection:'row',justifyContent:'center',width:'100%',backgroundColor:'transparent',height:45,marginTop:3}}>
<TouchableOpacity onPress={this._FilterShowHide.bind(this)} style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'white',width:'70%',alignItems:'center'}}>
<Text style={{fontSize:20,color:"#015380",fontWeight:'500',textAlign:'center',width:'95%'}}>
       Filter
        </Text>
        </TouchableOpacity>
</View>


<View style={{height:70,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'space-between', height:70,backgroundColor:'#015380',width:'90%',borderRadius:4}}>
<View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:'70%',alignItems:'center'}}>
<Text style={{fontSize:20,color:"white",fontWeight:'500',textAlign:'left',width:'95%'}}>
        Open Task List
        </Text>
</View>
<View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:'30%',alignItems:'center'}}>
<View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
<Image 
        source={Images.Homesign}
        style={{height:20,width:20}}
        />
        <Text style={{fontSize:14,color:"white",fontWeight:'500',textAlign:'left',marginLeft:5}}>
         Home
        </Text>
</View>

        <Text style={{fontSize:14,color:"white",fontWeight:'500',textAlign:'center',width:'100%'}}>
        Task List
        </Text>
</View>
</View>
</View>


{this.state.FilterOptionShow ?
<View>
<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
           Client Name :
        </Text>
        <TouchableOpacity  onPress={this._SearchSelectDropDown.bind(this)} style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
           Client Name
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>

</View>


</View>
</View>



<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
           Task Name :
        </Text>
        <TextInput 
         placeholder="Task Name"
         placeholderTextColor='#767676'
         //textContentType='password'
         //secureTextEntry={true}
        // value={this.state.password}  
        // onChangeText={password => this.onEnterText(password)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:45,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10}}
         underlineColorAndroid='transparent'
       /> 

</View>
</View>
</View>





<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
        Assigned to :
        </Text>
        <TouchableOpacity  onPress={this._AssigneSelectDropDown.bind(this)} style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
         -- Assigne --
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>

</View>
</View>
</View>





<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
        Manager :
        </Text>
        <TouchableOpacity  onPress={this._ManagerSelectDropDown.bind(this)} style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
         -- Manager --
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>

</View>
</View>
</View>





<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>

<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
        Task Status :
        </Text>
        <TouchableOpacity  onPress={this._StatusSelectDropDown.bind(this)} style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
           -- Status --
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>
</View>
</View>
</View>

</View>

:
<Text></Text>
      }
<View style={styles.ListFirstView}>
        
{this.state.showLoader?
        <View style={{alignItems:'center'}}>
<Image 
        
        source={Images.LoadingGifnew}
        style={{alignItems:'center',resizeMode:"contain",marginTop:17,width:'70%',height:100}}
        />  
        </View>

:
<View style={styles.ListSecondView}>
        
        {this.state.OpenTaskFullList.map((item, key) =>(
        <View style={styles.ShadowViewBox}>
        <View style={styles.ListViewAfterShadowbox}>
        <Text numberOfLines={2} style={[CommonStyles.ListFullrowtext]}>
        {item.ClientName}
                </Text>
                <Text numberOfLines={2} style={[CommonStyles.ListFullrowtext]}>
               {item.TaskDescription}
                </Text>
                <View style={styles.listlastmainrow}>
                <Text numberOfLines={2} style={[CommonStyles.ListText]}>
                Manager: {item.Manager}
                </Text>
                {/* <Text numberOfLines={2} style={{fontSize:17,color:"#6c6c6c",textAlign:'left',width:'50%',marginLeft:5}}>
                Deepika
                </Text> */}
                </View>
                <View style={styles.listlastmainrow}>
        
                <View style={styles.buttonleftareaView}>
                <Text numberOfLines={2} style={[CommonStyles.ListTextnew]}>
                Due Date:{item.Duedate}
                </Text>
                <Text numberOfLines={2} style={[CommonStyles.ListTextnew]}>
                Assign to :{item.AssignedTo}
                </Text>
                </View>
        
                <View style={styles.Buttonrow}>
                  <TouchableOpacity onPress={this._EditRow.bind(this,item.TicketID)} style={styles.ButtonMainView}>
                  <View style={styles.ButtonMiddleView}>
                <Image 
                source={Images.Eyesign}
                style={[CommonStyles.DeleteandEditbuttonimage]}
                /></View>
                </TouchableOpacity>
        
                <TouchableOpacity onPress={this._DeleteRow.bind(this,item.TicketID)} style={[styles.ButtonMainView,{marginLeft:10}]}>
                 <View style={styles.ButtonMiddleView}>
                <Image 
                source={Images.Deletesign}
                style={[CommonStyles.DeleteandEditbuttonimage]}
                /></View>
                </TouchableOpacity>
                </View>
        
                </View>
                </View>
          </View>
        ))}
        </View>
      }
</View>


    
        </ScrollView>
        
        </SafeAreaView>
        </View>
        
        );
        }
 
            _EditRow(id){
                    console.log(id)
                  //  alert(id)
                const {navigate} = this.props.navigation;
                navigate('ViewOpenTask', {Opentask_id: id})
            }


            _DeleteRow(TicketID){
          //  alert(TicketID)
            this.setState({ scaleAnimationDialogDelete: true,deleteRowid:TicketID })
            }
  }



  
  const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f6f6f6',

},
Loaderimage:{
width:100,
height:40,
},
ButtonMainView:{
flexDirection:'column',
justifyContent:'center',
height:40,
width:'40%',
backgroundColor:'#025683'
},
ButtonMiddleView:{
flexDirection:'row',
justifyContent:'center',
width:'100%'
},
Buttonrow:{
flexDirection:'row',
justifyContent:'flex-end',
width:'50%'
},
listlastmainrow:{
flexDirection:'row',
width:'100%',
//backgroundColor:'red'
},
buttonleftareaView:{
flexDirection:'column',
justifyContent:'flex-start',
width:'50%'
},
ListFirstView:{
backgroundColor:'transparent',
width:'100%',
paddingLeft:10,
paddingRight:10,
paddingTop:10
},
ListSecondView:{
backgroundColor:'transparent',
padding:2
},
ShadowViewBox:{
flexDirection:'row',
justifyContent:'flex-start',
marginBottom:10,
backgroundColor:'white',
borderColor:'#cecece',
paddingLeft:2,
shadowOffset:{ width: 10, height: 10, },
shadowColor: 'black',
shadowOpacity: 1.0,
elevation:5
},
ListViewAfterShadowbox:{
flexDirection:'column',
marginTop:2,
borderColor:'gray',
width:'100%',
padding:15,
borderRadius:5,
justifyContent:'center'
}


});