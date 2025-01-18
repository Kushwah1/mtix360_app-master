import {StyleSheet,
    Dimensions,
    } from 'react-native';



    export default CommonStyles = StyleSheet.create({
    normalPage: {
    position: 'relative',
    flex: 1,
    backgroundColor: "#FFFFFF",
    },
    normalSinglePage: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    }, PaddingSinglePage: {
    flex: 1,
    position: 'relative',
    //paddingTop:25,
    backgroundColor: "#FFFFFF",
    },
    
    wrapperBox: {
    marginTop: 20,
    marginBottom: 20,
    },
    ProfilewrapperBox: {
    marginTop: 20,
    marginBottom: 20,
    },

    smallWrapperBox: {
    marginTop: 20,
    marginBottom: 20,
    },
   
 
    // Color
    whiteColor: {
    color: '#FFFFFF',
    },
    greyColor: {
    color: 'rgb(105,105,105)',
    },
    lightgreyColor: {
    color: 'rgb(150,150,150)',
    },
    blackColor: {
    color: 'rgb(19,19,19)',
    },
    softBlueColor: {
    color: 'rgb(75,102,234)',
    },
    darkSkyBlueColor: {
    color: 'rgb(63,103,230)',
    },
    lightRedColor:{
    color: '#EB0003',
    },
 
  
    extraLargeText: {
    height: 52,
    fontSize: 32,
    fontFamily: 'BrandonGrotesque-Bold',
    },
    LargeText: {
    height: 45,
    fontSize: 26,
    fontFamily: 'BrandonGrotesque-Bold',
    },
    titleText: {
    fontSize: 30,
    lineHeight: 38
    },
    titleTextsatup: {
    fontSize: 22,
    lineHeight: 30
    },
    titleTextsetuptransaction: {
    fontSize: 34,
    lineHeight: 42
    },
    ProfiletitleText: {
    fontSize: 25,
    lineHeight: 35
    },
    headerText: {
    fontSize: 18,
    lineHeight: 30
    },
    itemHeaderText: {
    fontSize: 17,
    lineHeight: 29
    },
    frienditemHeaderText: {
    fontSize: 17,
    lineHeight: 27
    },
 
    
    mediumText: {
    fontSize: 16,
    },
    blackFontColor: { color: 'rgb(0,0,0)' },
    headingText: {
    fontSize: 22,
    lineHeight: 30
    },
    blank:{},
    normalText: {
    fontSize: 18,
    lineHeight: 25
    },
    smallText: {
    fontSize: 13,
    lineHeight: 30
    },
    shortSmallText: {
    fontSize: 13,
    lineHeight: 23
    },
    friendshortSmallText: {
    fontSize: 13,
    lineHeight: 22
    },
    light: {
    fontFamily:'BrandonGrotesque-Light',
    },
    regularBold: {
    fontFamily: 'BrandonGrotesque-Regular',
    },
    mediumBold: {
    fontFamily: 'BrandonGrotesque-Medium',
    },
    semiBold: {
    fontFamily: 'BrandonGrotesque-Black',
    },
    extraBold: {
    fontFamily: 'BrandonGrotesque-Bold',
    },
    paycodeFontBold :{
    fontFamily: 'BrandonGrotesque-Bold',
    },
    paycodeRegular :{
    fontFamily: 'BrandonGrotesque-Regular',
    },
    paycodeFontLight :{
    fontFamily: 'BrandonGrotesque-Light',
    },
    paycodeFontMedium :{
    fontFamily: 'BrandonGrotesque-Medium',
    },
    paycodeFontThin :{
    fontFamily: 'BrandonGrotesque-Thin',
    },
    paycodeFontBlack :{
    fontFamily: 'BrandonGrotesque-Black',
    },
    paycodeFontBoldItalic :{
    fontFamily: 'BrandonGrotesque-BoldItalic',
    },
    paycodeRegularItalic :{
    fontFamily: 'BrandonGrotesque-RegularItalic',
    },
    paycodeFontLightItalic :{
    fontFamily: 'BrandonGrotesque-LightItalic',
    },
    paycodeFontMediumItalic :{
    fontFamily: 'BrandonGrotesque-MediumItalic',
    },
    paycodeFontThinItalic :{
    fontFamily: 'BrandonGrotesque-ThinItalic',
    },
    paycodeFontBlackItalic :{
    fontFamily: 'BrandonGrotesque-BlackItalic',
    },
    

 // Taskmanager Styles 
 DashBoardboxdigitstyle:{
    fontSize:25,color:"#015380",width:'100%',textAlign:'center',fontWeight:'bold'
 },
 Dashboardboximagestyle:{
    height:70,width:70
 },
 Dashboardboxmiddletextstyle:{
    fontSize:15,color:"#015380",width:'100%',textAlign:'center',marginTop:10
 },
Dasboaredmainthirdboxstyle:{
    flexDirection:'column',justifyContent:'center',height:170,backgroundColor:'white',width:'30%',alignItems:'center',
shadowOffset:{ width: 10, height: 10, },
shadowColor: 'black',
shadowOpacity: 1.0,
elevation:5
},
    //for open list 
    DeleteandEditbuttonimage:{
      height:20,width:20,
    },
    ListText:{
      fontSize:17,color:"#6c6c6c",textAlign:'left',width:'50%',marginLeft:5
    }, 
    ListTextnew:{
      fontSize:17,color:"#6c6c6c",textAlign:'left',width:'100%',marginLeft:5
    },
    ListFullrowtext:{
      fontSize:17,color:"#6c6c6c",textAlign:'left',width:'100%',marginLeft:5
    },

    //error handiling 
 Textboxarror:{
color:"red"
 }

    });