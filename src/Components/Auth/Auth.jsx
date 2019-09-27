import React, {Component} from 'react'


export default class Auth extends Component {
    constructor(){
        super()
        this.state ={

        }
    }
    
    render(){
        return(
            <div className="auth">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button >Login</button>
                <button>Register</button>
            </div>
            )
        }
    }