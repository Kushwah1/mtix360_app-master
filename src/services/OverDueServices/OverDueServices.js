import {AsyncStorage} from 'react-native';
import {DevURL} from './../../Environment/environment';


export const _GetOpenTask = async () => 
{
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('Taskmanangement')
    console.log(token)
    try{

        debugger;
        return fetch(DevURL+'api/all_tickets?all_over_due=1',{
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





export const _GetAllClientOpenTask = async () => 
{
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('Taskmanangement')
    console.log(token)
    try{

        debugger;
        return fetch(DevURL+'api/masterdata',{
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





export const _DeleteTaskInOpenTaskList = async (ticket_id) => 
{
    let token=await  AsyncStorage.getItem('@app:session')
    console.log('Taskmanangement----------'+ticket_id)
    console.log(token)
    console.log(ticket_id)
    try{

        debugger;
        return fetch(DevURL+'api/delete_ticket?ticket_id='+ticket_id,{
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
