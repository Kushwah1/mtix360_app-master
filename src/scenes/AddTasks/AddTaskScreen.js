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
import DatePicker from 'react-native-datepicker';
import {_GetMy_OverDueTask,_GetAllClientOpenTask} from './../../services/MyOverdueServices/MyOverDueServices';
import {_Addtask_Inmanagement} from './../../services/AddTaskServices/AddTaskServices'
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
export default  class AddTaskScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { is_express:0,clientsearchtext:'',dataListsearch:[],
        visible: false,showLoader:false,scaleAnimationDialog: false ,showLoader:false,scaleAnimationDialogManager:false,nodatafoundshow:false,showLoading:false,
        scaleAnimationDialogStatus:false,scaleAnimationDialogAssigne:false, FilterOptionShow:false,ErrorStatedob:false,ErrorOfManager:false,ErrorOfClientname:false,
        ErrorOfAssigne:false,ErrorOfStatus:false,ErrTaskDesction:false,imgchecked: false,
        date:'',Manager_id:'',managerName:'-- Manager --',Assignee_id:'',assignee_Name:'-- Assignee--',Status_id:'',Status_TypeText:'-- Status --',
        Client_id:'',Client_Nametext:' Client Name',TaskDescriptionText:"",
        OpenTaskFullList:[],ClintnameDDList:[],AssignenameDDList:[],ManagernameDDList:[],StatusTypeDDList:[]
       
       
        
    }

}
  
async GetAllOpenandClosetask(){
        this.setState({showLoader: true,})
        let fulldata= await _GetMy_OverDueTask()
        let Checkdata=fulldata.success
        let ArrayListData=fulldata.data.result_set
        if(Checkdata==1){
          let data=[];
          ArrayListData.forEach(element => {
      
            let ClientName =element.client_name
            let TaskDescription =element.task_details
            let Duedate =element.due_date
            let Manager =element.manager
            let AssignedTo =element.assigned_to
            

            data.push({
              ClientName:ClientName,
              TaskDescription:TaskDescription,
              Duedate:Duedate,
              Manager:Manager,
              AssignedTo:AssignedTo
              
            });
          });
          this.setState({OpenTaskFullList:data,})
          console.log('myopentask--------------------------------------')
       console.log(this.state.OpenTaskFullList)
       if(this.state.OpenTaskFullList.length ==0)
       {
          
           this.setState({nodatafoundshow:true,showLoader: false,})
       } else
       {
        this.setState({showLoader: false,})
       }
       
                
        }
        else{
                alert('Something went wrong in all task!') 
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
            let Client_IdDropD =element.channel_partner_id
            
            data.push({
                ClientNameDropD:ClientNameDropD,
                Client_IdDropD:Client_IdDropD
              
            });
          });
          this.setState({ClintnameDDList:data,dataListsearch:data})

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
            let Assigne_IDD =element.user_id
            
            data.push({
                Assigne_FNameDropD:Assigne_FNameDropD,
                Assigne_LNameDropD:Assigne_LNameDropD,
                Assigne_IDD:Assigne_IDD
              
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
            let managerIdD =element.user_id
            data.push({
                Assigne_FNameDropD:Assigne_FNameDropD,
                Assigne_LNameDropD:Assigne_LNameDropD,
                managerIdD:managerIdD
              
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
            let Status_IDD =element.status_id
            
            data.push({
                StatusTypeDropD:StatusTypeDropD,
                Status_IDD:Status_IDD
              
            });
          });
          this.setState({StatusTypeDDList:data,})
       console.log(this.state.StatusTypeDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}
 componentDidMount(){
 //  this.GetAllOpenandClosetask()
   this.GetAllClientOpentask()
   this.GetAllAssigneOpentask()
   this.GetAllManagerOpentask()
   this.GetAllStatusOpentask()
   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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


  _ClintSelected(Clientid,ClientNameN){
        console.log('Clientid +-------------------+')
        console.log(Clientid,ClientNameN)
        this.setState({ scaleAnimationDialog: false ,Client_Nametext:ClientNameN,Client_id:Clientid ,ErrorOfClientname:false});
  }

  _AssigneSelected(AssigneeId,Assigneename){
        console.log('AssigneeId +-------------------+')
        console.log(AssigneeId,Assigneename)
        this.setState({ scaleAnimationDialogAssigne: false,Assignee_id:AssigneeId,assignee_Name:Assigneename,ErrorOfAssigne:false });
  }

  _ManagerSelected(ManagerId,_Managername){
        console.log('ManagerId +-------------------+')
          console.log(ManagerId)
          console.log(_Managername)
        this.setState({ scaleAnimationDialogManager: false,Manager_id: ManagerId ,managerName:_Managername,ErrorOfManager:false});
  }

  _StatusSelected(Statusid,Status_TypeN){
        console.log('Statusid +-------------------+')
        console.log(Statusid,Status_TypeN)
        this.setState({ scaleAnimationDialogStatus: false ,Status_TypeText:Status_TypeN,Status_id:Statusid,ErrorOfStatus:false});
  }




  searchUpdated(Text,event){
 
    this.setState({
      Text:Text
    })
    let fulldataList=this.state.dataListsearch;
    const dataList=fulldataList;
    data = this.state.ClintnameDDList;
  
    searchText = Text.trim().toLowerCase();
    
   let datafilter = data.filter(l => {
    return l.ClientNameDropD.toLowerCase().match( searchText )
   });
   console.log(this.state.data)
   if(Text=='' || Text == null )
   {
    // alert(JSON.stringify(dataList) )
    this.setState({
      ClintnameDDList : dataList
      });
   }
   else{
   this.setState({
    ClintnameDDList : datafilter
    });
   }
  }





      render() {

        
        const {navigate} = this.props.navigation;
        return (
        
        <View style={styles.container}>
                <SafeAreaView  style={{flex:1}}>
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
         value={this.state.Text}  
        onChangeText={(Text) => { this.searchUpdated(Text) }} 
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:45,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10,marginTop:10}}
         underlineColorAndroid='transparent'
       /> 
      <ScrollView showsVerticalScrollIndicator={false} style={{height:300,marginTop:20}}>
      {this.state.ClintnameDDList.map((item, key) =>(
                <TouchableOpacity onPress={this._ClintSelected.bind(this,item.Client_IdDropD,item.ClientNameDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
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
                <TouchableOpacity onPress={this._ManagerSelected.bind(this,item.managerIdD,item.Assigne_FNameDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
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
                <TouchableOpacity onPress={this._AssigneSelected.bind(this,item.Assigne_IDD,item.Assigne_FNameDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
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
                <TouchableOpacity onPress={this._StatusSelected.bind(this,item.Status_IDD,item.StatusTypeDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
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


<View style={{height:70,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'space-between', height:70,backgroundColor:'#015380',width:'90%',borderRadius:4}}>
<View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:'70%',alignItems:'center'}}>
<Text style={{fontSize:20,color:"white",fontWeight:'500',textAlign:'left',width:'95%'}}>
      ADD Task
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
        ADD Task
        </Text>
</View>
</View>
</View>




<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
           Client Name :
        </Text>
        <TouchableOpacity  onPress={this._SearchSelectDropDown.bind(this)} style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
         {this.state.Client_Nametext}
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>
        { this.state.ErrorOfClientname  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please select a client to proceed.
             </Text>
            ) : null  }
</View>
</View>
</View>


<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
           Task Description :
        </Text>
        <TextInput 
         placeholder="Task Description"
         placeholderTextColor='#767676'
        multiline={true}
         //textContentType='password'
         //secureTextEntry={true}
         value={this.state.TaskDescriptionText}  
         onChangeText={text => this._TaskDescriptionData(text)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:60,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10}}
         underlineColorAndroid='transparent'
       /> 
               { this.state.ErrTaskDesction  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please enter task description to proceed.
             </Text>
            ) : null  }

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
        {this.state.managerName}
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>
        { this.state.ErrorOfManager  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please select a manager to proceed.
             </Text>
            ) : null  }
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
       {this.state.assignee_Name}
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>
        { this.state.ErrorOfAssigne  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please select Assignee to proceed.
             </Text>
            ) : null  }
</View>
</View>
</View>



<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>

<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
      Due Date :
        </Text>
        <View 
       //  onPress={this._StatusSelectDropDown.bind(this)} 
         style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        
        {/* <Text style={{fontSize:16,color:"#767676",textAlign:'left',marginLeft:10}}>
          20/04/2020
        </Text> */}
         <DatePicker
          style={{width: '100%',}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Select date"
          format="YYYY-MM-DD"
          //dateText={{fontFamily: "Acephimere Bold",}}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 10
            },
            dateInput: {
              marginLeft: 50,
              borderColor:'transparent',
              alignItems:'flex-start',
              fontSize:16
             
            },
            dateText:{
              //fontFamily: "Acephimere Bold",
              color:'black',
              textAlign:'left',
              fontSize:16
            },
            placeholderText:{
            //  fontFamily: "Acephimere Bold",
              color:'black',
              fontSize:16
            }

          }}
          onDateChange={(date) => this.datevalidate(date)}
        />
        </View>
        </View>
        { this.state.ErrorStatedob  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please enter Due date to proceed.
             </Text>
            ) : this.state.invaliddob?(
              <Text style={[CommonStyles.Textboxarror]}>
                * Invalid DOB !.
              </Text>
             ): null  }
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
         {this.state.Status_TypeText}
        </Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'10%',}}>
        <Image 
        source={Images.Arrowdownsign}
        style={{height:20,width:20}}
        />
       </View>
        </TouchableOpacity>
        { this.state.ErrorOfStatus  ? (
             <Text style={[CommonStyles.Textboxarror]}>
               * Please select status to proceed.
             </Text>
            ) : null  }
</View>
</View>
</View>




<View style={{height:30,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:7,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:30,width:'90%'}}>
<TouchableOpacity  
onPress={this.onClickListenergocheck.bind(this)}
 >
   {this.state.imgchecked?
      <Image style={{height:20,width:20,marginTop:0}} source={Images.checkbox}/>:
      <Image style={{height:20,width:20,marginTop:0}} source={Images.uncheckbox}/>
   }
      </TouchableOpacity>
<Text> Is expressed</Text>
</View>
</View>



<TouchableOpacity onPress={this._SaveaddTaskdata.bind(this)} style={{height:55,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4,marginBottom:50}}>
<View style={{flexDirection:'row',justifyContent:'center',height:55,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:55,backgroundColor:'#00c0ef',width:'100%',}}>
{/* <Text style={{fontSize:25,color:'white',textAlign:'center'}}>
         SAVE
        </Text> */}
                    {this.state.showLoading ?
                    <View style={{alignItems:'center'}}>
                  <Image style={styles.Loaderimage} source={Images.LoadingGifnew}/>
                  </View>
         
             :
<Text style={{fontSize:25,color:'white',textAlign:'center'}}>
         SAVE
        </Text>
              }

</View>
</View>
</TouchableOpacity>



    
        </ScrollView>
        
        </SafeAreaView>
        </View>
        
        );
        }
        onClickListenergocheck(){
          //alert(this.state.imgchecked)
          let {imgchecked,}=this.state;
          this.setState({imgchecked:!imgchecked,})
          //alert(this.state.imgchecked)
          if(this.state.imgchecked ==true){
            let is_express= this.state.is_express
            this.setState({is_express:0,})
          }
          else{
            let is_express= this.state.is_express
            this.setState({is_express:1,})
          }
          //alert(this.state.is_express)
        }
            _EditRow(){
            alert('edit')
            }


            _DeleteRow(){
            alert('delete')
            }
            _TaskDescriptionData(text){
                if(text==='' && text!==null)
                {
                  this.setState({TaskDescriptionText : text, ErrTaskDesction : true}) ;
                }
                else{
                  this.setState({TaskDescriptionText : text, ErrTaskDesction : false}) ;
                }
            }


            datevalidate(date){

                if(date==''){
              alert('hi')
                }
              let dob= this.state.dob
              this.setState({date:date,ErrorStatedob : false});
              }

             async _SaveaddTaskdata(){
                     if (this.state.Client_id ===''){  
                        this.setState({ ErrorOfClientname : true}) ;
                      }
                      else if(this.state.TaskDescriptionText===''){
                        this.setState({ ErrTaskDesction : true}) ;
                      }
                      else if (this.state.Manager_id ===''){
                        this.setState({ ErrorOfManager : true}) ;
                      }
                      else if(this.state.Assignee_id===''){
                        this.setState({ ErrorOfAssigne : true}) ;
                      }
                      else if(this.state.date===''){
                        this.setState({ ErrorStatedob : true}) ;
                      }
                      else if(this.state.Status_id===''){
                        this.setState({ ErrorOfStatus : true}) ;
                      }
  
                      else{
                        this.setState({showLoading:true})
                        let Client_id=this.state.Client_id;             
                        let TaskDescriptionText=this.state.TaskDescriptionText
                        let Manager_id=this.state.Manager_id;
                        let Assignee_id=this.state.Assignee_id;
                        let dateS=this.state.date;
                        let Status_id=this.state.Status_id;
                        let is_express=this.state.is_express
                         // alert(is_express)
                        let AddTaskResponse=  await  _Addtask_Inmanagement(Client_id,TaskDescriptionText,Manager_id,Assignee_id,dateS,Status_id,is_express);
                        console.log(AddTaskResponse)
                        if(AddTaskResponse.success ==1)
                        {
                             alert('Task added Successfully.')
                             this.setState({showLoading:false})
                             this.props.navigation.navigate('DashBoardScreen')
                            //  const {navigate} = this.props.navigation;
                            //  navigate('DashBoardScreen', {name: 'Jane'})  
                             
                        }
                        else{
                                alert('Something Went Wrong To add Task.')
                                this.setState({showLoading:false})
                        }
                      }
              }
      

  }



  
  const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f6f6f6',

},
Loaderimage:{
width:110,

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
flexDirection:'row'
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