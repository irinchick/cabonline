import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import { observer } from 'mobx-react'
import blogStore from '../stores/BlogStore'
import { Link } from "react-router-dom";

@observer
class Blog extends Component {
    componentWillMount(){
        blogStore.load()
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to My blog</h1>
                </header>
                {blogStore.posts.map((p)=>{return <BlogEntry entry={p} />} )}
            </div>
        );
    }
}

export default Blog;



@observer
export class BlogEntry extends Component {
    render() {
        return (
            <Link to={`/post/${this.props.entry.id}`} >
                <h1>{this.props.entry.title}</h1>
                <p>{this.props.entry.post}</p>
                <p>{`Comments(${this.props.entry.comments.length})`}</p>
            </Link>
        );
    }
}

