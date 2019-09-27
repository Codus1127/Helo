import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
            searchTerm: '',
            myPosts: true,
            posts: []
        }
    }

    componentDidMount = () => {
        this.getPosts()
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    myPostsChange = e => {
        this.setState(prevState => ({
            myPosts: !prevState.myPosts 
        }))
    }

    resetSearch = async () => {
        const res = await axios.get(`/api/posts/?userposts=${this.state.myPosts}&search=`)
        this.setState({
            searchTerm: '',
            posts: res.data
        })
    }

    getPosts = async () => {
        const res = await axios.get(`/api/posts/?userposts=${this.state.myPosts}&search=${this.state.searchTerm}`)
        this.setState({
            posts: res.data
        })
    }

    render(){
        let posts = this.state.posts.map((el, i) => {
            return (
                <Link  key={el.post_id} to={`/post/${el.post_id}`}>
                    <div className="post">
                        <h2>{el.title}</h2>
                        <p>{el.username}</p>
                        <img alt={el.username} src={el.profile_pic}/>
                    </div> 
                </Link>
            )
        })
        return(
            <div>
                {/* <input value={this.state.searchTerm} onChange={e => this.handleChange(e)}/>
                <button onClick={this.getPosts}>Search</button>
                <button onClick={this.resetSearch}>Reset</button>
                <input onChange={e => this.myPostsChange(e)} checked={this.state.myPosts} type="checkbox"/> */}
                {posts}
            </div>
        )
    }
}