import React,{Component} from 'react';
import User from './Users';
import axios from 'axios';
export default class App extends Component{

    render()
    {
        return(
            <div>
                <User/>
            </div>
        )
    }
}
