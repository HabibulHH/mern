import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class User extends Component{

    componentWillMount(){
        axios.get('http://localhost:5000/api/getusers').then((result)=>{
            console.log(result)
        }).catch((err)=>{console.log(err)})
    }
     postData() {

        axios.post('http://localhost:5000/api/savedata/',{
            firstName: 'Fred',
            lastName: 'Flintstone'
          }).then((result)=>{
            console.log(result)
        }).catch((err)=>{console.log(err)})

    }
    render()
    {
        return(
            <div>
              <button onClick={this.postData} type="button" className="btn btn-outline-primary">Primary</button>
            </div>
        )
    }
}

function mapStateToProps(state)
{
  return {users:state.users}
}

export default connect(mapStateToProps)(User);
