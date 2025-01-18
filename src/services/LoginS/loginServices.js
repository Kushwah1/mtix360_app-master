import {AsyncStorage} from 'react-native';
import {DevURL} from './../../Environment/environment';


  export const loginTaskManageradmin = async (username,password) => 
    {
        var data=new FormData();
        data.append('username',username)
        data.append('password',password)
        try{
  
            debugger;
            return fetch('http://erpcloud.in/cademo/myadmin/api/login',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data'
                },
                body:data
              })
            .then((response) =>   {  
        console.log(response)
        
      return      response.json()
            }  
             )
            .then((responseJson) => {
              console.log('_GetBussinessCategoryfromAdmini')
              console.log(responseJson)
           
            return responseJson;
          
            })
            .catch((error) => {
              console.error(error);
            });
        }
        catch(ex)
        { 
          setTimeout(() => {
             
          }, 1000);      
        }
            
        
    }



    export const _CheckLoginStatus = async () => 
    {
        let token=await  AsyncStorage.getItem('@app:session')
        console.log('Taskmanangement')
        console.log(token)
        try{
    
            debugger;
            return fetch(DevURL+'api/checklogin',{
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'auth-token':token
                },
                // body: JSON.stringify({
    
                // })
              })
            .then((response) =>   {  
        console.log(response)
        
      return      response.json()
            }  
             )
            .then((responseJson) => {
     
              
           
            return responseJson;
          
            })
            .catch((error) => {
              console.error(error);
            });
        }
        catch(ex)
        { 
          setTimeout(() => {
             
          }, 1000);      
        }
            
        
    }


  