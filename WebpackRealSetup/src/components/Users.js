import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {loadusers} from '../actions/loadUserAction';
import {select} from '../actions/test';
import { bindActionCreators } from 'redux';
class User extends Component{


componentWillMount() {
    if(this.props.select)
    {
        this.props.select();
    }
}

renderList()
{
    return (
        <div>
        <button onClick={()=>{this.props.loadusers()}} type="button" className="btn btn-outline-primary">LOAD user</button>
        </div>
    )
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
              <button onClick={this.postData} type="button" className="btn btn-outline-primary">Make user</button>
             
             {this.renderList()}
             {JSON.stringify(this.props.users)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({select:select,loadusers:loadusers},dispatch);
}
function mapStateToProps(state)
{
  return {users:state.users,loadded:state.loadded,select:state.select}
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
