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
import Images from '../../assets/images/Images';
class SplashScreen extends React.Component {
constructor(props) {
super(props);
}

render() {
    return (

            <View style={styles.container}>
                    <View style={{flexDirection:'row',}}>
                          {/* <Text style={styles.boldtext}>Tast Management </Text> */}
                          <Image style={styles.Logoimage} source={Images.ApplogoFull}/>
                    </View>
            </View>
   );
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'white',
},
boldtext:{
fontFamily: "Acephimere Bold",
color: "white",
fontSize:35,
textAlign:'center'
},
Logoimage:{
resizeMode:'contain',
width:300,
height:200,
padding:5,
marginTop:10,
marginBottom:2,
},
}); 
export default SplashScreen;