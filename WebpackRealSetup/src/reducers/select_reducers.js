export default function(state=null,action){

    switch(action.type)
    {
        case 'SELECT':
        return action.payload
    }
  return  state;

}