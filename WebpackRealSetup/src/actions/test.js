export function select()
{
    console.log('i am here from select action ');
    return{
        type:'SELECT',
        payload:{name:"jhira"}
    }
}