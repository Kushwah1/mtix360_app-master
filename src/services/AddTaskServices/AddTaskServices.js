import {AsyncStorage} from 'react-native';
import {DevURL} from './../../Environment/environment';


  export const _Addtask_Inmanagement = async (channel_partner_id,customer_details,manager_id,assigne,next_followup,ticket_status_ind,is_express) => 
    {
        debugger;
        let token=await  AsyncStorage.getItem('@app:session')
        console.log('Task management add task')
        console.log(token)
        var data=new FormData();
        data.append('channel_partner_id',channel_partner_id)
        data.append('customer_details',customer_details)
        data.append('manager_id',manager_id)
        data.append('assigne',assigne)
        data.append('next_followup',next_followup)
        data.append('ticket_status_ind',ticket_status_ind)
        data.append('is_express',is_express)
        
        try{
    
            debugger;
            return fetch(DevURL+'api/add_ticket',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data', 
                  'auth-token':token
                },
                body:data
              })
            .then((response) =>   {  
        console.log(response)
        
      return      response.json()
            }  
             )
            .then((responseJson) => {
              console.log('AddTask----------------')
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






    export const _Edittask_Inmanagement = async (manager_id,assigne,next_followup,ticket_status_ind,ticket_id,comment,is_extend_duedate) => 
    {
        debugger;
        let token=await  AsyncStorage.getItem('@app:session')
        console.log('Task management add task')
        console.log(token)
        var data=new FormData();
        data.append('manager_id',manager_id)
        data.append('assigne',assigne)
        data.append('next_followup',next_followup)
        data.append('ticket_status_ind',ticket_status_ind)
        data.append('ticket_id',ticket_id)
        data.append('comment',comment)
        data.append('is_extend_duedate',is_extend_duedate)
        
        try{
    
            debugger;
            return fetch(DevURL+'api/save_ticket',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data', 
                  'auth-token':token
                },
                body:data
              })
            .then((response) =>   {  
        console.log(response)
        
      return      response.json()
            }  
             )
            .then((responseJson) => {
              console.log('AddTask----------------')
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




  























