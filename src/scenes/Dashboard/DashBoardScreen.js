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
import {loginTaskManageradmin,_GetSubBussinessCategoryfromAdmin} from './../../services/LoginS/loginServices';
import {GRADEINT_COLOR} from './../../styles/colors';
import CommonStyles  from './../../styles/CommonStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import SplashScreen from './../Spalash/SpalashScreen'
import {AsyncStorage} from 'react-native';
import Images from '../../assets/images/Images';
import TopMenu from './../../components/TopMenu'
import {_GetCountOpenAndCloseTask} from './../../services/DashBoard/DashBoardServices'
export default  class DashBoardScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { 
        visible: false,showLoader:false,
        TotalOpenTaskText:'',TotalCloseTaskText:'',TotalOverdueTaskText:'',TotalMyOpenTaskText:'',TotalmyoverDueTaskText:''
        
    }
    //this.GetAllOpenandClosetask = this.GetAllOpenandClosetask.bind(this)

}

componentWillMount(){
 this.GetAllOpenandClosetask()
}
async GetAllOpenandClosetask(){
        this.setState({showLoader:true})
        let fulldata= await _GetCountOpenAndCloseTask()
        let Checkdata=fulldata.success
        if(Checkdata==1){
                let TotalOpenTask= fulldata.data.opentask
                let TotalCloseTask= fulldata.data.closedtask
                let TotalOverDueTask= fulldata.data.overduetask
                let TotalMyOpenTask= fulldata.data.myopentask
                let TotalMyoverDueTask= fulldata.data.myoverduetask
                this.setState({
                        TotalOpenTaskText:TotalOpenTask,
                        TotalCloseTaskText:TotalCloseTask,
                        TotalOverdueTaskText:TotalOverDueTask,
                        TotalMyOpenTaskText:TotalMyOpenTask,
                        TotalmyoverDueTaskText:TotalMyoverDueTask,
                        showLoader:false})
                
        }
        else{
                alert('Something went wrong!') 
        }
}


 componentDidMount(){
      
     this.GetAllOpenandClosetask()
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}
componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        
      }
    
      onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        //navigate('NewScreen');
      }
    
      handleBackButton = () => {
    
        BackHandler.exitApp()
         return true;
       }
    

  _OverviewsDta(){
      alert('hi')

  }



  
      render() {

        
        const { navigation } = this.props;
        return (
        
        <View style={styles.container}>
                <SafeAreaView  style={{flex:1}}>
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
        
        source={Images.LoadingGif}
        style={{alignItems:'center',resizeMode:"contain",marginTop:17}}
        />  */}
        
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
         Customer Control Panel
        </Text>

        <Text style={{fontSize:15,color:"white",fontWeight:'500',textAlign:'left',width:'95%'}}>
          Control panel
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
         Dashboard
        </Text>
</View>
</View>
</View>


<View style={{height:50,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',height:50,width:'90%'}}>
<Text style={{fontSize:20,color:"#015380",fontWeight:'bold'}}>
           Overall Statistics.
        </Text>
</View>
</View>






<View style={{height:170,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'space-between',height:170,width:'95%',backgroundColor:'transparent'}}>
<TouchableOpacity onPress={this._GotoOpenTaskList.bind(this)} style={[CommonStyles.Dasboaredmainthirdboxstyle]}>
<Image 
        source={Images.OpenTasksign}
        style={[CommonStyles.Dashboardboximagestyle]}
        />

         <Text style={[CommonStyles.Dashboardboxmiddletextstyle]}>
           OPEN TASK
        </Text>

{this.state.showLoader?
      <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
        :

         <Text style={[CommonStyles.DashBoardboxdigitstyle]}>
         {this.state.TotalOpenTaskText}
       </Text>
      }
</TouchableOpacity>

<TouchableOpacity onPress={this._GotoCloasedTaskList.bind(this)} style={[CommonStyles.Dasboaredmainthirdboxstyle]}>
<Image 
        source={Images.CloseTasksign}
        style={[CommonStyles.Dashboardboximagestyle]}
        />
        <Text style={[CommonStyles.Dashboardboxmiddletextstyle]}>
           CLOSED TASK
        </Text>

        {this.state.showLoader?
      <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
        :

         <Text style={[CommonStyles.DashBoardboxdigitstyle]}>
         {this.state.TotalCloseTaskText}
       </Text>
      }
</TouchableOpacity>

<TouchableOpacity onPress={this._GotoOverDueTaskList.bind(this)} style={[CommonStyles.Dasboaredmainthirdboxstyle]}>
<Image 
        source={Images.ClipBoardsign}
        style={[CommonStyles.Dashboardboximagestyle]}
        />
          <Text style={[CommonStyles.Dashboardboxmiddletextstyle]}>
           OVER DUE TASK
        </Text>

        {this.state.showLoader?
      <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
        :

         <Text style={[CommonStyles.DashBoardboxdigitstyle]}>
         {this.state.TotalOverdueTaskText}
       </Text>
      }
</TouchableOpacity>
</View>
</View>






<View style={{height:170,backgroundColor:'transparent',width:'100%',alignItems:'center',marginTop:20,borderRadius:4}}>
<View style={{flexDirection:'row',justifyContent:'center',height:170,width:'95%',backgroundColor:'transparent'}}>
<TouchableOpacity onPress={this._GotoMyOpenTaskList.bind(this)} style={[CommonStyles.Dasboaredmainthirdboxstyle]}>
<Image 
        source={Images.OpenTasksign}
        style={[CommonStyles.Dashboardboximagestyle]}
        />

           <Text style={[CommonStyles.Dashboardboxmiddletextstyle]}>
           OPEN TASK
        </Text>

        {this.state.showLoader?
      <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
        :

         <Text style={[CommonStyles.DashBoardboxdigitstyle]}>
         {this.state.TotalMyOpenTaskText}
       </Text>
      }
</TouchableOpacity>



<TouchableOpacity onPress={this._GotoMyOverdueTaskList.bind(this)} style={[CommonStyles.Dasboaredmainthirdboxstyle,{marginLeft:20}]}>
<Image 
        source={Images.ClipBoardsign}
        style={[CommonStyles.Dashboardboximagestyle]}
        />
          <Text style={[CommonStyles.Dashboardboxmiddletextstyle]}>
           OVER DUE TASK
        </Text>

        {this.state.showLoader?
      <Image style={styles.Loaderimage} source={Images.LoadingGif}/>
        :

         <Text style={[CommonStyles.DashBoardboxdigitstyle]}>
         {this.state.TotalmyoverDueTaskText}
       </Text>
      }
</TouchableOpacity>

</View>
</View>


    
        </ScrollView>
        
        </SafeAreaView>
        </View>
        
        );
        }



        _GotoOpenTaskList(){
                const {navigate} = this.props.navigation;
                navigate('OpenTaskListScreen', {name: 'Jane'})   
        }
        _GotoCloasedTaskList(){
                const {navigate} = this.props.navigation;
                navigate('CloasedTaskListScreen', {name: 'Jane'})      
        }
        _GotoOverDueTaskList(){
                const {navigate} = this.props.navigation;
                navigate('OverDuetaskScreen', {name: 'Jane'})      
        }
        _GotoMyOpenTaskList(){
                const {navigate} = this.props.navigation;
                navigate('MyOpenTask', {name: 'Jane'})      
        }
        _GotoMyOverdueTaskList(){
                const {navigate} = this.props.navigation;
                navigate('MyOverduetaskScree', {name: 'Jane'})      
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
});