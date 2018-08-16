import axios from 'axios';
export function loadusers (){
       const response= axios.get('http://localhost:5000/api/getAllUsers');
       console.log('i am here');
        return {
            type:'LOAD',
            payload:response
        }
    }

