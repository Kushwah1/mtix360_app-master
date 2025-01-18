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
import {_GetOpenTask,_GetAllClientOpenTask,_GetAllClientDetailsForOpenTask} from './../../services/OpenTask/OpenTaskServices';
import {_Edittask_Inmanagement} from './../../services/AddTaskServices/AddTaskServices'
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
export default  class ViewMyopenTaskScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { imgchecked:false,is_express:0,dataListsearch:[],
        visible: false,showLoader:false,scaleAnimationDialog: false ,showLoader:false,scaleAnimationDialogManager:false,nodatafoundshow:false,
        scaleAnimationDialogStatus:false,scaleAnimationDialogAssigne:false, FilterOptionShow:true,Tasktitletext:'',
        managerName:'-- Manager --',assignee_Name:'-- Assignee--',Status_TypeText:'-- Status --',Client_Nametext:' Client Name',
        OpenTaskFullList:[],ClintnameDDList:[],AssignenameDDList:[],ManagernameDDList:[],StatusTypeDDList:[],
        Opentask_id:'',
        ManagerIDNew:'',
        AssigneeIDNew: '',
        StatusIDNew: '',
        ClientIDNew: '',
        date: '',
        ClientFinalIdText:'',
        AssigneFinalIdText:'',
        ManagerFinalIdText:'',
        StatusFinalIdText:'',
        commentTextFinal:'',
        Ticket_idfinal:'',
        
    }

}
  
async GetAllOpenandClosetask(){
        this.setState({showLoader: true,})
        let fulldata= await _GetOpenTask()
//         let Checkdata=fulldata.success
//         let ArrayListData=fulldata.data.result_set
//         if(Checkdata==1){
//           let data=[];
//           ArrayListData.forEach(element => {
      
//             let ClientName =element.client_name
//             let TaskDescription =element.task_details
//             let Duedate =element.due_date
//             let Manager =element.manager
//             let AssignedTo =element.assigned_to
            

//             data.push({
//               ClientName:ClientName,
//               TaskDescription:TaskDescription,
//               Duedate:Duedate,
//               Manager:Manager,
//               AssignedTo:AssignedTo
              
//             });
//           });
//           this.setState({OpenTaskFullList:data,})
//           console.log('myopentask--------------------------------------')
//        console.log(this.state.OpenTaskFullList)
//        if(this.state.OpenTaskFullList.length ==0)
//        {
          
//            this.setState({nodatafoundshow:true,showLoader: false,})
//        } else
//        {
//         this.setState({showLoader: false,})
//        }
       
                
//         }
//         else{
//                 alert('Something went wrong in all task!') 
//         }
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

          var arrayM = this.state.ClintnameDDList
          var result=  arrayM.filter(item => item.Client_IdDropD ===this.state.ClientIDNew)
          console.log(this.state.ClientIDNew);
          console.log(result);
          let ok =result[0].ClientNameDropD
          let ClientFinalId =result[0].Client_IdDropD
          this.setState({
                Client_Nametext:ok,
                ClientFinalIdText: ClientFinalId
          })
          console.log(ok);


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
            let assigneIdD =element.user_id
            data.push({
                Assigne_FNameDropD:Assigne_FNameDropD,
                Assigne_LNameDropD:Assigne_LNameDropD,
                assigneIdD:assigneIdD
              
            });
          });
          this.setState({AssignenameDDList:data,})
          var arrayM = this.state.AssignenameDDList
          var result=  arrayM.filter(item => item.assigneIdD ===this.state.AssigneeIDNew)
          console.log(this.state.assigneIdD);
          console.log(result);
          let ok =result[0].Assigne_FNameDropD
          let AssigneFinalId =result[0].assigneIdD
          this.setState({
                assignee_Name:ok,
                AssigneFinalIdText:AssigneFinalId
          })
          console.log(ok);




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
      
            let Manager_FNameDropD =element.first_name
            let Manager_LNameDropD =element.last_name
            let managerIdD =element.user_id
            console.log(managerIdD+'oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
            data.push({
                Manager_FNameDropD:Manager_FNameDropD,
                Manager_LNameDropD:Manager_LNameDropD,
                managerIdD:managerIdD
              
            });
          });

          

          this.setState({ManagernameDDList:data,})

      

          
          console.log('++++++++++++++++++++++++++++++++++++++++++++++')
          console.log(this.state.ManagernameDDList)
          console.log('++++++++++++++++++++++++++++++++++++++++++++++')
           var arrayM = this.state.ManagernameDDList
           var result=  arrayM.filter(item => item.managerIdD ===this.state.ManagerIDNew)
           console.log(this.state.ManagerIDNew);
           console.log(result);
           let ok =result[0].Manager_LNameDropD + result[0].Manager_FNameDropD
           let ManagerFinalId =result[0].managerIdD
           this.setState({
                managerName:ok,
                ManagerFinalIdText:ManagerFinalId
           })
           console.log(ok);
       console.log('0--------0--------------0-------------0')

                
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

          var arrayM = this.state.StatusTypeDDList
          var result=  arrayM.filter(item => item.Status_IDD ===this.state.StatusIDNew)
          console.log(this.state.StatusIDNew);
          console.log(result);
          let ok =result[0].StatusTypeDropD
          let StatusFinalId =result[0].Status_IDD
          this.setState({
                Status_TypeText:ok,
                StatusFinalIdText:StatusFinalId
          })
          console.log(ok);


       console.log(this.state.StatusTypeDDList)
                
        }
        else{
                alert('Something went wrong to get Client name!') 
        }
}
 async componentDidMount(){
 //  this.GetAllOpenandClosetask()








// akshya
  const { navigation } = this.props;  
  const OpenTaskId = navigation.getParam('Opentask_id', 'Opentask_id');  
 // let id=JSON.stringify(OpenTaskId)
  console.log(OpenTaskId)
  //alert(OpenTaskId)
 
  this.setState({showLoader: true,Ticket_idfinal:OpenTaskId})
  let AllClientDeatils= await _GetAllClientDetailsForOpenTask(OpenTaskId)
  console.log('AllClientDeatils---------------------=====')
  console.log(AllClientDeatils)
  let Checkdata=AllClientDeatils.success
 
        if(Checkdata==1){
          let ArrayListData=AllClientDeatils.data.ticket_comments
          let data=[];
          let ManagerDropdownid=AllClientDeatils.data.ticket_details.manager_id
          let AssigneDropdownid=AllClientDeatils.data.ticket_details.assigne_id
          let StatusDropdownid=AllClientDeatils.data.ticket_details.ticket_status
          let ClintDropdownid=AllClientDeatils.data.ticket_details.client_id

          let Tasktitle=AllClientDeatils.data.ticket_details.ticket_title
          let DuedateDropdownid=AllClientDeatils.data.ticket_details.due_date
          console.log(ManagerDropdownid+'pppppppppppppppppppppppppppppppp')
          this.setState({
                ManagerIDNew: ManagerDropdownid,
                AssigneeIDNew: AssigneDropdownid,
                StatusIDNew: StatusDropdownid,
                ClientIDNew: ClintDropdownid,
                date: DuedateDropdownid,
                Tasktitletext:Tasktitle
        })
          ArrayListData.forEach(element => {
      
            let ClientName =element.comment
            let TaskDescription =element.added_by
            let Duedate =element.created_date
    
            

            data.push({
              ClientName:ClientName,
              TaskDescription:TaskDescription,
              Duedate:Duedate,

              
            });
          });
          this.setState({OpenTaskFullList:data,})
          console.log('myopentask--------------------------------------')
       console.log(this.state.OpenTaskFullList)
       if(this.state.OpenTaskFullList.length ===0 || this.state.OpenTaskFullList.length==undefined)
       {
          
           this.setState({nodatafoundshow:true,showLoader: false,})
       } else
       {
        this.setState({showLoader: false,})
       }
       
                
        }
        else{
               // alert('Something went wrong in all task!') 
               const {navigate} = this.props.navigation;
               navigate('LoginScreen', {name: 'Jane'})
               this.props.navigation.closeDrawer();
        }




  

//shakya




this.GetAllClientOpentask()
this.GetAllAssigneOpentask()
 this.GetAllManagerOpentask()
this.GetAllStatusOpentask()







   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}


        handleBackButton = () => {
                const {navigate} = this.props.navigation;
                navigate('OpenTaskListScreen', {name: 'Jane'})
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

  _AssigneSelected(AssigneeId,Assigneename){
        this.setState({ scaleAnimationDialogAssigne: false,assignee_Name: Assigneename,AssigneFinalIdText:AssigneeId});
  }

  _ManagerSelected(ManagerId,_Managername){
        this.setState({ scaleAnimationDialogManager: false,ManagerFinalIdText: ManagerId ,managerName:_Managername });
  }

  _StatusSelected(Statusid,Status_TypeN){
        this.setState({ scaleAnimationDialogStatus: false,Status_TypeText:Status_TypeN,StatusFinalIdText:Statusid, });
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
                <TouchableOpacity onPress={this._ManagerSelected.bind(this,item.managerIdD,item.Manager_FNameDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
                        <Text style={{fontSize:20,textAlign:'left',fontFamily:'Brandon_bld',marginTop:10}}>
                               {item.Manager_FNameDropD} {item.Manager_FNameDropD}
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
                <TouchableOpacity onPress={this._AssigneSelected.bind(this,item.assigneIdD,item.Assigne_FNameDropD)} style={{flexDirection:'column',justifyContent:'flex-start',marginTop:10}}>
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

<View style={{flexDirection:'row',justifyContent:'center',width:'100%',backgroundColor:'transparent',height:45,marginTop:3}}>
<TouchableOpacity onPress={this._FilterShowHide.bind(this)} style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'white',width:'70%',alignItems:'center'}}>
<Text style={{fontSize:20,color:"#015380",fontWeight:'500',textAlign:'center',width:'95%'}}>
     Edit task
        </Text>
        </TouchableOpacity>
</View>


<View style={{height:70,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'space-between', height:70,backgroundColor:'#015380',width:'90%',borderRadius:4}}>
<View style={{flexDirection:'column',justifyContent:'center',height:70,backgroundColor:'transparent',width:'70%',alignItems:'center'}}>
<Text style={{fontSize:20,color:"white",fontWeight:'500',textAlign:'left',width:'95%'}}>
       View Task Details
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
           Task Title :
        </Text>
        <Text style={{fontSize:16,color:'#767676',textAlign:'left'}}>
        {this.state.Tasktitletext}
        </Text>
        {/* <TextInput 
         placeholder="Task Title"
         placeholderTextColor='#767676'
         editable={false}
         //textContentType='password'
         //secureTextEntry={true}
         value={this.state.Tasktitletext}  
        // onChangeText={password => this.onEnterText(password)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:45,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10,color:'#767676'}}
         underlineColorAndroid='transparent'
       />  */}

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

</View>
</View>
</View>



{/* <View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:2,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
           Task Description :
        </Text>
        <TextInput 
         placeholder="Task Description"
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
</View> */}



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
        //onPress={this._StatusSelectDropDown.bind(this)}
        style={{width:'100%',height:45,flexDirection:'row',justifyContent:'space-between',borderWidth:1,backgroundColor:'white',borderColor:'#cecece',borderRadius:4,marginTop:3}}>
        <View style={{flexDirection:'column',justifyContent:'center',height:45,backgroundColor:'transparent',width:'90%',}}>
        
        <DatePicker
          style={{width: '100%'}}
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
             // fontFamily: "Acephimere Bold",
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
          onDateChange={(text) => this.datevalidate(text)}
        />

        </View>
        </View>
</View>
</View>
</View>

<View style={{height:90,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4,marginBottom:50}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:90,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:90,backgroundColor:'transparent',width:'100%',}}>
<Text style={{fontSize:20,color:"#6c6c6c",textAlign:'left'}}>
          Comments :
        </Text>
        <TextInput 
         placeholder="Comment"
         placeholderTextColor='#767676'
       multiline={true}
         //textContentType='password'
         //secureTextEntry={true}
        value={this.state.commentTextFinal}  
         onChangeText={text => this.onCommentEnterText(text)}
         autoCapitalize="none"
         autoCorrect={false} 
         style={{width:'100%',height:100,borderRadius:5,borderWidth:1,backgroundColor:'white',borderColor:'#cecece',paddingLeft:10}}
         underlineColorAndroid='transparent'
       /> 

</View>
</View>
</View>

<View style={{height:30,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:5,borderRadius:4,marginBottom:10}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:30,width:'90%'}}>
<TouchableOpacity  
onPress={this.onClickListenergocheck.bind(this)}
 >
   {this.state.imgchecked?
      <Image style={{height:20,width:20,marginTop:0}} source={Images.checkbox}/>:
      <Image style={{height:20,width:20,marginTop:0}} source={Images.uncheckbox}/>
   }
      </TouchableOpacity>
<Text> Is Extend due date</Text>
</View>
</View>


<TouchableOpacity onPress={this._SaveandUpdateDetails.bind(this)}
 style={{height:55,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4,marginBottom:50}}>
<View style={{flexDirection:'row',justifyContent:'center',height:55,width:'90%'}}>
<View style={{flexDirection:'column',justifyContent:'center',height:55,backgroundColor:'#00c0ef',width:'100%',}}>
<Text style={{fontSize:25,color:'white',textAlign:'center'}}>
         SAVE
        </Text>
      

</View>
</View>
</TouchableOpacity>

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
{this.state.nodatafoundshow?
<View style={{alignItems:'center'}}>
     <Text style={{fontSize:30}}>
          No data found
          </Text>
          </View>
          :
<View>
<View style={{alignItems:'center',height:50}}>
     <Text style={{fontSize:20}}>
   Comments
          </Text>
          </View>

        {this.state.OpenTaskFullList.map((item, key) =>(
        <View style={styles.ShadowViewBox}>
        <View style={styles.ListViewAfterShadowbox}>
        <Text style={[CommonStyles.ListFullrowtext]}>
        {item.ClientName}
                </Text>
                <Text numberOfLines={2} style={[CommonStyles.ListFullrowtext]}>
               Created date: {item.Duedate}
                </Text>
                <Text numberOfLines={2} style={[CommonStyles.ListFullrowtext]}>
               Added By: {item.TaskDescription}
                </Text>
                
   
                </View>
          </View>
        ))}
        </View>
      }
        </View>
      }
</View>


    
        </ScrollView>
        
        </SafeAreaView>
        </View>
        
        );
        }
        onClickListenergocheck(){
                //alert(this.state.imgchecked)
                let {imgchecked,}=this.state;
                this.setState({imgchecked:!imgchecked,})
                // alert(this.state.imgchecked)
                if(this.state.imgchecked ==true){
                        let is_express= this.state.is_express
                        this.setState({is_express:0,})
                      }
                      else{
                        let is_express= this.state.is_express
                        this.setState({is_express:1,})
                      }
                // alert(this.state.is_express)
              }
            _EditRow(){
            alert('edit')
            }
            
            datevalidate(text){

                if(text==''){
              alert('select any date')
                }
            //  let dob= this.state.date
              this.setState({date:text,ErrorStatedob : false});
              }

            _DeleteRow(){
            alert('delete')
            }

            onCommentEnterText(text){
                if(text==='' && text!==null)
                {
                  this.setState({commentTextFinal : text, ErrTaskDesction : true}) ;
                }
                else{
                  this.setState({commentTextFinal : text, ErrTaskDesction : false}) ;
                }
            }

          async  _SaveandUpdateDetails(){
                let ClientFinalIdText=this.state.ClientFinalIdText;
                let commentTextFinal=this.state.commentTextFinal
                let Ticket_idfinal=this.state.Ticket_idfinal
                let ManagerFinalIdText=this.state.ManagerFinalIdText;
                let AssigneFinalIdText=this.state.AssigneFinalIdText;
                let dateS=this.state.date;
                let StatusFinalIdText=this.state.StatusFinalIdText;
                let is_express=this.state.is_express
                 
                //alert(ClientFinalIdText+ManagerFinalIdText+AssigneFinalIdText+StatusFinalIdText+commentTextFinal+Ticket_idfinal+dateS)
                let EditTaskResponse=  await  _Edittask_Inmanagement(ManagerFinalIdText,AssigneFinalIdText,dateS,StatusFinalIdText,Ticket_idfinal,commentTextFinal,is_express);
                console.log(EditTaskResponse)
                if(EditTaskResponse.success ==1)
                {
                     alert('Task Edited Successfully.')
                     this.setState({showLoading:false})
                    // this.props.navigation.navigate('OpenTaskListScreen')
                     const {navigate} = this.props.navigation;
                     navigate('OpenTaskListScreen', {Count: 0})  
                     
                }
                else{
                        alert('Something Went Wrong To add Task.')
                        this.setState({showLoading:false})
                }



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