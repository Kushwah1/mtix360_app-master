import {AsyncStorage} from 'react-native';
import {DevURL} from './../../Environment/environment';


export const _GetCountOpenAndCloseTask = async () => 
{
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('Taskmanangement')
    console.log(token)
    try{

        debugger;
        return fetch(DevURL+'api/dashboard',{
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