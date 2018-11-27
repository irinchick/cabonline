import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import { observer } from 'mobx-react'
import blogStore from '../stores/BlogStore'
import blogPostStore from '../stores/BlogpostStore'

@observer
class Blog extends Component {
    componentWillMount(){
        blogStore.load()
    }
    render() {
        if (blogStore.posts.length) {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to My blog</h1>
                    </header>
                    {blogStore.posts.map(p => <BlogEntry key={p} entry={p}/>)}
                </div>
            )
        }
        else return <span />
    }

}

export default Blog;



@observer
export class BlogEntry extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        blogPostStore.load(this.props.entry)
    }
    render() {
        return (
            <div>;alsdslk.skd</div>
        );
    }
}

