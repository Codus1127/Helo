import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
    constructor(){
        super()
        this.state ={

        }
    }
    
    render(){
        return(
            <div className="nav">
            <Link to="/dashboard">
                <button>Home</button>
            </Link>
            <Link to="/new">
                <button>New Post</button>
            </Link>
            <Link to="/">
                <button>Logout</button>
            </Link>
            </div>
            )
        }
    }